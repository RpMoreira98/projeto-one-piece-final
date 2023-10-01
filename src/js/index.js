const botoes = document.querySelectorAll('.botao')
const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        desselecionarBotao();
        desselecionarPersonagem()

        botao.classList.add('selecion');
        personagens[index].classList.add('selecionado');
    });
})
function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector('.selecion');
    botaoSelecionado.classList.remove('selecion');
}

