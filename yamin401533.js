document.addEventListener('DOMContentLoaded', function () {
    // Initialize all functionalities
    initSmoothScroll();
    initMenuToggle();
    initStickyHeader();
    initTypewriterEffect();
    initSkillAnimations();
    initProjectCardInteractions();
    initFormSubmission();
    initDarkModeToggle();
    initStarAnimations();
    initCubeAnimations();
});




// Smooth Scroll Functionality
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.navigation ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Close menu on mobile after clicking a link
            if (window.innerWidth <= 768) {
                const navigation = document.querySelector('.navigation');
                const menuToggle = document.getElementById('menuToggle');
                const hamburger = document.querySelector('.hamburger');
                navigation.classList.remove('active');
                menuToggle.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
}




// Menu Toggle Functionality
function initMenuToggle() {
    const menuToggle = document.getElementById('menuToggle');
    const navigation = document.querySelector('.navigation');
    const hamburger = document.querySelector('.hamburger');

    menuToggle.addEventListener('click', () => {
        navigation.classList.toggle('active');
        menuToggle.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (!navigation.contains(e.target) && !menuToggle.contains(e.target) && navigation.classList.contains('active')) {
            navigation.classList.remove('active');
            menuToggle.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}




// Download CV Function
const downloadButtons = document.querySelectorAll('.download-cv');
downloadButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        // Replace 'path-to-your-cv.pdf' with your actual CV file path
        const cvPath = 'path-to-your-cv.pdf';
        const link = document.createElement('a');
        link.href = cvPath;
        link.download = 'YourName-CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});




// Sticky Header Functionality
function initStickyHeader() {
    const header = document.querySelector('header');
    const heroSection = document.querySelector('#hero');

    window.addEventListener('scroll', () => {
        if (window.scrollY > heroSection.offsetHeight - header.offsetHeight) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
}




// Typewriter Effect for Hero Section
function initTypewriterEffect() {
    const typewriter = document.querySelector('.typewriter');
    if (typewriter) {
        new Typewriter(typewriter, {
            strings: ['Competitive Programmer', 'Frontend Developer', 'Graphic Designer'],
            autoStart: true,
            loop: true,
            delay: 35,
        });
    }
}




// Skill Progress Animation
function initSkillAnimations() {
    const skillItems = document.querySelectorAll('.skill-item');
    const observerOptions = {
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    skillItems.forEach(item => {
        observer.observe(item);
    });
}




// Project Card Hover and Video Play Functionality
function initProjectCardInteractions() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });

        const playButton = card.querySelector('.play-button');
        const video = card.querySelector('.video-player');
        const image = card.querySelector('.project-image');

        if (playButton && video && image) {
            playButton.addEventListener('click', () => {
                if (video.style.display === 'none') {
                    video.style.display = 'block';
                    image.style.backgroundImage = 'none';
                    video.play();
                } else {
                    video.style.display = 'none';
                    image.style.backgroundImage = image.getAttribute('data-bg');
                    video.pause();
                }
            });
        }
    });
}




// Form Submission Functionality
function initFormSubmission() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            console.log('Form submitted with data:', Object.fromEntries(formData));
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
}



// Dark Mode Toggle Functionality
function initDarkModeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isLightMode = document.body.classList.toggle('light-mode');
            themeToggle.textContent = isLightMode ? '🌖' : '🌒';
        });

        // Set the initial icon based on the current mode
        const isLightMode = document.body.classList.contains('light-mode');
        themeToggle.textContent = isLightMode ? '🌖' : '🌒';
    }
}



