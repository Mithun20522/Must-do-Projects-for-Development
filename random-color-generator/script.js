const hexvalue = document.querySelector('.generated-hex-color');
const hexBtn = document.querySelector('.hex-btn');
const main = document.querySelector('.left');
hexBtn.addEventListener('click', () => {
    const hexcolor = "0123456789ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++){
        const rndIdx = Math.floor(Math.random()*hexcolor.length);
        color += hexcolor[rndIdx];
    }
    
    hexvalue.textContent = color;
    main.style.backgroundColor = color;

})