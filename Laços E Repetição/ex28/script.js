const numCDs = parseInt(prompt("Digite a quantidade de CDs:"));
let totalInvestido = 0;

for (let i = 1; i <= numCDs; i++) {
  const valorCD = parseFloat(prompt(`Digite o valor do CD ${i}:`));

  totalInvestido += valorCD;
}

const mediaValorCD = totalInvestido / numCDs;
alert(
  `O valor total investido na coleção de CDs é: R$${totalInvestido.toFixed(2)}`
);
alert(`O valor médio gasto em cada CD é: R$${mediaValorCD.toFixed(2)}`);
