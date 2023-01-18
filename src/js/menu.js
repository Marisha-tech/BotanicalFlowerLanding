const menu = document.querySelector('.menu__body');
const menuBtn = document.querySelector('.menu__btn');
const menuIcon = document.querySelector('.menu__icon');

const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener('click', (e) => {
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');
        menuIcon.classList.toggle('active');
        body.classList.toggle('lock');
    });

    menu.addEventListener('click', evt => {
        if (evt.target.classList.contains('menu__body')) {
            menu.classList.remove('active');
            menuBtn.classList.remove('active');
            menuIcon.classList.remove('active');
            body.classList.remove('lock');
        }
    });

    menu.querySelectorAll('.menu__link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            menuBtn.classList.remove('active');
            menuIcon.classList.remove('active');
            body.classList.remove('lock');

        });
    });
}


const anchors = document.querySelectorAll('a[href*="#"]');
anchors.forEach(anchor => {
    anchor.addEventListener('click', evt => {
        evt.preventDefault();

        const sectionId = anchor.getAttribute('href').substring(1);

        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth', // плавны переход
            block: 'start' //переход к началу блока
        });
    });
});