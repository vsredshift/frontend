const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
const text = document.querySelector('.text');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuToggle.firstElementChild.classList.toggle('fa-times');
    showcase.classList.toggle('active');
    text.classList.toggle('hide');
});
