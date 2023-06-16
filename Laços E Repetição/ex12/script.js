const numero = Number(prompt('Digite um número para ver sua tabuada:'));

alert(`A tabuada de ${numero} é:`);

for (let i = 1; i <= 10; i++) {
  alert(`${numero} X ${i} = ${numero * i}`);
}