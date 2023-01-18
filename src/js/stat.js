for (let i of document.querySelectorAll('.about__stats-count')) {
    let numberTop = i.getBoundingClientRect().top;
    let start = +i.innerHTML;
    const end = +i.dataset.max;

    window.addEventListener('scroll', function onScroll() {
        if (window.pageYOffset > numberTop - window.innerHeight / 2) {
            this.removeEventListener('scroll', onScroll);
            let interval = setInterval(function () {
                i.innerHTML = ++start;
                if (start === end) {
                    clearInterval(interval);
                }
            }, 5);
        }
    });
}