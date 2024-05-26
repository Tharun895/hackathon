// Function to validate a form
function validateForm() {
    // Retrieve form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var roll = document.getElementById("roll").value;

    // Check if any field is empty
    if (name === "" || email === "" || roll === "") {
        alert("Please fill out all fields");
        return false; // Prevent form submission
    }

    // Additional validation logic can be added here

    return true; // Allow form submission
}