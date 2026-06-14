// ===== Mobile menu toggle =====
const burger = document.getElementById('burger');
const links = document.getElementById('navlinks');

burger.addEventListener('click', () => {
  links.classList.toggle('open');
});

links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

// ===== Bouncy Scroll Reveal Animation =====
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    
    // Trigger when element is 80px into the viewport
    var elementVisible = 80; 
    
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

// Attach event listener and trigger once on load so above-fold items show immediately
window.addEventListener("scroll", reveal);
reveal();
