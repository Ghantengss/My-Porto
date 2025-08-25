// Navigation functionality
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Hamburger menu toggle
    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') ?
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Navigation click handler
    navItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');

            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Show target section
            document.getElementById(targetSection).classList.add('active');

            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            }

            // Smooth scroll to section
            document.getElementById(targetSection).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Button click handler
    const buttons = document.querySelectorAll('.btn[data-section]');
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');

            // Show target section
            document.getElementById(targetSection).classList.add('active');

            // Smooth scroll to section
            document.getElementById(targetSection).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});