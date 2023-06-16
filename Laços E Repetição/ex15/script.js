let n = parseInt(
  prompt("Digite o número de termos da série de Fibonacci que deseja gerar:")
);

let series = [1, 1];

for (let i = 2; i < n; i++) {
  series[i] = series[i - 1] + series[i - 2];
}

alert(`A série de Fibonacci com ${n} termos é: ${series}`);
