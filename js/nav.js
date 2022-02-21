const headerToggle = document.querySelector ('.header-toggle'); //кнопка
const headerEl = document.querySelector ('.header');
const bodyEl = document.querySelector ('.body');


headerToggle.addEventListener('click', function(){
    if (headerEl.classList.contains('header--nav-opened')) {
        headerEl.classList.remove('header--nav-opened');
        headerEl.classList.add('header--nav-closed');
        bodyEl.classList.remove('body-hidden');
    } else {
        headerEl.classList.add('header--nav-opened');
        headerEl.classList.remove('header--nav-closed');
        bodyEl.classList.add('body-hidden');
    }
});

window.onresize = () => {
    if (window.innerWidth >= 992) {
        headerEl.classList.remove('header--nav-opened');
        headerEl.classList.remove('header--nav-closed');
        bodyEl.classList.remove('body-hidden');
    }
}

