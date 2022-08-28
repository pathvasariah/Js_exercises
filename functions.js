// Criar um aplicativo de frases motivacionais
// console.log('Estudar é muito bom')
// console.log('Paciência e Persistência')
// console.log('Revisão é mãe do aprendizado')



//Declarar função
function createPhrases() {
    //Criar um aplicativo de frases motivacionais
    console.log('Estudar é muito bom');
    console.log('Paciência e Persistência');
    console.log('Revisão é mãe do aprendizado');
}

//Executar (rodar, chamar, invocar) a função
//Execute (Run, Call, Invoke)
createPhrases()
console.log('Fim do Programa');

//Função serve tanto para agrupar código como para reutilização de código.


//Function Expression
//Function Anonymous

//Parâmetros (Parameters) 
const sum = function(number1, number2){
    let total = number1 + number2;
    return total;
    //Aqui está retornando 30 (Valor da soma)
}

console.log(sum(2, 3)) //Argumentos - Arguments)  

let number01 = 10
let number02 = 20

// console.log(`O valor do 1° número: ${number01}`);
// console.log(`O valor do 2° número: ${number02}`);

//Maneiras de mostrar a soma
console.log(`O valor da soma de ${number01} + ${number02} é: ${number01 + number02}`);
console.log(`O valor da soma de ${number01} + ${number02} é: ${sum(number01, number02)}`);

let total = 0;
console.log(total);
//Aqui o total possui valor 0
//Total possui diferentes valores fora e dentro do escopo da função