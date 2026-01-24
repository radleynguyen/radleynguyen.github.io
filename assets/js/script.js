// 1️⃣ Khởi tạo EmailJS
(function () {
  emailjs.init({
    publicKey: "Y_0W95wc9RwPzpgsg", // public key của bạn
  });
})();

// 2️⃣ Hàm gửi mail
function sendMail() {
  const btn = document.getElementById("sendBtn");
  const status = document.getElementById("status");

  // Disable button + loading
  btn.disabled = true;
  btn.innerText = "SENDING...";
  status.innerText = "";

  // Lấy dữ liệu từ form
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // 3️⃣ Gửi Email
  emailjs
    .send("service_rn9gh5f", "template_oji7izx", params)
    .then(() => {
      status.style.color = "#a5ffb0";
      status.innerText = "✅ Message sent successfully!";

      // Reset form
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      status.style.color = "#ffb3b3";
      status.innerText = "❌ Failed to send message. Please try again.";
      console.error("EmailJS Error:", error);
    })
    .finally(() => {
      // Enable lại button
      btn.disabled = false;
      btn.innerText = "SEND MESSAGE";
    });
}
