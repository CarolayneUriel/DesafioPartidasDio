function calcularRank(vitorias, derrotas){
    let saldoRankeadas = vitorias - derrotas
    let nivel

    if (saldoRankeadas <= 10) {
        nivel = "Ferro"
    } else if (saldoRankeadas <= 20) {
        nivel = "Bronze"
    } else if (saldoRankeadas <= 50) {
        nivel = "Prata"
    } else if (saldoRankeadas <= 80) {
        nivel = "Ouro"
    } else if (saldoRankeadas <= 90) {
        nivel = "Diamante"
    } else if (saldoRankeadas <= 100) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }
    return `O Herói tem de saldo de ${saldoRankeadas} e está no nível de ${nivel}`
}

let resultado = calcularRank(110, 5)
console.log(resultado)