const frases = [
      "O sucesso é a soma de pequenos esforços repetidos diariamente.",
      "Você é mais forte do que pensa. Continue!",
      "Acredite nos seus sonhos e vá atrás deles.",
      "Não pare até se orgulhar de quem você se tornou.",
      "Sua única limitação é aquela que você aceita.",
      "Toda jornada começa com um primeiro passo.",
      "Desafios são oportunidades disfarçadas.",
      "Você nasceu para brilhar. Não se esconda.",
      "Nunca subestime o poder da persistência.",
      "Hoje é um bom dia para vencer!"
    ];

    const fraseContainer = document.getElementById("frase");
    const listaFavoritas = document.getElementById("listaFavoritas");

    function gerarFrase() {
      const index = Math.floor(Math.random() * frases.length);
      fraseContainer.textContent = frases[index];
      fraseContainer.style.opacity = 0;
      setTimeout(() => {
        fraseContainer.style.opacity = 1;
      }, 100);
    }

    function salvarFrase() {
      const frase = fraseContainer.textContent;
      let favoritas = JSON.parse(localStorage.getItem("favoritas")) || [];

      if (!favoritas.includes(frase)) {
        favoritas.push(frase);
        localStorage.setItem("favoritas", JSON.stringify(favoritas));
        atualizarFavoritas();
      }
    }

    function atualizarFavoritas() {
      let favoritas = JSON.parse(localStorage.getItem("favoritas")) || [];
      listaFavoritas.innerHTML = "";
      favoritas.forEach((f) => {
        const li = document.createElement("li");
        li.textContent = f;
        listaFavoritas.appendChild(li);
      });
    }

    function compartilharFrase() {
      const frase = encodeURIComponent(fraseContainer.textContent);
      const url = `https://wa.me/?text=${frase}`;
      window.open(url, "_blank");
    }

    function alternarTema() {
      document.body.classList.toggle("light");
    }

    // Carrega frases favoritas ao abrir a página
    atualizarFavoritas();