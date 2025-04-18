document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("nav").addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      event.preventDefault();
      const href = event.target.getAttribute("href");

      if (href && href !== "#") {
        window.location.href = href; // Redirect to the clicked link
      } else {
        alert(`You clicked on the ${event.target.textContent} link!`);
      }
    }
  });
});


// Add functionality to the contact form
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get('name').trim();
  const email = formData.get('email').trim();
  const message = formData.get('message').trim();
  const messageOutput = document.getElementById('message-output');


  // Name validation (Only letters, at least 2 characters)
  const nameRegex = /^[A-Za-z\s]{2,}$/;
  if (!nameRegex.test(name)) {
    messageOutput.innerHTML = `<p style="color: red;">Please enter a valid name (only letters, at least 2 characters).</p>`;
    return;
  }

  // Email validation (Correct email format)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    messageOutput.innerHTML = `<p style="color: red;">Please enter a valid email address.</p>`;
    return;
  }

  // Check if message is empty
  if (message === "") {
    messageOutput.innerHTML = `<p style="color: red;">Message cannot be empty.</p>`;
    return;
  }
  // If all validations pass, display success message
  messageOutput.innerHTML = `<p style="color: rgb(109, 73, 10);">Thank you for your message, ${name}! We will get back to you at ${email} shortly.</p>`;

  // Optional: Reset form fields after successful submission
  contactForm.reset();

});
