const tabelaParcelas = [
  { quantidade: 1, juros: 0 },
  { quantidade: 3, juros: 10 },
  { quantidade: 6, juros: 15 },
  { quantidade: 9, juros: 20 },
  { quantidade: 12, juros: 25 },
];

let tabela =
  "Valor da Dívida  | Valor dos Juros | Quantidade de Parcelas | Valor da Parcela\n";

const valorDivida = 1000;
let valorTotalDivida = valorDivida;

for (const parcela of tabelaParcelas) {
  const valorJuros = (valorDivida * parcela.juros) / 100;
  const valorParcela = (valorDivida + valorJuros) / parcela.quantidade;

  tabela += formatarValor(valorTotalDivida) + " | ";
  tabela += formatarValor(valorJuros) + " | ";
  tabela += parcela.quantidade + " | ";
  tabela += formatarValor(valorParcela) + "\n";

  valorTotalDivida += valorJuros;
}

alert(tabela);

function formatarValor(valor) {
  return "R$ " + valor.toFixed(2).replace(".", ",");
}
