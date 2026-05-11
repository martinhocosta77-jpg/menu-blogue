(function() {
  document.addEventListener("DOMContentLoaded", function() {
    // 1. Atualizar o nome/link da home na esquerda de forma centralizada
    const homeLink = document.querySelector('.nome-home');
    if (homeLink) {
      homeLink.innerHTML = "Martinho Costa";
      homeLink.href = "https://martinho-costa.blogspot.com/";
    }

    // 2. Controlar o Rodapé ou outros elementos comuns
    // Podes injetar novos elementos aqui se quiseres
  });
})();
