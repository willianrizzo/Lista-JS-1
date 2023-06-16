const numero = parseInt(prompt("Digite um número inteiro:"));

if (numero < 2) {
  alert("Não é um número primo.");
} else {
  let primo = true;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      primo = false;
      break;
    }
  }

  if (primo) {
    alert("É um número primo.");
  } else {
    alert("Não é um número primo.");
  }
}
