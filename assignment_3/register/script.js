console.log("hello")
let form = document.querySelector('form')
let email = document.querySelector('.einput')
let pass = document.querySelector('.pinput')
let ph_number = document.querySelector('.number-input')
let name = document.querySelector('.name-input')
let email_error = document.querySelector('.email-error') 
let pass_error = document.querySelector('.pass-error') 
let tick = document.querySelector('.tick')
let tick2 = document.querySelector('.tick2')
let evalue = ""
let pvalue = ""
console.log(form)

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents page reload
    
    // Get the current value from the input elements
    let currentEmail = email.value; 
    let currentPassword = pass.value;
    let currentName = name.value;
    let currentPhone = ph_number.value;

    if(currentEmail.trim() === "") {
        email.style.border = '2px solid red'
        email_error.style.display = 'block'
    }
    if(currentEmail.includes('@')) {
        email.style.border = '2px solid green'
        email_error.style.display = 'none'
        tick.style.display = 'block'
    }

    if(currentPassword.trim().length < 6) {
        pass.style.border = '2px solid red'
        pass_error.style.display = 'block'
        tick.style.display = 'none'
    } 
    else {
        pass.style.border = '2px solid green'
        pass_error.style.display = 'none'
        tick2.style.display = 'block'
    }

    

});

