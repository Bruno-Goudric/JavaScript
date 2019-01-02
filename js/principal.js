
// Alterado o Titulo da tag h1 com uma classe
var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

// Calculando o IMC

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

//validação para executar calculo do imc

var pesoEhValido = true; // assumindo de boa fé que o peso é válido
var alturaEhValida = true; // assumindo de boa fé que a altura é válida


if(peso <= 0 || peso >= 1000){
	console.log("Peso Invalido!");
	pesoEhValido = false;
	tdPeso.textContent = "Peso Inválido!";
}

if(altura <= 0 || altura >= 3.00){
	console.log("Altura Invalida!");
	alturaEhValida = false
	tdAltura.textContent = "Altura Inválida!";
}

if(pesoEhValido && alturaEhValida){
	var imc = peso / (altura * altura); 
	tdImc.textContent = imc;
} else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
}




