// ===== Mobile menu toggle =====
const burger = document.getElementById('burger');
const links = document.getElementById('navlinks');

burger.addEventListener('click', () => links.classList.toggle('open'));

links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

// ===== Scroll Reveal Animation =====
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100; // triggers when element is 100px into view
    
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

// Attach event listener and trigger once on load so above-fold items show immediately
window.addEventListener("scroll", reveal);
reveal();
