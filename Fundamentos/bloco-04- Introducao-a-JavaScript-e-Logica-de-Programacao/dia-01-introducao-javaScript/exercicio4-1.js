// exercicio 1

const a = 10;
const b = 30;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// exercicio 2

if (a > b){
    console.log(a);
}
else{
    console.log(b);
}

// exercicio 3
const first = 5;
const second = 15;
const third = 50;

if (first > second && first > third){
    console.log('first é a maior', first);
}
else if(second > first  && second > third){
    console.log('second é a maior', second);
}
else{
  console.log('third é a maior: ', third);
}

// exercicio 4
const valor = -5;


if (valor > 0){
    console.log('O número é positive');
}
else if(valor < 0){
    console.log('O número é negative');
}
else{
  console.log('O número é Zero');
}

//exercicio 5
const lado1 = 60;
const lado2 = -60;
const lado3 = 60;

if (lado1 > 0 && lado2 > 0 && lado3 > 0 && lado1 + lado2 + lado3 === 180){
    console.log('true');
}
else if(lado1 > 0 && lado2 > 0 && lado3 > 0 && lado1 + lado2 + lado3 !== 180 ){
    console.log('false');
}
else{
  console.log('erro');
}

//exercicio 6
let xadrez = 'Rainha';
let xadrezText = xadrez.toLowerCase();

switch (xadrezText){
    case 'bispo':
        console.log('sentido diagonal');
        break
    case 'rei':
    case 'rainha':
    case 'torre':
        console.log('Qualquer direção do tabuleiro');
        break
    case 'cavalo':
        console.log('Movimento em L')
        break
    case 'peao':
        console.log('movimentos frontais')
        break
    default:
        console.log('erro');


     
}



