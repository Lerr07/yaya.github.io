document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    const slideInElements = document.querySelectorAll('.slide-in');

    fadeInElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.5}s`;
    });

    slideInElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.5}s`;
    });
});
