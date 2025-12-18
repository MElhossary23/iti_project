
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 70;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active nav link
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

});

// Button click effect
document.querySelectorAll('.btn-book').forEach(btn => {
    btn.addEventListener('click', (e) => {
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = '';
        }, 150);
    });
});

// Smooth scroll for Discover More button
document.querySelector('.discover-btn').addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Discover More clicked');
});

// Subtle animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.about-section, .testimonials-section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});    

// HOW IT WORKS animation
document.querySelectorAll('.process-card, .secondary-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Hero fade-in animation
const heroTitle = document.querySelector('.hero-title');
const heroDesc = document.querySelector('.hero-description');

heroTitle.style.opacity = '0';
heroTitle.style.transform = 'translateY(20px)';
heroTitle.style.transition = 'opacity 3s ease, transform 3s ease';

heroDesc.style.opacity = '0';
heroDesc.style.transform = 'translateY(20px)';
heroDesc.style.transition = 'opacity 3s ease, transform 3s ease';

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
    }, 100);

    setTimeout(() => {
        heroDesc.style.opacity = '1';
        heroDesc.style.transform = 'translateY(0)';
    }, 500);
});
