function adicionar(){
let idade = document.getElementById('idade').value;
let nome = document.getElementById('nome').value;
let cidade = document.getElementById('cidade').value;
alert(idade + nome + cidade );
let total = document.getElementById('valor-total');
total.textContent= 'Outro';
};

function limpar(){
document.getElementById('idade').value = 0;
document.getElementById('nome').value = '';
document.getElementById('cidade').value = '';
totalCarrinho=0;
};