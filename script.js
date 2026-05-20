// ======================================
// TEXTO DIGITANDO
// ======================================

const typingElement = document.getElementById("typing");

const text = "Olá, eu sou Lia Lima ✨";

let index = 0;

function typeText() {

  if (index < text.length) {

    typingElement.innerHTML += text.charAt(index);

    index++;

    setTimeout(typeText, 80);

  }

}

typeText();


// ======================================
// FEEDBACK DOS BOTÕES
// ======================================

const buttons = document.querySelectorAll(".link-button");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    const feedback = button.querySelector(".feedback");

    feedback.style.opacity = "1";

    setTimeout(() => {

      feedback.style.opacity = "0";

    }, 1200);

  });

});


// ======================================
// DARK MODE
// ======================================

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {

    toggle.innerHTML = "☀️";

  } else {

    toggle.innerHTML = "🌙";

  }

});


// ======================================
// PARALLAX DAS NUVENS
// ======================================

window.addEventListener("scroll", () => {

  const clouds = document.querySelector(".clouds-bg");

  clouds.style.transform =
    `translateY(${window.scrollY * 0.2}px)`;

});

// ======================================
// GERADOR DE ESTRELAS
// ======================================

const starsContainer = document.querySelector(".stars");

for (let i = 0; i < 100; i++) {

  const star = document.createElement("div");

  star.classList.add("star");

  star.style.top = Math.random() * 100 + "%";
  star.style.left = Math.random() * 100 + "%";

  star.style.animationDelay =
    Math.random() * 2 + "s";

  star.style.animationDuration =
    1 + Math.random() * 3 + "s";

  starsContainer.appendChild(star);

}