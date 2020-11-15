const buttons = document.querySelectorAll('#popup-button');
const modal = document.querySelector('.modal-wrapper');
buttons.forEach(button => {
    button.addEventListener('click', () => modal.classList.toggle('open'))
});