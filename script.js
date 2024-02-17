const perguntas = [
    { 
        pergunta: "Qual é a linguagem de programação que é nativa nos navegadores?",
        respostas: [
            "Java",
            "JavaScript",
            "Python",
        ],
        correta: 1
    },
    { 
        pergunta: "Como você declara uma variável em JavaScript?",
        respostas: [
            "let myVar = 5;",
            "variable x = 5;",
            "var = 5;",
        ],
        correta: 0
    },
    { 
        pergunta: "Qual é a função do comando 'console.log'?",
        respostas: [
            "Registrar mensagens de erro no console",
            "Exibir mensagens de alerta na tela",
            "Imprimir mensagens no console",
        ],
        correta: 2
    },
    { 
        pergunta: "O que é um array em JavaScript?",
        respostas: [
            "Uma função",
            "Uma estrutura de controle",
            "Uma estrutura de dados para armazenar elementos",
        ],
        correta: 2
    },
    { 
        pergunta: "O que o método 'addEventListener' faz em JavaScript?",
        respostas: [
            "Remove um evento do elemento",
            "Adiciona um evento a um elemento",
            "Cria um novo elemento no DOM",
        ],
        correta: 1
    },
    { 
        pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
        respostas: [
            "Nenhuma, ambos são operadores de igualdade",
            "Um compara apenas o valor, o outro compara valor e tipo",
            "Um é usado para adição, o outro para subtração",
        ],
        correta: 1
    },
    { 
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Uma linguagem de programação",
            "Um modelo de objeto para representar documentos HTML/XML",
            "Uma estrutura de controle de fluxo",
        ],
        correta: 1
    },
    { 
        pergunta: "O que é 'hoisting' em JavaScript?",
        respostas: [
            "Uma técnica para elevar a velocidade de execução do código",
            "O ato de mover declarações para o topo do escopo antes da execução",
            "Uma forma de declarar variáveis com maior visibilidade",
        ],
        correta: 1
    },
    { 
        pergunta: "O que é 'NaN' em JavaScript?",
        respostas: [
            "Um novo tipo de dado",
            "Um valor que representa 'Nada'",
            "Um valor especial que significa 'Not a Number'",
        ],
        correta: 2
    },
    { 
        pergunta: "Qual é a função do método 'parseInt'?",
        respostas: [
            "Converter um número para inteiro",
            "Arredondar um número para a casa decimal mais próxima",
            "Retornar a parte fracionária de um número",
        ],
        correta: 0
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


for(const item of perguntas) { // para cada item de perguntas, vou entrar no código do for
    const quizItem = template.content.cloneNode(true) // cada tag do html pode ser chamada de nó
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true) // dentro de um dl, vai procurar um dt. Dt é filho de um dl
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }




        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem) // coloca a pergunta na tela
} // essas chaves representam o escopo
