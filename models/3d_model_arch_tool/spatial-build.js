import * as THREE from 'three';

const COLORS = {
  attention: 0xecb85f,
  norm: 0xd5d09a,
  ffn: 0x64b4d5,
  embed: 0xd98f9f,
  linear: 0xa1a5df,
  softmax: 0x92c49a,
  swa: 0xc5a0da,
  full: 0x69cbb7,
  reuse: 0xafc179,
  reindex: 0x75aee9,
  moe: 0x7daabf,
  aux: 0xbb91cc,
  frame: 0x6e899a,
  ink: 0x9ab7c7,
  flow: 0x9ebdd0,
};

const unitBox = new THREE.BoxGeometry(1, 1, 1);
const materials = new Map();

function mat(name) {
  if (!materials.has(name)) {
    materials.set(name, new THREE.MeshStandardMaterial({
      color: COLORS[name] ?? 0x6e899a,
      metalness: 0.38,
      roughness: 0.29,
    }));
  }
  return materials.get(name);
}

function colorName(part, id, modern) {
  if (id === 'softmax') return 'softmax';
  const attention = !modern
    ? 'attention'
    : /swa|gdn|kda|delta|linear/i.test(id) ? 'swa'
      : /reindex|dsa|qsa|sparse/i.test(id) ? 'reindex'
        : /reuse|mla/i.test(id) ? 'reuse'
          : 'full';
  return ({
    attention,
    cross: 'attention',
    ffn: modern ? 'moe' : 'ffn',
    residual: 'norm',
    embedding: 'embed',
    head: 'linear',
    memory: 'full',
    hidden: 'full',
    vision: 'aux',
    engram: 'aux',
    speed: 'linear',
    indexer: 'reindex',
  }[part] || 'frame');
}

function box(name, x, y, z, w, h, d, material, parent) {
  const mesh = new THREE.Mesh(unitBox, material);
  mesh.name = name;
  mesh.position.set(x, y, z);
  mesh.scale.set(w, h, d);
  parent.add(mesh);
  return mesh;
}

function tube(name, pts, parent, material, radius) {
  if (pts.length < 2) return null;
  const path = new THREE.CurvePath();
  for (let i = 0; i < pts.length - 1; i++) {
    const a = new THREE.Vector3(pts[i][0], pts[i][1], pts[i][2]);
    const b = new THREE.Vector3(pts[i + 1][0], pts[i + 1][1], pts[i + 1][2]);
    if (a.distanceToSquared(b) < 1e-10) continue;
    path.add(new THREE.LineCurve3(a, b));
  }
  if (!path.curves.length) return null;
  const segs = Math.max(8, path.curves.length * 8);
  const geo = new THREE.TubeGeometry(path, segs, radius, 6, false);
  const mesh = new THREE.Mesh(geo, material);
  mesh.name = name;
  parent.add(mesh);
  return mesh;
}

function cage(name, x, y, z, w, h, d, parent, material, radius) {
  const hw = w / 2, hh = h / 2, hd = d / 2;
  for (const zz of [z - hd, z + hd]) {
    tube(`${name}${zz}`, [
      [x - hw, y - hh, zz], [x + hw, y - hh, zz], [x + hw, y + hh, zz], [x - hw, y + hh, zz], [x - hw, y - hh, zz],
    ], parent, material, radius);
  }
  for (const xx of [x - hw, x + hw]) {
    for (const yy of [y - hh, y + hh]) {
      tube(`${name}post`, [[xx, yy, z - hd], [xx, yy, z + hd]], parent, material, radius);
    }
  }
}

