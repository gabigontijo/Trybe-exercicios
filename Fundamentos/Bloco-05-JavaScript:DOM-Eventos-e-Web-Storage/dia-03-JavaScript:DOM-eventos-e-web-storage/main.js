const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// Acontece pq a primeira caixa esta com class .tech que esta com margemtop (-20px)

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
mento do Bloco 5
Atividade em grupo

const lis =  document.getElementsByTagName('li');

for (let i = 0; i < lis.length; i += 1) {
    lis[i].addEventListener('click', capeta);
}

function capeta() {
    let filhos = document.getElementsByClassName('container')[0].children;
    for (let i = 0; i < filhos.length; i += 1) {
        if (filhos[i].className === 'tech'){
            filhos[i].className = '';
        }
    }
    this.className = 'tech';

 }

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
 const caixaTexto = document.getElementById('input');
 caixaTexto.addEventListener('keyup', function (){
    document.getElementsByClassName('tech')[0].innerText = this.value;
 })

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
const top3 = document.getElementById('my-spotrybefy');
top3.addEventListener('dblclick', function() {
    window.location.replace('https://github.com/gabigontijo/gabigontijo');
})

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
top3.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'red';
})
top3.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
})



// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.