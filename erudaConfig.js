// Iniciar eruda em site não publicado:
if (!(window.location.origin === "https://samuelk36br.github.io")) {
  eruda.init();
}

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

// Explicação dos parâmetros:
function erudaHelp() {
  const ERUDA_HELP = {
    init: "oioioioioi",
    _isInit: "Retorna true se eruda estiver iniciado, caso contrário, retorna false.",
    hide: "tchautchautchautchautchau"
  }
  console.log(ERUDA_HELP);
}