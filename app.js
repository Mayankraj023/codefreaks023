// navbar
$(document).ready(function() {
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        if (scroll > 150) {
            $(".navbar").css("background", "#222");
            $(".navbar").css("box-shadow", "rgba(0, 0, 0, 0.1) 0px 4px 12px");
        } else {
            $(".navbar").css("background", "transparent");
            $(".navbar").css("box-shadow", "none");
        }
    });
});
// smooth scroll
let navbarHeight= $(".navbar").outerHeight();
$(".navbar-menu a").click(function(e){
    let targetHref= $(this).attr("href");
    $("html,body").animate({
        scrollTop: $(targetHref).offset().top - navbarHeight
    
    }, 1000)
    e.preventDefault();
});
// navbar mobile version

    // Get the elements for menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

    // Add a click event listener to the menu toggle
    menuToggle.addEventListener("click", function () {
        // Toggle the "active" class on the navbar menu
        navbarMenu.classList.toggle("active");
    });



// swiper
let swiper = new Swiper(".mySwiper",
    {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        }
    })