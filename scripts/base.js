const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile_menu');
const body = document.querySelector('body');


burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    body.classList.toggle('hidden');
    headNav.classList.toggle('hidden');
})