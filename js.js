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

    // Carrega frases favoritas ao abrir a página
    atualizarFavoritas();

    // 🌟 Fundo encantado com partículas brilhantes estilo princesa

const canvas = document.createElement("canvas");
canvas.id = "particles-bg";
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function createParticle() {
  const size = Math.random() * 2 + 1;
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: size,
    alpha: Math.random() * 0.8 + 0.2,
    speed: Math.random() * 0.5 + 0.2,
  };
}

for (let i = 0; i < 100; i++) {
  particles.push(createParticle());
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#fff";
    ctx.fill();
    p.y -= p.speed;
    if (p.y < 0) {
      p.y = canvas.height;
      p.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();
