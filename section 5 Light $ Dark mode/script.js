
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('iamge1');
const image2 = document.getElementById('iamge2');
const image3 = document.getElementById('iamge3');
const textBox = document.getElementById('text-box');

// Dark or light Images
function imageMode(color) {
    image1.src = `undraw_relaxation_re_ohkx.svg`;
    image2.src = `undraw_trip_re_f724.svg`;
    image3.src=`undraw_ride_a_bicycle_re_6tjy.svg`;

}

// Dark Mode Styles
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor= 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    imageMode('dark');
}



// Light Mode Styles
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor= 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    imageMode('light');
}

// Switch Theme Dynamically
function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme','dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme','light');
        lightMode();
    }
}

// Event Listner 
toggleSwitch.addEventListener('change',switchTheme);


// check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme',currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    }
}