document.addEventListener("DOMContentLoaded", function () {
  // ✅ Initialize EmailJS once
  (function () {
    emailjs.init("f_7Ap4mcQQLzpgiE5"); // Your public key
  })();

  const form = document.getElementById("userForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const firstName = document.getElementById("firstname").value.trim();
    const lastName = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Error spans
    const firstNameError = document.getElementById("firstnameError");
    const lastNameError = document.getElementById("lastnameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const messageError = document.getElementById("messageError");

    // Output paragraph
    const output = document.getElementById("output");

    // Clear previous messages
    firstNameError.textContent = "";
    lastNameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    messageError.textContent = "";
    output.textContent = "";

    let isValid = true;

    // Validation
    if (firstName === "") {
      firstNameError.textContent = "First name is required.";
      isValid = false;
    }  else if (!/^[a-zA-Z\s]+$/.test(firstName)) {
      firstNameError.textContent = "Firat name can only contain letters and spaces.";
      isValid = false;
    }

    if (lastName === "") {
      lastNameError.textContent = "Last name is required.";
      isValid = false;
      }  else if (!/^[a-zA-Z\s]+$/.test(lastName)) {
      lastNameError.textContent = "Last name can only contain letters and spaces.";
      isValid = false;
    }

    if (email === "") {
      emailError.textContent = "Email is required.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    if (phone === "") {
      phoneError.textContent = "Phone number is required.";
      isValid = false;
    }

    if (message === "") {
      messageError.textContent = "Feedback message is required.";
      isValid = false;
    }

    // ✅ Only proceed with email.js if validation passes
    if (isValid) {
      emailjs.sendForm("service_p9rc1t5", "template_72vtccm", form)
        .then(function () {
          output.style.color = "green";
          output.textContent = `✅ Thank you, ${firstName} ${lastName}! Your feedback has been submitted successfully.`;
          form.reset();
        }, function (error) {
          output.style.color = "red";
          output.textContent = "⚠️ Failed to send message: " + JSON.stringify(error);
        });
    } else {
      output.style.color = "red";
      output.textContent = "❌ Please correct the highlighted errors and try again.";
    }
  });
});
