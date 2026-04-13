function alternarTema() {
      const body = document.body;
      const btn = document.getElementById('btn-tema');

      body.classList.toggle('dark-mode');

      if (body.classList.contains('dark-mode')) {
        btn.textContent = '☀️ Modo Claro';
      } else {
        btn.textContent = '🌙 Modo Escuro';
      }
    }