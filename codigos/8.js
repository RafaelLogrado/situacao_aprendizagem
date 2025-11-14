function gerarAleatorio(min, max){ 
    return Math.floor(Math.random() * (max - min) + min)
}

function principal(){
    let arr = gerarArray(10, 1, 220)
    console.log(`Array gerada: ${arr}`)
    console.log(`Soma dos elementos da array: ${somaArray(arr)}`)
}

principal()