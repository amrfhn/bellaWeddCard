import Vue from "vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import _ from "lodash";

$(function () {
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
              url: "/api/rsvp",
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
