const KEY = 'arch-viz-theme-v2';

function readTheme() {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch { /* ignore */ }
  return 'light';
}

function applyTheme(id) {
  document.body.dataset.theme = id;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', id === 'light' ? '#efe8dc' : '#0b131e');
  document.querySelectorAll('.theme-switch [data-theme]').forEach((btn) => {
    btn.setAttribute('aria-pressed', btn.dataset.theme === id ? 'true' : 'false');
  });
  try { localStorage.setItem(KEY, id); } catch { /* ignore */ }
}

applyTheme(readTheme());
document.querySelectorAll('.theme-switch [data-theme]').forEach((btn) => {
  btn.addEventListener('click', () => applyTheme(btn.dataset.theme));
});
