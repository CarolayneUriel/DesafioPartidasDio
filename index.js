function calcularRank(vitorias, derrotas){
    let saldoRanqueadas = vitorias - derrotas
    let nivel

    if(saldoRanquedas <= 10) {
        nivel = "Ferro"
    } else if(saldoRanqueadas <= 20) {
        nivel = "Bronze"
    } else if(saldoRanqueadas <= 50) {
        nivel = "Prata"
    } else if(saldoRanqueadas <= 80) {
        nivel = "Ouro"
    } else if(saldoRanqueadas <= 90) {
        nivel = "Diamante"
    } else if(saldoRanqueadas <= 100) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }
    return `O Herói tem de saldo de $ {saldoRanqueadas} e está no nível de ${nivel}`
}

let resultado = calcularRank(110, 5)
console.log(resultado)