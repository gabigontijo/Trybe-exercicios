// exercicio 1

const a = 10;
const b = 30;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// exercicio 2

if (a > b) {
    console.log(a);
}
else {
    console.log(b);
}

// exercicio 3
const first = 5;
const second = 15;
const third = 50;

if (first > second && first > third) {
    console.log('first é a maior', first);
}
else if (second > first && second > third) {
    console.log('second é a maior', second);
}
else {
    console.log('third é a maior: ', third);
}

// exercicio 4
const valor = -5;


if (valor > 0) {
    console.log('O número é positive');
}
else if (valor < 0) {
    console.log('O número é negative');
}
else {
    console.log('O número é Zero');
}

//exercicio 5
const lado1 = 60;
const lado2 = -60;
const lado3 = 60;

if (lado1 > 0 && lado2 > 0 && lado3 > 0 && lado1 + lado2 + lado3 === 180) {
    console.log('true');
}
else if (lado1 > 0 && lado2 > 0 && lado3 > 0 && lado1 + lado2 + lado3 !== 180) {
    console.log('false');
}
else {
    console.log('erro');
}

//exercicio 6
let xadrez = 'Rainha';
let xadrezText = xadrez.toLowerCase();

switch (xadrezText) {
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

//exercicio 7

let nota =101;


if (nota >= 90 && nota <= 100) {
    console.log('Nota A');
}
else if (nota >= 80 && nota < 90){
    console.log('Nota B');
}
else if (nota >= 70 &&nota < 80){
    console.log('Nota C');
}
else if (nota >= 60 && nota < 70){
    console.log('Nota D');
}
else if (nota >= 50 && nota < 60){
    console.log('Nota E');
}
else if (nota >= 40 && nota < 50){
    console.log('Nota F');
}
else{
    console.log('erro');
}

//exercicio 8

let flor = 3;
let girassol = 2;
let margarida =9

if (flor%2 == 0 || girassol%2 == 0 || margarida%2 == 0){
    console.log(true);
}
else{
    console.log(false);
}

//exercicio 9

let flor2 = 4;
let girassol2 = 2;
let margarida2 =6

if (flor2%2 ==! 0 || girassol2%2 ==! 0 || margarida2%2 ==! 0){
    console.log(true);
}
else{
    console.log(false);
}

// exercicio 10

let custo = 10;
let venda = 35;
let custoTotal = custo*1.2;
let lucro = venda - custoTotal;

if ( custo > 0 && venda > 0){
    console.log('R$: '+ lucro * 1000);
}
else{
    console.log('erro');
}

// exercicio 11

let salarioBruto = 3000;
let inss = 0;
let salarioInss = 0
let salarioIr = 0


if (salarioBruto <= 1556.94){
    salarioInss = salarioBruto - 0.08*salarioBruto;

}
else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92){
    salarioInss = salarioBruto - 0.09*salarioBruto;

}
else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82 ){
    salarioInss = salarioBruto - 0.11*salarioBruto;
}
else {
    salarioInss = salarioBruto - 570.88;
}

if (salarioInss <= 1903.98){
    salarioIr = salarioInss
}
else if (salarioInss > 1903.98 && salarioInss <= 2826.65){
    salarioIr = salarioInss - (0.075*salarioInss - 142.80);

}
else if (salarioInss > 2826.65 && salarioInss <= 3751.05){
    salarioIr = salarioInss - (0.15*salarioInss - 354.80);
    
}
else if (salarioInss > 3751.05 && salarioInss <= 4664.68){
    salarioIr = salarioInss - (0.225*salarioInss - 636.13);
    
} else{
    salarioIr = salarioInss - (0.275*salarioInss - 869.36);
    
}

console.log('Salário Bruto: ' + salarioBruto);
console.log('Salário descontado inss: ' + salarioInss);
console.log('Salário Liquido - sem tbm o IR: ' + salarioIr);

















