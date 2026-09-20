const L = -2.35, R = 2.45;
const STACK_R = L + 1.45;
const SAT_L = R - 1.08;

function box(id, label, x, y, w, h, color, part, extra = {}) {
  return { id, label, x, y, w, h, color, branch: extra.branch || '', part, layer: extra.layer || 0, kind: extra.kind || 'box', size: extra.size || 13, ...extra };
}
function edge(id, source, target, role, path, extra = {}) {
  return { id, source, target, role, path, ...extra };
}

export const step35Spatial = {
  side: 1,
  root: 'diagram_step35',
  nodes: [
    box('text_embedding', 'Text\nembedding', L, 1.12, 3.0, 0.95, 'F5D6D7', 'embedding'),
    box('residual_input', '', L, 2.52, 3.1, 0.4, 'E3E6EB', '', { kind: 'text', size: 12 }),
    box('embedding', 'RMSNorm residual', L, 3.48, 3.0, 0.62, 'F5D6D7', 'residual'),
    box('encoder_full0', 'Full · 64h', L, 4.9, 2.9, 0.64, 'D6ECCF', 'attention', { layer: 0 }),
    box('encoder_dense', 'Dense FFN', L, 5.84, 2.9, 0.64, '64B4D5', 'ffn', { layer: 0, dense: true }),
    box('encoder_swa', 'SWA · 96h', L, 7.5, 2.9, 0.64, 'F9DDCF', 'attention', { layer: 1 }),
    box('encoder_moe_swa', 'MoE', L, 8.44, 2.9, 0.64, 'E3E6EB', 'ffn', { layer: 3 }),
    box('encoder_full', 'Full · 64h', L, 10.35, 2.9, 0.64, 'D6ECCF', 'attention', { layer: 4 }),
    box('encoder_moe_full', 'MoE', L, 11.3, 2.9, 0.64, 'E3E6EB', 'ffn', { layer: 4 }),
    box('hybrid_note', '11 × (3 SWA + 1 Full); first 3 FFN dense', L, 12.7, 3.4, 0.32, 'E3E6EB', '', { kind: 'text', size: 12 }),
    box('target_head', 'Output head', L, 14.85, 3.0, 0.7, 'D8D8E9', 'head', { layer: 44 }),
    box('output', 'Output tokens', L, 16.3, 3.0, 0.65, 'E3E6EB', 'head', { kind: 'text' }),

    box('local_window', 'Local\nSWA 512', R, 7.5, 2.15, 0.84, 'E7E1F0', 'memory'),
    box('mtp', 'MTP-3 drafts', R, 14.85, 2.15, 0.85, 'D8D8E9', 'speed', { branch: 'auxiliary' }),
  ],
  edges: [
    edge('text_in', 'text_embedding', 'embedding', 'flow', [[L, 1.6], [L, 3.17]]),
    edge('res_in', 'embedding', 'encoder_full0', 'residual', [[L, 3.79], [L, 4.58]]),
    edge('full0', 'encoder_full0', 'encoder_dense', 'flow', [[L, 5.22], [L, 5.52]]),
    edge('dense_out', 'encoder_dense', 'encoder_swa', 'flow', [[L, 6.16], [L, 7.18]]),
    edge('swa', 'encoder_swa', 'encoder_moe_swa', 'flow', [[L, 7.82], [L, 8.12]]),
    edge('moe_swa', 'encoder_moe_swa', 'encoder_full', 'flow', [[L, 8.76], [L, 10.03]]),
    edge('full', 'encoder_full', 'encoder_moe_full', 'flow', [[L, 10.67], [L, 10.98]]),
    edge('to_head', 'encoder_moe_full', 'target_head', 'flow', [[L, 11.62], [L, 14.5]]),
    edge('head_out', 'target_head', 'output', 'flow', [[L, 15.2], [L, 15.95]]),
    edge('swa_win', 'local_window', 'encoder_swa', 'indexer', [[SAT_L, 7.5], [STACK_R, 7.5]]),
    edge('draft', 'target_head', 'mtp', 'draft', [[L + 1.5, 14.85], [SAT_L, 14.85]]),
  ],
  frames: [
    { id: 'dense_prefix', x: L, y: 5.37, w: 3.15, h: 2.1, label: 'lead', tx: L - 2.05, ty: 5.37, branch: '', layer: 0, dashed: true },
    { id: 'hybrid_cell', x: L, y: 9.4, w: 3.35, h: 5.3, label: '×11', tx: L - 2.05, ty: 9.4, branch: '', layer: 1, dashed: false },
    { id: 'swa_triple', x: L, y: 7.97, w: 3.15, h: 2.1, label: '×3', tx: L + 1.95, ty: 7.97, branch: '', layer: 1, dashed: true },
  ],
  bounds: [-5.2, 4.6, -0.65, 17.5],
};
