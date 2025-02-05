let valorFinal=0;
let valorDigitado = document.getElementById('valor');
let totalHTML = document.getElementById('valor-total');

function adicao(){
    valorFinal = valorFinal+parseInt(valorDigitado.value);
    totalHTML.innerHTML = valorFinal;
    valorDigitado.value ='';
};

function subtracao(){
    valorFinal = valorFinal-parseInt(valorDigitado.value);
    totalHTMLinnerHTML = valorFinal;
    valorDigitado.value ='';
    };

function multiplicacao(){
    valorFinal = valorFinal*parseInt(valorDigitado.value);
    totalHTML.innerHTML = valorFinal;
    valorDigitado.value ='';
};

function divisao(){
    valorFinal = valorFinal/parseInt(valorDigitado.value);
    totalHTML.innerHTML = valorFinal;
    valorDigitado.value ='';
};

function zerar(){
    valorFinal=0;
    valorDigitado.value ='';
    totalHTML.innerHTML = 0;    
};