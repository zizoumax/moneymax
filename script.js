// Affichage dynamique du titre
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-content h2');
    const titleText = "Devenez un pro pour gagner de l'argent en ligne";
    let index = 0;

    function typeTitle() {
        if (index < titleText.length) {
            heroTitle.innerHTML += titleText.charAt(index);
            index++;
            setTimeout(typeTitle, 100);  // Vitesse de l'animation du texte
        }
    }
    typeTitle();
});

// Animation sur le défilement (scroll)
window.addEventListener('scroll', () => {
    const nav = document.querySelector('header');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    // Apparition des éléments au défilement
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;

        if (sectionPosition < screenPosition) {
            section.classList.add('visible');
        }
    });
});

// Animation des boutons CTA
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.classList.add('hover');
    });
    button.addEventListener('mouseout', () => {
        button.classList.remove('hover');
    });
});
