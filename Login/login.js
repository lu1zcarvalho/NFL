// Valida se o login está vazio
function validaLogin() {
  const login = document.getElementById("login").value;
  if (login === "") {
    alert(mensagensErro.login);
    return false;
  }
  return true;
}

// Valida se a senha está vazia
function validaSenha() {
  const senha = document.getElementById("senha").value;
  if (senha === "") {
    alert(mensagensErro.senha);
    return false;
  }
  return true;
}

// Valida o formulário
function validaFormulario() {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;

  if(login === "admin" && senha === "123"){
    alert('Sucesso!');
    location.href = "../Home/home.html";
  }else{
    alert('Usuário ou senha incorretos')
  }
}