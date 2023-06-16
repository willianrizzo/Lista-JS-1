let precoDoPao = parseFloat(prompt("Digite o preço do pão:"));

alert("Panificadora Pão de Ontem - Tabela de preços");

for (let i = 1; i <= 50; i++) {
  alert(`${i} - R$ ${(i * precoDoPao).toFixed(2)}`);
}
