alert(
  "Digite um número inicial e um número final para ver os números entre eles e a soma deles."
);

let soma = 0;
let numeroInicial = Number(prompt("Digite um número inicial:"));
const numeroFinal = Number(prompt("Digite um número final:"));

for (let i = numeroInicial; i <= numeroFinal; i++) {
  alert(i);
  soma += i;
}

alert(`A soma dos números entre ${numeroInicial} e ${numeroFinal} é ${soma}.`);
