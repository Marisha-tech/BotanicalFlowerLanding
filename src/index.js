import './index.html';
import './index.scss';
import '../src/js/menu';
import '../src/js/stat';
import '../src/js/slider';
import '../src/js/animation';
import '../src/js/modal';


/*==============================Scroll Up==============================*/
const offset = 100;
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
const pathLength = scrollUpSvgPath.getTotalLength();
const menuBtn = document.querySelector('.menu__btn');

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

//подсчет заливки
const updateDashoffset = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const dashoffset = pathLength - (getTop() * pathLength / height);
    scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

window.addEventListener('scroll', () => {
    updateDashoffset();

    if (getTop() > offset) {
        scrollUp.classList.add('scroll-up--active');
        menuBtn.classList.add('menu__btn--bg');
    } else {
        scrollUp.classList.remove('scroll-up--active');
        menuBtn.classList.remove('menu__btn--bg');
    }
});

//скролл
scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
