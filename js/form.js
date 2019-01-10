//adiciona um novo paciente a tabela
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    console.log(erros);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    //cria um objeto tabela
    var tabela = document.querySelector("#tabela-pacientes");
    //adiciona o elemento tr a tabela
    tabela.appendChild(pacienteTr);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}


function obtemPacienteDoFormulario(form){
        //criando um objeto paciente
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){
    //cria o elemento tr
    var pacienteTr = document.createElement("tr");
    //adicionando Class
    pacienteTr.classList.add("paciente");


        //cria os elementos td
    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");

    //adiciona o valor pego no form as tds
    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;
    //atribui as td a elemento pai tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;

}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    
    var erros = [];

    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }

    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if(paciente.peso.length == 0){
        erros.push("O peso não pode estar em branco");
    }

    if(paciente.altura.length == 0){
        erros.push("A altura não pode estar em branco");
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    return erros;
}

