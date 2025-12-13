// Get references to the form and success message div
const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

// Add an event listener to handle form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the page from reloading after submission

    // Form validation
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Check if all fields are filled
    if (name && email && message) {
        // Show the success message
        successMessage.style.display = "block";

        // Clear the form fields after submission
        form.reset();

        // Optionally, hide the success message after 3 seconds
        setTimeout(function() {
            successMessage.style.display = "none";
        }, 3000); // Message disappears after 3 seconds
    } else {
        alert("Please fill in all fields!"); // Alert if some fields are missing
    }
});
