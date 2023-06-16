const n = parseInt(prompt("Digite o número de termos da série:"));
let serie = "";

let numerador = 1;
let denominador = 1;

for (let i = 1; i <= n; i++) {
  serie += numerador + "/" + denominador;

  if (i !== n) {
    serie += " + ";
  }

  numerador++;
  denominador += 2;
}

alert(`Série: ${serie}`);
