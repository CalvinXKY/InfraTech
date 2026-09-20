const L = -2.35, R = 2.45;
const SAT_L = R - 1.08;

function box(id, label, x, y, w, h, color, part, extra = {}) {
  return { id, label, x, y, w, h, color, branch: extra.branch || '', part, layer: extra.layer || 0, kind: extra.kind || 'box', size: extra.size || 13, ...extra };
}
function edge(id, source, target, role, path, extra = {}) {
  return { id, source, target, role, path, ...extra };
}

export const minimaxM25Spatial = {
  side: 1,
  root: 'diagram_minimax_m25',
  nodes: [
    box('text_embedding', 'Text\nembedding', L, 1.12, 3.0, 0.95, 'F5D6D7', 'embedding'),
    box('residual_input', '', L, 2.52, 3.1, 0.4, 'E3E6EB', '', { kind: 'text', size: 12 }),
    box('embedding', 'RMSNorm residual', L, 3.48, 3.0, 0.62, 'F5D6D7', 'residual'),
    box('encoder_gqa0', 'GQA', L, 4.9, 2.9, 0.64, 'D6ECCF', 'attention', { layer: 0 }),
    box('encoder_moe0', 'MoE', L, 5.84, 2.9, 0.64, 'E3E6EB', 'ffn', { layer: 0 }),
    box('encoder_gqa', 'GQA', L, 7.5, 2.9, 0.64, 'D6ECCF', 'attention', { layer: 1 }),
    box('encoder_moe', 'MoE', L, 8.44, 2.9, 0.64, 'E3E6EB', 'ffn', { layer: 1 }),
    box('repeat_note', '62 × (GQA + MoE)', L, 9.9, 3.4, 0.32, 'E3E6EB', '', { kind: 'text', size: 12 }),
    box('target_head', 'Output head', L, 12.45, 3.0, 0.7, 'D8D8E9', 'head', { layer: 61 }),
    box('output', 'Output tokens', L, 13.9, 3.0, 0.65, 'E3E6EB', 'head', { kind: 'text' }),

    box('mtp', 'MTP ×3', R, 12.45, 2.15, 0.85, 'D8D8E9', 'speed', { branch: 'auxiliary' }),
  ],
  edges: [
    edge('text_in', 'text_embedding', 'embedding', 'flow', [[L, 1.6], [L, 3.17]]),
    edge('res_in', 'embedding', 'encoder_gqa0', 'residual', [[L, 3.79], [L, 4.58]]),
    edge('gqa0', 'encoder_gqa0', 'encoder_moe0', 'flow', [[L, 5.22], [L, 5.52]]),
    edge('moe0', 'encoder_moe0', 'encoder_gqa', 'flow', [[L, 6.16], [L, 7.18]]),
    edge('gqa', 'encoder_gqa', 'encoder_moe', 'flow', [[L, 7.82], [L, 8.12]]),
    edge('to_head', 'encoder_moe', 'target_head', 'flow', [[L, 8.76], [L, 12.1]]),
    edge('head_out', 'target_head', 'output', 'flow', [[L, 12.8], [L, 13.55]]),
    edge('draft', 'target_head', 'mtp', 'draft', [[L + 1.5, 12.45], [SAT_L, 12.45]]),
  ],
  frames: [
    { id: 'repeat_cell', x: L, y: 6.67, w: 3.35, h: 5.3, label: '×31', tx: L - 2.05, ty: 6.67, branch: '', layer: 0, dashed: false },
    { id: 'layer_pair', x: L, y: 5.37, w: 3.15, h: 2.1, label: '×1', tx: L + 1.95, ty: 5.37, branch: '', layer: 0, dashed: true },
  ],
  bounds: [-5.2, 4.6, -0.65, 17.5],
};
