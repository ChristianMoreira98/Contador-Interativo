//valor inicial do contador
let contador = 0;

//Selecionar o parágrafo que exibe o valor na tela no HTML
const valorContador = document.querySelector('#valor-contador');

//Função usada para aumentar o contador
function aumentar() {
    contador++; //Incrementando/somando/somando um valor a mais
    valorContador.innerText = contador; //InnerText atualiza o valor na tela, ele vai alterar o texto exibido dentro do elemento HTML
}

function diminuir() {
    contador--; //decrementando/diminuindo/reduzindo o valor do contador
    valorContador.innerText = contador;
}

function resetar() {
    contador = 0; //voltando para o zero
    valorContador.innerText = contador;
}

//seleciona o body da página HTML
const body = document.querySelector('body');

function alternarTema() {
    body.classList.toggle('dark')
}