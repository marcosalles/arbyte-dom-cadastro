
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

	if (usuario.nome == '' || usuario.email == '') {
		alert('Por favor digite um nome de usuário e um email');
		return;
	}
	
	var corpoDaTabela = document.querySelector('table tbody');
	
	var linha = document.createElement('tr');

	var tdNome = document.createElement('td');
	tdNome.innerHTML = usuario.nome;
	var tdEmail = document.createElement('td');
	tdEmail.innerHTML = usuario.email;
	var tdAtivo = document.createElement('td');
	tdAtivo.innerHTML = usuario.ativo;
	var tdRemover = document.createElement('td');

	var indiceDoNovoUsuario = corpoDaTabela.children.length;
	tdRemover.innerHTML = `<button type="button" class="btn btn-danger" onclick="removeUsuario(${indiceDoNovoUsuario})">X</button>`;

	linha.append(tdNome);
	linha.append(tdEmail);
	linha.append(tdAtivo);
	linha.append(tdRemover);

	// usuario.ativo => Sim / Não
	if (usuario.ativo == 'Sim') {
		linha.setAttribute('class', 'text-success');
	} else {
		linha.setAttribute('class', 'text-danger');
	}

	corpoDaTabela.append(linha);
	resetaFormulario();
}

function resetaFormulario() {
	// document.getElementById('nome').value = '';
	// document.getElementById('email').value = '';
	// document.getElementById('ativo').checked = false;
	document.querySelector('form').reset();
}

function removeUsuario(indice) {
	console.log('Removendo usuario...', indice);
	var corpoDaTabela = document.querySelector('table tbody');
	corpoDaTabela.children[indice].remove();
}