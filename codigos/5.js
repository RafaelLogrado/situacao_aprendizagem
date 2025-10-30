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

function bubbleDecrescente(arr){
    let arrDec = arr
    for(let i = 0; i < arrDec.length - 1; i++){
        for(let j = 0; j < arrDec.length - 1; j++){
            let valor = arrDec[j]
            if(arrDec[j+1] > valor){
                arrDec[j] = arrDec[j+1]
                arrDec[j+1] = valor
            }
        }
    }
    return arrDec
}

let arr = [5, 17, 3, 9, 10, 12, 20, 2, 4, 16, 7, 14, 8, 1, 11, 19, 18, 6, 13, 15]

function principal(array){
    console.log(`Array original: ${array}`)
    console.log(`Array em ordem crescente: ${bubbleCrescente(array)}`)
    console.log(`Array em ordem decrescente: ${bubbleDecrescente(array)}`)
}

principal(arr)