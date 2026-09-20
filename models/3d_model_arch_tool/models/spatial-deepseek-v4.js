const L = -2.35, R = 2.45;
const STACK_R = L + 1.45;
const SAT_L = R - 1.08;
const G_NEAR = 0.22;
const G_FAR = 1.05;

function box(id, label, x, y, w, h, color, part, extra = {}) {
  return { id, label, x, y, w, h, color, branch: extra.branch || '', part, layer: extra.layer || 0, kind: extra.kind || 'box', size: extra.size || 13, ...extra };
}
function edge(id, source, target, role, path, extra = {}) {
  return { id, source, target, role, path, ...extra };
}

export const deepseekV4Spatial = {
  side: 1,
  root: 'diagram_deepseek_v4',
  nodes: [
    box('text_embedding', 'Text\nembedding', L, 1.12, 3.0, 0.95, 'F5D6D7', 'embedding'),
    box('residual_input', '', L, 2.52, 3.1, 0.4, 'E3E6EB', '', { kind: 'text', size: 12 }),
    box('embedding', 'mHC residual', L, 3.48, 3.0, 0.62, 'F5D6D7', 'residual'),
    box('encoder_hca0', 'HCA · 128×', L, 4.9, 2.9, 0.64, 'D6ECCF', 'attention', { layer: 0 }),
    box('encoder_moe_hca0', 'Hash-MoE', L, 5.84, 2.9, 0.64, '64B4D5', 'ffn', { layer: 0 }),
    box('encoder_csa', 'CSA · 4×', L, 7.5, 2.9, 0.64, 'CDE8F4', 'attention', { layer: 2 }),
    box('encoder_moe_csa', 'MoE', L, 8.44, 2.9, 0.64, 'E3E6EB', 'ffn', { layer: 2 }),
    box('encoder_hca', 'HCA · 128×', L, 10.35, 2.9, 0.64, 'D6ECCF', 'attention', { layer: 3 }),
    box('encoder_moe_hca', 'MoE', L, 11.3, 2.9, 0.64, 'E3E6EB', 'ffn', { layer: 3 }),
    box('hybrid_note', '61 layers · 2 HCA then 30 CSA + 29 HCA', L, 12.7, 3.4, 0.32, 'E3E6EB', '', { kind: 'text', size: 12 }),
    box('target_head', 'Output head', L, 14.85, 3.0, 0.7, 'D8D8E9', 'head', { layer: 60 }),
    box('output', 'Output tokens', L, 16.3, 3.0, 0.65, 'E3E6EB', 'head', { kind: 'text' }),

    box('hca_kv', 'HCA KV\n128×', R, 4.9, 2.15, 0.84, 'E9EDF0', 'hidden'),
    box('csa_kv', 'CSA KV\n4×', R, 6.35, 2.15, 0.72, 'E9EDF0', 'hidden'),
    box('candidate_pool', 'CSA\nindexer', R, 7.5, 2.15, 0.88, 'D8D8E9', 'indexer'),
    box('local_window', 'Local\nSWA 128', R, 10.35, 2.15, 0.84, 'E7E1F0', 'memory'),
    box('mtp', 'MTP drafts', R, 14.85, 2.15, 0.85, 'D8D8E9', 'speed', { branch: 'auxiliary' }),
  ],
  edges: [
    edge('text_in', 'text_embedding', 'embedding', 'flow', [[L, 1.6], [L, 3.17]]),
    edge('res_in', 'embedding', 'encoder_hca0', 'residual', [[L, 3.79], [L, 4.58]]),
    edge('hca0', 'encoder_hca0', 'encoder_moe_hca0', 'flow', [[L, 5.22], [L, 5.52]]),
    edge('hca0_out', 'encoder_moe_hca0', 'encoder_csa', 'flow', [[L, 6.16], [L, 7.18]]),
    edge('csa', 'encoder_csa', 'encoder_moe_csa', 'flow', [[L, 7.82], [L, 8.12]]),
    edge('moe_csa', 'encoder_moe_csa', 'encoder_hca', 'flow', [[L, 8.76], [L, 10.03]]),
    edge('hca', 'encoder_hca', 'encoder_moe_hca', 'flow', [[L, 10.67], [L, 10.98]]),
    edge('to_head', 'encoder_moe_hca', 'target_head', 'flow', [[L, 11.62], [L, 14.5]]),
    edge('head_out', 'target_head', 'output', 'flow', [[L, 15.2], [L, 15.95]]),
    edge('hca_kv_prefix', 'hca_kv', 'encoder_hca0', 'shared_kv', [
      [SAT_L, 4.9], [G_FAR, 4.9], [STACK_R, 4.9],
    ]),
    edge('hca_kv_stack', 'hca_kv', 'encoder_hca', 'shared_kv', [
      [SAT_L, 4.9], [G_FAR, 4.9], [G_FAR, 10.5], [STACK_R, 10.5],
    ]),
    edge('csa_kv_in', 'csa_kv', 'encoder_csa', 'shared_kv', [
      [SAT_L, 6.35], [G_NEAR, 6.35], [G_NEAR, 7.34], [STACK_R, 7.34],
    ]),
    edge('indexer_to_csa', 'candidate_pool', 'encoder_csa', 'indexer', [[SAT_L, 7.5], [STACK_R, 7.5]]),
    edge('swa_hca', 'local_window', 'encoder_hca', 'indexer', [
      [SAT_L, 10.35], [G_NEAR, 10.35], [STACK_R, 10.35],
    ]),
    edge('swa_csa', 'local_window', 'encoder_csa', 'indexer', [
      [SAT_L, 10.35], [G_NEAR, 10.35], [G_NEAR, 7.66], [STACK_R, 7.66],
    ]),
    edge('mhc_loop', 'encoder_moe_hca', 'embedding', 'residual', [[STACK_R, 11.3], [0.55, 11.3], [0.55, 3.48], [STACK_R, 3.48]]),
    edge('draft', 'target_head', 'mtp', 'draft', [[L + 1.5, 14.85], [SAT_L, 14.85]]),
  ],
  frames: [
    { id: 'hca_prefix', x: L, y: 5.37, w: 3.15, h: 2.1, label: '×2', tx: L - 2.05, ty: 5.37, branch: '', layer: 0, dashed: true },
    { id: 'hybrid_cell', x: L, y: 9.4, w: 3.35, h: 5.3, label: '×29', tx: L - 2.05, ty: 9.4, branch: '', layer: 2, dashed: false },
    { id: 'csa_pair', x: L, y: 7.97, w: 3.15, h: 2.1, label: 'CSA', tx: L + 1.95, ty: 7.97, branch: '', layer: 2, dashed: true },
  ],
  bounds: [-5.2, 4.6, -0.65, 17.5],
};
