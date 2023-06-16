const totalEleitores = parseInt(prompt("Digite o número total de eleitores:"));
let votosCandidato1 = 0;
let votosCandidato2 = 0;
let votosCandidato3 = 0;

let i;

for (i = 1; i <= totalEleitores; i++) {
  const voto = parseInt(
    prompt(`Eleitor ${i}, digite o número do candidato (1, 2 ou 3):`)
  );

  switch (voto) {
    case 1:
      votosCandidato1++;
      break;
    case 2:
      votosCandidato2++;
      break;
    case 3:
      votosCandidato3++;
      break;
    default:
      alert("Voto inválido. Tente novamente.");
      i--;
      break;
  }
}

alert(
  `Resultado da eleição:\n\nCandidato 1: ${votosCandidato1} voto(s)\nCandidato 2: ${votosCandidato2} voto(s)\nCandidato 3: ${votosCandidato3} voto(s)`
);
