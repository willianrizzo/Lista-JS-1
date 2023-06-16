const salarioInicial = parseFloat(
  prompt("Digite o salário inicial do funcionário:")
);

const anoContratacao = 1995;
const anoAtual = new Date().getFullYear();

let salarioAtual = salarioInicial;
let percentualAumento = 1.5;

for (let i = anoContratacao; i <= anoAtual; i++) {
  salarioAtual += salarioAtual * (percentualAumento / 100);
  percentualAumento *= 2;
}

alert(`O salário atual do funcionário é de R$ ${salarioAtual.toFixed(2)}`);