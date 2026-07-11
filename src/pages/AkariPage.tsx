import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import cytoscape from "cytoscape";
import dagre from "cytoscape-dagre";
import {
  getIlluminated,
  key,
  type Board,
  type CyElement,
  type CyNodeData,
} from "../lib/akari";
import "./AkariPage.css";

cytoscape.use(dagre);

const TOOLS = [
  { value: ".", label: "·", title: "white cell" },
  { value: "#", label: "■", title: "black wall" },
  { value: "0", label: "0", title: "clue: 0" },
  { value: "1", label: "1", title: "clue: 1" },
  { value: "2", label: "2", title: "clue: 2" },
  { value: "3", label: "3", title: "clue: 3" },
  { value: "4", label: "4", title: "clue: 4" },
];

function makeBoard(rows: number, cols: number, prev?: Board): Board {
  return Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c) => prev?.[r]?.[c] ?? "."),
  );
}

function getCyStyle() {
  return [
    {
      selector: "node",
      style: {
        "background-color": "#b0ac9f",
        width: 14,
        height: 14,
        "border-width": 0,
        label: "",
        "overlay-padding": 6,
      },
    },
    {
      selector: "node[?is_solution]",
      style: { "background-color": "#2a9a5a", width: 20, height: 20 },
    },
    {
      selector: "node#root",
      style: { "background-color": "#4a90d9", width: 24, height: 24 },
    },
    {
      selector: "node.dead",
      style: { "background-color": "#c0392b" },
    },
    {
      selector: "node:selected",
      style: { "border-width": 3, "border-color": "#e8a020" },
    },
    {
      selector: "edge",
      style: {
        width: 1,
        "line-color": "#ccc8be",
        "target-arrow-color": "#ccc8be",
        "target-arrow-shape": "triangle",
        "curve-style": "bezier",
        "arrow-scale": 0.6,
      },
    },
    {
      selector: "edge:selected",
      style: {
        "line-color": "#e8a020",
        "target-arrow-color": "#e8a020",
        width: 2,
      },
    },
  ] as cytoscape.StylesheetStyle[];
}

type WorkerResult =
  | {
      type: "success";
      elements: CyElement[];
      stats: { nodes: number; edges: number; solutions: number };
    }
  | { type: "error"; message: string };

