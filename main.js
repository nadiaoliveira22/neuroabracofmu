function mostrarPagina(id) {
  document.querySelectorAll('.pagina').forEach(sec => {
    sec.style.display = 'none';
  });

  document.getElementById(id).style.display = 'block';
}
