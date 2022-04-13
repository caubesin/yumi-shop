let main_img = document.querySelector('.main-img img');
let other_img = document.querySelectorAll('.other-img ul li img');
let ev_star = document.querySelector('.ev_star');
let amount = document.getElementById("amount");
let icon_add = document.querySelector(".icon-add");
let icon_remove = document.querySelector('.icon-remove');
let limit = document.querySelector('.amount-ip p span').innerHTML;
let vote_star = document.querySelectorAll('.vote-star ul li');


main_img.src = other_img[0].getAttribute('src');

function showImg() {
    for(var i = 0; i < other_img.length; i++) {
        other_img[i].onclick = function() {
            if(main_img.getAttribute('src') != this.getAttribute('src')) {
                main_img.src = this.getAttribute('src');
            }
            for(var k = 0; k < other_img.length; k++) {
                other_img[k].removeAttribute('id');
                this.id = 'active-img';
            }
        }
    }
}


function add_cls_disable(val) {
    if(val == 1) {
        icon_remove.firstElementChild.className = 'disable';
        return;
    }
    if(val == limit) {
        icon_add.firstElementChild.className = 'disable';
        return;
    }
        icon_remove.firstElementChild.className = '';
        icon_add.firstElementChild.className = '';
}

icon_add.addEventListener('click', () => {
    if(amount.value == limit) {
        return;
    }
    amount.value = eval(`${amount.value} + 1`);
    add_cls_disable(amount.value);
});

icon_remove.addEventListener('click', () => {
    if(amount.value == 1) {
        return;
    }
    amount.value = eval(`${amount.value} - 1`);
    add_cls_disable(amount.value);
});

amount.addEventListener('keypress',(event) => {
    var regex = /[0-9]/;
    if(!regex.test(String.fromCharCode(event.keyCode))) {
        event.preventDefault();
        amount.value = 1;
    }
    if(amount.value == '' && Number(String.fromCharCode(event.keyCode)) <= limit) {
        add_cls_disable(amount.value + Number(String.fromCharCode(event.keyCode)));
        return;
    }
    console.log(amount.value + Number(String.fromCharCode(event.keyCode)));
    if((amount.value + Number(String.fromCharCode(event.keyCode))) > limit) {
        event.preventDefault();
        return;
    }
    
    add_cls_disable(amount.value + Number(String.fromCharCode(event.keyCode)));
});

function resetVote() {
    for(var y = 0; y < vote_star.length; y++) {
        vote_star[y].style.background = '#EEEEEE';
        vote_star[y].innerHTML = `${vote_star[y].value}<i class="fal fa-star"></i>`;
        vote_star[y].removeAttribute('class');
    }
}

function voteStart() {
    for(var k = 0; k < vote_star.length; k++) {
        vote_star[k].onclick = function() {
            if(this.className == 'vote-active') {
                resetVote();
                return;
            }
            resetVote();
            this.className = 'vote-active';
            this.style.background = '#E6EEF7';
            this.innerHTML = `<i id = "stick" class="fal fa-check"></i>${this.value}<i class="fas fa-star"></i>`;
        }
    }
}




/*---------call function-------------*/

voteStart();
add_cls_disable();
showImg();





