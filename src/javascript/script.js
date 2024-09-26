// Efeitos de Fade

function handleAnimations() {
  // Verifica a largura da viewport
  if (window.innerWidth <= 768) {
    // Ocultar elementos fadeL e fadeR
    const elementsL = document.querySelectorAll(".fadeL");
    elementsL.forEach((element) => {
      element.style.display = "none";
    });
    const elementsR = document.querySelectorAll(".fadeR");
    elementsR.forEach((element) => {
      element.style.display = "none";
    });

    // Mostrar e animar elementos fadeM
    const elementsM = document.querySelectorAll(".fadeM");
    elementsM.forEach((element) => {
      element.style.display = "block";
      ScrollReveal().reveal(element, {
        origin: "bottom",
        duration: 2000,
        distance: "20%",
      });
    });
  } else {
    // Ocultar elementos fadeM
    const elementsM = document.querySelectorAll(".fadeM");
    elementsM.forEach((element) => {
      element.style.display = "none";
    });

    //Efeitos de fade
    const elementsL = document.querySelectorAll(".fadeL");
    elementsL.forEach((element) => {
      element.style.display = "block";
      ScrollReveal().reveal(element, {
        origin: "left",
        duration: 2000,
        distance: "20%",
      });
    });

    const elementsR = document.querySelectorAll(".fadeR");
    elementsR.forEach((element) => {
      element.style.display = "block";
      ScrollReveal().reveal(element, {
        origin: "right",
        duration: 2000,
        distance: "20%",
      });
    });
  }
}

// Chamar a função quando a página carregar e sempre que o tamanho da janela mudar
window.onload = handleAnimations;
window.addEventListener("resize", handleAnimations);

// Garante que a página role para o topo após todos os recursos serem carregados
$(window).on("load", function () {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 0);
});
