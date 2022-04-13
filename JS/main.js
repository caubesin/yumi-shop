let register = document.querySelector('.cart-user ul li:first-child');
let login = document.querySelector('.cart-user ul li:last-child');
let popup = document.querySelector('.popup');
let close_popup = document.querySelector('.popup-close');
let current_button = document.querySelectorAll('.main-popup-inf__header button');
let inp = document.querySelectorAll('.main-form input');
let leb = document.querySelectorAll('.main-form label');

popup.style.height = window.innerHeight + 'px';

window.addEventListener('resize', () => {
    popup.style.height = window.innerHeight + 'px';
})

function showCurrent_btn(current_page) {
    popup.style.display = 'flex';
    for(var i = 0; i < current_button.length; i++) {
        current_button[i].onclick = function() {
            this.id = 'button-active';
            console.log(this)
        }
    }
}

close_popup.addEventListener('click',() => {
    popup.style.display = 'none';
});

login.addEventListener('click', () =>{
    showCurrent_btn(0);
});

register.addEventListener('click', () => {
    showCurrent_btn(1);
});