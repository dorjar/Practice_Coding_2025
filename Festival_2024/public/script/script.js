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
// Contact form
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('All fields are required!');
                return;
            }

            fetch('/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            })
            .then(response => {
                if (response.ok) {
                    alert('Form submitted successfully!');
                    window.location.reload();
                } else {
                    return response.text().then(text => { throw new Error(text) });
                }
            })
            .catch(error => {
                alert('Error submitting form: ' + error.message);
            });
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    // Ensure elements exist before adding event listeners
    const actsContainer = document.querySelector('.acts');
    if (actsContainer) {
        fetch('/lineup')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            actsContainer.innerHTML = '';
            data.forEach(act => {
                const actElement = document.createElement('div');
                actElement.classList.add('act');
                actElement.innerHTML = `
                    <h3>${act.act_name}</h3>
                    <img src="/res/images/${act.image}" alt="${act.act_name}">
                    <p>${act.description}</p>
                `;
                actsContainer.appendChild(actElement);
            });
        })
        .catch(error => console.error('Error fetching lineup:', error));
    }

    // Ensure that hash links work correctly
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


    // Add a click event listener to toggle the visibility of the answers
    const faqQuestions = document.querySelectorAll('.question-container');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const answer = question.querySelector('.question-answer');
            if (question.classList.contains('active')) {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        });
    });

