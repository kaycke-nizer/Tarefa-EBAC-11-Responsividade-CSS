var lista_produtos = document.getElementById('lista_produtos');
var botao_postar = document.getElementById('botao_postar');



document.querySelector('button#botao_postar').addEventListener('click', function(e) {
    e.preventDefault;

    const capa_jogo = document.getElementById('imagem_produto').value;
    const nome_produto = document.getElementById('nome_produto').value;
    const valor_produto = document.getElementById('valor_produto').value;

    document.querySelector('section#lista_produtos').innerHTML += `
    <div class="produto">
        <img class="imagem_jogo" src="${capa_jogo}" alt="Placeholder">
        <h4>${nome_produto}</h4>
        <p>R$${valor_produto}</p>
        <button class="adicionar_ao_carrinho">Adicionar ao carrinho</button>
    </div>
    `;
})