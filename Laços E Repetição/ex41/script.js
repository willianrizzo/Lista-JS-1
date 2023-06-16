const candidatos = {
  1: "José",
  2: "João",
  3: "Maria",
  4: "Ana",
};

let totalVotosCandidatos = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
};

let totalVotosNulos = 0;
let totalVotosBrancos = 0;
let totalVotos = 0;

while (true) {
  const voto = parseInt(
    prompt("Digite o código do candidato (ou 0 para encerrar):")
  );

  if (voto === 0) {
    break;
  }

  if (voto >= 1 && voto <= 4) {
    totalVotosCandidatos[voto]++;
  } else if (voto === 5) {
    totalVotosNulos++;
  } else if (voto === 6) {
    totalVotosBrancos++;
  } else {
    alert("Código inválido. Tente novamente.");
  }

  totalVotos++;
}

alert("Resultado da Eleição");
alert("--------------------");
alert("Total de votos para cada candidato:");

for (const candidato in totalVotosCandidatos) {
  const nomeCandidato = candidatos[candidato];
  const votosCandidato = totalVotosCandidatos[candidato];
  const percentualVotosCandidato = (votosCandidato / totalVotos) * 100;

  alert(
    `${nomeCandidato}: ${votosCandidato} votos (${percentualVotosCandidato.toFixed(
      2
    )}%)`
  );
}

alert(`Total de votos nulos: ${totalVotosNulos}`);
alert(`Total de votos em branco: ${totalVotosBrancos}`);

const percentualVotosNulos = (totalVotosNulos / totalVotos) * 100;
const percentualVotosBrancos = (totalVotosBrancos / totalVotos) * 100;

alert(
  `Percentual de votos nulos sobre o total de votos: ${percentualVotosNulos.toFixed(
    2
  )}%`
);
alert(
  `Percentual de votos em branco sobre o total de votos: ${percentualVotosBrancos.toFixed(
    2
  )}%`
);
