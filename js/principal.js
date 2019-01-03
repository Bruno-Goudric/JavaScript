
// Alterado o Titulo da tag h1 com uma classe
var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

// Calculando o IMC

//querySelectorAll - pega o valor de todos os pacientes

var pacientes = document.querySelectorAll(".paciente");

//Defini o calculo do IMC para todos os pacientes

for(var i = 0; i < pacientes.length; i++){

	var paciente = pacientes[i];
	var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

//validação para executar calculo do imc

var pesoEhValido = true; // assumindo de boa fé que o peso é válido
var alturaEhValida = true; // assumindo de boa fé que a altura é válida

//classList.add propriedade para adicionar classes do Css

if(peso <= 0 || peso >= 1000){
	console.log("Peso Invalido!");
	pesoEhValido = false;
	tdPeso.textContent = "Peso Inválido!";
	paciente.classList.add("paciente-invalido");
}

if(altura <= 0 || altura >= 3.00){
	console.log("Altura Invalida!");
	alturaEhValida = false
	tdAltura.textContent = "Altura Inválida!";
	paciente.classList.add("paciente-invalido");
}

//toFixed utilizado para definir a quantidade de numeros após a virgula
 
if(pesoEhValido && alturaEhValida){
	var imc = peso / (altura * altura); 
	tdImc.textContent = imc.toFixed(2);
} else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
}

}






