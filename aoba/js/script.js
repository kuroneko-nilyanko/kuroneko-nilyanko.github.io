const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', function () {
    nav.classList.toggle('is-open');
});

const navLinks = document.querySelectorAll('.nav-list a');

navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        nav.classList.remove('is-open');
    });
});