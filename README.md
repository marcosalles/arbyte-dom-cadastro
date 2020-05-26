# Atividade extra!

Vamos fazer uma atividade de manipulação do DOM?
			
Deixei esse código preparado pra que vocês possam utilizar na atividade. Ao clicar no botão **Cadastrar**, a função `cadastar` que existe no arquivo `script.js` será executada. Para completar a atividade, siga os passos:


1. Preencha a função `criaUsuario` com um código que crie uma instância de `Usuario` com dados escritos à mão (sem pedir para o usuário preencher nada).
2. Altere a função `cadastrar` para que ela crie um usuário (utilizando a função `criaUsuario`) e imprima os dados do usuário no console.
3. Altere a função `criaUsuario` para que o usuário criado utilize os dados lidos do formulário.
4. Altere a função `cadastrar` para que ela insira os dados do usuário lido do formulário na tabela de usuários cadastrados.

Lembrando de alguns métodos úteis de manipulação do DOM:

```javascript
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
