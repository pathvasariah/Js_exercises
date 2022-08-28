function convertNotes(note) {
    if (note >= 90 && note <= 100) {
        return "A";
    } else if (note >= 80 && note < 90) {
        return "B";
    } else if (note >= 70 && note < 80) {
        return "C";
    } else if (note >= 60 && note < 70) {
        return "D";
    } else if (note >= 0 && note < 60) {
        return "F";
    } else {
        return "Insira um valor válido!!";
    }
}

//Insira o valor da nota na função
//console.log(convertNotes());

let family = {
    incomes: [2000, 3000],
    expenses: [4000, 1001]
}

function sum(array) {
    let total = 0;

    for (let value of array) {
        total += value;
    }
    return total;
}

function finances(incomes, expenses) {
    if (incomes > expenses) {
        return `Família está com saldo positivo de: R$ ${incomes - expenses}`
    } else if (expenses > incomes) {
        return `Família está com saldo negativo de: R$ ${incomes - expenses}`
    } else {
        return "Família está com saldo de: R$ 0"
    }
}

function financesBetter() {
    const calculateIncomes = sum(family.incomes);
    const calculateExpenses = sum(family.expenses);

    const total = calculateIncomes - calculateExpenses;
    const itsOK = total >= 0;

    let balancedText = "negativo"

    if (itsOK) {
        balancedText = "positivo"
    }
    console.log(`Seu saldo é ${balancedText}: R$ ${total.toFixed(2)}`);
}

// financesBetter();
// console.log(finances(sum(family.incomes), sum(family.expenses)));

function transformDegree(degree) {
    //toUpperCase() converte tudo para maiúsculas e includes() checa se algo está contido na string
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    //Fluxo de Erro
    if (!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não indentificado')
        //return "Insira um dado válido"
    }

    //Fluxo Ideal F -> C
    //replace("Substituído","O que vai ser posto no lugar")
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
    let degreeSign = 'C';

    //Fluxo Alternativo
    if (celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""))
        formula = (celsius) => celsius * 9 / 5 + 32;
        degreeSign = 'F';
    }

    return console.log(formula(updatedDegree) + degreeSign)
}

try {
    //Digite o valor que quer converter e após o número, qual o grau que deseja converter. Ex: 100C
    //transformDegree('50C')
} catch (error) {
    //console.log(error.message)
}

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker"
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason"
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter"
            }
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: "Os sete hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            },
        ],
    }
]

//Pega a quantidade de categorias
const totalCategories = booksByCategory.length
//console.log(totalCategories);

//Pega uma categoria
for (let category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.category);
    console.log(category.books.length);
}

function countAuthors() {
    //Criando o array de autores vazio
    let authors = [];

    //Pegando uma categoria
    for(let category of booksByCategory){
        //Pegando um livro de uma categoria
        for(let book of category.books){
            
            //Inserindo o Autor caso ele não esteja no array
            //indexOf() retorna o primeiro índice em que o elemento pode ser encontrado e -1 caso não esteja presente
            if(authors.indexOf(book.author) == -1){
                //Inserção do autor
                authors.push(book.author)
            }
        }
    }

    //Vendo como ficou o tamanho do array
    console.log('Total de autores: ',authors.length);
}
//countAuthors();

function booksOfAuthor(author){
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`);
}
booksOfAuthor('George S. Clason');