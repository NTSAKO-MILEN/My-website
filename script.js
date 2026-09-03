const contactForm = document.querySelector("#contact form");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const button = contactForm.querySelector("button[type='submit']");
        button.textContent = "Message received — thank you!";
        button.disabled = true;

        contactForm.reset();
    });
}
