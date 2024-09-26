// Garante que a página role para o topo após todos os recursos serem carregados
$(window).on("load", function () {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 0);
});
