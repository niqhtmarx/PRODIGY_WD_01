window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555'; // Darker background when scrolled
    } else {
        navbar.style.backgroundColor = '#333'; // Original background color
    }

    // Reveal sections on scroll
    var sections = document.querySelectorAll('section');
    sections.forEach(section => {
        var sectionTop = section.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 50) {
            section.classList.add('visible');
        }
    });
});

// Smooth scroll for navbar links
var links = document.querySelectorAll('#navbar a');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = this.getAttribute('href').substring(1);
        var targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 60, // Adjust for navbar height
            behavior: 'smooth'
        });
    });
});
