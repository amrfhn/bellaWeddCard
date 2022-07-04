// import Swiper from "swiper";
import Vue from "vue";
import {shuffle} from "lodash";
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

      // const mySwiper = new Swiper(".swiper", {
      //   // Optional parameters
      //   slidesPerView: 1,
      //   effect: "cards",
      //   loop: true,
      //   slidesPerView: 1,
      //   autoplay: {
      //     delay: 3500,
      //     disableOnInteraction: false,
      //     pauseOnMouseEnter: true,
      //   },
      //   on: {
      //     afterInit: function () {
      //       debugger
      //       const heightCardGroup =
      //       document.querySelector(".carousel-card").offsetHeight;
      //       console.log("after", heightCardGroup);
      //     },
      //   },
      // nextButton: ".swiper-button-next",
      // prevButton: ".swiper-button-prev",
      // });

      // mySwiper.on("afterInit", function () {
      //   console.log("asldas");
      //   const heightCardGroup =
      //     document.querySelector(".carousel-card").offsetHeight;
      //   const heightSection = heightCardGroup + 115;

      //   console.log(heightCardGroup, heightSection);
      //   document.getElementById("detailBg").style.height = `${heightSection}px`;
      // });

      // carousell start
    },
    methods: {
      addSectionHeight() {
        const heightCardGroup =
          document.querySelector(".carousel-card").offsetHeight;
        const heightSection = heightCardGroup + 115;

        console.log(heightCardGroup, heightSection);
        document.getElementById("wishBg").style.height = `${heightSection}px`;
      },
      async fetchData() {
        try {
          const response = await $.ajax({
            method: "GET",
            url: `${baseUrl}/rsvp`,
            data: this.data,
          }).promise();
          const newResp = response.filter((obj) => {
            return obj.message !== undefined;
          });
          this.items = _.shuffle(newResp)
        } catch (e) {
          console.error(e);
        } finally {
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
          });
        }
      },
    },
  });
});
