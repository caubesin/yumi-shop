"use strict";

var main_img = document.querySelector('.main-img img');
var other_img = document.querySelectorAll('.other-img ul li img');
var ev_star = document.querySelector('.ev_star');
var amount = document.getElementById("amount");
var icon_add = document.querySelector(".icon-add");
main_img.src = other_img[0].getAttribute('src');

function showImg() {
  for (var i = 0; i < other_img.length; i++) {
    other_img[i].onclick = function () {
      if (main_img.getAttribute('src') != this.getAttribute('src')) {
        main_img.src = this.getAttribute('src');
      }

      for (var k = 0; k < other_img.length; k++) {
        other_img[k].removeAttribute('id');
        this.id = 'active-img';
      }
    };
  }
}

icon_add.addEventListener('click', function () {
  amount.value = eval("".concat(amount.value, " + 1"));
});
showImg();