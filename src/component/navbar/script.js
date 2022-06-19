// Navbar fixed
Window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger line
const burger = document.querySelector('#burger');

burger.addEventListener('click', function(){
    burger.classList.toggle('Hamburger-active');
})