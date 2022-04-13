"use strict";

var single_cart = document.querySelectorAll(".single-cart");
var cart_number = document.getElementById('cart-number');
var cart_product = document.querySelectorAll('.cart-product-sub');
var del_btn = document.querySelectorAll('.delete-btn');
var btn = document.querySelectorAll('.btn');
var price = document.querySelectorAll('.price');
var cart_total = document.querySelectorAll('.cart-total');
var add_to_cart_btn = document.querySelectorAll('.add-to-cart__btn');
cart_number.innerHTML = single_cart.length;

function reset() {
  btn = document.querySelectorAll('.btn');
  single_cart = document.querySelectorAll(".single-cart");
  price = document.querySelectorAll('.price');
  cart_number.innerHTML = single_cart.length;

  for (var k = 0; k < single_cart.length; k++) {
    btn[k].onclick = function () {
      this.parentElement.parentElement.parentElement.remove();
      reset();
    };
  }

  totalCart();
}

function addToCart(el) {
  var product_inf = el.parentElement.parentElement.previousElementSibling;
  var product_img = product_inf.parentElement.previousElementSibling;
  var img_src = product_img.firstElementChild.getAttribute("src");
  var product_name = product_inf.firstElementChild.innerHTML;
  var product_price = product_inf.lastElementChild.innerHTML;
  var div = document.createElement('div');
  div.className = "single-cart";
  var cart_product_html = '<a href="#">' + '<div class="cart-img">' + "<img src=\"".concat(img_src, "\" alt=\"\">") + '</div>' + '<div class="cart-inf">' + "<h5>".concat(product_name, "</h5>") + "<p class=\"price\">".concat(product_price, "</p>") + '</div>' + '<div class="delete-btn">' + "<button type=\"button\" class=\"btn\">" +
  /*onclick = "removeCart(${k});"*/
  '<i class="fas fa-trash-alt"></i>' + '</button>' + '</div>' + '</a>';
  div.innerHTML = cart_product_html;
  cart_product[0].insertBefore(div, single_cart[0]);
  reset();
}

function totalCart() {
  if (price.length == 0) {
    return cart_total[0].innerHTML = '<h5>Tổng tiền :</h5>' + "<span>0 Vn\u0111</span>";
  }

  var total_str = '';

  for (var i = 0; i < price.length; i++) {
    total_str += '+' + price[i].innerHTML;
  }

  total_str = total_str.replace(/ /g, "");
  total_str = total_str.replace(/\./g, "");
  total_str = total_str.replace(/\x/g, "*");
  total_str = total_str.replace(/\Vnđ/g, "");
  cart_total[0].innerHTML = '<h5>Tổng tiền :</h5>' + "<span>".concat(eval(total_str).toLocaleString(), " Vn\u0111</span>");
}

function start() {
  totalCart();

  for (var i = 0; i < add_to_cart_btn.length; i++) {
    add_to_cart_btn[i].onclick = function () {
      addToCart(this);
    };
  }
}

start();