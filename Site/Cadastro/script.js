var razaoSocial = "";
var email = "";
var senha = "";
var cnpj = "";
var cep = "";
var telefoneFixo = "";

function alterarCampos() {

    // Armazenando os valores das inputs
    razaoSocial = ipt_razaoSocial.value; 
    email = ipt_email.value; 
    senha = ipt_senha.value; 
    
    // Alterando as informações da Razão Social

        // Selecionando o elemento HTML com o id title_razaoSocial
        var titleCnpj = document.getElementById("title_razaoSocial");
        // Alterando o conteúdo HTML do elemento
        titleCnpj.innerHTML = "CNPJ";
        // Selecionando o elemento HTML com o id ipt_razaoSocial
        var inputCnpj = document.getElementById("ipt_razaoSocial");
        // Alterando o id do elemento INPUT
        inputCnpj.id = "ipt_cnpj";
        // Alterando o type do elemento INPUT
        inputCnpj.type = "text";
        // Limpando os valores do elemento INPUT
        inputCnpj.value = "";
        // Alterando a placeholder do elemento INPUT
        inputCnpj.placeholder = "00.000.000/0001-00"; 
    
    // Alterando as informações do Email

        // Selecionando o elemento HTML com o id title_email
        var titleCep = document.getElementById("title_email");
        // Alterando o conteúdo HTML do elemento
        titleCep.innerHTML = "CEP da Empresa";
        // Selecionando o elemento HTML com o id ipt_email
        var inputCep = document.getElementById("ipt_email");
        // Alterando o id da input
        inputCep.id = "ipt_cep"; 
        // Alterando o type da input
        inputCep.type = "text"
        // Limpando os valores do elemento INPUT
        inputCep.value = "";
        // Alterando a placeholder
        inputCep.placeholder = "00000-000"; 
                
    // Alterando as informações da Senha

        // Selecionando o elemento HTML com o id title_senha
        var titleTelFixo = document.getElementById("title_senha");
        // Alterando o conteúdo HTML do elemento
        titleTelFixo.innerHTML = "Telefone Fixo";
        // Selecionando o elemento HTML com o id title_senha
        var inputTelFixo = document.getElementById("ipt_senha");
        // Alterando o id da input do elemento INPUT
        inputTelFixo.id = "ipt_telFixo"; 
        // Alterando o type da input do elemento INPUT
        inputTelFixo.type = "text"
        // Limpando os valores do elemento INPUT
        inputTelFixo.value = "";
        // Alterando a placeholder do elemento INPUT
        inputTelFixo.placeholder = "11 0000-0000"; 

    // Alterando as informações do botão Continuar

        // Selecionando o elemento HTML com o id title_senha
        var buttonCadastrar = document.getElementById("btn_continuar");
        // Alterando o id do elemento HTML
        buttonCadastrar.id = "btn_cadastrar"
        // Alterando o conteúdo HTML do elemento
        buttonCadastrar.textContent = "Cadastrar"; 
        // Limpando onclick do elemento HTML
        buttonCadastrar.onclick = function cadastrarEmpresa(){
            cnpj = ipt_cnpj.value;
            cep = ipt_cep.value;
            telefoneFixo = ipt_telFixo.value;
        if ( razaoSocial == "AquaTech" &&  email == "angelo.gustavo@aquatech.com" && senha == "#At01231000" && cnpj == "30004023000333" && cep == "01835099" && telefoneFixo == "11950042579"){
            window.location.href = "../Login/index.HTML";
        }else if (razaoSocial == "DataCooling" && email == "dadinho.junior@datacooling.com" && senha == "#Dc001231000" && cnpj == "30004023000111" && cep == "01234567" && telefoneFixo == "11940028922") {
            window.location.href = "../Login/index.HTML"
        }else if (razaoSocial == "NoraxTech" && email == "alessandra.matias@noraxtech.com" && senha == "#Nt01231000" && cnpj == "30004023000222" && cep == "02534678" && telefoneFixo == "11920042298"){
            window.location.href = "../Login/index.HTML"
        }else {
            alert("Dados inválidos! Verifique os dados inseridos.")
        }
            

            
        };
}

function exibirCadastroParte2() {
     razaoSocial = ipt_razaoSocial.value;
     email = ipt_email.value;
     senha = ipt_senha.value;

    alterarCampos();
}





