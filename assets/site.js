const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.dataset.open !== 'true';
    nav.dataset.open = String(open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', () => {
    nav.dataset.open = 'false';
    toggle.setAttribute('aria-expanded', 'false');
  });
}
