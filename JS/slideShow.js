window.onload = () => {
    var slides = document.querySelector('.slides');
    var slide = document.querySelectorAll(".slide");
    const nextBtn = document.getElementById('btn-angle-right');
    const preBtn = document.getElementById('btn-angle-left');
    const dot = document.querySelectorAll(".dot");
    const animate = document.querySelectorAll(".animated");
    const textAnimate = document.querySelectorAll(".text-animate");

    let slideIndex = 1;
    
    slides.style.width = slide.length * 100  + "%";

    let size = slide[0].clientWidth;
    window.addEventListener('resize', ()=> {
        size = slide[0].clientWidth;
        slides.style.transform = 'translateX(' + ( -size * slideIndex) + 'px)';
        slides.style.transition = "none";
    });
    
    function switchDot() {
        for (var i = 0; i < dot.length; i++) {
            dot[i].id = dot[i].id.replace("active", "");
        }
        if(slideIndex == 2 || slideIndex == 4) {
            dot[1].id += "active";
        }
        else {
            dot[0].id += "active";
        }
    }

    slides.style.transform = 'translateX(' + ( -size * slideIndex) + 'px)';
    //let loop = setInterval(showSlides,5000);

    function resetInterval() {
        clearInterval(loop);
        loop = setInterval(showSlides,5000);
    }

    function addAnimation() {
        for (var j = 0; j < textAnimate.length; j++) {
            textAnimate[j].style.display = "none";
        }
        if(slideIndex == 3) {
            textAnimate[slideIndex-2].style.display= "";
        }
        if(slideIndex == 0) {
            textAnimate[slideIndex + 2].style.display= "";
        }
         textAnimate[slideIndex].style.display= "";
    }
    addAnimation();

    function showSlides() {
        slides.style.transition = "transform 0.6s ease-in-out";
        slideIndex++;
        slides.style.transform = 'translateX(' + ( -size * slideIndex) + 'px)';  
    }
    function reAnimation() {
        for(var i = 0; i < animate.length ; i++) {
            animate[i].style.animation = "none";
            //animate[i].offsetHeight;
            animate[i].style.animation = null;
        }
    }
    nextBtn.addEventListener('click',() => {
        if(slideIndex >= slide.length - 1) return;
        slides.style.transition = "transform 0.6s ease-in-out";
        slideIndex++;
        slides.style.transform = 'translateX(' + ( -size * slideIndex) + 'px)';
        resetInterval();
    });

    preBtn.addEventListener('click',() => {
        if(slideIndex <= 0) return;
        slides.style.transition = "transform 0.6s ease-in-out";
        slideIndex--;
        slides.style.transform = 'translateX(' + ( -size * slideIndex) + 'px)';
        resetInterval();
    });

    slides.addEventListener('transitionstart',()=> {
        console.log(slideIndex);
        switchDot();
        if(slideIndex >= slide.length) {
            slides.style.transition = "none";
            slideIndex = 1;
            slides.style.transform = 'translateX(' + (-size * slideIndex) + 'px)';
        }

    });

    slides.addEventListener('transitionend', () => {
        addAnimation();
        reAnimation();
        if(slide[slideIndex].id == "firstClone") {
            slides.style.transition = "none";
            slideIndex = slide.length - slideIndex;
            slides.style.transform = 'translateX(' + (-size * slideIndex) + 'px)';
        }
        if(slide[slideIndex].id === "lastClone") {
            slides.style.transition = "none";
            slideIndex = slide.length - 2;
            slides.style.transform = 'translateX(' + (-size * slideIndex) + 'px)';
        }
    });

    dot[0].addEventListener('click', ()=> {
        if(slideIndex == 1 || slideIndex == 3) return;
        if(slideIndex <= 0) return;
        slides.style.transition = "transform 0.6s ease-in-out";
        slideIndex--;
        slides.style.transform = 'translateX(' + ( -size * slideIndex) + 'px)';
        resetInterval();
    });
    dot[1].addEventListener('click', ()=> {
        if(slideIndex == 2 || slideIndex == 4) return;
        if(slideIndex >= slide.length - 1) return;
        slides.style.transition = "transform 0.6s ease-in-out";
        slideIndex++;
        slides.style.transform = 'translateX(' + ( -size * slideIndex) + 'px)';
        resetInterval();
    });
}

