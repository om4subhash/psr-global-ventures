const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('navLinks');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit',function(e){
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const phone=document.getElementById('phone').value.trim();
  const service=document.getElementById('service').value;
  const message=document.getElementById('message').value.trim();
  const text=`Hello PSR Global Ventures,

Name: ${name}
Phone: ${phone}
Requirement: ${service}
Message: ${message || 'Not provided'}

I would like to discuss this project.`;
  window.open('https://wa.me/917645060555?text='+encodeURIComponent(text),'_blank');
});