function toggleDetails(id) {
    const details = document.getElementById(id);
    details.style.display = (details.style.display === "block") ? "none" : "block";
}

// Set project details to be hidden initially
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.project-details').forEach(details => {
        details.style.display = 'none';
    });
});
