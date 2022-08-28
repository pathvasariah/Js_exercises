/*
    Constructor Function

    * Expressão new
    * Criar um novo obejeto
    * This keyword
*/

function Person(name) {
    this.name = name;
    this.walk = function() {
        // return "andando"
        return this.name + " está andando"
    }
}
//Instanciar um novo objeto
const patrick = new Person("Patrick");
const joao = new Person("Joao");

console.log(patrick);
console.log(joao);
console.log(patrick.walk())
console.log(joao.walk())