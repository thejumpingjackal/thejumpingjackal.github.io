// Get the scroll-to-top button element by its id
let scrollToTopButton = document.getElementById("scrollToTopButton");

// Function to update the button's visibility
function toggleScrollButton() {
    if (window.scrollY >= 50) {
        // If scrolled down 50px or more, display the button
        scrollToTopButton.style.display = "block";
    } else {
        // If not scrolled down enough, hide the button
        scrollToTopButton.style.display = "none";
    }
}

// Add a scroll event listener to show/hide the button
window.addEventListener("scroll", toggleScrollButton);

// Add a click event listener to scroll to the top when the button is clicked
scrollToTopButton.addEventListener("click", function () {
    // Scroll smoothly to the top of the page
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// Call the toggleScrollButton function once to set the initial state
toggleScrollButton();