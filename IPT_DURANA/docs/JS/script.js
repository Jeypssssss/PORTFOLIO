function downloadCV() {
    const cvUrl = 'C:\Users\ADMIN\OneDrive\Desktop\index\cv\cv.pdf'; 
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Your_CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
const btn = document.getElementById('button');

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_fbdpxea';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});