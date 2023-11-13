function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
//white = "enquanto" basicamente repetição
while(contador<listaDeTeclas.length){
    
    listaDeTeclas[contador].onclick = tocaSomAplausos;
    contador = contador + 1;
}