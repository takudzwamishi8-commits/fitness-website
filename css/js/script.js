document.addEventListener("DOMContentLoaded", () => {

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit", function(e){

const name=document.getElementById("name").value.trim();
const email=document.getElementById("email").value.trim();
const phone=document.getElementById("phone").value.trim();
const message=document.getElementById("message").value.trim();

const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex=/^[0-9]{10}$/;

if(name.length<3){
alert("Name must be at least 3 characters.");
e.preventDefault();
return;
}

if(!emailRegex.test(email)){
alert("Enter a valid email.");
e.preventDefault();
return;
}

if(!phoneRegex.test(phone)){
alert("Phone number must contain exactly 10 digits.");
e.preventDefault();
return;
}

if(message.length<10){
alert("Message must be at least 10 characters.");
e.preventDefault();
return;
}

alert("Message submitted successfully!");

});

}

const enquiryForm=document.getElementById("enquiryForm");

if(enquiryForm){

enquiryForm.addEventListener("submit",function(e){

const service=document.getElementById("service").value;

if(service===""){
alert("Please select a service.");
e.preventDefault();
return;
}

});

}

const search=document.getElementById("search");

if(search){

search.addEventListener("keyup",function(){

const filter=this.value.toLowerCase();

const cards=document.querySelectorAll(".service-card");

cards.forEach(card=>{

card.style.display=card.textContent.toLowerCase().includes(filter)
? "block":"none";

});

});

}

});