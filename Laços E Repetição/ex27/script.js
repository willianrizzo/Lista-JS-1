const numTurmas = parseInt(prompt("Digite a quantidade de turmas:"));
let totalAlunos = 0;

for (let i = 1; i <= numTurmas; i++) {
  let numAlunos = parseInt(
    prompt(`Digite a quantidade de alunos na turma ${i}:`)
  );

  while (numAlunos > 40) {
    alert("Número de alunos inválido. O limite máximo por turma é 40.");
    numAlunos = parseInt(
      prompt(`Digite a quantidade de alunos na turma ${i}:`)
    );
  }

  totalAlunos += numAlunos;
}

const mediaAlunos = totalAlunos / numTurmas;
alert(`A média de alunos por turma é: ${mediaAlunos}`);
