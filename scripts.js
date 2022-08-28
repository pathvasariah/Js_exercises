//Mostrar mensagem no console
console.log("bem vindos ao Starter!!")


let weight;
//Mostrar o tipo de uma variável
console.log(typeof weight)

//declarando variáveis
let name = 'Patrick', age = 19, stars = 17.22, isSubscribed = true;

//Criar Objeto
let student = {
    name: 'Patrick',
    age: 19,
    weight: 78.80,
    isSubscribed: true
};

//Concatenar Variáveis e String(Texto)
console.log(`O nome do estudante é ${student.name}, sua idade é ${student.age} e ele pesa ${student.weight} kg`)
//Mostrar os tipos das variáveis do estudante(objeto)
console.log(typeof student)
//Mostrar o tipo de uma variável específica do objeto
console.log(typeof student.name)

//Declarar Array(vetor)
let students = []

//Atribuindo o objeto student a posição 0 do array students
students =[
    student
] 

console.log(students)

