function alterarCampos() {
    // Alterando as informações da Razão Social

        // Alterando o id do título da razão social
        title_razaoSocial.id = "title_cnpj";
        // Alterando o texto do título
        title_cnpj.innerHTML = "CNPJ";
        // Alterando o id da input
        ipt_razaoSocial.id = "ipt_cnpj"; 
        // Alterando o type da input
        ipt_cnpj.type = "text"
        // Alterando a placeholder
        ipt_cnpj.placeholder = "00.000.000/0001-00"; 
    
    ////////////////////////////////////////////////////////////////

        // Alterando as informações do Email
    
            // Alterando o id do título do Email
            title_email.id = "title_cep";
            // Alterando o texto do título
            title_cep.innerHTML = "CEP da Empresa";
            // Alterando o id da input
            ipt_email.id = "ipt_cep"; 
            // Alterando o type da input
            ipt_cep.type = "text"
            // Alterando a placeholder
            ipt_cep.placeholder = "00000-000"; 
        
    ////////////////////////////////////////////////////////////////
        
        // Alterando as informações da Senha
    
            // Alterando o id do título da Senha
            title_senha.id = "title_telFixo";
            // Alterando o texto do título
            title_telFixo.innerHTML = "Telefone Fixo";
            // Alterando o id da input
            ipt_senha.id = "ipt_telFixo"; 
            // Alterando o type da input
            ipt_telFixo.type = "text"
            // Alterando a placeholder
            ipt_telFixo.placeholder = "11 0000-0000"; 

    ////////////////////////////////////////////////////////////////

        // Alterando as informações do botão Continuar

            // Alterando o id do botão
            btn_continuar.id = "btn_cadastrar";
            // Alterando o conteúdo html do botão
            btn_cadastrar.innerText = "Cadastrar";
            // Alterando a função do onclick
            btn_cadastrar.onclick = "cadastrarEmpresa()";


}

function exibirCadastroParte2() {
    var razaoSocial = ipt_razaoSocial.value;
    var email = ipt_email.value;
    var senha = ipt_senha.value;

    alterarCampos();

}

