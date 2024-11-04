document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navbar = document.querySelector('.navbar');

    navToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
        // Prevent scroll when menu is open
        document.body.style.overflow = navbar.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.header')) {
            navbar.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close menu when window is resized above tablet breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            navbar.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});