const html = document.querySelector("html");
html.onkeydown = (e) => {
  html.classList.toggle("erudaAtivo");
  
  if (html.className && e.key === "]") {
    eruda.show();
  } else if (!html.className && e.key === "]") {
    eruda.hide();
  }
}