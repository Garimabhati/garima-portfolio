// Initialize AOS animations
AOS.init({ duration: 700, once: true });

// Initialize EmailJS with your Public Key
emailjs.init("UID0hzkQSqi7j4MmL");

function sendMessage(e) {
  e.preventDefault();

  // Get form values
  const name = document.querySelector("[name='from_name']").value.trim();
  const email = document.querySelector("[name='from_email']").value.trim();
  const message = document.querySelector("[name='message']").value.trim();

  // Validate inputs
  if (!name || !email || !message) {
    alert("⚠️ Please fill in all fields");
    return false;
  }

  // Send email using EmailJS
  emailjs.send("service_egwcfdk", "template_mv8fg68", {
    from_name: name,
    from_email: email,
    message: message,
  }).then(() => {
    alert("✅ Message sent successfully!");
    document.getElementById("contact-form").reset();
  }, (err) => {
    alert("❌ Failed to send. Please email me directly at garimakanwar87273@gmail.com");
    console.error("EmailJS error:", err);
  });

  return false;
}
// Open certificate modal
function openCertificate(fileUrl) {
  document.getElementById("certificateFrame").src = fileUrl;
  document.getElementById("certificateModal").style.display = "flex";
}

// Close certificate modal
function closeModal() {
  document.getElementById("certificateModal").style.display = "none";
  document.getElementById("certificateFrame").src = "";
}

