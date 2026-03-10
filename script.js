// Alterar o header no scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Revelação suave dos elementos (Animação de entrada)
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.tech-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.6s ease-out";
    observer.observe(card);
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Ajuste de compensação caso seu header seja fixo (ex: 80px de altura)
            const headerOffset = 80; 
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});
// Centralizar o plano destaque no mobile ao carregar
window.addEventListener('load', () => {
    if (window.innerWidth < 1024) {
        const pricingGrid = document.querySelector('.grid-pricing');
        const featuredCard = document.querySelector('.price-card.featured');
        
        if (pricingGrid && featuredCard) {
            const offset = featuredCard.offsetLeft - (pricingGrid.clientWidth / 2) + (featuredCard.clientWidth / 2);
            pricingGrid.scrollTo({ left: offset, behavior: 'smooth' });
        }
    }
});