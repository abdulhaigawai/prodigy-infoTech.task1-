// script.js

// Get the navbar element
const navbar = document.getElementById('navbar');

// Function to change navbar style on scroll
function onScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Attach scroll event listener to the window
window.addEventListener('scroll', onScroll);