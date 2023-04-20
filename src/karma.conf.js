var botao = document.getElementById('meuBotao');
botao.addEventListener('click', function () {
  botao.style.backgroundColor = 'green';
  botao.style.cursor = 'default';
  botao.innerHTML = 'Ativado';
  botao.disabled = true;
});
