// 
document.querySelectorAll('a[href^=\"#\"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        // Futuras interações em JS (pode adicionar animações ou funcionalidades)
console.log('Mauro Dev Site carregado com sucesso.');

      }
      emailjs.sendForm('service_f5b4mid', 'template_xxxxxx', this)
    });
  });
  