(function () {
  emailjs.init({
    publicKey: "Y_0W95wc9RwPzpgsg",
  });
})();

window.onload = function () {
  const form = document.querySelector("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // chặn reload

    const templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    emailjs
      .send("service_rn9gh5f", "template_oji7izx", templateParams)
      .then(() => {
        alert("✅ Email sent successfully!");
        form.reset();
      })
      .catch((error) => {
        alert("❌ Failed to send email");
        console.error("EmailJS error:", error);
      });
  });
};
