const numero = parseInt(prompt("Digite um número inteiro positivo:"));
const numeroInvertido = parseInt(
  numero.toString().split("").reverse().join("")
);

alert(`Número invertido: ${numeroInvertido}`);
