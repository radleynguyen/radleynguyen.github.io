function sendMail(event){
  event.preventDefault(); // CHẶN reload

  let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    message : document.getElementById("message").value,
  };

  emailjs.send("service_rn9gh5f", "template_oji7izx", parms)
    .then(() => alert("Email Sent!!"))
    .catch(err => alert("Error: " + err));
}
