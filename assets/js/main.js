
const form = document.querySelector('#form');
const setSoma = document.querySelector('#soma');
let soma = 0;

form.addEventListener('submit', e => {
    e.preventDefault();

    const getInput = form.querySelector('.input');

    let input = Number(getInput.value);

    if(!input) {
        return;
    }
    getInput.value = '';
    soma += input;
    setSoma.innerHTML = soma;     
});

const zerar = form.querySelector('[type=reset]');
zerar.addEventListener('click', () => {
    soma = 0;
    setSoma.innerHTML = soma;     
});

// GERADOR DE LETRA ALEATÓRIA //

const nextLetter = document.querySelector('#next');

nextLetter.addEventListener('click', () => {
    const atual = document.querySelector('#atual');

    const num = getRandom(0, 24);
    const letra = proximaLetra(num);
    atual.innerHTML = letra;
});

function proximaLetra(num) {
    const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];
    return alfabeto[num];
}

function getRandom(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.round(r);
}
