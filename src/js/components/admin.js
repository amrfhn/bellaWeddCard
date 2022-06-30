import Vue from "vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import _ from "lodash";

$(function () {
  const hostUrl = window.location.host;
  const baseUrl = hostUrl.includes('localhost') ? process.env.LOCAL_BASEURL : process.env.PROD_BASEURL;
  
  if(document.getElementById('attendeeList')) {
    const attendeeList = new Vue({
      el: "#attendeeList",
      data: {
        isAttending: "",
        Name: "",
        PhoneNumber: "",
        GuestType: "",
        TotalHeadCount: "",
        TimeSlot: "",
        timestamp: "",
        items: []
      },
      mounted() {
        this.retrieveAttendee();
      },
      methods: {
        async retrieveAttendee() {
          try {
            const response = await $.ajax({
              method: "GET",
              url: `${baseUrl}/rsvp`,
              headers: {
                "Content-Type": "application/json",
              },
              data: this.data,
            }).promise();
            this.items = response;
            console.log(response)
            console.log('items', this.items)
          } catch (e) {
            console.log(e);
          } finally {
          }
        },
      },
    });
  };
});
