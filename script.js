// Navbar: transparent over hero, solid when scrolled
const navbar = document.getElementById('navbar');

function updateNav() {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => navLinks.classList.toggle('open'));

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Active nav link highlighting
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navItems.forEach(item => {
        item.classList.toggle('active', item.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

// Entrance animations
const fadeEls = document.querySelectorAll(
  '.research-card, .research-featured, .presentation-item, .award-item, .info-card'
);

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      fadeObserver.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -60px 0px' });

fadeEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  fadeObserver.observe(el);
});
