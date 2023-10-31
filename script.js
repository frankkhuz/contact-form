
function sendEmail(){
 var params = {
  name:document.getElementById('name').value,
  email:document.getElementById('email').value,
  number:document.getElementById('phone').value,
  message:document.getElementById('message').value
 };   

const serviceID = "service_18qi5so"
const templateID = "template_hb920lp"

emailjs.send(serviceID, templateID, params).then((res) => {
 document.getElementById('name').value = "";
 document.getElementById('email').value = "";
 document.getElementById('phone').value = "";
 document.getElementById('message').value = "";
 console.log(res);
 alert('your message was sent successfully')
})
.catch((err)=>console.log(err));

}