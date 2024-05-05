// Function to generate a random color
const ramdomcolour = function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
let intervalId;

const startChangecolor = function(){
    if(!intervalId ){
        intervalId =   setInterval(changebgcolor,1000)
    }
   
function changebgcolor(){document.body.style.backgroundColor = ramdomcolour();}

}
const stopchangecolor = function(){
    clearInterval(intervalId)
    intervalId = null;
}

document.querySelector('#start').addEventListener('click',startChangecolor)

document.querySelector('#stop').addEventListener('click' ,stopchangecolor)