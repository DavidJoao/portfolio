let contactMe = document.getElementById('contact-me')
let fullName = document.getElementById('full-name')
let fullNameInput = document.getElementById('name')
let email = document.getElementById('text-email')
let emailInput = document.getElementById('email')
let phone = document.getElementById('text-phone')
let phoneInput = document.getElementById('phone')
let message = document.getElementById('text-message')
let messageInput = document.getElementById('message')
let submit = document.getElementById('submit')
let messageOne = document.getElementById('hide1')
let messageTwo = document.getElementById('hide2')



function contactMessage(){
    contactMe.classList.add('hide')
    fullName.classList.add('hide')
    fullNameInput.classList.add('hide')
    email.classList.add('hide')
    emailInput.classList.add('hide')
    phone.classList.add('hide')
    phoneInput.classList.add('hide')
    message.classList.add('hide')
    messageInput.classList.add('hide')
    submit.classList.add('hide')

    messageTwo.classList.remove('hide')
    messageOne.classList.remove('hide')
}

submit.addEventListener('click', contactMessage)