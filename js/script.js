// Global variables
const currentImg = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;

// Creating a forEach loop for thumbnail images with an EventListener with ES6 syntax
imgs.forEach(img => 
    img.addEventListener('click', imgClick)
);

// Creating a image click function
function imgClick(thumbnail) {
    // Reset the opacity every time the fuction runs
    imgs.forEach(img => (img.style.opacity = 1));
    // Change current image to clicked src image
    currentImg.src = thumbnail.target.src;
    // Add animation CSS class
    currentImg.classList.add('fade-in');
    //Remove animation CSS class after 0.5 sec
    setTimeout(() => currentImg.classList.remove('fade-in'), 500);
    // Change the opacity
    thumbnail.target.style.opacity = opacity;
}

