// import Swiper from "swiper";
import Vue from "vue";

// Swiper.use([Navigation]);

// import { Swiper, SwiperSlide } from "swiper/vue";

// // import "swiper/css";

// // import "swiper/css/navigation";

// import { Navigation } from "swiper";

// export default {
//   components: {
//     Swiper,
//     SwiperSlide,
//   },
//   setup() {
//     return {
//       modules: [Navigation],
//     };
//   },
// };

$(function () {
  const hostUrl = window.location.host;
  const baseUrl = hostUrl.includes("localhost")
    ? process.env.LOCAL_BASEURL
    : "https://digicraft-api-central.herokuapp.com";

  const wishCard = new Vue({
    el: "#wishCard",
    data: {
      items: [],
    },
    mounted() {
      this.fetchData();

      const mySwiper = new Swiper(".swiper", {
        // Optional parameters
        slidesPerView: 1,
        effect: "cards",
        loop: true,
        slidesPerView: 1,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        // nextButton: ".swiper-button-next",
        // prevButton: ".swiper-button-prev",
      });

      // carousell start
    },
    methods: {
      async fetchData() {
        try {
          const response = await $.ajax({
            method: "GET",
            url: `${baseUrl}/rsvp`,
            data: this.data,
          }).promise();
          console.log(response);
          this.items = response.filter((obj) => {
            return obj.message !== undefined;
          });
        } catch (e) {
          console.error(e);
        } finally {
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