function housing(n, modern, parent) {
  const { id, x, y, w, h } = n;
  const g = new THREE.Group();
  g.name = `component_${id}`;
  g.userData.component_id = id;
  g.userData.part = n.part;
  g.userData.branch = n.branch;
  parent.add(g);
  const col = colorName(n.part, id, modern);
  const material = mat(col);
  if (n.kind === 'box') {
    const depth = ['attention', 'cross', 'ffn', 'engram', 'memory', 'vision', 'speed', 'indexer'].includes(n.part) ? 1.32 : 0.8;
    box(`body_${id}`, x, y, -0.06, w, h, 0.14, material, g);
    box(`rim_bottom_${id}`, x, y - h / 2, 0.54, w, 0.11, depth, material, g);
    box(`rim_left_${id}`, x - w / 2, y, 0.54, 0.095, h, depth, material, g);
    box(`rim_right_${id}`, x + w / 2, y, 0.54, 0.095, h, depth, material, g);
    for (let i = 0; i < 3; i++) box(`circuit_${id}`, x + (i - 1) * w * 0.23, y, 0.08, 0.12, h * 0.54, 0.08, material, g);
    cage(`edge_${id}`, x, y, 0.53, w, h, depth, g, material, 0.013);
  } else if (n.kind === 'plus') {
    box('pos_plus_h', x, y, 0.6, 0.34, 0.045, 0.15, mat('norm'), g);
    box('pos_plus_v', x, y, 0.6, 0.045, 0.34, 0.15, mat('norm'), g);
  } else if (n.kind === 'position') {
    const ring = Array.from({ length: 49 }, (_, t) => [x + 0.39 * Math.cos(t * Math.PI / 24), y + 0.39 * Math.sin(t * Math.PI / 24), 0.6]);
    tube('pos_ring', ring, g, mat('embed'), 0.025);
    const wave = Array.from({ length: 31 }, (_, i) => [x - 0.33 + i * 0.022, y + 0.15 * Math.sin(i * 0.022 / 0.66 * 2 * Math.PI), 0.6]);
    tube('pos_wave', wave, g, mat('embed'), 0.019);
  }
  return g;
}

function frameStack(f, parent) {
  const parsed = /^\D*(\d+)/.exec(f.label || '');
  const count = Math.min(6, Math.max(1, parsed ? +parsed[1] : 1));
  for (let i = 0; i < count; i++) {
    cage(`repeat_${f.id}`, f.x, f.y, -0.45 - i * 0.46, f.w, f.h, 0.14, parent, mat('frame'), i ? 0.015 : 0.024);
  }
}

function planeZ(role) {
  if (role === 'residual') return 0.82;
  if (['shared_kv', 'key', 'value', 'ced'].includes(role)) return 0.76;
  if (role === 'draft' || role === 'conditional') return 0.72;
  return 0.7;
}

function wireEdge(e, parent) {
  const role = e.role;
  const z = planeZ(role);
  const pts = e.path.map(([x, y]) => [x, y, z]);
  e.spatial_path = pts;
  const material = mat(role === 'flow' ? 'flow' : ['indexer', 'reindex'].includes(role) ? 'reindex' : 'ink');
  tube(`wire_${e.id}`, pts, parent, material, role === 'flow' ? 0.022 : 0.017);
  const end = new THREE.Vector3(...pts[pts.length - 1]);
  const prev = new THREE.Vector3(...pts[pts.length - 2]);
  const dir = end.clone().sub(prev);
  if (dir.lengthSq() < 1e-8) return;
  dir.normalize();
  const cone = new THREE.Mesh(new THREE.ConeGeometry(0.065, 0.16, 8), mat('flow'));
  cone.name = `arrow_${e.id}`;
  cone.position.copy(end).addScaledVector(dir, -0.035);
  cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
  parent.add(cone);
}

export function buildArchitecture(src, modern = true) {
  const data = structuredClone(src);
  const root = new THREE.Group();
  root.name = data.root || 'spatial_generated';
  for (const f of data.frames || []) frameStack(f, root);
  for (const n of data.nodes) housing(n, modern, root);
  for (const e of data.edges) if (e.path?.length > 1) wireEdge(e, root);
  return { root, data };
}
