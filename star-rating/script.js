const stars = document.querySelectorAll('.star');
const rating = document.querySelector('.rating');

let curr = 0;
stars.forEach((elm) => {
    elm.addEventListener('click', (e) =>{
        rating.textContent = `You Rated ${e.target.dataset.value} stars.`;
        colortheStars(e.target.dataset.value);
    })

    elm.addEventListener('mouseover', (e) => {
        colortheStars(e.target.dataset.value);
    })

    elm.addEventListener('mouseout', (e) => {
        stars.forEach(star => star.classList.remove('highlight'));
        rating.textContent = "You Rated: 0";
    })

})

function colortheStars(value){
    stars.forEach(star => star.classList.remove('highlight'));

    stars.forEach((star, idx) => {
        if(idx < value){
            star.classList.add('highlight');
        }
        
    })
}