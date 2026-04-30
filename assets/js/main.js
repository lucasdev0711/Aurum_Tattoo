//EFEITO NAV-BAR

window.addEventListener('scroll', () => {
    // 1. Seleciona todas as tags <section> da página (isso ignora o <header> automaticamente)
    const sections = document.querySelectorAll('section');
    
    // 2. Seleciona todos os links da barra de navegação
    const navLinks = document.querySelectorAll('.nav-item a');

    let currentSection = '';

    // 3. Verifica qual seção está atualmente visível na tela
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        
        // Subtraímos 100px para compensar a altura do seu nav-bar fixo (que tem 90px)
        if (window.scrollY >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });

    // 4. Adiciona a classe ativa apenas no link correspondente à seção atual
    navLinks.forEach(link => {
        // Primeiro, removemos a classe active de todos os links
        link.classList.remove('active');

        // Se houver uma currentSection (ou seja, se já passou do header) e o href bater com o ID da seção
        if (currentSection && link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});



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