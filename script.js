const menuButton = document.getElementById('menuButton');
const navMenu = document.getElementById('navMenu');
const mobileLayout = window.matchMedia('(max-width: 960px)');

function setMenu(open) {
  navMenu.hidden = mobileLayout.matches && !open;
  menuButton.classList.toggle('open', mobileLayout.matches && open);
  menuButton.setAttribute('aria-expanded', String(mobileLayout.matches && open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
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