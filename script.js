let openPopUp = document.querySelector('#open_pop_up')
let closePopUp = document.querySelector('#pop_up_close')
let popUp = document.querySelector('#pop_up')

openPopUp.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})
