let totalCarrinho = 0 ;

function adicionar(){
let produtoEscolhido = document.getElementById('produto').value;
let nomeProduto = produtoEscolhido.split('-')[0];
let posicaoValor = (produtoEscolhido.indexOf("$")+1); // outra opção: produto.split('R$') [1];
let valorProduto = produtoEscolhido.substring(posicaoValor,produtoEscolhido.length);
let qtdeSelecionada = document.getElementById('quantidade').value;

if (qtdeSelecionada > 0)  {
    let valorTotal = qtdeSelecionada*valorProduto;
    let classeCarrinho = document.getElementById('lista-produtos');
    //adicionar a tag inteira ao html
    classeCarrinho.innerHTML= classeCarrinho.innerHTML+`<section class="carrinho__produtos__produto">
          <span class="texto-azul">${qtdeSelecionada}x</span> ${nomeProduto} <span class="texto-azul">R$${valorTotal}</span>
        </section>`;
    totalCarrinho = totalCarrinho + valorTotal;
    let atualizaCarrinho = document.getElementById('valor-total');
    atualizaCarrinho.textContent = `R$ ${totalCarrinho}`;
    document.getElementById('quantidade').value =0; //zerar quantidade depois de adicionar no carrinho

}else{ 
    alert('A quantidade é inválida');
};
};

function limpar(){
document.getElementById('quantidade').value = 0;
document.getElementById('lista-produtos').innerHTML ='';
document.getElementById('valor-total').innerHTML='';
totalCarrinho=0;
};