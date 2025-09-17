// Toggle Menu Mobile
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
    navLinks.classList.remove('active');
  });
});

// Booking form submit
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert("Terima kasih! Booking Anda telah diterima.");
  form.reset();
});
