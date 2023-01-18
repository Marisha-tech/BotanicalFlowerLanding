const titleModal = document.querySelector('.modal__title');
const modalWindow = document.querySelector('.modal')
const infoModal = [
    {
        title: 'Томат',
    },
    {
        title: 'Огурец',
    },
    {
        title: 'Перец',
    },
    {
        title: 'Баклажан',
    },
];

/*function changeTitle(infoModal) {

    infoModal.forEach((el, i) => {
        setTimeout(() => {
            modalWindow.classList.add('_active')
            titleModal.innerHTML = el.title;
            console.log('таймаут в функции');
            setTimeout(() => {
                changeTitle(infoModal)
                console.log('таймаут');
                modalWindow.classList.remove('_active')
            }, 3000)
            // modalWindow.classList.remove('_active')
        }, (i + 1) * 5000);
    });
}*/
// setTimeout(() => {
//     changeTitle(infoModal)
//     console.log('таймаут');
// }, 5000)

// changeTitle(infoModal);


let index = -1;

setInterval((el) => {
    const show = !modalWindow.classList.contains('_active'); // true/ false
    index = (index + show) % infoModal.length;
    el.innerText = infoModal[index].title;
    modalWindow.classList.toggle('_active', show);
}, 5000, document.querySelector('.modal__title'));

