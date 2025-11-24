function tempCparaF(temperatura){
    let tempF = (temperatura * 9 / 5) + 32
    return tempF
}

function tempFparaC(temperatura){
    let tempC = (temperatura - 32) * 5/9
    return tempC
}

function principal(){
    let temperaturaF = 110
    let temperaturaC = 20

    console.log(`${temperaturaC} graus celsius em fahrenheit: ${tempCparaF(temperaturaC)}`)
    console.log(`${temperaturaF} graus fahrenheit em celsius: ${tempFparaC(temperaturaF)}`)
}

principal()