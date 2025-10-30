function gerarAleatorio(min, max){ 
    return Math.floor(Math.random() * (max - min) + min)
}

function gerarArray(qnt, min, max){
    let arr = []
    for(let i = 0; i < qnt; i++){
        arr.push(gerarAleatorio(min, max))
    }

    return arr
}

function somaArray(arr){
    let soma = 0
    for(let i = 0; i < arr.length; i++){
        soma += arr[i]
    }
    return soma
}

function principal(){
    let arr = gerarArray(10, 1, 220)
    console.log(`Array gerada: ${arr}`)
    console.log(`Soma dos elementos da array: ${somaArray(arr)}`)
}

principal()