const form = document.getElementById('form-cadastro');

const campos = [
  {
    input: document.getElementById('nome'),
    erro: document.getElementById('erro-nome'),
    validar: (valor) => valor.trim().length >= 3,
    mensagem: 'O nome deve ter 3 letras ou mais.'
  },
  {
    input: document.getElementById('email'),
    erro: document.getElementById('erro-email'),
    validar: (valor) => valor.includes('@'),
    mensagem: 'O e-mail deve conter @.'
  },
  {
    input: document.getElementById('senha'),
    erro: document.getElementById('erro-senha'),
    validar: (valor) => valor.length >= 8,
    mensagem: 'A senha deve ter 8 caracteres ou mais.'
  },
  {
    input: document.getElementById('confirmacao'),
    erro: document.getElementById('erro-confirmacao'),
    validar: (valor) => valor === document.getElementById('senha').value && valor !== '',
    mensagem: 'A confirmação deve ser igual à senha.'
  }
];

// Passo 4: Apagar o erro enquanto a pessoa corrige (evento input)
campos.forEach(({ input, erro }) => {
  input.addEventListener('input', () => {
    erro.textContent = '';
    input.classList.remove('invalido');
  });
});

// Passo 2 e 3: Validar no submit e mostrar erros
form.addEventListener('submit', (evento) => {
  evento.preventDefault(); // Impede o envio padrão para validar antes
  let formularioValido = true;

  campos.forEach(({ input, erro, validar, mensagem }) => {
    if (!validar(input.value)) {
      erro.textContent = mensagem;
      input.classList.add('invalido');
      formularioValido = false;
    } else {
      erro.textContent = '';
      input.classList.remove('invalido');
    }
  });

  if (formularioValido) {
    alert('Cadastro realizado com sucesso!');
    form.reset();
  }
});