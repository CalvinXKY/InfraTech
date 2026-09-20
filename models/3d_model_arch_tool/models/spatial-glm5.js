const L = -2.35, R = 2.45;

function box(id, label, x, y, w, h, color, part, extra = {}) {
  return { id, label, x, y, w, h, color, branch: extra.branch || '', part, layer: extra.layer || 0, kind: extra.kind || 'box', size: extra.size || 13, ...extra };
}
function edge(id, source, target, role, path, extra = {}) {
  return { id, source, target, role, path, ...extra };
}

export const glm5Spatial = {
  side: 1,
  root: 'diagram_glm5',
  nodes: [
    box('text_embedding', 'Text\nembedding', L, 1.12, 3.0, 0.95, 'F5D6D7', 'embedding'),
    box('residual_input', '', L, 2.52, 3.1, 0.4, 'E3E6EB', '', { kind: 'text', size: 12 }),
    box('embedding', 'Input residual', L, 3.48, 3.0, 0.62, 'F5D6D7', 'residual'),
    box('dense_attn', 'MLA', L, 4.9, 2.9, 0.64, 'D6ECCF', 'attention', { layer: 0 }),
    box('dense_ffn', 'Dense FFN', L, 5.84, 2.9, 0.64, '64B4D5', 'ffn', { layer: 0, dense: true }),
    box('encoder_mla', 'MLA', L, 7.5, 2.9, 0.64, 'D6ECCF', 'attention', { layer: 3 }),
    box('encoder_moe_mla', 'MoE', L, 8.44, 2.9, 0.64, 'E3E6EB', 'ffn', { layer: 3 }),
    box('encoder_dsa', 'DSA · sparse', L, 10.35, 2.9, 0.64, 'CDE8F4', 'attention', { layer: 8 }),
    box('encoder_moe_dsa', 'MoE', L, 11.3, 2.9, 0.64, 'E3E6EB', 'ffn', { layer: 8 }),
    box('sparse_note', '75 × (MLA + DSA + MoE)', L, 12.7, 3.4, 0.32, 'E3E6EB', '', { kind: 'text', size: 12 }),
    box('target_head', 'Output head', L, 14.85, 3.0, 0.7, 'D8D8E9', 'head', { layer: 77 }),
    box('output', 'Output tokens', L, 16.3, 3.0, 0.65, 'E3E6EB', 'head', { kind: 'text' }),

    box('hidden_states', 'Latent KV', R, 7.5, 2.15, 0.84, 'E9EDF0', 'hidden'),
    box('candidate_pool', 'Lightning\nindexer', R, 10.35, 2.15, 0.88, 'D8D8E9', 'indexer'),
    box('mtp', 'MTP drafts', R, 14.85, 2.15, 0.85, 'D8D8E9', 'speed', { branch: 'auxiliary' }),
  ],
  edges: [
    edge('text_in', 'text_embedding', 'embedding', 'flow', [[L, 1.6], [L, 3.17]]),
    edge('res_in', 'embedding', 'dense_attn', 'residual', [[L, 3.79], [L, 4.58]]),
    edge('dense_a', 'dense_attn', 'dense_ffn', 'flow', [[L, 5.22], [L, 5.52]]),
    edge('dense_out', 'dense_ffn', 'encoder_mla', 'flow', [[L, 6.16], [L, 7.18]]),
    edge('mla', 'encoder_mla', 'encoder_moe_mla', 'flow', [[L, 7.82], [L, 8.12]]),
    edge('moe_mla', 'encoder_moe_mla', 'encoder_dsa', 'flow', [[L, 8.76], [L, 10.03]]),
    edge('dsa', 'encoder_dsa', 'encoder_moe_dsa', 'flow', [[L, 10.67], [L, 10.98]]),
    edge('to_head', 'encoder_moe_dsa', 'target_head', 'flow', [[L, 11.62], [L, 14.5]]),
    edge('head_out', 'target_head', 'output', 'flow', [[L, 15.2], [L, 15.95]]),
    edge('kv_share', 'hidden_states', 'encoder_mla', 'shared_kv', [[R - 1.08, 7.5], [L + 1.45, 7.5]]),
    edge('indexer_to_dsa', 'candidate_pool', 'encoder_dsa', 'indexer', [[R - 1.08, 10.35], [L + 1.45, 10.35]]),
    edge('draft', 'target_head', 'mtp', 'draft', [[L + 1.5, 14.85], [R - 1.08, 14.85]]),
  ],
  frames: [
    { id: 'dense_prefix', x: L, y: 5.37, w: 3.15, h: 2.1, label: '×3', tx: L - 2.05, ty: 5.37, branch: '', layer: 0, dashed: true },
    { id: 'sparse_block', x: L, y: 9.4, w: 3.35, h: 5.3, label: '×75', tx: L - 2.05, ty: 9.4, branch: '', layer: 3, dashed: false },
    { id: 'dsa_pair', x: L, y: 10.82, w: 3.15, h: 2.1, label: 'DSA', tx: L + 1.95, ty: 10.82, branch: '', layer: 8, dashed: true },
  ],
  bounds: [-5.2, 4.6, -0.65, 17.5],
};
