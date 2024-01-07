

document.querySelector('button#botao_postar').addEventListener('click', function(e) {
    e.preventDefault;

    const novo_elemento = document.createElement('div');
    novo_elemento.classList.add('produto');

    const capa_jogo = document.getElementById('imagem_produto').value;
    const nome_jogo = document.getElementById('nome_produto').value;
    const valor_jogo = parseFloat(document.getElementById('valor_produto').value);

    novo_elemento.innerHTML = `
        <img class="imagem_jogo" src="${capa_jogo}">
        <h4>${nome_jogo}</h4>
        <p>R$${valor_jogo}</p>
        <button class="adicionar_ao_carrinho">Adicionar ao carrinho</button>`;


    document.getElementById('lista_produtos').insertBefore(novo_elemento, document.getElementById('criador_anuncios'));

    document.getElementById('imagem_produto').value = '';
    document.getElementById('nome_produto').value = '';
    document.getElementById('valor_produto').value = '';


})