import { buildStateGraph, type Board } from '../lib/akari';

self.onmessage = (e: MessageEvent<{ board: Board; pathsOnly: boolean }>) => {
  try {
    const result = buildStateGraph(e.data.board, e.data.pathsOnly);
    self.postMessage({ type: 'success', ...result });
  } catch (err) {
    self.postMessage({ type: 'error', message: String(err) });
  }
};
