const menuButton = document.getElementById('menuButton');
const navMenu = document.getElementById('navMenu');
const mobileLayout = window.matchMedia('(max-width: 960px)');
const ecoGuideSection = document.getElementById('ecoguia-detalhes');
const ecoGuideOpenButton = document.querySelector('a[href="#ecoguia-detalhes"]');
const ecoGuideBackButton = document.querySelector('.ecoguia-header .primary-button');

function setMenu(open) {
  navMenu.hidden = mobileLayout.matches && !open;
  menuButton.classList.toggle('open', mobileLayout.matches && open);
  menuButton.setAttribute('aria-expanded', String(mobileLayout.matches && open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
}

if (ecoGuideSection && ecoGuideOpenButton) {
  ecoGuideOpenButton.addEventListener('click', (event) => {
    event.preventDefault();
    ecoGuideSection.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
  });
}

if (ecoGuideSection && ecoGuideBackButton) {
  ecoGuideBackButton.addEventListener('click', (event) => {
    event.preventDefault();
    ecoGuideSection.classList.remove('is-visible');
    document.body.style.overflow = '';
    document.getElementById('trabalho')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

if (ecoGuideSection) {
  ecoGuideSection.addEventListener('click', (event) => {
    if (event.target === ecoGuideSection) {
      ecoGuideSection.classList.remove('is-visible');
      document.body.style.overflow = '';
    }
  });
}

menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});
navMenu.addEventListener('click', (event) => {
  if (event.target.closest('a') && mobileLayout.matches) setMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileLayout.matches && !navMenu.hidden) {
    setMenu(false);
    menuButton.focus();
  }
});
mobileLayout.addEventListener('change', () => setMenu(false));
setMenu(false);