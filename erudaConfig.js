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
    init: "Inicia o eruda console.",
    destroy: "Destroi o eruda console.",
    _isInit: "Retorna true se eruda estiver iniciado, caso contrário, retorna false.",
    show: "Mostrar o eruda console.",
    hide: "Oculta o eruda console.",
    version: "Mostra a versão."
  }
  
  console.group("Eruda Help:");
  Object.keys(ERUDA_HELP).forEach((e) => {
    console.log(`%c${e}:`, "font-weight: bold; color: gold", ERUDA_HELP[e]);
  })
  console.groupEnd();
}