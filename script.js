// Scroll suave ao clicar nos menus
document.querySelectorAll('a[href^=\"#\"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      emailjs.sendForm('service_f5b4mid', 'template_xxxxxx', this)
    });
  });
  