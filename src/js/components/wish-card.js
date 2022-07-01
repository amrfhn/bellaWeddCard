import Swiper from "swiper";
import Vue from "vue";

$(function () {
  const wishCard = new Vue({
    el: "#wishCard",
    data: {
      items: [],
    },
    mounted() {
      this.fetchData();

      // carousell start
    },
    methods: {
      async fetchData() {
        try {
          const response = await $.ajax({
            method: "GET",
            url: "assets/json/wish.json",
            data: this.data,
          }).promise();
          console.log(response);
          this.items = response;
        } catch (e) {
          console.error(e);
        } finally {
          var cardCarousel;

          cardCarousel = new Swiper(".carousel-card", {
            slidesPerView: "auto",
            cssMode: true,
            grabCursor: true,
            autoplay:true,
            loop: true,
            spaceBetween: 10,
            //   mousewheel: true,
            // autoplay: true,
          });
          //   const heightCardGroup =
          //     document.querySelector(".carousel-card").offsetHeight;
          //   const heightSection = heightCardGroup + 115;

          //   document.getElementById(
          //     "detailBg"
          //   ).style.height = `${heightSection}px`;
        }
      },
    },
  });
});
