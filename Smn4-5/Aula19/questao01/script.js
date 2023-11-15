function enviarCadastro() {
    
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    var divDadosUsuario = document.createElement('div');

    divDadosUsuario.innerHTML = `<p>Nome: ${nome}</p><p>Email: ${email}</p><p>Senha: ${senha}</p>`;

    document.body.appendChild(divDadosUsuario);

    document.getElementById('cadastroForm').reset();
}
