const L = -2.35, R = 2.45;

function box(id, label, x, y, w, h, color, part, extra = {}) {
  return { id, label, x, y, w, h, color, branch: extra.branch || '', part, layer: extra.layer || 0, kind: extra.kind || 'box', size: extra.size || 13, ...extra };
}
function edge(id, source, target, role, path, extra = {}) {
  return { id, source, target, role, path, ...extra };
}

export const qwen38Spatial = {
  side: 1,
  root: 'diagram_qwen38',
  nodes: [
    box('text_embedding', 'Text\nembedding', L, 1.12, 3.0, 0.95, 'F5D6D7', 'embedding'),
    box('residual_input', '', L, 2.52, 3.1, 0.4, 'E3E6EB', '', { kind: 'text', size: 12 }),
    box('embedding', 'Gated residual', L, 3.48, 3.0, 0.62, 'F5D6D7', 'residual'),
    box('encoder_gdn0', 'GDN', L, 4.9, 2.9, 0.64, 'F9DDCF', 'attention', { layer: 0 }),
    box('encoder_moe_gdn0', 'MoE', L, 5.84, 2.9, 0.64, 'E3E6EB', 'ffn', { layer: 0 }),
    box('encoder_gdn1', 'GDN', L, 6.9, 2.9, 0.64, 'F9DDCF', 'attention', { layer: 1 }),
    box('encoder_moe_gdn1', 'MoE', L, 7.84, 2.9, 0.64, 'E3E6EB', 'ffn', { layer: 1 }),
    box('encoder_gdn2', 'GDN', L, 8.9, 2.9, 0.64, 'F9DDCF', 'attention', { layer: 2 }),
    box('encoder_moe_gdn2', 'MoE', L, 9.84, 2.9, 0.64, 'E3E6EB', 'ffn', { layer: 2 }),
    box('encoder_qsa', 'QSA', L, 11.2, 2.9, 0.64, 'CDE8F4', 'attention', { layer: 3 }),
    box('encoder_moe_qsa', 'MoE', L, 12.14, 2.9, 0.64, 'E3E6EB', 'ffn', { layer: 3 }),
    box('hybrid_note', '12 × (3 GDN + 1 QSA)', L, 13.35, 3.4, 0.32, 'E3E6EB', '', { kind: 'text', size: 12 }),
    box('target_head', 'Output head', L, 14.85, 3.0, 0.7, 'D8D8E9', 'head', { layer: 47 }),
    box('output', 'Output tokens', L, 16.3, 3.0, 0.65, 'E3E6EB', 'head', { kind: 'text' }),

    box('vision_encoder', 'Vision\nencoder', R, 0.0, 2.15, 0.78, 'E7E1F0', 'vision'),
    box('vision_embedding', 'Vision\nprojector', R, 1.12, 2.15, 0.78, 'F5D6D7', 'vision'),
    box('ngram', 'N-gram ×51B', R, 6.9, 2.15, 0.78, 'E7E1F0', 'engram', { module_layers: [2] }),
    box('candidate_pool', 'QSA\nindexer', R, 11.2, 2.15, 0.88, 'D8D8E9', 'indexer'),
    box('mtp', 'MTP drafts', R, 14.85, 2.15, 0.85, 'D8D8E9', 'speed', { branch: 'auxiliary' }),
  ],
  edges: [
    edge('vision_input', 'vision_encoder', 'embedding', 'conditional', [[R, 0.39], [R, 2.2], [L, 2.2], [L, 3.17]]),
    edge('text_in', 'text_embedding', 'embedding', 'flow', [[L, 1.6], [L, 3.17]]),
    edge('res_in', 'embedding', 'encoder_gdn0', 'residual', [[L, 3.79], [L, 4.58]]),
    edge('gdn0', 'encoder_gdn0', 'encoder_moe_gdn0', 'flow', [[L, 5.22], [L, 5.52]]),
    edge('moe0', 'encoder_moe_gdn0', 'encoder_gdn1', 'flow', [[L, 6.16], [L, 6.58]]),
    edge('gdn1', 'encoder_gdn1', 'encoder_moe_gdn1', 'flow', [[L, 7.22], [L, 7.52]]),
    edge('moe1', 'encoder_moe_gdn1', 'encoder_gdn2', 'flow', [[L, 8.16], [L, 8.58]]),
    edge('gdn2', 'encoder_gdn2', 'encoder_moe_gdn2', 'flow', [[L, 9.22], [L, 9.52]]),
    edge('moe2', 'encoder_moe_gdn2', 'encoder_qsa', 'flow', [[L, 10.16], [L, 10.88]]),
    edge('qsa', 'encoder_qsa', 'encoder_moe_qsa', 'flow', [[L, 11.52], [L, 11.82]]),
    edge('to_head', 'encoder_moe_qsa', 'target_head', 'flow', [[L, 12.46], [L, 14.5]]),
    edge('head_out', 'target_head', 'output', 'flow', [[L, 15.2], [L, 15.95]]),
    edge('ngram_to_gdn', 'ngram', 'encoder_gdn1', 'conditional', [[R - 1.08, 6.9], [L + 1.45, 6.9]]),
    edge('indexer_to_qsa', 'candidate_pool', 'encoder_qsa', 'indexer', [[R - 1.08, 11.2], [L + 1.45, 11.2]]),
    edge('gr_loop', 'encoder_moe_qsa', 'embedding', 'residual', [[L + 1.45, 12.14], [0.55, 12.14], [0.55, 3.48], [L + 1.45, 3.48]]),
    edge('draft', 'target_head', 'mtp', 'draft', [[L + 1.5, 14.85], [R - 1.08, 14.85]]),
  ],
  frames: [
    { id: 'hybrid_cell', x: L, y: 8.52, w: 3.35, h: 8.4, label: '×12', tx: L - 2.05, ty: 8.52, branch: '', layer: 0, dashed: false },
    { id: 'gdn_triple', x: L, y: 7.37, w: 3.15, h: 6.05, label: '×3', tx: L + 1.95, ty: 7.37, branch: '', layer: 0, dashed: true },
    { id: 'qsa_pair', x: L, y: 11.67, w: 3.15, h: 2.1, label: '×1', tx: L + 1.95, ty: 11.67, branch: '', layer: 3, dashed: true },
  ],
  bounds: [-5.2, 4.6, -0.65, 17.5],
};
