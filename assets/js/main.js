// SCROLL REVEAL
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => revealObserver.observe(el));


// EFEITO NAV-BAR (active link)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-item a');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (currentSection && link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});


// MENU HAMBURGUER MOBILE
const hamburger = document.getElementById('hamburger');
const navTopics = document.getElementById('nav-topics');

if (hamburger && navTopics) {
  hamburger.addEventListener('click', () => {
    navTopics.classList.toggle('open');
    // Anima as barras do hambúrguer
    const spans = hamburger.querySelectorAll('span');
    hamburger.classList.toggle('active');
    if (hamburger.classList.contains('active')) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  // Fecha o menu ao clicar em um link
  navTopics.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navTopics.classList.remove('open');
      hamburger.classList.remove('active');
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    });
  });
}


// CONFIG MAPA API
document.addEventListener('DOMContentLoaded', function () {
  const mapa = L.map('mapa', { zoomControl: false }).setView([-20.00351483929989, -44.035115358818054], 16);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap © CARTO'
  }).addTo(mapa);

  const icone = L.divIcon({
    html: `<div style="
      width: 16px;
      height: 16px;
      background: #A88B4B;
      border: 2px solid #fff;
      border-radius: 50%;
      box-shadow: 0 0 6px rgba(168,139,75,0.8);
    "></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    className: ''
  });

  L.marker([-20.00351483929989, -44.035115358818054], { icon: icone })
    .addTo(mapa)
    .bindPopup('<b style="color: #A88B4B">AURUM Tattoo</b><p style="color: #000000">Av. Senador Levindo Coelho, 1847</p>')
    .openPopup();
});