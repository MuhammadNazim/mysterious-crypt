/* HERO PARALLAX — subtle effect on desktop */
const heroImg = document.querySelector('.hero-bg img');
if (heroImg && window.matchMedia('(min-width: 768px)').matches) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      heroImg.style.transform = `scale(1.06) translateY(${y * 0.15}px)`;
    }
  }, { passive: true });
}