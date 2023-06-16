const cardapio = {
  100: { nome: "Cachorro Quente", preco: 1.2 },
  101: { nome: "Bauru Simples", preco: 1.3 },
  102: { nome: "Bauru com ovo", preco: 1.5 },
  103: { nome: "Hambúrguer", preco: 1.2 },
  104: { nome: "Cheeseburguer", preco: 1.3 },
  105: { nome: "Refrigerante", preco: 1.0 },
};

let totalPedido = 0;

while (true) {
  const codigo = parseInt(
    prompt("Digite o código do item (ou 0 para encerrar):")
  );

  if (codigo === 0) {
    break;
  }

  const quantidade = parseInt(prompt("Digite a quantidade desejada:"));

  if (cardapio.hasOwnProperty(codigo)) {
    const item = cardapio[codigo];
    const valorItem = item.preco * quantidade;

    alert(`Item: ${item.nome}`);
    alert(`Quantidade: ${quantidade}`);
    alert(`Valor a pagar: R$ ${valorItem.toFixed(2)}`);
    alert("------------------------");

    totalPedido += valorItem;
  } else {
    alert("Código inválido. Tente novamente.");
  }
}

alert(`Total do pedido: R$ ${totalPedido.toFixed(2)}`);
