// ==========================
// REVEAL AO SCROLL
// ==========================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;

    const elementTop = element.getBoundingClientRect().top;

    const revealPoint = 100;

    // aparece
    if (elementTop < windowHeight - revealPoint) {

      element.classList.add("active");

    } 
    
    // some novamente ao voltar
    else {

      element.classList.remove("active");

    }

  });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ==========================
// NAVBAR + LOGO DINÂMICO
// ==========================

const navbar = document.querySelector(".navbar");

const logo = document.querySelector(".logo");

window.addEventListener("scroll", () => {

  // navbar blur

  if (window.scrollY > 50) {

    navbar.style.background = "rgba(243, 240, 234, 0.75)";
    navbar.style.backdropFilter = "blur(14px)";

  } else {

    navbar.style.background = "rgba(243, 240, 234, 0.9)";
    navbar.style.backdropFilter = "blur(10px)";

  }


  // logo grande -> pequeno

  const scale = Math.max(
    1,
    2.5 - window.scrollY / 300
  );

  logo.style.transform = `scale(${scale})`;

});


// ==========================
// PARALLAX HERO IMAGE
// ==========================

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("scroll", () => {

  const scroll = window.scrollY;

  heroImage.style.transform =
    `translateY(${scroll * 0.08}px)`;

});