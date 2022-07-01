// import Swiper from "swiper";

// $(function () {
//   var fraction = document.getElementById("fraction");
//   var slides = document.querySelectorAll(".swiper-slide.step-slide");
//   var slideCount = slides.length;
//   if (fraction) {
//     fraction.textContent = `1 / ${slideCount}`;
//   }
//   var stepsCarousel;
//   var isStartPage = $(".start-page-container").length ? true : false;
//   var isGamePage = $(".game-page-container").length ? true : false;

//   $(".howtoplay-modal").on("show.bs.modal", function () {
//     $(".carousel-controls .button-skip").show();

//     setTimeout(function () {
//       stepsCarousel = new Swiper(".carousel.steps-to-play", {
//         effect: "coverflow",
//         coverflowEffect: {
//           rotate: 70,
//           slideShadows: false,
//         },
//         slidesPerView: 1,
//         pagination: {
//           el: ".carousel-controls .swiper-pagination",
//           // clickable: true,
//         },
//         navigation: {
//           nextEl: ".carousel-controls .swiper-button-next",
//           prevEl: ".carousel-controls .swiper-button-prev",
//         },
//         on: {
//           slideChange: () => {
//             if (fraction) {
//               fraction.textContent = `${
//                 stepsCarousel.realIndex + 1
//               }/${slideCount}`;
//             }
//             if (stepsCarousel.realIndex == slideCount - 1) {
//               $(".carousel-controls .swiper-button-next").hide();
//               $(".carousel-controls .swiper-button-start").show();
//             } else {
//               $(".carousel-controls .swiper-button-start").hide();
//               $(".carousel-controls .swiper-button-next").show();
//             }
//             if (stepsCarousel.realIndex !== slideCount - 1) {
//               $(".carousel-controls .button-skip").show();
//             } else {
//               $(".carousel-controls .button-skip").hide();
//             }
//           },
//         },
//         loop: false,
//       });
//     }, 500);

//     $("body").keyup(function (e) {
//       if (e.keyCode == 32) {
//         if (isStartPage || isGamePage) {
//           $("#howToPlayModal").modal("hide");
//         } else {
//           window.location.href = "/game.html";
//         }
//       }
//     });
//   });

//   //reset swiper on modal close - to it's default config
//   $(".howtoplay-modal").on("hidden.bs.modal", function () {
//     $(".carousel-controls .swiper-button-next").show();
//     $(".carousel-controls .swiper-button-start").hide();
//     if (fraction) {
//       fraction.textContent = `1 / ${slideCount}`;
//     }
//   });

//   $(".carousel-controls .swiper-button-start").on("click", function () {
//     if (isStartPage || isGamePage) {
//       $("#howToPlayModal").modal("hide");
//     } else {
//       window.location.href = "/game.html";
//     }
//   });
//   $(".carousel-controls .button-skip").on("click", function () {
//     stepsCarousel.slideTo(slideCount, 500);
//     $(this).hide();
//   });
// });