export function AkariPage() {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [board, setBoard] = useState<Board>(() => makeBoard(3, 3));
  const [tool, setTool] = useState(".");
  const [pathsOnly, setPathsOnly] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<{
    nodes: number;
    edges: number;
    solutions: number;
  } | null>(null);
  const [selectedNode, setSelectedNode] = useState<CyNodeData | null>(null);
  const [liveBoard, setLiveBoard] = useState<Board>([]);

  const cyContainerRef = useRef<HTMLDivElement>(null);
  const cyRef = useRef<cytoscape.Core | null>(null);
  const workerRef = useRef<Worker | null>(null);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      workerRef.current?.terminate();
      cyRef.current?.destroy();
    };
  }, []);

  function handleResize() {
    setBoard((prev) => makeBoard(rows, cols, prev));
    setSelectedNode(null);
  }

  function setCell(r: number, c: number) {
    setBoard((prev) => {
      const next = prev.map((row) => [...row]);
      next[r][c] = tool;
      return next;
    });
  }

  function generate() {
    workerRef.current?.terminate();
    setError(null);
    setSelectedNode(null);
    setLoading(true);

    const worker = new Worker(
      new URL("../workers/akariWorker.ts", import.meta.url),
      { type: "module" },
    );
    workerRef.current = worker;

    const snapshot = board.map((r) => [...r]);

    worker.onmessage = (e: MessageEvent<WorkerResult>) => {
      setLoading(false);
      if (e.data.type === "error") {
        setError(e.data.message);
        return;
      }

      setStats(e.data.stats);
      setLiveBoard(snapshot);
      renderGraph(e.data.elements);
    };

    worker.onerror = (e) => {
      setLoading(false);
      setError(e.message);
    };
    worker.postMessage({ board: snapshot, pathsOnly });
  }

  function renderGraph(elements: CyElement[]) {
    if (!cyContainerRef.current) return;
    cyRef.current?.destroy();

    const cy = cytoscape({
      container: cyContainerRef.current,
      elements: elements as cytoscape.ElementDefinition[],
      style: getCyStyle(),
      layout: {
        name: "dagre",
        rankDir: "TB",
        nodeSep: 18,
        rankSep: 55,
        padding: 30,
      } as Parameters<cytoscape.Core["layout"]>[0],
      wheelSensitivity: 0.25,
      minZoom: 0.05,
      maxZoom: 5,
    });

    cy.nodes().forEach((n) => {
      if (!n.data("is_solution") && n.outdegree() === 0 && n.id() !== "root")
        n.addClass("dead");
    });

    cy.on("tap", "node", (evt) =>
      setSelectedNode(evt.target.data() as CyNodeData),
    );
    cyRef.current = cy;
  }

  const cellSize = Math.max(
    22,
    Math.min(36, Math.floor(232 / Math.max(board[0]?.length ?? 1, 1))),
  );

  return (
    <div className="akari-page">
      <div className="akari-top">
        <Link to="/creations" className="content-back">
          ← creations
        </Link>
        <h1>akari game state graph explorer</h1>
      </div>

      <div className="akari-main">
        {/* ── Editor ── */}
        <div className="akari-editor">
          <div className="ak-section">
            <span className="ak-label">size</span>
            <div className="ak-row">
              <label className="ak-dim-label">rows</label>
              <input
                className="ak-num"
                type="number"
                min={1}
                max={7}
                value={rows}
                onChange={(e) =>
                  setRows(Math.max(1, Math.min(7, +e.target.value || 3)))
                }
              />
              <label className="ak-dim-label">cols</label>
              <input
                className="ak-num"
                type="number"
                min={1}
                max={7}
                value={cols}
                onChange={(e) =>
                  setCols(Math.max(1, Math.min(7, +e.target.value || 3)))
                }
              />
              <button className="ak-btn" onClick={handleResize}>
                resize
              </button>
            </div>
          </div>

          <div className="ak-section">
            <span className="ak-label">cell type</span>
            <div className="ak-tools">
              {TOOLS.map((t) => (
                <button
                  key={t.value}
                  className={`ak-tool ak-tool-${t.value === "." ? "w" : t.value === "#" ? "b" : "n"}${tool === t.value ? " ak-tool-active" : ""}`}
                  title={t.title}
                  onClick={() => setTool(t.value)}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="ak-section">
            <span className="ak-label">board</span>
            <div
              className="ak-grid"
              style={{
                gridTemplateColumns: `repeat(${board[0]?.length ?? 1}, ${cellSize}px)`,
              }}
            >
              {board.map((row, r) =>
                row.map((cell, c) => (
                  <button
                    key={`${r},${c}`}
                    className={`ak-cell ak-cell-${cell === "." ? "w" : cell === "#" ? "b" : "n"}`}
                    style={{
                      width: cellSize,
                      height: cellSize,
                      fontSize: Math.max(10, cellSize - 14),
                    }}
                    onClick={() => setCell(r, c)}
                  >
                    {cell === "." ? "" : cell === "#" ? "■" : cell}
                  </button>
                )),
              )}
            </div>
          </div>

          <label className="ak-opt">
            <input
              type="checkbox"
              checked={pathsOnly}
              onChange={(e) => setPathsOnly(e.target.checked)}
            />
            solution paths only
          </label>

          {error && <p className="ak-error">{error}</p>}

          <button className="ak-generate" onClick={generate} disabled={loading}>
            {loading ? "generating…" : "generate graph"}
          </button>

          <p className="ak-about">
            each node is a board configuration, each edge a bulb placement.
            uses canonical ordering + constraint pruning to reduce the state space.{" "}
            optimizations for larger boards in progress.
          </p>

          {stats && (
            <div className="ak-stats">
              <div className="ak-stat">
                <span className="ak-stat-n">
                  {stats.nodes.toLocaleString()}
                </span>
                <span className="ak-stat-l">states</span>
              </div>
              <div className="ak-stat">
                <span className="ak-stat-n">
                  {stats.edges.toLocaleString()}
                </span>
                <span className="ak-stat-l">transitions</span>
              </div>
              <div className="ak-stat">
                <span className="ak-stat-n ak-stat-sol">
                  {stats.solutions.toLocaleString()}
                </span>
                <span className="ak-stat-l">solutions</span>
              </div>
            </div>
          )}
        </div>

        {/* ── Graph ── */}
        <div className="akari-graph-col">
          <div className="akari-cy-wrap">
            <div ref={cyContainerRef} className="akari-cy" />

            <div className="ak-graph-btns">
              <button className="ak-btn" onClick={() => cyRef.current?.fit()}>
                ⊡ fit
              </button>
              <button
                className="ak-btn"
                onClick={() =>
                  cyRef.current?.zoom((cyRef.current?.zoom() ?? 1) * 1.3)
                }
              >
                ＋
              </button>
              <button
                className="ak-btn"
                onClick={() =>
                  cyRef.current?.zoom((cyRef.current?.zoom() ?? 1) / 1.3)
                }
              >
                －
              </button>
            </div>

            <div className="ak-legend">
              <span className="ak-li">
                <span className="ak-dot" style={{ background: "#4a90d9" }} />
                initial
              </span>
              <span className="ak-li">
                <span className="ak-dot" style={{ background: "#2a9a5a" }} />
                solution
              </span>
              <span className="ak-li">
                <span className="ak-dot" style={{ background: "#b0ac9f" }} />
                partial
              </span>
              <span className="ak-li">
                <span className="ak-dot" style={{ background: "#c0392b" }} />
                dead-end
              </span>
            </div>

            {loading && (
              <div className="ak-loading">
                <div className="ak-spinner" />
                <span>building state graph…</span>
              </div>
            )}

            {!stats && !loading && (
              <div className="ak-empty">
                configure a board and click generate graph
              </div>
            )}
          </div>

          {selectedNode && liveBoard.length > 0 && (
            <NodeDetail node={selectedNode} board={liveBoard} />
          )}
        </div>
      </div>
    </div>
  );
}

// ── Node detail strip ────────────────────────────────────────

function NodeDetail({ node, board }: { node: CyNodeData; board: Board }) {
  const bulbSet = new Set(node.bulbs.map(([r, c]) => key(r, c)));
  const lit = getIlluminated(board, bulbSet);
  const cols = board[0].length;
  const isDead = !node.is_solution && node.num_bulbs > 0;
  const cellSz = Math.max(
    16,
    Math.min(26, Math.floor(160 / Math.max(cols, 1))),
  );

  return (
    <div className="ak-detail">
      <div>
        <span
          className="ak-label"
          style={{ marginBottom: 6, display: "block" }}
        >
          selected state
        </span>
        <div
          className="ak-mini-grid"
          style={{ gridTemplateColumns: `repeat(${cols}, ${cellSz}px)` }}
        >
          {board.map((row, r) =>
            row.map((cell, c) => {
              const k = key(r, c);
              const isBulb = bulbSet.has(k);
              const isLit = lit.has(k);
              let cls = "ak-mini-cell ";
              if (isBulb) cls += "ak-mc-bulb";
              else if (cell === ".") cls += isLit ? "ak-mc-lit" : "ak-mc-w";
              else if (cell === "#") cls += "ak-mc-b";
              else cls += "ak-mc-n";
              return (
                <div
                  key={k}
                  className={cls}
                  style={{
                    width: cellSz,
                    height: cellSz,
                    fontSize: Math.max(8, cellSz - 12),
                  }}
                >
                  {isBulb
                    ? "★"
                    : cell === "#"
                      ? "■"
                      : /^[0-4]$/.test(cell)
                        ? cell
                        : isLit
                          ? "·"
                          : ""}
                </div>
              );
            }),
          )}
        </div>
      </div>
      <div className="ak-detail-info">
        <span
          className={`ak-badge ${node.is_solution ? "ak-badge-sol" : isDead ? "ak-badge-dead" : "ak-badge-part"}`}
        >
          {node.is_solution
            ? "solution"
            : isDead
              ? "dead-end"
              : node.id === "root"
                ? "initial"
                : "partial"}
        </span>
        <span className="ak-detail-line">bulbs placed: {node.num_bulbs}</span>
        {node.bulbs.length > 0 && (
          <span className="ak-detail-line">
            positions: {node.bulbs.map(([r, c]) => `(${r},${c})`).join(", ")}
          </span>
        )}
      </div>
    </div>
  );
}
