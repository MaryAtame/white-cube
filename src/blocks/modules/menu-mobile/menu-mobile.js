const burgerIcon = document.querySelector('.menu-burger');
const navbody = document.querySelector('.menu-mobile');

burgerIcon.addEventListener("click", burgerhandler);

function burgerhandler(e) {
    e.preventDefault();
    burgerIcon.classList.toggle('active');
    navbody.classList.toggle('active');

}