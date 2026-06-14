// ===== Mobile menu toggle =====
const burger = document.getElementById('burger');
const links = document.getElementById('navlinks');
burger.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

// ===== Inquiry form =====
// By default this runs as a front-end demo (shows a thank-you, no email is sent).
//
// TO RECEIVE REAL EMAILS (free, ~2 minutes):
//   1. Go to https://formspree.io and create a free account.
//   2. Create a new form — you'll get an endpoint like:  https://formspree.io/f/abcdwxyz
//   3. Paste that URL into the FORMSPREE_ENDPOINT line below (between the quotes).
//   4. Re-deploy. Submissions will now arrive in your email inbox.
//
// Leave it as an empty string ("") to keep the demo-only behaviour.
const FORMSPREE_ENDPOINT = "";

const form = document.getElementById('inquiryForm');
const success = document.getElementById('success');
const submitBtn = form.querySelector('button');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // If no endpoint configured, just show the thank-you message (demo mode).
  if (!FORMSPREE_ENDPOINT) {
    showSuccess();
    return;
  }

  // Otherwise, actually send the inquiry via Formspree.
  submitBtn.textContent = 'Sending…';
  submitBtn.disabled = true;
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    });
    if (res.ok) {
      showSuccess();
      form.reset();
    } else {
      submitBtn.textContent = 'Try again';
      submitBtn.disabled = false;
      alert('Sorry, something went wrong. Please call 647-215-7209 instead.');
    }
  } catch (err) {
    submitBtn.textContent = 'Try again';
    submitBtn.disabled = false;
    alert('Sorry, something went wrong. Please call 647-215-7209 instead.');
  }
});

function showSuccess() {
  success.style.display = 'block';
  submitBtn.textContent = 'Sent ✓';
  submitBtn.disabled = true;
  setTimeout(() => success.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
}
