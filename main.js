const forms = document.getElementById('forms');
const menssagemDeSucessoP = document.querySelector('.msg');
const input1 = document.getElementById('numeroA');
const input2 = document.getElementById('numeroB');


forms.addEventListener('submit', function(e){
  e.preventDefault();
  
  const numeroA = document.getElementById('numeroA');
  const numeroB = document.getElementById('numeroB');

  const menssagemSucesso = `Formulário validado com sucesso !`;
  const menssagemErro = `Formulário invalido !!`;

  if(numeroA.value < numeroB.value){

    menssagemDeSucessoP.innerHTML = menssagemSucesso;
    menssagemDeSucessoP.style.display = 'block'; 
    menssagemDeSucessoP.style.background = '#acff2f9f';
  
    numeroA.value = '';
    numeroB.value = '';

  } else {
    menssagemDeSucessoP.innerHTML = menssagemErro;
    menssagemDeSucessoP.style.display = 'block';
    menssagemDeSucessoP.style.background = '#ff2f2f9f';

    numeroA.value = '';
    numeroB.value = '';
  }
});

input1.addEventListener('click', function() {
  menssagemDeSucessoP.style.display = 'none';
})

input2.addEventListener('click', function() {
  menssagemDeSucessoP.style.display = 'none';
})