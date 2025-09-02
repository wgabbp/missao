import {aleatorio, nome} from './aleatorio.js';
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");   telaInicial.style.display = 'none';
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const perguntas = [
    {
        enunciado: "No mundo atual, muitas mulheres estão optando por fazer curso de manicure, devido a alta procura pelo serviço, e o valor recebido.Para um banho de gel o valor varia de R$65 a 90, Já para um alongamento R$150 a 200.Você usa unhas postiças?",
        alternativas: [
            {
                texto: "sim!!",
                afirmacao: [
                    "que maravilha! ",
                    ""
                ]
            },
            {
                texto: "não, mas pretendo",
                afirmacao: [
                     "Não vai se arrepender!.",
                     ""
                ]
            }
        ]
]
            },
            {
                texto: "não, e não tenho interesse",
                afirmacao: [
                     "ah, sim, que bom.",
                     ""

    },
    {
        enunciado: "Prefere estileto ou quadrada?",
        alternativas: [
            {
                texto: "Estileto"
                afirmacao:[ 
                    "esse modelo é maravilhoso",
                    ""
                ]
            },
            {
                texto: "Quadrada",
                afirmacao:[
                     "É a minha preferida!.",
                     ""
                ]
            }
        ]
    },
    {
        enunciado: "Você prefere a unha decorada ou simples?",
        alternativas: [
            {
                texto: "Decorada",
                afirmacao:[
                     "É muito linda!",
                     ""
                ]
            },
            {
                texto: "Simples",
                afirmacao: [
                    "O básico sempre funciona",
                    ""
                ]
            }
        ]
    },
    {
        enunciado: "Unha no Azul ou Vermelho?",
        alternativas: [
            {
                texto: "Azul"
                afirmacao:[
                    "É muito elegante",
                    ""
                ]
            },
            {
                texto: "Vermelho",
                afirmacao:[
                    " Bonita e Chamativa!",
                    ""
                ]
            }
        ]
    },
    {
        enunciado: "Faria um alongamento ou um banho de gel ",
        alternativas: [
            {
                texto: "Alongamento",
                afirmacao: [
                    "Uma forma de ajudar a manter a unhas bonitas para quem não consegue.",
                    ""
                ]
            },
            {
                texto: "Banho de gel",
                afirmacao:[
                     "Uma forma de ajudar a sua unha a crescer saudável e naturalmente. ",
                     ""
                ]
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
        const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
     if (opcaoSelecionada.proxima != undefined) {
   } else {
        mostraResultado();
        return;
    }
    mostraPergunta();
}

function mostraResultado() {
   caixaPerguntas.textContent = `Em 2049, ${nome}`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
     caixaResultado.classList.add("mostrar");
     botaoJogarNovamente.addEventListener("click", jogaNovamente());
}
function aleatorio(lista) {
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];

}
mostraPergunta();
function aleatorio(lista) {
        const posicao = Math.random()* lista.length;
          return lista[posicao];
          substituiNome();

}
function jogaNovamente(){
        atual = 0;
        historiaFinal = "";
        caixaResultado.classList.remove("mostrar");
        mostraPergunta();
}
function substituiNome(){
    for(const pergunta of perguntas){
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}
   function iniciaJogo() {
        atual = 0;
        historiaFinal = "";
        telaInicial.style.display = 'none';
        caixaPerguntas.classList.remove("mostrar");
        caixaAlternativas.classList.remove("mostrar");
        caixaResultado.classList.remove("mostrar");
        mostraPergunta();
}