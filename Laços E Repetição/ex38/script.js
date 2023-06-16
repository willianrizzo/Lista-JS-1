const cidades = [
  { codigo: 1, veiculos: 1500, acidentes: 20 },
  { codigo: 2, veiculos: 2200, acidentes: 15 },
  { codigo: 3, veiculos: 1800, acidentes: 10 },
  { codigo: 4, veiculos: 1900, acidentes: 25 },
  { codigo: 5, veiculos: 2100, acidentes: 18 },
];

let maiorIndice = 0;
let menorIndice = Number.MAX_VALUE;
let cidadeMaiorIndice;
let cidadeMenorIndice;

for (const cidade of cidades) {
  const indice = cidade.acidentes / cidade.veiculos;

  if (indice > maiorIndice) {
    maiorIndice = indice;
    cidadeMaiorIndice = cidade.codigo;
  }

  if (indice < menorIndice) {
    menorIndice = indice;
    cidadeMenorIndice = cidade.codigo;
  }
}

alert(
  "Maior índice de acidentes: " +
    maiorIndice +
    " (Cidade " +
    cidadeMaiorIndice +
    ")"
);
alert(
  "Menor índice de acidentes: " +
    menorIndice +
    " (Cidade " +
    cidadeMenorIndice +
    ")"
);

let somaVeiculos = 0;

for (const cidade of cidades) {
  somaVeiculos += cidade.veiculos;
}

const mediaVeiculos = somaVeiculos / cidades.length;
alert("Média de veículos nas cinco cidades: " + mediaVeiculos);

let somaAcidentesMenor2000 = 0;
let contadorMenor2000 = 0;

for (const cidade of cidades) {
  if (cidade.veiculos < 2000) {
    somaAcidentesMenor2000 += cidade.acidentes;
    contadorMenor2000++;
  }
}

const mediaAcidentesMenor2000 = somaAcidentesMenor2000 / contadorMenor2000;
alert(
  "Média de acidentes de trânsito nas cidades com menos de 2.000 veículos: " +
    mediaAcidentesMenor2000
);
