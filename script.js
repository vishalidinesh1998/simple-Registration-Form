const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("pass");
// var error = document.querySelector(".error");
const popup=document.querySelector("#popup")
const inputgroup=document.querySelectorAll(".input-group")
const submit=document.getElementById("butn")
const heading=document.getElementById("heading")


form.addEventListener('submit', (e) => {
    
    e.preventDefault(); // always prevent first

    const isValid = validateInputs(); // fix: store return value

    if (isValid) {
        popup.classList.remove("hidden");
        inputgroup.forEach(group => group.classList.add("hidden")); // Hide form
        heading.classList.add("hidden")
        form.style.background="#AF4FA5"
        submit.classList.add("hidden");
    }

})

function validateInputs() {
    let success=true
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
if(usernameval===""){
    success=false;
    setofErrors(username,"Username is required")
}
else{
    setofSuccess(username)
}

if(emailval===""){
    success=false;
    setofErrors(email,"Email is required")
}
else if(!validateemail(emailval)){
    success=false;
    setofErrors(email,"Please enter validemail")
}
else{
    setofSuccess(email)
}
if(passwordval===""){
    success=false;
    setofErrors(password,"password is required")
}
else if(passwordval.length<8){
    success=false;
    setofErrors(password,"password must be atlest 8 character")

}
else{
    setofSuccess(password)
}
return success; 
}

function setofErrors(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector(".error")

    errorElement.innerText=message;
    inputGroup.classList.add("error") 
    inputGroup.classList.remove("success")

}

function setofSuccess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector(".error")

    errorElement.innerText="";
    inputGroup.classList.remove("error") 
    inputGroup.classList.add("success")

}

const validateemail=(email)=>{
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (regex.test(email)) {
 return String(email)
}

}

