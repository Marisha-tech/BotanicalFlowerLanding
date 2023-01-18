/*
/!*==============================Animation count==============================*!/
document.addEventListener("DOMContentLoaded", () => {
    const about = document.querySelector(".about");
    const aboutElements = document.querySelectorAll(".about__stats-count");
    const scrollItems = document.querySelectorAll(".scroll__item");

    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY; // центр окна

        scrollItems.forEach(el => {
            let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
            if (windowCenter >= scrollOffset) {
                el.classList.add('active')
                aboutElements.forEach(element => {
                    outNum(+element.innerText, element);
                })
            } else {
                el.classList.remove('active')
            }
        });

        /!* aboutElements.forEach(element => {
             let scrollOffset = element.offsetTop + (element.offsetHeight / 2);
             // console.log(element, 'element');
             // console.log(windowCenter, 'windowCenter');
             // console.log(scrollOffset, 'scrollOffset');
             if (windowCenter >= scrollOffset) {
                 // outNum(+element.innerText, element);
             }
         });*!/
    };

    scrollAnimation();
    window.addEventListener("scroll", () => {
        /!* let scrollTop = window.scrollY // скролл окна
         let aboutCenter = about.scrollHeight / 2 // скрол до блока about

         if (scrollTop >= aboutCenter) {
             aboutElements.forEach(element => {
                 outNum(+element.innerText, element);
             })
         }*!/

        scrollAnimation();
    });
});

function outNum(num, elem) {
    //num - само число, которое будет выводится на сайте
    //elem - элемент, внутри которого это число будет выводиться
    let n = 0; //счетчик
    const time = 1000; //общее время отработки анимации числа
    const step = 1; //шаг с которым будет увеличиваться число

    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
        n = n + step;
        if (n === num) {
            clearInterval(interval);
        }
        elem.innerHTML = n;
    }, t);
}*/
