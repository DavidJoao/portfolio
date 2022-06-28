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

let firstPage = document.getElementById('first-page')
let firstPageOutline = document.getElementById('first-pageoutline')
let secondPage = document.getElementById('second-page')
let secondPageOutline = document.getElementById('second-pageoutline')
let thirdPage = document.getElementById('third-page')
let thirdPageOutline = document.getElementById('third-pageoutline')
let lightSwitch = document.getElementById('light-mode')
let check = document.getElementById('check');
let modeText = document.getElementById('text-mode')

let enlargePhoto = document.getElementById('largePhoto')
let textImage = document.getElementById('textImage')
let tamagotchi = document.getElementById('tama')
let ticTacToe = document.getElementById('tictac')
let pixart = document.getElementById('pixart')
let pixartDescription = document.getElementById('first-description')
let tamaDescription = document.getElementById('second-description')
let tictacDescription = document.getElementById('third-description')



//FIRST JAVASCRIPT ACTION: SHOW SECOND PART OF CONTACT FORM
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

//SECOND JAVASCRIPT ACTION: LIGHT MODE AND DARK MODE
function handleLightMode(){
    if(event.target.checked) {
        modeText.style.color = 'black';
        modeText.innerHTML = 'Switch to Dark Mode'
        firstPageOutline.style.backgroundImage = "linear-gradient(#9e9e9e, #ffffff)";
        secondPageOutline.style.backgroundImage = "linear-gradient(#9e9e9e, #ffffff)";
        thirdPageOutline.style.backgroundImage = "linear-gradient(#9e9e9e, #ffffff)";
        firstPage.style.backgroundImage = "url('https://thumbs.dreamstime.com/b/modern-minimal-white-random-shifted-honeycomb-hexagon-geometrical-pattern-background-flat-lay-top-view-above-d-illustration-201435921.jpg')"
        secondPage.style.backgroundImage = "url('https://thumbs.dreamstime.com/b/modern-minimal-white-random-shifted-honeycomb-hexagon-geometrical-pattern-background-flat-lay-top-view-above-d-illustration-201435921.jpg')"
        thirdPage.style.backgroundImage = "url('https://thumbs.dreamstime.com/b/modern-minimal-white-random-shifted-honeycomb-hexagon-geometrical-pattern-background-flat-lay-top-view-above-d-illustration-201435921.jpg')"
    } else {
        modeText.style.color = 'white';
        modeText.innerHTML = 'Switch to Light Mode'
        firstPageOutline.style.backgroundImage = "linear-gradient(#9e9e9e, #273036)";
        secondPageOutline.style.backgroundImage = "linear-gradient(#9e9e9e, #273036)";
        thirdPageOutline.style.backgroundImage = "linear-gradient(#9e9e9e, #273036)";
        firstPage.style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/109/664/851/black-texture-wallpaper-preview.jpg')"
        secondPage.style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/109/664/851/black-texture-wallpaper-preview.jpg')"
        thirdPage.style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/109/664/851/black-texture-wallpaper-preview.jpg')"
    }
}

//THIRD JAVASCRIPT ACTION: GALLERY FOR PROJECTS 
function myGallery(photos){
    enlargePhoto.src = photos.src;
    textImage.innerHTML = photos.alt;
    enlargePhoto.parentElement.style.display = 'block';
}
function showTamagotchi(){
    tamaDescription.classList.remove('hide');
    pixartDescription.classList.add('hide');
    tictacDescription.classList.add('hide');
}
function showTicTac(){
    tamaDescription.classList.add('hide');
    pixartDescription.classList.add('hide');
    tictacDescription.classList.remove('hide');
}
function showPixart(){
    tamaDescription.classList.add('hide');
    pixartDescription.classList.remove('hide');
    tictacDescription.classList.add('hide');
}


pixart.addEventListener('click', showPixart)
ticTacToe.addEventListener('click', showTicTac)
tamagotchi.addEventListener('click', showTamagotchi)
check.addEventListener('click', handleLightMode);
submit.addEventListener('click', contactMessage)