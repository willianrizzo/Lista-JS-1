let codigoMaisAlto = "";
let alturaMaisAlto = 0.0;
let codigoMaisBaixo = "";
let alturaMaisBaixo = Infinity;
let codigoMaisGordo = "";
let pesoMaisGordo = 0.0;
let codigoMaisMagro = "";
let pesoMaisMagro = Infinity;
let somaAlturas = 0.0;
let somaPesos = 0.0;
let quantidadeClientes = 0;

while (true) {
  let codigo = prompt("Digite o código do cliente (ou 0 para sair):");
  if (codigo == "0") {
    break;
  }

  let altura = parseFloat(prompt("Digite a altura do cliente em metros:"));
  let peso = parseFloat(prompt("Digite o peso do cliente em kg:"));

  somaAlturas += altura;
  somaPesos += peso;
  quantidadeClientes++;

  if (altura > alturaMaisAlto) {
    alturaMaisAlto = altura;
    codigoMaisAlto = codigo;
  }

  if (altura < alturaMaisBaixo) {
    alturaMaisBaixo = altura;
    codigoMaisBaixo = codigo;
  }

  if (peso > pesoMaisGordo) {
    pesoMaisGordo = peso;
    codigoMaisGordo = codigo;
  }

  if (peso < pesoMaisMagro) {
    pesoMaisMagro = peso;
    codigoMaisMagro = codigo;
  }
}

let mediaAlturas = somaAlturas / quantidadeClientes;
let mediaPesos = somaPesos / quantidadeClientes;

alert(
  `Cliente mais alto: ${codigoMaisAlto} (${alturaMaisAlto.toFixed(
    2
  )}m)\nCliente mais baixo: ${codigoMaisBaixo} (${alturaMaisBaixo.toFixed(
    2
  )}m)\nCliente mais gordo: ${codigoMaisGordo} (${pesoMaisGordo.toFixed(
    2
  )}kg)\nCliente mais magro: ${codigoMaisMagro} (${pesoMaisMagro.toFixed(
    2
  )}kg)\nMédia das alturas: ${mediaAlturas.toFixed(
    2
  )}m\nMédia dos pesos: ${mediaPesos.toFixed(2)}kg`
);
