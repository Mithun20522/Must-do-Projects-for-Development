// Hex Color Generator
const hexvalue = document.querySelector('.generated-hex-color');
const hexBtn = document.querySelector('.hex-btn');
const left = document.querySelector('.left');
const cpyHex = document.querySelector('.cpy-hex');


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


cpyHex.addEventListener('click', () => {
    navigator.clipboard.writeText(hexvalue.textContent)
    .then(() => {
        alert(`${hexvalue.textContent} copied.`)
    })
    .catch(() => {
        alert("something went wrong");
    })
    
});


// RGB Color Generator

const rgbvalue = document.querySelector('.generated-rgb-color');
const rgbBtn = document.querySelector('.rgb-btn');
const right = document.querySelector('.right');
const cpyRgb = document.querySelector('.cpy-rgb');

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


cpyRgb.addEventListener('click', () => {
    navigator.clipboard.writeText(rgbvalue.textContent)
    .then(() => {
        alert(`${rgbvalue.textContent} copied.`)
    })
    .catch(() => {
        alert("something went wrong");
    })
});
