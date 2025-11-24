function gerarAleatorio(min, max){ 
    return Math.floor(Math.random() * (max - min) + min)
}

function principal(){
    let mat = []
    for(let i = 0; i < 3; i++){
        mat[i] = []
        for(let j = 0; j < 3; j++){
            mat[i][j] = gerarAleatorio(1, 20)
        }
    }

    console.log(`Matriz gerada:`)
    console.table(mat)
}

principal()