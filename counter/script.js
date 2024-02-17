let finalvalue = 0;
const counterValue = document.querySelector('.value');
const btns  = document.querySelectorAll('.buttons');

btns.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.classList[0] === "increase"){
            finalvalue++;
        }
        else if(e.target.classList[0] === "decrease"){
            finalvalue--;
        }
        else{
            finalvalue = 0;
        }
        counterValue.textContent = finalvalue;

        if(finalvalue > 0){
            counterValue.style.color = "green";
        }
        else if(finalvalue < 0){
            counterValue.style.color = "red";
        }
        else{
            counterValue.style.color = "black";
        }
    })
})



