const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você usa unhas postiças?",
        alternativas: [
            {
                texto: "sim!",
                afirmacao: "que maravilha! "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Prefere estileto ou quadrada?",
        alternativas: [
            {
                texto: "Estileto"
                afirmacao: "esse modelo é maravilhoso"
            },
            {
                texto: "Quadrada",
                afirmacao: "É a minha preferida!."
            }
        ]
    },
    {
        enunciado: "Você prefere a unha decorada ou simples?",
        alternativas: [
            {
                texto: "Decorada",
                afirmacao: "É muito linda!"
            },
            {
                texto: "Simples",
                afirmacao: "O básico sempre funciona"
            }
        ]
    },
    {
        enunciado: "Unha no Azul ou Vermelho?",
        alternativas: [
            {
                texto: "Azul"
                afirmacao:"É muito elegante",
            },
            {
                texto: "Vermelho",
                afirmacao:" Bonita e Chamativa!"
            }
        ]
    },
    {
        enunciado: "Faria um alongamento ou um banho de gel ",
        alternativas: [
            {
                texto: "Alongamento",
                afirmacao: "Uma forma de ajudar a manter a unhas bonitas para quem não consegue."
            },
            {
                texto: "Banho de gel",
                afirmacao: "Uma forma de ajudar a sua unha a crescer saudável e naturalmente. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
