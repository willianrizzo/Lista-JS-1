const numero = parseInt(prompt("Digite um número inteiro:"));

if (numero < 2) {
  alert("Não é um número primo.");
} else {
  let primo = true;
  let divisores = [];

  for (let i = 2; i <= Math.sqrt(numero) && primo; i++) {
    if (numero % i === 0) {
      primo = false;
      divisores.push(i);
      
      if (i !== numero / i) {
        divisores.push(numero / i);
      }
    }
  }

  if (primo) {
    alert("É um número primo.");
  } else {
    alert(`Não é um número primo. É divisível por: ${divisores.join(", ")}`);
  }
}
