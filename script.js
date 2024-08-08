
const slides = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;

function showSlide(i) {
    if (i >= slideElements.length) {
        index = 0;
    } else if (i < 0) {
        index = slideElements.length - 1;
    } else {
        index = i;
    }
    slides.style.transform = `translateX(-${index * 100}%)`;
}

nextButton.addEventListener('click', () => {
    showSlide(index + 1);
});

prevButton.addEventListener('click', () => {
    showSlide(index - 1);
});

// Optional: Automatically advance slides every 5 seconds
setInterval(() => {
    showSlide(index + 1);
}, 5000);
// Get the button element
const button = document.getElementById('confettiButton');

// Add an event listener to trigger confetti when the button is clicked
button.addEventListener('click', function() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.balloons-container');

    // Create balloons
    for (let i = 0; i < 15; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.animationDelay = `${Math.random() * 10}s`;
        container.appendChild(balloon);
    }
});
