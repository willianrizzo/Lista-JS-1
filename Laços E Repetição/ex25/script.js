const n = parseInt(prompt("Digite a quantidade de pessoas:"));
let somaIdades = 0;

for (let i = 1; i <= n; i++) {
  const idade = parseInt(prompt(`Digite a idade da pessoa ${i}:`));
  somaIdades += idade;
}

const mediaIdades = somaIdades / n;
let classificacao = "";

if (mediaIdades >= 0 && mediaIdades <= 25) {
  classificacao = "jovem";
} else if (mediaIdades >= 26 && mediaIdades <= 60) {
  classificacao = "adulta";
} else {
  classificacao = "idosa";
}

alert(
  `A média de idade da turma é ${mediaIdades} anos. A turma é classificada como ${classificacao}.`
);
