let base = Number(prompt("Digite a base:"));
let expoente = Number(prompt("Digite o expoente:"));

let resultado = base;

for (let i = 1; i < expoente; i++) {
  resultado *= base;
}

alert(`${base} elevado a ${expoente} é ${resultado}.`);
