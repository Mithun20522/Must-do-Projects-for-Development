const hexvalue = document.querySelector('.generated-hex-color');
const hexBtn = document.querySelector('.hex-btn');
const left = document.querySelector('.left');
hexBtn.addEventListener('click', () => {
    const hexcolor = "0123456789ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++){
        const rndIdx = Math.floor(Math.random()*hexcolor.length);
        color += hexcolor[rndIdx];
    }
    
    hexvalue.textContent = color;
    left.style.backgroundColor = color;

})

const rgbvalue = document.querySelector('.generated-rgb-color');
const rgbBtn = document.querySelector('.rgb-btn');
const right = document.querySelector('.right');

const redVal = document.querySelector('#red');
const greenVal = document.querySelector('#green');
const blueVal = document.querySelector('#blue');

rgbBtn.addEventListener('click', () => {
    const red = redVal.value;
    const green = greenVal.value;
    const blue = blueVal.value;
    const rgbColor = `rgb(${red},${green},${blue})`;

    rgbvalue.textContent = rgbColor;
    right.style.backgroundColor = rgbColor;
})