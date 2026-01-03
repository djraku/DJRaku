/**
 * DJ Raku Portfolio Script
 * Handles smooth interactions and console logging
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("DJ Raku portfolio loaded 🎧");

    // Add scroll listener for navbar transparency
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.padding = '15px 50px';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.8)';
            navbar.style.padding = '20px 50px';
        }
    });

    // Optional: Add simple scroll reveal effects
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section h2, .container p').forEach(el => {
        // el.style.opacity = '0'; // Could add scroll reveals here
    });
});
