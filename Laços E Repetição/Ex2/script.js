let nome = prompt("Digite seu nome: ");
let senha = prompt("Digite sua senha: ");

while (nome === senha) {
    alert("A senha não pode ser igual ao nome!");
    nome = prompt("Digite seu nome: ");
    senha = prompt("Digite sua senha: ");
}