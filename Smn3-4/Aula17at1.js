const noticiaPrincipal = document.getElementById("alternar-tema")
    alert(noticiaPrincipal.innerHTML);

const titulosNoticia = document.getElementsByTagName("h1");
for(const titulo of titulosNoticia){
    titulo.style.fontWeight = "bold";
    titulo.style.colo = "green";
    
    titulo.classList.add("titulo-noticia");
}

const paragrafosNoticia = document.getElementsByClassName("paragrafo-noticia");
for(const paragrafo of paragrafosNoticia){
    paragrafo.innerHTML = "Leia a noticia completa";
}

const secaoComentario = document.getElementById("secao-comentarios");
const novoComentario = document.createElement("p");
novoComentario.innerHTML = "Deixe seu comentario";
secaoComentario.appendChild(novoComentario);

const ultimasAtualizacoes = document.getElementById("ultimas-atualizacoes");
const ultimoItem = ultimasAtualizacoes.lastElementChild;
ultimasAtualizacoes.removeChild(ultimoItem);

const alternarTemaBotao = document.getElementById("alternar-tema");

alternarTemaBotao.addEventListener("click", () => {
    document.body.classList.toggle("tema-escuro");
    }
)