const accordianContent = document.querySelectorAll(".accordian-content");


// CASE-1 when user can open multiple tabs 
function multiOpen(accordianContent){
    accordianContent.forEach((item) => {
        const question = item.querySelector('.question');
        const answer = item.querySelector('.answer');
        const show = item.querySelector('.show');
    
        show.addEventListener('click', (e) => {
            const res = answer.classList.toggle('active');
            if(res){
                answer.style.display = "block";
                show.textContent = "-";
            }
            else{
                answer.style.display = "none";
                show.textContent = "+";
            }
        })
    })
}


// CASE-1 when user can open only one tab at a time 
function singleOpen(accordianContent){
    accordianContent.forEach((item) => {
        const question = item.querySelector('.question');
        const answer = item.querySelector('.answer');
        const show = item.querySelector('.show');
    
        show.addEventListener('click', (e) => {
            const res = answer.classList.toggle('active');
            if(res){
                answer.style.display = "block";
                show.textContent = "-";
            }
            else{
                answer.style.display = "none";
                show.textContent = "+";
            }
    
            accordianContent.forEach((otherItem) => {
                if(otherItem !== item){
                    otherItem.querySelector('.answer').style.display = "none";
                    otherItem.querySelector('.show').textContent = "+";
                    otherItem.querySelector('.answer').classList.remove('active');
                }
            })
        })
    })
}


singleOpen(accordianContent);
// multiOpen(accordianContent);

