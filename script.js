const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page3Animation() {
    let fixedImg = document.querySelector(".fixed-image");
    let elemCont = document.querySelector(".elem-container");

    elemCont.addEventListener("mouseenter", function () {
        fixedImg.style.display = "block";
    })

    elemCont.addEventListener("mouseleave", function () {
        fixedImg.style.display = "none";
    })

    let elems = document.querySelectorAll(".elem");
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            let image = e.getAttribute("data-image");
            fixedImg.style.backgroundImage = `url(${image})`;
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}

function menuAnimation() {
    let menu = document.querySelector("nav h3");
    let full = document.querySelector(".full-scr");
    let navImg = document.querySelector("nav img");
    var flag = 0;

    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0;
            navImg.style.opacity = 0;
            flag = 1;
        } else {
            full.style.top = "-100%";
            navImg.style.opacity = 1;
            flag = 0;
        }
    })
}

swiperAnimation();
page3Animation();
menuAnimation();
