let saltos = [];

while (true) {
  const nome = prompt("Digite o nome do atleta:");

  if (nome === "") {
    break;
  }

  const primeiroSalto = parseFloat(prompt("Primeiro Salto (em metros):"));
  const segundoSalto = parseFloat(prompt("Segundo Salto (em metros):"));
  const terceiroSalto = parseFloat(prompt("Terceiro Salto (em metros):"));
  const quartoSalto = parseFloat(prompt("Quarto Salto (em metros):"));
  const quintoSalto = parseFloat(prompt("Quinto Salto (em metros):"));

  const listaSaltos = [
    primeiroSalto,
    segundoSalto,
    terceiroSalto,
    quartoSalto,
    quintoSalto,
  ];

  const melhorSalto = Math.max(...listaSaltos);
  const piorSalto = Math.min(...listaSaltos);

  listaSaltos.splice(listaSaltos.indexOf(melhorSalto), 1);
  listaSaltos.splice(listaSaltos.indexOf(piorSalto), 1);

  const mediaSaltos =
    listaSaltos.reduce((total, salto) => total + salto, 0) / listaSaltos.length;

  alert(`Atleta: ${nome}`);
  alert(`Primeiro Salto: ${primeiroSalto.toFixed(1)} m`);
  alert(`Segundo Salto: ${segundoSalto.toFixed(1)} m`);
  alert(`Terceiro Salto: ${terceiroSalto.toFixed(1)} m`);
  alert(`Quarto Salto: ${quartoSalto.toFixed(1)} m`);
  alert(`Quinto Salto: ${quintoSalto.toFixed(1)} m`);

  alert(`Melhor salto: ${melhorSalto.toFixed(1)} m`);
  alert(`Pior salto: ${piorSalto.toFixed(1)} m`);
  alert(`Média dos demais saltos: ${mediaSaltos.toFixed(1)} m`);

  saltos.push({
    nome,
    mediaSaltos,
  });
}

alert("Resultado final:");

for (const salto of saltos) {
  alert(`${salto.nome}: ${salto.mediaSaltos.toFixed(1)} m`);
}
