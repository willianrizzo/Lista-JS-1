const gabarito = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "E",
  7: "D",
  8: "C",
  9: "B",
  10: "A",
};

let notas = [];
let continuar = true;

while (continuar) {
  let respostasAluno = {};

  for (let i = 1; i <= 10; i++) {
    const resposta = prompt(`Digite a resposta da questão ${i}:`).toUpperCase();
    respostasAluno[i] = resposta;
  }

  let nota = 0;

  for (let i = 1; i <= 10; i++) {
    if (respostasAluno[i] === gabarito[i]) {
      nota++;
    }
  }

  notas.push(nota);

  continuar = confirm("Outro aluno vai utilizar o sistema?");
}

let maiorAcerto = Math.max(...notas);
let menorAcerto = Math.min(...notas);
let totalAlunos = notas.length;
let somaNotas = notas.reduce((total, nota) => total + nota, 0);
let mediaNotas = somaNotas / totalAlunos;

alert("Resultados da Turma");
alert(`Maior Acerto: ${maiorAcerto}`);
alert(`Menor Acerto: ${menorAcerto}`);
alert(`Total de Alunos: ${totalAlunos}`);
alert(`Média das Notas da Turma: ${mediaNotas.toFixed(2)}`);
alert("Gabarito da Prova:");
alert(JSON.stringify(gabarito));
