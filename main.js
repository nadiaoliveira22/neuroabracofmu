document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.pagina').forEach(sec => {
    const cs = window.getComputedStyle(sec).display;
    sec.dataset.originalDisplay = cs === 'none' ? 'block' : cs;
    if (!sec.classList.contains('ativa')) sec.style.display = 'none';
  });
});

function mostrarPagina(id) {
  document.querySelectorAll('.pagina').forEach(sec => {
    sec.style.display = 'none';
    sec.classList.remove('ativa');
  });

  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = el.dataset.originalDisplay || 'block';
  el.classList.add('ativa');
  el.setAttribute('tabindex', '-1');
  el.focus();
  history.pushState(null, '', `#${id}`);
}
