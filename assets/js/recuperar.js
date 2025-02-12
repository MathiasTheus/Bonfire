document
  .getElementById("recoverForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;

    document.getElementById("message").textContent =
      "Um e-mail foi enviado para " +
      email +
      " com instruções para recuperar sua senha.";
  });
