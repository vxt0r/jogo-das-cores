let cores = []
let corPergunta

let score = 0

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
    $('.pergunta').html(corPergunta)
}

setaCorPergunta()

const mostraPlacar = ()=>{
    if(score === 10){
        alert('Parabéns você conseguiu acertar 10')
        score = 0;
    }
    
    $('.placar').html(`<h2>Placar: ${score}</h2>`)
}
const geraOpcoesTela = ()=>{
    cores.forEach((cor)=>{
        const divCor = $('<div>').addClass('cor-opcao').css('background-color',cor)
        $('.opcoes').append(divCor)
    })
}

mostraPlacar()
geraOpcoesTela()

const reiniciaJogo = ()=>{
    cores = []
    $('.opcoes').html("")
    setaCorPergunta()
    geraOpcoesTela()
}

const removerMensagem = (elemento,mensagem)=>{
    setTimeout(()=>{ 
        mensagem.remove()
        elemento.style.border = "none"
    },2000)
}

const criaMensagem = (elemento,texto,cor)=>{
    const msg = $('<p>').text(texto)
    $('.pergunta').append(msg)
    elemento.style.border = `7px solid ${cor}`
    removerMensagem(elemento,msg)
}

const verificaResposta = (corElemento,elemento)=>{
    if(corElemento === corPergunta){
        criaMensagem(elemento,"CORRETO","green")
        score++
        mostraPlacar()
    }

    else criaMensagem(elemento,"ERRADO","red")

    setTimeout(()=>{reiniciaJogo()},2500)   
}

$('.opcoes').click((e)=>{
    const elemento = e.target
    const corElemento = elemento.style.backgroundColor
    verificaResposta(corElemento,elemento)
})
