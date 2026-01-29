// Iniciar Console Eruda:
eruda.init();

// Apertar ] para esconder/mostrar console:
const html = document.querySelector("html");
html.onkeydown = (e) => {
  html.classList.toggle("erudaAtivo");
  
  if (html.className && e.key === "]") {
    eruda.show();
  } else if (!html.className && e.key === "]") {
    eruda.hide();
  }
}

/*
if (window.location.origin === "https://samuelk36br.github.io") {
  eruda.destroy();
}
*/

// Explicação dos parâmetros:
function erudaHelp() {
  const ERUDA_HELP = {
    init: "oioioioioi",
    hide: "tchautchautchautchautchau"
  }
  console.log(ERUDA_HELP);
}