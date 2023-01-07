const pergunta = document.querySelector('.pergunta')
let opcoes = document.querySelector('.opcoes')

let cores = []
let corPergunta

const geraValor = ()=>{
    let valor = Math.floor(Math.random() * 256)
    return valor
}

const geraCorAleatoria = ()=>{
    const r = geraValor()
    const g = geraValor()
    const b = geraValor()
    const cor = `rgb(${r}, ${g}, ${b})`
    cores.push(cor)
}

const criaArrayOpcoes = ()=>{
    const numeroOpcoes = 4
    for(let i=0; i < numeroOpcoes; i++){
        geraCorAleatoria()
    }
}

const setaCorPergunta = ()=>{
    criaArrayOpcoes()
    posicaoCor = Math.floor(Math.random() * 4)
    corPergunta = cores[posicaoCor]
    pergunta.innerHTML = corPergunta
}

setaCorPergunta()

const geraOpcoesTela = ()=>{
    cores.forEach((cor)=>{
        let divCor = document.createElement('div')
        divCor.classList.add('cor-opcao')
        divCor.style.backgroundColor = cor
        opcoes.appendChild(divCor)
    })
}

geraOpcoesTela()

const reiniciaJogo = ()=>{
    cores = []
    opcoes.innerHTML = ""
    setaCorPergunta()
    geraOpcoesTela()
}

const removerMensagem = (elemento,mensagem)=>{
    setTimeout(()=>{
        pergunta.removeChild(mensagem)
        elemento.style.border = "none"
    },2000)
}

const criaMensagem = (elemento,texto,cor)=>{
    const msg = document.createElement('p')
    msg.innerText = texto
    pergunta.appendChild(msg)
    elemento.style.border = `7px solid ${cor}`
    removerMensagem(elemento,msg)
}

const verificaResposta = (corElemento,elemento)=>{
    const msg = document.createElement('p')
   
    if(corElemento === corPergunta){
        criaMensagem(elemento,"CORRETO","green")
        
        setTimeout(()=>{
            reiniciaJogo()
        },2500)   
    }
    else{
        criaMensagem(elemento,"ERRADO","red")
    }
}

opcoes.addEventListener('click',(e)=>{
    const elemento = e.target
    const corElemento = elemento.style.backgroundColor
    verificaResposta(corElemento,elemento)
    
})
