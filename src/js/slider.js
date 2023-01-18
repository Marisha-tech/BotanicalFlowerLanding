/*==============================Slider==============================*/
let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;

const container = document.querySelector('.slider-container');
// const container = document.querySelector('.slider-wrapper')
const track = document.querySelector('.slider-track');
// const item = document.querySelector('.slider-item')
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length;
// ширина каждого элемента
const itemWidth = container.clientWidth / slidesToShow;

const movePosition = slidesToScroll * itemWidth;

const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    let itemsLength = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLength >= slidesToScroll ? movePosition : itemsLength * itemWidth;

    setPosition();
    checkBtns();
});


btnPrev.addEventListener('click', () => {
    let itemsLength = Math.abs(position) / itemWidth;
    position += itemsLength >= slidesToScroll ? movePosition : itemsLength * itemWidth;

    setPosition();
    checkBtns();
});


const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();

//Таймер, (чтобы было удобнее считать время) можно удалить
// let seconds = 5;
// setInterval(() => {
//     seconds = seconds - 1;
//     if (!seconds) {
//         seconds = 5;
//     }
//     document.getElementById("timeVisual").innerHTML = seconds
// }, 1000)