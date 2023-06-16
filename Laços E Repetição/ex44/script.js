while (true) {
  const nome = prompt("Digite o nome do ginasta:");

  if (nome === "") {
    break;
  }

  const notas = [];

  for (let i = 1; i <= 7; i++) {
    const nota = prompt(`Nota ${i}:`);

    if (!isNaN(nota) && nota >= 0 && nota <= 10) {
      notas.push(parseFloat(nota));
    } else {
      alert("Nota inválida!");
    }
  }

  const melhorNota = Math.max(...notas);
  const piorNota = Math.min(...notas);

  notas.splice(notas.indexOf(melhorNota), 1);
  notas.splice(notas.indexOf(piorNota), 1);

  const mediaNotas =
    notas.reduce((total, nota) => total + nota, 0) / notas.length;

  alert(`Atleta: ${nome}`);
  alert(`Melhor nota: ${melhorNota.toFixed(1)}`);
  alert(`Pior nota: ${piorNota.toFixed(1)}`);
  alert(`Média das demais notas: ${mediaNotas.toFixed(1)}`);

  const confirmacao = confirm("Deseja cadastrar um novo ginasta?");
  if (!confirmacao) {
    break;
  }
}
