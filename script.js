// ===========================
// Smooth Scrolling
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// Form Validation
// ===========================

const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMessage = document.getElementById('successMessage');

// Validation functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidName(name) {
    return name.trim().length >= 2;
}

function isValidMessage(message) {
    return message.trim().length >= 10;
}

// Show error message
function showError(inputElement, errorElementId, message) {
    const errorElement = document.getElementById(errorElementId);
    inputElement.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

// Clear error message
function clearError(inputElement, errorElementId) {
    const errorElement = document.getElementById(errorElementId);
    inputElement.classList.remove('error');
    errorElement.textContent = '';
    errorElement.classList.remove('show');
}

// Validate name field
function validateName() {
    const name = nameInput.value.trim();

    if (name === '') {
        showError(nameInput, 'nameError', 'Nimi on pakollinen kenttä');
        return false;
    } else if (!isValidName(name)) {
        showError(nameInput, 'nameError', 'Nimen tulee olla vähintään 2 merkkiä');
        return false;
    } else {
        clearError(nameInput, 'nameError');
        return true;
    }
}

// Validate email field
function validateEmail() {
    const email = emailInput.value.trim();

    if (email === '') {
        showError(emailInput, 'emailError', 'Sähköposti on pakollinen kenttä');
        return false;
    } else if (!isValidEmail(email)) {
        showError(emailInput, 'emailError', 'Syötä kelvollinen sähköpostiosoite');
        return false;
    } else {
        clearError(emailInput, 'emailError');
        return true;
    }
}

// Validate message field
function validateMessage() {
    const message = messageInput.value.trim();

    if (message === '') {
        showError(messageInput, 'messageError', 'Viesti on pakollinen kenttä');
        return false;
    } else if (!isValidMessage(message)) {
        showError(messageInput, 'messageError', 'Viestin tulee olla vähintään 10 merkkiä');
        return false;
    } else {
        clearError(messageInput, 'messageError');
        return true;
    }
}

// Real-time validation on blur
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
messageInput.addEventListener('blur', validateMessage);

// Clear error on input
nameInput.addEventListener('input', function() {
    if (this.classList.contains('error')) {
        clearError(this, 'nameError');
    }
});

emailInput.addEventListener('input', function() {
    if (this.classList.contains('error')) {
        clearError(this, 'emailError');
    }
});

messageInput.addEventListener('input', function() {
    if (this.classList.contains('error')) {
        clearError(this, 'messageError');
    }
});

// Form submission
contactForm.addEventListener('submit', function(e) {
    // Hide success message if showing
    successMessage.classList.remove('show');

    // Validate all fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    // If validation fails, prevent form submission
    if (!isNameValid || !isEmailValid || !isMessageValid) {
        e.preventDefault();
        return false;
    }

    // If all fields are valid, allow form to submit naturally to Netlify
    // Netlify will handle the form submission and redirect to success page
    console.log('Form submitted successfully to Netlify');
});

// ===========================
// Header scroll effect (optional enhancement)
// ===========================

let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add subtle shadow to sections as you scroll
    if (currentScroll > 100) {
        document.querySelectorAll('.service-card, .pricing-card').forEach(card => {
            card.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
        });
    } else {
        document.querySelectorAll('.service-card, .pricing-card').forEach(card => {
            card.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        });
    }

    lastScroll = currentScroll;
});

// ===========================
// Cookie Consent
// ===========================

const cookieConsent = document.getElementById('cookieConsent');
const acceptCookiesBtn = document.getElementById('acceptCookies');
const rejectCookiesBtn = document.getElementById('rejectCookies');

// Check if user has already made a choice
function checkCookieConsent() {
    const cookieChoice = localStorage.getItem('cookieConsent');

    // If no choice has been made, show the banner after a short delay
    if (!cookieChoice) {
        setTimeout(() => {
            cookieConsent.classList.add('show');
        }, 1000);
    }
}

// Function to initialize Google Analytics 4
function initializeGA4() {
    // Load GA4 script dynamically
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    document.head.appendChild(gaScript);

    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');

    console.log('Google Analytics 4 initialized');
}

// Accept cookies
acceptCookiesBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieConsent.classList.remove('show');

    // Initialize Google Analytics 4
    initializeGA4();

    console.log('Cookies accepted - Analytics enabled');
});

// Reject cookies
rejectCookiesBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'rejected');
    cookieConsent.classList.remove('show');

    // Disable analytics - GA4 will not be loaded
    console.log('Cookies rejected - Analytics disabled');
});

// Initialize cookie consent check on page load
checkCookieConsent();
