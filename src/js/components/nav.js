// import Vue from "vue";
// // import moment from "moment";
// import momentDurationFormatSetup from "moment-duration-format";
// import moment from "moment-timezone";
// momentDurationFormatSetup(moment);
// // momentTimezone().tz("Asia/Kuala Lumpur").format();

// (function () {
//   $(".hamburger-menu").on("click", function () {
//     $(".bar").toggleClass("animate");
//     var mobileNav = $(".mobile-nav");
//     mobileNav.toggleClass("hide show");
//     $("#overlay-mobileNav").toggleClass("hide show");
//   });
// })();

// $(function () {
//   $(".nav-menu ").find("a.active").removeClass("active");
//   $(".nav-menu a").each(function () {
//     if ($(this).attr("href") == location.pathname) {
//       $(this).addClass("active");
//     }
//     if($('.game-page-container').length){
//       $('#btn-backToGame').removeClass('d-lg-flex');
//     }
//   });
// });

// $(function () {
//   let token = sessionStorage.getItem("game_token");
//   if ($("#gameNavbar").length) {
//     const reward = new Vue({
//       el: "#gameNavbar",
//       data: {
//         collection_items: [],
//         week_end_date: "",
//         week_start_date: "",
//         week_name: "",
//         day: "",
//         hour: "",
//         minute: "",
//         second: "",
//         user_image: "",
//       },
//       mounted: function () {
//         this.getUserCollection();
//       },
//       methods: {
//         getUserCollection() {
//           let self = this;
//           $.ajax({
//             type: "GET",
//             url: process.env.API_BASEURL + "/user-collection",
//             headers: {
//               Authorization: `Bearer ${token.replaceAll('"', "")}`,
//             },
//             contentType: "application/json",
//           })
//             .done((res) => {
//               this.user_image = res.data.user.profile_image;
//               // this.collection_items = res.data.collection["2"];
//               this.week_name = res.data.week.name;
//               this.week_end_date = res.data.week.week_end_date;
//               this.calculateTime();

//               if (res.data.collection["1"] !== undefined) {
//                 this.collection_items = res.data.collection["1"];
//               }
//               if (res.data.collection["2"] !== undefined) {
//                 this.collection_items = res.data.collection["2"];
//               }
//               if (res.data.collection["3"] !== undefined) {
//                 this.collection_items = res.data.collection["3"];
//               }
//               if (res.data.collection["4"] !== undefined) {
//                 this.collection_items = res.data.collection["4"];
//               }
//             })
//             .fail(function (res) {
//               console.log("error", res);
//             });
//         },
//         calculateTime() {
//           var self = this;
//           var startDate = moment().tz("Asia/Kuala_Lumpur"); //todays date
//           var endDate = moment(this.week_end_date); // another date
//           var diffTime = endDate.diff(startDate);
//           var duration = moment.duration(diffTime, "milliseconds", true);
//           var interval = 1000;

//           setInterval(function () {
//             duration = moment.duration(duration - interval, "milliseconds");
//             self.day = duration.days();
//             self.hour = duration.hours();
//             self.minute = duration.minutes();
//             self.second = duration.seconds();
//           }, interval);
//         },
//         logOutSession() {
//           sessionStorage.removeItem("game_token");
//           setTimeout(() => {
//             window.location.href = "/index.html";
//           }, 300);
//         },
//       },
//     });
//   }
// });
