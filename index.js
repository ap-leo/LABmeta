let atual = 1;
const carimg = document.getElementById('carimg');

carimg.addEventListener('click', function () {
    const atualAux = document.getElementById('img' + atual);
    atualAux.style.opacity = '0';
    if (atual == 4) {
        atual = 1;
    }
    else {
        atual++;
    }
    const proximaImg = document.getElementById('img' + atual);
    proximaImg.style.opacity = '1';
});


const container = document.getElementById('carrosel');
const movivel = document.getElementById('movivel');

let inicialX, inicialPosicaoX;

movivel.addEventListener('mousedown', iniciarArraste);
movivel.addEventListener('touchstart', iniciarArraste);

function iniciarArraste(evento) {
    evento.preventDefault();

    inicialX = evento.clientX || evento.touches[0].clientX;
    inicialPosicaoX = movivel.offsetLeft;

    document.addEventListener('mousemove', arrastar);
    document.addEventListener('touchmove', arrastar);
    document.addEventListener('mouseup', finalizarArraste);
    document.addEventListener('touchend', finalizarArraste);
}

function arrastar(evento) {
    evento.preventDefault();

    const movimentoX = (evento.clientX || evento.touches[0].clientX) - inicialX;
    let novaPosicaoX = inicialPosicaoX + movimentoX;

    // Limita o movimento para que o lado esquerdo da div não ultrapasse a posição inicial
    novaPosicaoX = Math.min(novaPosicaoX, 0);

    movivel.style.left = novaPosicaoX + 'px';
}




function finalizarArraste() {
    document.removeEventListener('mousemove', arrastar);
    document.removeEventListener('touchmove', arrastar);
    document.removeEventListener('mouseup', finalizarArraste);
    document.removeEventListener('touchend', finalizarArraste);
}
