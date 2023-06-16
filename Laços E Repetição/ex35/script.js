const numero = parseInt(prompt("Digite um número: "));
const numeroInicial = parseInt(prompt("Digite o número inicial: "));
const numeroFinal = parseInt(prompt("Digite o número final: "));

if (numeroFinal < numero) {
  alert("O valor final deve ser maior ou igual ao valor inicial.");
} else {
  alert(
    `Vou montar a tabuada de ${numero} começando em ${numeroInicial} e terminando em ${numeroFinal}:`
  );

  for (let i = numeroInicial; i <= numeroFinal; i++) {
    alert(`${numero} x ${i} = ${numero * i}`)
  }
}
