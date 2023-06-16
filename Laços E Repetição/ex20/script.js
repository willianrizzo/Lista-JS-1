let continuar = true;

while (continuar) {
  let numero = parseInt(prompt("Digite um número inteiro positivo e menor que 16 para calcular o fatorial:"));

  while (numero < 0 || numero >= 16 || isNaN(numero)) {
    alert("Número inválido. Digite novamente.");
    numero = parseInt(prompt("Digite um número inteiro positivo e menor que 16 para calcular o fatorial:"));
  }

  let fatorial = 1;

  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }

  alert(`O fatorial de ${numero} é ${fatorial}`);

  let resposta = prompt("Deseja calcular o fatorial de outro número? (S/N)").toUpperCase();

  while (resposta !== "S" && resposta !== "N") {
    resposta = prompt("Resposta inválida. Digite S para sim ou N para não.").toUpperCase();
  }

  if (resposta === "N") {
    continuar = false;
  }
}
