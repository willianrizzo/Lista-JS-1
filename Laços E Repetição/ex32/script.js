let temperatura;
let menorTemperatura = Number.POSITIVE_INFINITY;
let maiorTemperatura = Number.NEGATIVE_INFINITY;
let somaTemperaturas = 0;
let quantidadeTemperaturas = 0;

do {
  temperatura = parseFloat(prompt("Digite uma temperatura (ou digite 0 para sair):"));
  
  if (temperatura !== 0) {
    if (temperatura < menorTemperatura) {
      menorTemperatura = temperatura;
    }
    
    if (temperatura > maiorTemperatura) {
      maiorTemperatura = temperatura;
    }
    
    somaTemperaturas += temperatura;
    quantidadeTemperaturas++;
  }
} while (temperatura !== 0);

let mediaTemperaturas = somaTemperaturas / quantidadeTemperaturas;

alert("Menor temperatura: " + menorTemperatura.toFixed(2));
alert("Maior temperatura: " + maiorTemperatura.toFixed(2));
alert("Média das temperaturas: " + mediaTemperaturas.toFixed(2));
