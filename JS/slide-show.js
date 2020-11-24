var slideIndex = 0;
window.onload = () => {
    showSlides();
}
function showSlides() {
    var i;
    var slides = document.querySelectorAll(".slide");
    var dots = document.querySelectorAll('.dot');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
    slideIndex++;
    if (slideIndex > slides.length - 1) {
        slideIndex = 0
    }
}
setInterval(showSlides,10000);
function currentSlide(n) {
    showSlides(slideIndex = n);
}





