//exercicio 1

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//exercicio 2

let indexOfPortfolio = menu.indexOf('Portfólio')

console.log(indexOfPortfolio);

// exercicio 3

menu.push('Contato');
console.log(menu);

// exercicio 1 for

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let index = 0; index < groceryList.length; index += 1){
    console.log(groceryList[index]);
}

//exercicio 1 for/of

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let name of names){
    console.log(name);
}

// exercicio 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let number of numbers){
    console.log(number);
}

// exercicio 2
count = 0;
for( let soma = 0; soma< numbers.length; soma += 1){
    count = numbers[soma] + count;
}

console.log(count);

// exercicio 3
 let mediaAritmetica = count/(numbers.length);
 console.log(mediaAritmetica);

 // exercicio 4
 if (mediaAritmetica > 20){
    console.log('valor maior que 20');

 }else {
    console.log('valor menor ou igual a 20');
 }

 //exercicio 5
 let maiorNumero = 0;
 for(let m = 0; m < numbers.length; m += 1){
    if( numbers[m] > maiorNumero){
        maiorNumero = numbers[m];
    }
 }
 console.log(maiorNumero);

 //exercicio 6
 let impares=0;
 for (let i =0; i< numbers.length; i +=1){
    if(numbers[i]%2 !== 0){
        impares += 1;
    }
 }

 if(impares > 0){
    console.log('numeros impares = ' + impares);
 } else{
    console.log('nenhum valor impare encontrado');
 }

 // exercicio 7
let menorNumero = Infinity;
for(let i = 0; i< numbers.length; i += 1){
    if(numbers[i] < menorNumero){
        menorNumero = numbers[i];
    }
}
console.log('Menor numero do array é: ' + menorNumero);

// exercicio 8
let array25 = [];
let arrayElement = 0;
for (let i = 0; i<25; i += 1){
    arrayElement += 1
    array25.push(arrayElement);
}
console.log(array25);