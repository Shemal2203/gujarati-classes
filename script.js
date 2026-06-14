// ===== Mobile menu toggle =====
const burger = document.getElementById('burger');
const links = document.getElementById('navlinks');
burger.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

// The inquiry form is now handled by the embedded Formaloo form in index.html.
// Formaloo loads its own script and delivers submissions to your Formaloo
// dashboard / email — no extra JavaScript is needed here.
