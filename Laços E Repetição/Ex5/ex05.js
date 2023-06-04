let populacaoA = parseInt(prompt("Digite a quantidade da população do país A"));
let populacaoB = parseInt(prompt("Digite a quantidade da população do país B"));
const taxaCrescimentoA = parseFloat(prompt("Digite a taxa de crescimento da população do país A"));
const taxaCrescimentoB = parseFloat(prompt("Digite a taxa de crescimento da população do país B"));
let anos = 0;

if ( isNaN(populacaoA) || isNaN(populacaoB) || isNaN(taxaCrescimentoA) || isNaN(taxaCrescimentoB) ) {
    alert("Dados incorretos, use apenas números.")
} else {
    while (populacaoA < populacaoB) {
        populacaoA += populacaoA * taxaCrescimentoA;
        populacaoB += populacaoB * taxaCrescimentoB;
        anos++;
      }
      alert(`Serão necessários ${anos} anos para a população do país A ultrapassar ou igualar a população do país B.`);
}
