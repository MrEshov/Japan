(function (){
const header = document.querySelector('.header');
window.onscroll = () => {
    if (window.pageYOffset > 50){
        header.classList.add('header__active')
    }
    else {
        header.classList.remove('header__active')
    }
};
})();
const nav = document.querySelector('.header__nav');
const burger = document.querySelector('.header__burger');
const close = document.querySelector('.header__nav-close');

burger.addEventListener('click', () => {
    nav.style.display = 'block';
});

close.addEventListener('click', () => {
    nav.style.display = 'none';
});
