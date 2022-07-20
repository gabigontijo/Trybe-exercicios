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


