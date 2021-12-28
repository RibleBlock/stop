
const form = document.querySelector('#form');
const setSoma = document.querySelector('#soma');
let soma = 0;
let jaFoi = [];

// botao somar //
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

// botao ZERAR //
const zerar = form.querySelector('[type=reset]');
zerar.addEventListener('click', () => {
    soma = 0;
    setSoma.innerHTML = soma;     
});

// botao REINICIAR //
const btReset = document.querySelector('#reset');
btReset.addEventListener('click', () => {
    location.reload(true)

    jaFoi = [];
    salvarLetras();
});

// GERADOR DE LETRA ALEATÓRIA //

const nextLetter = document.querySelector('#next');

nextLetter.addEventListener('click', () => {
    const atual = document.querySelector('#atual');

    const num = getRandom(0, 24);
    const letra = proximaLetra(num);
    atual.innerHTML = letra;
    jaForam.innerHTML = jaFoi;
});

function proximaLetra(num) {
    const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];
    let letra = ' ';
    letra += alfabeto[num];
    for(i in jaFoi) {
        if(letra === jaFoi[i]) {
            return proximaLetra(getRandom(0, 24));
        }
        if(jaFoi.length >= 25){
            nextLetter.style.display = 'none';
            return `todas as letras ja foram`;
        }
    }
    jaFoi.push(letra);
    salvarLetras();
    console.log('ADICIONADO')
    return letra;
}

function getRandom(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.round(r);
}

function salvarLetras() {
    const arrayJSON = JSON.stringify(jaFoi);
    localStorage.setItem('letras', arrayJSON);
}    

function adicionaLetrasSalvas() {
    
    const saveLetter = JSON.parse(localStorage.getItem('letras'));
    jaFoi = [...saveLetter];
    jaForam.innerHTML = saveLetter;
}
adicionaLetrasSalvas()