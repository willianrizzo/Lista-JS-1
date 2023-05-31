let nota = parseFloat(prompt("Insira uma nota entre zero e dez: "));

while (nota < 0 || nota > 10) {
    nota = parseFloat(
        prompt("Nota inválida. Insira uma nota entre zero e dez: ")
    );
}

alert("Nota válida!");