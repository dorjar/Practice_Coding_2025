// Toggle Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const mainContent = document.querySelector('.main')

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('is-active');

    if (navLinks.classList.contains('active')) {
        mainContent.style.marginTop = (navLinks.offsetHeight + 80) + 'px';
    } else {
        mainContent.style.marginTop = '80px';
    }
});

// Handle Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted successfully!');
    });
});

