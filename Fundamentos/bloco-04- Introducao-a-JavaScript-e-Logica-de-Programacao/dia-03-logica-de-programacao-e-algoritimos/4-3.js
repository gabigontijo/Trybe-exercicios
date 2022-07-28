// execicio 1 fazer progrma 10!
let fatorial = 10;
for (let i = 1; i <10 ; i ++){
    fatorial = fatorial * i;
}
 console.log('10! é igual a: ',fatorial);

 //exercicio 2 Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. 
 // Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
 let word = 'Trybe';
 let inverso = '';
  for (let i = word.length -1 ; i >=0 ; i --) {
  inverso = inverso + word[i];

  }

console.log(inverso);

// exercicio 3 Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorString = '';
let menorString = array[0];

for (let i = 0; i < array.length; i ++){
    if (array[i].length > maiorString.length){
        maiorString = array[i];
    }
     if (menorString.length > array[i].length){
        menorString = array[i];
    }
}
console.log('a maior string é' + maiorString + ' e a menor é: ' + menorString)

// exercicio 4 Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let maiorPrimo = 0;

for (let i = 2; i <= 50; i ++ ){
    let itsPrime = true;
    
    for (let j = 2; j < i ; j ++){
        if( i % j === 0){
            itsPrime = false
        }
    }

    if (itsPrime){
        maiorPrimo = i;
}
 
}

console.log(maiorPrimo);