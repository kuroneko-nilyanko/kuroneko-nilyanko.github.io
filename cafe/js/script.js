const button = document.querySelector('.nav-button');
const navList = document.querySelector('.nav-list');

button.addEventListener('click', function () {
    navList.classList.toggle('is-open');
});

const navLinks = document.querySelectorAll('.nav-item a');

navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        navList.classList.remove('is-open');
    });
});