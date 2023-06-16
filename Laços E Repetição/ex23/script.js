const n = parseInt(prompt("Digite um número inteiro:"));
let divisoes = 0;
let primos = [];

for (let i = 2; i <= n; i++) {
  let primo = true;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    divisoes++;
    if (i % j === 0) {
      primo = false;
      break;
    }
  }

  if (primo) {
    primos.push(i);
  }
}

alert(`Números primos encontrados: ${primos.join(", ")}`);
alert(`Número de divisões executadas: ${divisoes}`);
