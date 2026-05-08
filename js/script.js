
// ==========================
// REVEAL AO SCROLL
// ==========================

const reveals =
  document.querySelectorAll(".reveal");

function revealOnScroll() {

  reveals.forEach((element) => {

    const windowHeight =
      window.innerHeight;

    const elementTop =
      element.getBoundingClientRect().top;

    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {

      element.classList.add("active");

    } else {

      element.classList.remove("active");

    }

  });

}

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();


// ==========================
// COLLAPSIBLE EXPOSIÇÕES
// ==========================

const toggles =
  document.querySelectorAll(".expo-toggle");

toggles.forEach(toggle => {

  toggle.addEventListener("click", () => {

    toggle.classList.toggle("active");

    const content =
      toggle.nextElementSibling;

    content.classList.toggle("open");

  });

});


// ==========================
// NAVBAR DINÂMICA
// ==========================

const navbar =
  document.querySelector(".navbar");

const logo =
  document.querySelector(".logo");

const navLinks =
  document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  // BLUR

  if (window.scrollY > 50) {

    navbar.style.background =
      "rgba(243, 240, 234, 0.75)";

    navbar.style.backdropFilter =
      "blur(14px)";

  } else {

    navbar.style.background =
      "rgba(243, 240, 234, 0.9)";

    navbar.style.backdropFilter =
      "blur(10px)";
  }


  // NAVBAR DIMINUI

  const padding = Math.max(
    1.5,
    4 - window.scrollY / 150
  );

  navbar.style.padding =
    `${padding}rem 4rem`;


  // LOGO

  const scale = Math.max(
    1,
    10 - window.scrollY / 100
  );

  logo.style.transform =
    `scale(${scale})`;


  // LINKS

  const linkSize = Math.max(
    0.95,
    1.2 - window.scrollY / 1000
  );

  navLinks.forEach(link => {

    link.style.fontSize =
      `${linkSize}rem`;

  });

});