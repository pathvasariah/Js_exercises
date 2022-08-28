// Scope Function
let subject = 'create video'

function createThink(subjetc){
    subject = 'study';
    return subject;
}

console.log(subject);
console.log(createThink(subject));

// Hoisting Function
sayMyName()

function sayMyName(){
    console.log('Patrick');
}
//Acontece o Hoisting


// Arrow Function (Flecha, Seta)
const sayMyNome = () => {
    console.log('Patricio');
}

sayMyNome()

// Callback Function
//Função de chama uma função de volta
function sayMiNombre(name){
    console.log('Antes de executar a callback');
    
    name();

    console.log('Depois de executar a callback');
}
sayMiNombre(
    () => {
        console.log('Estou em uma callback')
    }
)   



