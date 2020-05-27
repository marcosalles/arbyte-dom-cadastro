
class Usuario {
	constructor(nome, email, ativo) {
		this.nome = nome;
		this.email = email;
		this.ativo = ativo;
	}
}

var criaUsuario = () => {
	var inputNome = document.getElementById('nome');
	var nome = inputNome.value;

	var inputEmail = document.getElementById('email');
	var email = inputEmail.value;

	var inputAtivo = document.getElementById('ativo');
	var ativo = 'Não';
	if (inputAtivo.checked == true) {
		ativo = 'Sim';
	}

	var usuario = new Usuario(nome, email, ativo);
	return usuario;
}

function cadastrar() {
	console.log('Cadastro iniciado...');
	var usuario = criaUsuario();
	console.log(usuario);
	var corpoDaTabela = document.querySelector('table tbody');
	var linha = document.createElement('tr');
	var tdNome = document.createElement('td');
	tdNome.innerHTML = usuario.nome;
	var tdEmail = document.createElement('td');
	tdEmail.innerHTML = usuario.email;
	var tdAtivo = document.createElement('td');
	tdAtivo.innerHTML = usuario.ativo;

	linha.append(tdNome);
	linha.append(tdEmail);
	linha.append(tdAtivo);

	corpoDaTabela.append(linha);
}
