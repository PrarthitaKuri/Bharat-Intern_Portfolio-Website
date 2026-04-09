const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
});

// Sticky nav
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Hamburger
const ham = document.getElementById('hamburger');
const navUl = document.querySelector('.navbar ul');
ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    navUl.classList.toggle('open');
});

// Close menu on link click
document.querySelectorAll('.navbar ul a').forEach(a => {
    a.addEventListener('click', () => {
        ham.classList.remove('open');
        navUl.classList.remove('open');
    });
});

// Scroll-reveal
const observer = new I
