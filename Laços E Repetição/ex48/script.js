let n = parseInt(prompt("Digite o valor de n:"));
let soma = 0;

let m = 1;
for (let i = 1; i <= n; i++) {
  soma += i / m;
  m += 2;
}

alert("Termos da série:");
let termos = "";
for (let i = 1; i <= n; i++) {
  termos += `${i}/${2 * i - 1}`;
  if (i < n) {
    termos += " + ";
  }
}
alert(termos);

alert("Soma da série: " + soma.toFixed(2));
