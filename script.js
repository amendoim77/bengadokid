const botao = Document.getElementById("meuBotao");
const texto = Document.getElementById("meuTexto");

botao.addEventListener("click", function(){
    texto.classList.toggle("oculto");
});