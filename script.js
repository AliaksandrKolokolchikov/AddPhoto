let offset = 0;
const sliderLine = document.querySelector('.slider--line');

document.querySelector('.leftarrow'), addEventListener('click', function () {
    offset = offset + 555;
    sliderLine.style.left = offset + 'px'
})