const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');


toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    toggle.firstElementChild.classList.toggle('fa-times');
    navigation.classList.toggle('active');
});