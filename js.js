const frases = [
      "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      "Acredite em você e todo o resto virá naturalmente.",
      "Não pare até se orgulhar.",
      "A única maneira de fazer um excelente trabalho é amar o que você faz.",
      "O segredo do sucesso é começar antes de estar pronto.",
      "Não espere por oportunidades, crie-as.",
      "Grandes conquistas começam com pequenos passos.",
      "Seja a mudança que você quer ver no mundo.",
      "A persistência é o caminho do êxito.",
      "Seu futuro depende do que você faz hoje."
    ];

    const fraseContainer = document.getElementById('frase');
    const btn = document.getElementById('gerarBtn');

    btn.addEventListener('click', () => {
      // Gera um índice aleatório
      const indice = Math.floor(Math.random() * frases.length);
      // Atualiza a frase no container
      fraseContainer.textContent = frases[indice];
      // Animação simples: fade-in
      fraseContainer.style.opacity = 0;
      setTimeout(() => {
        fraseContainer.style.opacity = 1;
      }, 100);
    });