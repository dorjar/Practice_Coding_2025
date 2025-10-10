/* Countdown timer script*/
document.addEventListener("DOMContentLoaded", function() {
    // Set the date we're counting down to
    const countDownDate = new Date("June 20, 2024 00:00:00").getTime();

    // Update the count down every 1 second
    const timer = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in the element with id="countdown-timer"
        document.getElementById("countdown-timer").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("countdown-timer").innerHTML = "EXPIRED";
        }
    }, 1000);
});


        // Image slideshow for gallery
        let currentSlide = 0;
        const slides = document.querySelectorAll('.photo img');

        const showSlide = () => {
            slides.forEach((slide, index) => {
                slide.style.display = index === currentSlide ? 'block' : 'none';
            });
        };

        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide();
        };

        // setInterval(nextSlide, 3000); // Change slide every 3 seconds


        /* Toggling FAQ answer visibility */
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const parent = question.parentElement;
            if(parent.classList.contains('active')) {
                parent.classList.remove('active');
            } else {
                document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
                parent.classList.add('active');
            }
        });
    });


    /* Asynchronous Form Submission*/
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById('contact'); // Ensure your form has this ID
    
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
    
            const formData = new FormData(form);
            fetch('submit_form.php', { // Your server-side script to process the form submission
                method: 'POST',
                body: formData
            })
            .then(response => response.json()) // Assuming the server responds with JSON
            .then(data => {
                if (data.success) {
                    alert('Thank you for your message! We will get back to you soon.');
                } else {
                    alert('There was a problem with your submission. Please check your information and try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was a problem submitting your form. Please try again.');
            });
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
    
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    });
    
    
    
