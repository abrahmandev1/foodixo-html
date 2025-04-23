// Contact Form Validation and Submission Simulation
// This script simulates the submission of a contact form and validates the input fields.
// It checks if all fields are filled out and displays a success or error message accordingly.
  document.querySelector(".contact_form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let enquiry = document.getElementById("enquiry").value.trim();
    let message = document.getElementById("message").value.trim();

    let responseMessage = document.getElementById("responseMessage");

    // If response message doesn't exist, create it
    if (!responseMessage) {
      responseMessage = document.createElement("div");
      responseMessage.id = "responseMessage";
      responseMessage.style.marginTop = "10px";
      this.appendChild(responseMessage);
    }

    if (name && email && subject && enquiry && message) {
      responseMessage.innerText = "Message Sent Successfully!";
      responseMessage.style.display = "block";
      responseMessage.style.color = "green";
      this.reset();
    } else {
      responseMessage.innerText = "Please fill in all fields!";
      responseMessage.style.display = "block";
      responseMessage.style.color = "red";
    }
  });

