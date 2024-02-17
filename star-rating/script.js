const stars = document.querySelectorAll('.star');
const rating = document.querySelector('.rating');

stars.forEach((elm) => {
    elm.addEventListener('click', (e) =>{
        rating.textContent = `You Rated ${e.target.dataset.value} stars.`;
    })

})
