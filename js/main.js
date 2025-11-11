/**
 * Fox Constructions - Main JavaScript
 * Handles navigation, form validation, animations, and interactivity
 */

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.style.transform === 'translateX(0px)';

    if (isOpen) {
        mobileMenu.style.transform = 'translateX(-100%)';
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    } else {
        mobileMenu.style.transform = 'translateX(0)';
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    }
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.transform = 'translateX(-100%)';
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    });
});

// Sticky Navbar on Scroll
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }

    lastScroll = currentScroll;
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Removed
// Form handling code has been removed as the contact form is no longer present on the page
// Contact information is now displayed directly for users to reach out via phone, email, or visit the office

// Lazy Loading for Images (if real images are added later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add active state to navigation links based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-construction-gold');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-construction-gold');
        }
    });
});

// Project Gallery Modal (for future enhancement)
const projectImages = document.querySelectorAll('#projects .aspect-square');

projectImages.forEach(image => {
    image.addEventListener('click', () => {
        // Future: Open modal with project details
        console.log('Project clicked - Modal functionality can be added here');
    });
});

// Add hover effect to capability cards
const capabilityCards = document.querySelectorAll('#capabilities > div > div > div');

capabilityCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05) translateY(-8px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1) translateY(0)';
    });
});

// Performance: Debounce scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handler
const debouncedScrollHandler = debounce(() => {
    // Additional scroll-based animations can go here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Accessibility: Focus management for mobile menu
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape key
    if (e.key === 'Escape') {
        if (mobileMenu.style.transform === 'translateX(0px)') {
            mobileMenu.style.transform = 'translateX(-100%)';
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            mobileMenuBtn.focus();
        }
    }
});

// Print welcome message to console
console.log('%c🦊 Fox Constructions', 'font-size: 20px; font-weight: bold; color: #F5B800;');
console.log('%cBuilding dreams, shaping futures', 'font-size: 14px; color: #2B2B2B;');
console.log('%cWebsite built with Tailwind CSS & Vanilla JavaScript', 'font-size: 12px; color: #666;');

// Performance: Add loading complete class
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    console.log('✅ Website fully loaded');
});