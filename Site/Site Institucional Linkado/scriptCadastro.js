var nome = "";
var sobrenome = "";
var email = "";
var senha = "";
var nomeEmpresa = "";
var token = "";
// var telefoneFixo = "";

// function alterarCampos() {

//     // Armazenando os valores das inputs
//     razaoSocial = ipt_razaoSocial.value;
//     email = ipt_email.value;
//     senha = ipt_senha.value;

//     // Alterando as informações da Razão Social

//     // Selecionando o elemento HTML com o id title_razaoSocial
//     var titleCnpj = document.getElementById("title_razaoSocial");
//     // Alterando o conteúdo HTML do elemento
//     titleCnpj.innerHTML = "CNPJ";
//     // Selecionando o elemento HTML com o id ipt_razaoSocial
//     var inputCnpj = document.getElementById("ipt_razaoSocial");
//     // Alterando o id do elemento INPUT
//     inputCnpj.id = "ipt_cnpj";
//     // Alterando o type do elemento INPUT
//     inputCnpj.type = "text";
//     // Limpando os valores do elemento INPUT
//     inputCnpj.value = "";
//     // Alterando a placeholder do elemento INPUT
//     inputCnpj.placeholder = "00.000.000/0001-00";

//     // Alterando as informações do Email

//     // Selecionando o elemento HTML com o id title_email
//     var titleCep = document.getElementById("title_email");
//     // Alterando o conteúdo HTML do elemento
//     titleCep.innerHTML = "CEP da Empresa";
//     // Selecionando o elemento HTML com o id ipt_email
//     var inputCep = document.getElementById("ipt_email");
//     // Alterando o id da input
//     inputCep.id = "ipt_cep";
//     // Alterando o type da input
//     inputCep.type = "text"
//     // Limpando os valores do elemento INPUT
//     inputCep.value = "";
//     // Alterando a placeholder
//     inputCep.placeholder = "00000-000";

//     // Alterando as informações da Senha

//     // Selecionando o elemento HTML com o id title_senha
//     var titleTelFixo = document.getElementById("title_senha");
//     // Alterando o conteúdo HTML do elemento
//     titleTelFixo.innerHTML = "Telefone Fixo";
//     // Selecionando o elemento HTML com o id title_senha
//     var inputTelFixo = document.getElementById("ipt_senha");
//     // Alterando o id da input do elemento INPUT
//     inputTelFixo.id = "ipt_telFixo";
//     // Alterando o type da input do elemento INPUT
//     inputTelFixo.type = "text"
//     // Limpando os valores do elemento INPUT
//     inputTelFixo.value = "";
//     // Alterando a placeholder do elemento INPUT
//     inputTelFixo.placeholder = "11 0000-0000";

//     // Alterando as informações do botão Continuar

//     // Selecionando o elemento HTML com o id title_senha
//     var buttonCadastrar = document.getElementById("btn_continuar");
//     // Alterando o id do elemento HTML
//     buttonCadastrar.id = "btn_cadastrar"
//     // Alterando o conteúdo HTML do elemento
//     buttonCadastrar.textContent = "Cadastrar";
//     // Limpando onclick do elemento HTML
//     buttonCadastrar.onclick = function cadastrarEmpresa() {
//         cnpj = ipt_cnpj.value;
//         cep = ipt_cep.value;
//         telefoneFixo = ipt_telFixo.value;
//         if (cnpj == "" || cep == "" || telefoneFixo == "") {
//             alert("Por favor, preencher todos os campos!");
//         } else if (cnpj != "42328097000110" || cep != "03778-292" || telefoneFixo != "1138202990") {
//             alert("Dados inseridos inválidos. Por favor verificar os dados inseridos!")
//         } else {
//             alert ("Cadastro concluído com sucesso!")
//             window.location.href = "./login.html"
//         }



//     };
// }

function cadastrarEmpresa() {
    nome = ipt_nome.value;
    sobrenome = ipt_sobrenome.value;
    email = ipt_email.value;
    senha = ipt_senha.value;
    if (nome == "" || sobrenome == "" || email == "" || senha == "") {
        alert("Por favor, preencher todos os campos!");
    } else  if (nome != "a" || sobrenome != "a" || email != "a" || senha != "a"){
        alert("Dados inseridos inválidos. Por favor verificar os dados inseridos!")
    }else {
        alert ("Dados inseridos com sucesso!")
            window.location.href = "./cadastro_2.html";
    }

};
function cadastrarEmpresa2(){
    
    nomeEmpresa = ipt_nome_empresa.value;
    token = ipt_token.value;
    if (nomeEmpresa == "" || token == "" ) {
        alert("Por favor, preencher todos os campos!");
    } else if (nomeEmpresa != "a" || token != "a" ) {
        alert("Dados inseridos inválidos. Por favor verificar os dados inseridos!")
    } else {
        alert ("Cadastro concluído com sucesso!")
        window.location.href = "./login.html"
    }
}
// Criando um botão para ver a senha
function mostrarOcultarSenha(){
    var mostrar_senha = document.getElementById("ipt_senha")
    if(mostrar_senha.type == "password"){
        mostrar_senha.type="text";
    }else{
        mostrar_senha.type="password";
    }

}

// function exibirCadastroParte2() {
//     razaoSocial = ipt_razaoSocial.value;
//     email = ipt_email.value;
//     senha = ipt_senha.value;
//     if (razaoSocial == "" || email == "" || senha == "") {
//         alert("Por favor, preencher todos os campos!");
//     } else  if (razaoSocial != "Bambam Datacenter" || email != "admin@bambam.datacenter" || senha != "#Kb0123"){
//         alert("Dados inseridos inválidos. Por favor verificar os dados inseridos!")
//     }else {
//         alterarCampos();
//     }

// }





