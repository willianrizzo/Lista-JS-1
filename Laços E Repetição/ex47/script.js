const N = parseInt(prompt("Digite o número de termos da série:"));
let h = 0;

for (let i = 1; i <= N; i++) {
  h += 1 / i;
}

alert(`Valor de H: ${h.toFixed(2)}`);
