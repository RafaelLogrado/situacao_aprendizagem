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

function bubbleCrescente(arr){
    let arrCres = arr
    for(let i = 0; i < arrCres.length - 1; i++){
        for(let j = 0; j < arrCres.length - 1; j++){
            let valor = arrCres[j]
            if(arrCres[j+1] < valor){
                arrCres[j] = arrCres[j+1]
                arrCres[j+1] = valor
            }
        }
    }
    return arrCres
}

function principal(){
    let arr = gerarArray(10, 1, 20)
    console.log(`Array gerada: ${arr}`)
    console.log(`Array ordenada: ${bubbleCrescente(arr)}`)
}

principal()