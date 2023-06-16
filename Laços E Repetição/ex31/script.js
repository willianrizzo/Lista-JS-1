alert("Lojas Tabajara");

let total = 0;
let produtoNum = 1;
let valorProduto = parseFloat(prompt("Digite o valor do Produto " + produtoNum + ":"));

while (valorProduto !== 0) {
  total += valorProduto;
  produtoNum++;
  valorProduto = parseFloat(prompt("Digite o valor do Produto " + produtoNum + ":"));
}

alert("Total: R$ " + total.toFixed(2));

let valorPago = parseFloat(prompt("Digite o valor em dinheiro fornecido pelo cliente:"));
let troco = valorPago - total;

alert("Troco: R$ " + troco.toFixed(2));