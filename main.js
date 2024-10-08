// Select DOM elements
const navToggle = document.getElementById('navToggle');
const modalNav = document.querySelector('nav.modal');
const closeBtn = document.getElementById('closeBtn');

// Function to open the modal
navToggle.addEventListener('click', () => {
    modalNav.style.display = 'block'; // Show the modal
});

// Function to close the modal
closeBtn.addEventListener('click', () => {
    modalNav.style.display = 'none'; // Hide the modal
});

// Close the modal if the user clicks anywhere outside the menu
window.addEventListener('click', (e) => {
    if (e.target === modalNav) {
        modalNav.style.display = 'none'; // Hide the modal
    }
});