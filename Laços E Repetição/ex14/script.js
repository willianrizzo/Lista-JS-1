let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
  let numero = Number(prompt("Digite um número:"));
  if (numero % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

alert(`Você digitou ${pares} números pares e ${impares} números ímpares.`);