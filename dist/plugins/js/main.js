(function ($) {
    "use strict";

    $(document).ready(function () {
        // Sticky Header & Scroll Effects
        $(window).on("scroll", function () {
            var scroll = $(window).scrollTop();

            if (scroll < 400) {
                $(".ab-sticky-header").removeClass("ab-sticky-active");
            } else {
                $(".ab-sticky-header").addClass("ab-sticky-active");
            }

            if (scroll > 250) {
                $("#header-sticky").addClass("sticky");
            } else {
                $("#header-sticky").removeClass("sticky");
            }
        });

       // Clone main menu and append to hamburger nav
       var abHamburger = $(".ab-mobile-menu-active > ul").clone();
       var abHamburgerMenu = $(".ab-hamburger-menu nav");

       if (abHamburgerMenu.find("ul").length === 0) {
           abHamburgerMenu.append(abHamburger);
       }

       // Add toggle buttons to submenus
       $(".ab-hamburger-menu nav .sub-menu").parent().each(function () {
           if (!$(this).find(".ab-menu-close").length) {
               $(this).append('<button class="ab-menu-close"><i class="fas fa-chevron-right"></i></button>');
           }
       });

       // Toggle submenus
       $(".ab-hamburger-menu").on("click", ".ab-menu-close, .menu-item-children > a", function (e) {
           e.preventDefault();
           var parent = $(this).parent();

           if (!parent.hasClass("active")) {
               parent.addClass("active");
               parent.children(".sub-menu").slideDown();
           } else {
               parent.removeClass("active");
               parent.children(".sub-menu").slideUp();
           }
       });

       // Open hamburger menu
       $(".ab-hamburger-toogle").on("click", function () {
           $(".ab-hamburger").addClass("ab-hamburger-open");
           $(".ab-hamburger-overlay").addClass("ab-hamburger-overlay-open");
           $(this).hide(); // Hide toggle after opening
       });

       // Close hamburger menu
       $(".ab-hamburger-close-toggle, .ab-hamburger-overlay").on("click", function () {
           $(".ab-hamburger").removeClass("ab-hamburger-open");
           $(".ab-hamburger-overlay").removeClass("ab-hamburger-overlay-open");

           if ($(window).width() <= 991) {
               $(".ab-hamburger-toogle").fadeIn(); // Show toggle again on close (only for mobile)
           }
       });

       // Responsive handler
       function toggleMenu() {
           if ($(window).width() <= 991) {
               $(".ab-hamburger-toogle").show();
               $(".ab-main-menu").hide();
           } else {
               $(".ab-hamburger-toogle").hide();
               $(".ab-main-menu").show();
               $(".ab-hamburger").removeClass("ab-hamburger-open");
               $(".ab-hamburger-overlay").removeClass("ab-hamburger-overlay-open");
           }
       }

       toggleMenu();
       $(window).on("resize", toggleMenu);


       /*----------------------------------------
		  Title Animation
		-----------------------------------------*/
		let char_come = gsap.utils.toArray(".title_animated");
        char_come.forEach(splitTextLine => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: splitTextLine,
              start: 'top 90%',
              end: 'bottom 60%',
              scrub: false,
              markers: false,
              toggleActions: 'play none none none'
            }
          });
          const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
          gsap.set(splitTextLine, { perspective: 300 });
          itemSplitted.split({ type: "chars, words" })
          tl.from(itemSplitted.chars,
            {
              duration: 1.2,
              opacity: 0,
              scale: 0,
              y: 60,
              rotationX: 180,
              transformOrigin: "0% 30% -30%",
              stagger: 0.02
            });
        });
        
        

      /*----------------------------------------
        fade in right animation
      -----------------------------------------*/
      let device_width = window.innerWidth;
        gsap.set(".bdFadeRight", {
          x: 100,
          opacity: 0
        });

        if (device_width) {
          const fadeArray = gsap.utils.toArray(".bdFadeRight")
          fadeArray.forEach((item, i) => {
              let fadeTl = gsap.timeline({
                  scrollTrigger: {
                      trigger: item,
                      start: "top center+=200",
                  }
              })
              fadeTl.to(item, {
                  x: 0,
                  opacity: 1,
                  ease: "power2.out",
                  duration: 1.5,
              })
          })
        } else {
          gsap.to(".bdFadeRight", {
              scrollTrigger: {
                  trigger: ".bdFadeRight",
                  start: "top center+=300",
                  // scrub: true,
                  markers: false,
              },
              x: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1,
              stagger: {
                  each: 0.2
              }
          })
        }  
        
        
        
      /*----------------------------------------
      bd one by one Show animation
      -----------------------------------------*/
        var cipro_item = document.querySelectorAll('.bd-one-by-one');
        gsap.set(cipro_item, {
          x: -30,
          opacity: 0
        });
        gsap.to(cipro_item, {
          scrollTrigger: {
              trigger: cipro_item,
              start: "top center+=250",
          },
          x: 0,
          opacity: 1,
          ease: "back.out(1)",
          duration: 1,
          stagger: 0.3,
        })






   });
})(jQuery);


// Review testimonial slider
$(document).ready(function () {
    $('#testimonial_slider').owlCarousel({
        loop: true,
        margin: 25,
        nav: true,
        navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
        dots: true,
        responsive: {
            0: { items: 1 },
            480: { items: 1 },
            600: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
            1200: { items: 3 }
        }
    });
});


// Video section 1
function setupVideoModal(buttonId, modalId, frameId, videoURL) {
    document.addEventListener('DOMContentLoaded', () => {
        const playButton = document.getElementById(buttonId);
        const videoModal = document.getElementById(modalId);
        const closeModal = videoModal.querySelector("#closeModal");
        const videoFrame = document.getElementById(frameId);

        const openVideoModal = () => {
            videoFrame.src = videoURL;
            videoModal.style.display = 'flex';
        };

        const closeVideoModal = () => {
            videoFrame.src = "";
            videoModal.style.display = 'none';
        };

        if (playButton) playButton.addEventListener('click', openVideoModal);
        if (closeModal) closeModal.addEventListener('click', closeVideoModal);

        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) closeVideoModal();
        });
    });
}

setupVideoModal('playButton', 'videoModal', 'videoFrame', 'https://www.youtube.com/embed/nqye02H_H6I?autoplay=1');
setupVideoModal('playButton', 'videoModal', 'videoFrame', 'https://www.youtube.com/embed/Dd7Tmxysmzc');


// Nice select
function toggleDropdown() {
    document.querySelector(".custom-select").classList.toggle("open");
}

function selectOption(option) {
    document.querySelector(".select-trigger span").textContent = option.textContent;
    document.querySelector("#subject").value = option.textContent;
    document.querySelector(".custom-select").classList.remove("open");
}

window.onclick = function (e) {
    if (!e.target.closest(".custom-select")) {
        document.querySelector(".custom-select").classList.remove("open");
    }
};
