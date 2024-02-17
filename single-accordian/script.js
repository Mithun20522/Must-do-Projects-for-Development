const accordianContent = document.querySelectorAll(".accordian-content");

const len = accordianContent.length;

for(let i=0;i<len;i++){
    const question = accordianContent[i].querySelector('.question');
    const answer = accordianContent[i].querySelector('.answer');
    const show = accordianContent[i].querySelector('.show');

    show.addEventListener("click", () => {
        answer.classList.toggle('show-answer');
        if(answer.classList.contains('show-answer')){
            answer.style.display = "block";
            show.textContent = "-";
        }
        else{
            answer.style.display = "none";
            show.textContent = "+";
        }
    })

    answer.style.display = "none";
    show.textContent = "+";

}