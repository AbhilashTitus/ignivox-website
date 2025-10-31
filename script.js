// Minimal JS for contact form demo and small UI effects
function onSubmitForm(e){
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if(!name || !email || !message){
    alert('Please fill all fields.');
    return false;
  }
  // For static hosting: we just show a confirmation.
  alert('Thanks, ' + name + '. Your message has been noted. We will contact you soon.');
  form.reset();
  return false;
}

// Small fade-in on scroll
document.addEventListener('DOMContentLoaded', function(){
  const elems = document.querySelectorAll('section, .card, .service-card');
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting) en.target.style.opacity = 1, en.target.style.transform = 'translateY(0)';
    });
  }, {threshold:0.15});
  elems.forEach(el=>{
    el.style.opacity = 0;
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    obs.observe(el);
  });
});
