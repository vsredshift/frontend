<<<<<<< HEAD
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
const text = document.querySelector('.text');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuToggle.firstElementChild.classList.toggle('fa-times');
    showcase.classList.toggle('active');
    text.classList.toggle('hide');
});
=======
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuToggle.firstElementChild.classList.toggle('fa-times');
    showcase.classList.toggle('active');
});
>>>>>>> b5ba0b584cfafcd5e6cdd3e000c23f37e0ae6e7f
