# Atividade extra!

Vamos fazer uma atividade de manipulação do DOM?
			
Deixei esse código preparado pra que vocês possam utilizar na atividade. Ao clicar no botão **Cadastrar**, a função `cadastar` que existe no arquivo `script.js` será executada. Para completar a atividade, siga os passos:


1. Preencha a função `pegaUsuario` com um código que leia os dados de um usuário do formulário e crie uma instância de `Usuario`. Altere a função `cadastrar` para que ela imprima os dados do usuário no console.
2. Altere a função `cadastrar` para que ela insira os dados na tabela de usuários cadastrados.

Lembrando de alguns métodos úteis de manipulação do DOM:

```
// Pegar um elemento do DOM:
document.querySelector('tag');
document.querySelector('#id');
document.querySelector('.classe');
// Também pode ser document.querySelectorAll, que retorna uma lista de elementos

// Criar um elemento
document.createElement('tag');

// Mexer com atributos de um elemento:
elemento.getAttribute('atributo');
elemento.setAttribute('atributo', 'valor');

// Adicionar elementos ao fim de um elemento:
elemento.append(elementoASerAdicionado);

// Substituir o conteúdo dentro de um elemento:
elemento.innerHTML = '<p>Novo conteúdo</p>';
```