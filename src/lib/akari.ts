export type Board = string[][];
export type Cell = [number, number];

export type CyNodeData = {
  id: string;
  is_solution: boolean;
  bulbs: Cell[];
  num_bulbs: number;
};

export type CyEdgeData = {
  id: string;
  source: string;
  target: string;
  cell: Cell;
};

export type CyElement = { data: CyNodeData } | { data: CyEdgeData };

export type GraphResult = {
  elements: CyElement[];
  stats: { nodes: number; edges: number; solutions: number };
};

const DIRS: Cell[] = [[-1, 0], [1, 0], [0, -1], [0, 1]];
const WALLS = new Set(['#', '0', '1', '2', '3', '4']);

function key(r: number, c: number) {
  return `${r},${c}`;
}

function getIlluminated(board: Board, bulbs: Set<string>): Set<string> {
  const rows = board.length, cols = board[0].length;
  const lit = new Set<string>();
  for (const k of bulbs) {
    const [r, c] = k.split(',').map(Number);
    for (const [dr, dc] of DIRS) {
      let nr = r + dr, nc = c + dc;
      while (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !WALLS.has(board[nr][nc])) {
        lit.add(key(nr, nc));
        nr += dr; nc += dc;
      }
    }
  }
  return lit;
}

function countAdj(bulbs: Set<string>, r: number, c: number): number {
  return DIRS.reduce((n, [dr, dc]) => n + (bulbs.has(key(r + dr, c + dc)) ? 1 : 0), 0);
}

function isValid(board: Board, bulbs: Set<string>): boolean {
  const lit = getIlluminated(board, bulbs);
  for (const k of bulbs) if (lit.has(k)) return false;
  for (let r = 0; r < board.length; r++)
    for (let c = 0; c < board[0].length; c++)
      if (/^[0-4]$/.test(board[r][c]) && countAdj(bulbs, r, c) > +board[r][c])
        return false;
  return true;
}

function isSolution(board: Board, bulbs: Set<string>): boolean {
  if (!isValid(board, bulbs)) return false;
  const lit = getIlluminated(board, bulbs);
  for (let r = 0; r < board.length; r++)
    for (let c = 0; c < board[0].length; c++) {
      const ch = board[r][c];
      if (ch === '.' && !bulbs.has(key(r, c)) && !lit.has(key(r, c))) return false;
      if (/^[0-4]$/.test(ch) && countAdj(bulbs, r, c) !== +ch) return false;
    }
  return true;
}

function stateToId(state: number[], whiteCells: Cell[]): string {
  if (state.length === 0) return 'root';
  return state.map(i => `${whiteCells[i][0]}-${whiteCells[i][1]}`).join(',');
}

export function buildStateGraph(board: Board, pathsOnly = false): GraphResult {
  const whiteCells: Cell[] = [];
  for (let r = 0; r < board.length; r++)
    for (let c = 0; c < board[0].length; c++)
      if (board[r][c] === '.') whiteCells.push([r, c]);

  const nodes: { data: CyNodeData }[] = [{ data: { id: 'root', is_solution: false, bulbs: [], num_bulbs: 0 } }];
  const edges: { data: CyEdgeData }[] = [];
  const visited = new Set<string>(['']);
  const parent = new Map<string, string>();
  const solutionIds = new Set<string>();
  const queue: number[][] = [[]];
  let edgeN = 0;

  while (queue.length > 0) {
    const state = queue.shift()!;
    const parentId = stateToId(state, whiteCells);
    const start = state.length === 0 ? 0 : state[state.length - 1] + 1;

    for (let i = start; i < whiteCells.length; i++) {
      const newState = [...state, i];
      const bulbs = new Set(newState.map(idx => key(whiteCells[idx][0], whiteCells[idx][1])));
      if (!isValid(board, bulbs)) continue;

      const sk = newState.join(',');
      const childId = stateToId(newState, whiteCells);

      if (!visited.has(sk)) {
        visited.add(sk);
        const sol = isSolution(board, bulbs);
        if (sol) solutionIds.add(childId);
        nodes.push({ data: { id: childId, is_solution: sol, bulbs: newState.map(idx => whiteCells[idx]), num_bulbs: newState.length } });
        parent.set(childId, parentId);
        queue.push(newState);
      }

      edges.push({ data: { id: `e${edgeN++}`, source: parentId, target: childId, cell: whiteCells[i] } });
    }
  }

  if (pathsOnly) {
    const keep = new Set<string>(['root']);
    for (const sid of solutionIds) {
      keep.add(sid);
      let cur = sid;
      while (parent.has(cur)) { cur = parent.get(cur)!; keep.add(cur); }
    }
    const fn = nodes.filter(n => keep.has(n.data.id));
    const fe = edges.filter(e => keep.has(e.data.source) && keep.has(e.data.target));
    return { elements: [...fn, ...fe], stats: { nodes: fn.length, edges: fe.length, solutions: solutionIds.size } };
  }

  return { elements: [...nodes, ...edges], stats: { nodes: nodes.length, edges: edges.length, solutions: solutionIds.size } };
}

export { getIlluminated, key };
