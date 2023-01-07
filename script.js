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
    geraCorAleatoria()
    geraCorAleatoria()
    geraCorAleatoria()
    geraCorAleatoria()
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

const verificaResposta = (corElemento,elemento)=>{
    let msg = document.createElement('p')
   
    if(corElemento === corPergunta){
        msg.innerText = "CORRETO"
        pergunta.appendChild(msg)
        elemento.style.border = " 7px solid green"

        setTimeout(()=>{
            reiniciaJogo()
        },3000)
        
    }
    else{
        msg.innerText = "ERRADO"
        pergunta.appendChild(msg)
        elemento.style.border = " 7px solid red"
    }
    setTimeout(()=>{
        pergunta.removeChild(msg)
        elemento.style.border = "none"
    },2000)
}

opcoes.addEventListener('click',(e)=>{
    const elemento = e.target
    const corElemento = elemento.style.backgroundColor
    verificaResposta(corElemento,elemento)
    
})
