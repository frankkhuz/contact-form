const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

// function sendEmail(){

// }
form.addEventListener("submit", subitForm);
function subitForm(e) {
  e.preventDefault();
  var params = {
    name: nameInput.value,
    email: emailInput.value,
    number: phoneInput.value,
    message: messageInput.value,
  };

  const serviceID = "service_18qi5so";
  const templateID = "template_hb920lp";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";
      console.log(res.status);
      alert("your message was sent successfully");
    })
    .catch((err) => console.log(err));
}
