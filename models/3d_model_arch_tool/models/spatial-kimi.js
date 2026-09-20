const L = -2.35, R = 2.45;
const STACK_R = L + 1.45;
const SAT_L = R - 1.08;
const G1 = 0.22;
const G2 = 1.02;

function box(id, label, x, y, w, h, color, part, extra = {}) {
  return { id, label, x, y, w, h, color, branch: extra.branch || '', part, layer: extra.layer || 0, kind: extra.kind || 'box', size: extra.size || 13, ...extra };
}
function edge(id, source, target, role, path, extra = {}) {
  return { id, source, target, role, path, ...extra };
}

export const kimiK3Spatial = {
  side: 1,
  root: 'diagram_kimi_k3',
  nodes: [
    box('text_embedding', 'Text\nembedding', L, 1.12, 3.0, 0.95, 'F5D6D7', 'embedding'),
    box('residual_input', '', L, 2.52, 3.1, 0.4, 'E3E6EB', '', { kind: 'text', size: 12 }),
    box('embedding', 'AttnRes mix', L, 3.48, 3.0, 0.62, 'F5D6D7', 'residual'),
    box('encoder_kda0', 'KDA', L, 4.9, 2.9, 0.64, 'F9DDCF', 'attention', { layer: 0 }),
    box('encoder_moe_kda0', 'LatentMoE', L, 5.84, 2.9, 0.64, 'E3E6EB', 'ffn', { layer: 0 }),
    box('encoder_kda1', 'KDA', L, 6.9, 2.9, 0.64, 'F9DDCF', 'attention', { layer: 1 }),
    box('encoder_moe_kda1', 'LatentMoE', L, 7.84, 2.9, 0.64, 'E3E6EB', 'ffn', { layer: 1 }),
    box('encoder_kda2', 'KDA', L, 8.9, 2.9, 0.64, 'F9DDCF', 'attention', { layer: 2 }),
    box('encoder_moe_kda2', 'LatentMoE', L, 9.84, 2.9, 0.64, 'E3E6EB', 'ffn', { layer: 2 }),
    box('encoder_mla', 'Gated MLA', L, 11.2, 2.9, 0.64, 'D6ECCF', 'attention', { layer: 3 }),
    box('encoder_moe_mla', 'LatentMoE', L, 12.14, 2.9, 0.64, 'E3E6EB', 'ffn', { layer: 3 }),
    box('cell_note', '23 × (3 KDA + 1 MLA)', L, 13.35, 3.4, 0.32, 'E3E6EB', '', { kind: 'text', size: 12 }),
    box('target_head', 'Output head', L, 14.85, 3.0, 0.7, 'D8D8E9', 'head', { layer: 92 }),
    box('output', 'Output tokens', L, 16.3, 3.0, 0.65, 'E3E6EB', 'head', { kind: 'text' }),

    box('vision_encoder', 'MoonViT-V2', R, 0.0, 2.15, 0.78, 'E7E1F0', 'vision'),
    box('vision_embedding', 'MM\nprojector', R, 1.12, 2.15, 0.78, 'F5D6D7', 'vision'),
    box('latent_router', 'Latent\nrouter', R, 5.84, 2.15, 0.88, 'D8D8E9', 'indexer'),
    box('attnres', 'AttnRes', R, 8.7, 2.15, 2.2, 'D5D09A', 'residual'),
    box('hidden_states', 'Latent KV', R, 11.2, 2.15, 0.84, 'E9EDF0', 'hidden'),
    box('mtp', 'MTP drafts', R, 14.85, 2.15, 0.85, 'D8D8E9', 'speed', { branch: 'auxiliary' }),
  ],
  edges: [
    edge('vision_input', 'vision_encoder', 'embedding', 'conditional', [[R, 0.39], [R, 2.2], [L, 2.2], [L, 3.17]]),
    edge('text_in', 'text_embedding', 'embedding', 'flow', [[L, 1.6], [L, 3.17]]),
    edge('res_in', 'embedding', 'encoder_kda0', 'residual', [[L, 3.79], [L, 4.58]]),
    edge('kda0', 'encoder_kda0', 'encoder_moe_kda0', 'flow', [[L, 5.22], [L, 5.52]]),
    edge('moe0', 'encoder_moe_kda0', 'encoder_kda1', 'flow', [[L, 6.16], [L, 6.58]]),
    edge('kda1', 'encoder_kda1', 'encoder_moe_kda1', 'flow', [[L, 7.22], [L, 7.52]]),
    edge('moe1', 'encoder_moe_kda1', 'encoder_kda2', 'flow', [[L, 8.16], [L, 8.58]]),
    edge('kda2', 'encoder_kda2', 'encoder_moe_kda2', 'flow', [[L, 9.22], [L, 9.52]]),
    edge('moe2', 'encoder_moe_kda2', 'encoder_mla', 'flow', [[L, 10.16], [L, 10.88]]),
    edge('mla', 'encoder_mla', 'encoder_moe_mla', 'flow', [[L, 11.52], [L, 11.82]]),
    edge('to_head', 'encoder_moe_mla', 'target_head', 'flow', [[L, 12.46], [L, 14.5]]),
    edge('head_out', 'target_head', 'output', 'flow', [[L, 15.2], [L, 15.95]]),
    edge('router_in', 'latent_router', 'encoder_moe_kda0', 'indexer', [[SAT_L, 5.84], [STACK_R, 5.84]]),
    edge('attnres_write', 'encoder_moe_kda2', 'attnres', 'residual', [
      [STACK_R, 9.84], [G2, 9.84], [G2, 8.85], [SAT_L, 8.85],
    ]),
    edge('attnres_read', 'attnres', 'encoder_mla', 'residual', [
      [SAT_L, 8.55], [G1, 8.55], [G1, 11.06], [STACK_R, 11.06],
    ]),
    edge('kv_share', 'hidden_states', 'encoder_mla', 'shared_kv', [[SAT_L, 11.2], [STACK_R, 11.2]]),
    edge('draft', 'target_head', 'mtp', 'draft', [[L + 1.5, 14.85], [SAT_L, 14.85]]),
  ],
  frames: [
    { id: 'hybrid_cell', x: L, y: 8.52, w: 3.35, h: 8.4, label: '×23', tx: L - 2.05, ty: 8.52, branch: '', layer: 0, dashed: false },
    { id: 'kda_triple', x: L, y: 7.37, w: 3.15, h: 6.05, label: '×3', tx: L + 1.95, ty: 7.37, branch: '', layer: 0, dashed: true },
    { id: 'mla_pair', x: L, y: 11.67, w: 3.15, h: 2.1, label: '×1', tx: L + 1.95, ty: 11.67, branch: '', layer: 3, dashed: true },
  ],
  bounds: [-5.2, 4.6, -0.65, 17.5],
};
