document.getElementById("btnLogin").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  // Simulação de um banco de dados de usuários
  const usuarios = [
    { email: "usuario1@example.com", senha: "senha123" },
    { email: "usuario2@example.com", senha: "senha456" },
  ];

  // Verifica se o email e a senha correspondem a algum usuário
  const usuario = usuarios.find((u) => u.email === email && u.senha === senha);

  if (usuario) {
    alert("Login bem-sucedido!");
    // Redirecionar para a página principal ou dashboard
    //window.location.href = 'home';
  } else {
    alert("Email ou senha incorretos.");
  }
});