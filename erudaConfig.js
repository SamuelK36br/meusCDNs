// Iniciar eruda em site não publicado:
if (location.hostname === "localhost") {
  eruda.init();
}

window.onkeydown = (e) => {
  if (eruda._isInit) {
    
    // "ctrl + ]": ocultar/mostrar console:
    if (e.key === "]" && e.ctrlKey) {
      if (document.body.classList.contains("erudaAtivo")) { eruda.hide() }
      else { eruda.show() }
      
      document.body.classList.toggle("erudaAtivo");
    }
    
    // "alt + ]": ir pro navegador:
    if (e.key === "]" && e.altKey) {
      if (navigator.platform === "Linux aarch64") {
        window.open(location.href);
      } else {
        window.close();
      }
    }
    
    // "ctrl + r": reload página spck:
    if (e.key === "r" && e.ctrlKey) {
      if (navigator.platform === "Linux aarch64") {
        location.reload();
        alert("Reloaded!");
      }
    }
    
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
  
  console.group("%cEruda Help:", "color: aqua; font-weight: bold");
  Object.keys(ERUDA_HELP).forEach((e) => {
    switch (e) {
      case '_isInit':
      case 'version':
        console.log(`%c.${e}:`, "font-weight: bold; color: gold", ERUDA_HELP[e])
        break;
      
      default:
        console.log(`%c.${e}():`, "font-weight: bold; color: gold", ERUDA_HELP[e])
    }
  });
  console.groupEnd();
}