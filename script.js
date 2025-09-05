// Initialize AOS animations
AOS.init({duration:700, once:true});

// Initialize EmailJS with your public key
emailjs.init("UID0hzkQSqi7j4MmL");

function sendMessage(e){
  e.preventDefault();
  const name = document.getElementById('name')?.value.trim() || document.querySelector("[name='from_name']")?.value.trim();
  const email = document.getElementById('email')?.value.trim() || document.querySelector("[name='from_email']")?.value.trim();
  const message = document.getElementById('message')?.value.trim() || document.querySelector("[name='message']")?.value.trim();

  if(!name||!email||!message){ 
    alert('⚠️ Please fill in all fields'); 
    return false; 
  }

  emailjs.send("service_knkgu0m","template_mv8fg68",{
    from_name: name,
    from_email: email,
    message: message
  }).then(()=> {
    alert('✅ Message sent successfully!');
    document.getElementById('contact-form').reset();
  }, (err)=> {
    alert('❌ Failed to send. Please email me directly at garimakanwar87273@gmail.com');
    console.error("EmailJS error:", err);
  });

  return false;
}
