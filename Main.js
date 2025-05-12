document.addEventListener("DOMContentLoaded", function() {
  // 1. Smooth Scrolling for Navigation
  const smoothScrollLinks = document.querySelectorAll('.nav-links a');
  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - 50, // Adding some offset for the fixed navbar
        behavior: 'smooth'
      });
    });
  });

  // 2. Mobile Navbar Toggle
  
  // script.js
const navbarToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.nav-links');

navbarToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


  // 3. Contact Form Validation
  const contactForm = document.querySelector('form');
  contactForm.addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (!name || !email || !message) {
      e.preventDefault();
      alert("Please fill out all fields.");
    } else {
      alert("Thank you for your message!");
    }
  });
});
