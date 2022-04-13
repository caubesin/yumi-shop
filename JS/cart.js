let single_cart = document.querySelectorAll(".single-cart");
let cart_number = document.getElementById('cart-number');
let cart_product = document.querySelectorAll('.cart-product-sub');
let del_btn = document.querySelectorAll('.delete-btn');
let btn = document.querySelectorAll('.btn');
let price = document.querySelectorAll('.price');
let cart_total = document.querySelectorAll('.cart-total');
let add_to_cart_btn = document.querySelectorAll('.add-to-cart__btn');




cart_number.innerHTML = single_cart.length;

function  reset() {
    btn = document.querySelectorAll('.btn');
    single_cart = document.querySelectorAll(".single-cart");
    price = document.querySelectorAll('.price');
    cart_number.innerHTML = single_cart.length;
    for(var k = 0; k < single_cart.length; k++) {
        btn[k].onclick = function() {
           this.parentElement.parentElement.parentElement.remove();
           reset();
        };
    }
    empty_cart();
    totalCart();
}

function addToCart(el) {
    let product_inf = el.parentElement.parentElement.previousElementSibling;
    let product_img = product_inf.parentElement.previousElementSibling;
    let img_src = product_img.firstElementChild.getAttribute("src");
    let product_name = product_inf.firstElementChild.innerHTML;
    let product_price = product_inf.lastElementChild.innerHTML;
    let div = document.createElement('div');
    div.className = "single-cart";
    let cart_product_html = '<a href="#">' +
                                '<div class="cart-img">' +
                                    `<img src="${img_src}" alt="">` +
                                '</div>' +
                                '<div class="cart-inf">' +
                                    `<h5>${product_name}</h5>` +
                                    `<p class="price">${product_price}</p>` +
                                '</div>' +
                                '<div class="delete-btn">' +
                                    `<button type="button" class="btn">` + /*onclick = "removeCart(${k});"*/
                                        '<i class="fas fa-trash-alt"></i>' +
                                    '</button>' +
                                '</div>'+
                            '</a>';

    div.innerHTML = cart_product_html;
    cart_product[0].insertBefore(div,single_cart[0]);
    reset();
}

function totalCart() {
    if(price.length == 0) {
        /*cart_product.innerHTML = '<img src = "../Img/cart-img.png">' +
                                    '<p>Giở hàng rỗng</p>';*/
        cart_total[0].innerHTML = '<h5>Tổng tiền :</h5>' + `<span>0 Vnđ</span>`;
        return;
    }
    let total_str = '';
    for(var i = 0; i < price.length; i++) {
        total_str += '+' + price[i].innerHTML;
    }
    total_str = total_str.replace(/ /g,"");
    total_str = total_str.replace(/\./g,"");
    total_str = total_str.replace(/\x/g,"*");
    total_str = total_str.replace(/\Vnđ/g,"");
    cart_total[0].innerHTML = '<h5>Tổng tiền :</h5>' + `<span>${eval(total_str).toLocaleString()} Vnđ</span>`;
}

function empty_cart() {
    let el_cart = '<img src = "../Img/cart-img.png">' +
                    '<p>Giở hàng rỗng</p>';
    let el_div_cart = document.createElement('div');
    el_div_cart.className = 'empty-cart';
    el_div_cart.innerHTML = el_cart;
    if(single_cart.length == 0) {
        cart_product[0].insertBefore(el_div_cart,single_cart[0]);
        return;
    }
    if(cart_total[0].firstElementChild.className = 'empty-cart') {
        cart_product[0].firstElementChild.remove();
    }
}


function start() {
    empty_cart();
    totalCart();
    for(var i = 0 ; i < add_to_cart_btn.length; i++) {
        add_to_cart_btn[i].onclick = function() {
            addToCart(this);
        }
    }
}

start();


