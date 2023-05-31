let nome = prompt("Digite seu nome: ");
let idade = parseInt(prompt("Digite sua idade: "));
let salario = parseFloat(prompt("Digite seu salário: "));
let sexo = prompt("Digite seu sexo: ");
let estadoCivil = prompt("Digite seu estado civil: ");

while (nome.length < 3) {
    alert("Nome deve conter mais de 3 caracteres!");
    nome = prompt("Digite seu nome: ");
}

while (idade < 0 || idade > 150) {
    alert("Idade deve ser entre 0 e 150!");
    idade = parseInt(prompt("Digite sua idade: "));
}

while (salario < 0) {
    alert("Salário deve ser maior que 0!");
    salario = parseFloat(prompt("Digite seu salário: "));
}

while (sexo !== "f" && sexo !== "m") {
    alert("Sexo deve ser 'f' ou 'm'!");
    sexo = prompt("Digite seu sexo: ");
}

while (
    estadoCivil !== "s" &&
    estadoCivil !== "c" &&
    estadoCivil !== "v" &&
    estadoCivil !== "d"
) {
    alert("Estado civil deve ser 's', 'c', 'v' ou 'd'!");
    estadoCivil = prompt("Digite seu estado civil: ");
}

alert("Cadastro realizado com sucesso!");