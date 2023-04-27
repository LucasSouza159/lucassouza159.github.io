const voltarBotao = document.querySelector(".voltar");
const voltarTopo = document.getElementById("voltarTopo");
const hrefHeader = voltarTopo.getAttribute("href");

window.addEventListener("scroll", () => {
  const alturaJanela = window.innerHeight;
  const posicaoPagina = window.pageYOffset;
  const posicaoDesejada = alturaJanela * 0.1; // 10% da tela

  if (posicaoPagina > posicaoDesejada) {
    voltarBotao.classList.add("visible");
    voltarBotao.classList.remove("invisible");
  } else {
    voltarBotao.classList.remove("visible");
    voltarBotao.classList.add("invisible");
  }
});

voltarTopo.addEventListener("click", scrollToIdOnClick);

function scrollToIdOnClick(e) {
  e.preventDefault();
  const section = hrefHeader;
  window.scroll({
    top: hrefHeader,
    behavior: "smooth",
  });
}
