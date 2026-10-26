'use strict';

const header = document.querySelector('.site-header');
const nav = document.querySelector('#primary-nav');
const menuButton = document.querySelector('.menu-toggle');
const navLinks = [...nav.querySelectorAll('a')];
const mobile = window.matchMedia('(max-width: 900px)');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

document.documentElement.classList.add('js-nav');
menuButton.hidden = false;

function closeMenu(returnFocus = false) {
  nav.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  if (returnFocus) menuButton.focus();
}

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  nav.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
});
navLinks.forEach(link => link.addEventListener('click', () => {
  if (mobile.matches) {
    closeMenu();
    const target = document.querySelector(link.hash);
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
  }
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('is-open')) closeMenu(true);
});
document.addEventListener('click', event => {
  if (!header.contains(event.target)) closeMenu();
});
mobile.addEventListener('change', () => closeMenu());

const sections = navLinks.map(link => document.querySelector(link.hash));
let scheduled = false;
function updateScrollState() {
  const offset = header.offsetHeight + 80;
  let active = sections[0];
  sections.forEach(section => {
    if (section.getBoundingClientRect().top <= offset) active = section;
  });
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) active = sections.at(-1);
  navLinks.forEach(link => {
    if (link.hash === `#${active.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  header.classList.toggle('scrolled', window.scrollY > 12);
  scheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scheduled) {
    scheduled = true;
    window.requestAnimationFrame(updateScrollState);
  }
}, { passive: true });
window.addEventListener('resize', updateScrollState);
updateScrollState();

if ('IntersectionObserver' in window && !reducedMotion.matches) {
  document.documentElement.classList.add('js-motion');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}
document.querySelector('#year').textContent = new Date().getFullYear();
