// Toggle Dark/Light Mode
document.querySelector('.toggle-button').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    updateTextColor();  // Call the function to adjust text color when mode changes
});

// Toggle project details visibility
function toggleDetails(id) {
    const details = document.getElementById(id);
    details.style.display = (details.style.display === "block") ? "none" : "block";
}

// Setting project details to be hidden initially
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.project-details').forEach(details => {
        details.style.display = 'none';
    });
});

// Update text color when switching between dark and light modes
function updateTextColor() {
    const elementsToChange = document.querySelectorAll('.change-color');
    elementsToChange.forEach(element => {
        if (document.body.classList.contains('dark-mode')) {
            element.style.color = '#fff'; // White text in dark mode
        } else {
            element.style.color = ''; // Default text color in light mode
        }
    });
}
