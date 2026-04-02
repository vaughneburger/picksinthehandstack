let container = document.querySelector('#container');

const fontList = [
  '"Datatype", sans-serif',
  '"Doto", sans-serif',
  '"Idiqlat", sans-serif',
  '"Noto Sans Linear A", sans-serif',
  '"Noto Sans Mahajani", sans-serif',
  '"Noto Sans Meroitic", sans-serif',
  '"Noto Sans Syriac Western", sans-serif',
  '"Playwrite DK Uloopet Guides", cursive',
  '"Shizuru", cursive',
  '"Tirra", sans-serif',
  'Helvetica, Arial, sans-serif',
  '"Helvetica Neue", Helvetica, Arial, sans-serif',
  'Arial, Helvetica, sans-serif',
  '"Arial Nova", Arial, Helvetica, sans-serif',
  '"Nimbus Sans", Helvetica, Arial, sans-serif',
  '"Liberation Sans", Arial, Helvetica, sans-serif',
  '"TeX Gyre Heros", Helvetica, Arial, sans-serif',
  'Inter, Helvetica, Arial, sans-serif',
  'Roboto, Helvetica, Arial, sans-serif',
  '"Segoe UI", Helvetica, Arial, sans-serif'
];

// HELPER FUNCTIONS

function resetAllStyles() {
    container.removeAttribute('class'); // remove all previous classes
    container.removeAttribute('style'); // remove all previous styles
}

function getRandomNumber(min, max) {
    let range = max-min;
    return (Math.random() * range) + min
}

function getRoundedRandomNumber(min, max) {
    let range = max-min;
    return Math.floor( (Math.random() * range) + min )
}

// EXAMPLES

function example1() {
    resetAllStyles();
    container.style.fontSize = getRandomNumber(10, 100) + "px";
    container.style.color = "rgb(" + getRoundedRandomNumber(0, 255) + "," + getRoundedRandomNumber(0, 255) + "," + getRoundedRandomNumber(0, 255) + ")";
}

function example2() {
    resetAllStyles();
    container.classList.add('example2');
}

// WRITE YOUR JAVASCRIPT CODE BELOW!

function something1() {
    resetAllStyles();
    container.style.transition = getRandomNumber(0.01, 5) + "s";
    container.style.fontFamily = fontList[Math.floor(Math.random() * fontList.length)];
    container.style.fontSize = getRandomNumber(10, 20) + "px";
    container.style.transform = "rotate(" + getRandomNumber(-180, 360) + "deg)"; 

}

function something2() {
    resetAllStyles();
    container.classList.add('something2')
}