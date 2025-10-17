// script.js
// JS puro responsável por:
// - toggle do menu mobile
// - smooth scroll (comportamento nativo já existe, mas aqui há fallback)
// - enviar dados do formulário para o WhatsApp (cliente) sem backend
// - pequenas interações (ano no rodapé)

document.addEventListener('DOMContentLoaded', () => {
  // Ano no rodapé
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile menu toggle
  const btn = document.getElementById('btn-mobile');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');

  if (btn) {
    btn.addEventListener('click', () => {
      const open = mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden', !open);
      iconOpen.classList.toggle('hidden', open);
      iconClose.classList.toggle('hidden', !open);
    });
  }

  // Smooth scroll for anchor links (progressive enhancement)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.length > 1) {
        e.preventDefault();
        const el = document.querySelector(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // close mobile menu after click
          if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            iconOpen.classList.remove('hidden');
            iconClose.classList.add('hidden');
          }
        }
      }
    });
  });

  // Form: envia para WhatsApp formatado (sem backend)
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const nome = data.get('nome') || '';
      const telefone = data.get('telefone') || '';
      const mensagem = data.get('mensagem') || '';

      // mensagem que será enviada para o WhatsApp
      const text = `Olá, meu nome é ${nome}. %0ATelefone: ${telefone}%0A%0A${mensagem}`;

      // número da sua conta — substitua pelo seu número
      const numero = '55229XXXXXXXX'; // EX: 55 22 9XXXX-XXXX (Brasil, sem espaços)
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(text)}`;

      // mostrar feedback e abrir o WhatsApp (nova aba)
      feedback.classList.remove('hidden');
      setTimeout(() => {
        window.open(url, '_blank');
      }, 600);
    });
  }
});
