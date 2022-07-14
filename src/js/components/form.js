import Vue from "vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import _ from "lodash";

$(function () {
  const hostUrl = window.location.host;
  const baseUrl = hostUrl.includes("localhost")
    ? process.env.LOCAL_BASEURL
    : "https://digicraft-api-central.herokuapp.com/api";

  if (document.getElementById("rsvpForm")) {
    const rsvpForm = new Vue({
      el: "#rsvp",
      data: {
        formData: {
          isAttending: "",
          name: "",
          phoneNumber: "",
          guestType: "",
          paxCount: "",
          timeSlot: "",
        },
        formStatus: "pending",
        recaptchaResponse: "",
        generalSubmitError: "",
        isGuestTypeFriend: false,
      },
      components: {
        ValidationProvider,
        ValidationObserver,
      },
      methods: {
        changeGuestSelection(e) {
          console.log(e, "change");
          if (
            e == "Pihak Perempuan - Kawan/Kenalan" ||
            e == "Pihak Lelaki - Kawan/Kenalan"
          ) {
            this.isGuestTypeFriend = true;
            this.formData.timeSlot = "";
          } else {
            this.isGuestTypeFriend = false;
            this.formData.timeSlot = "";
          }
          // console.log(this.isGuestTypeFriend, 'change')
        },
        setRecaptchaResponse(response) {
          this.recaptchaResponse = response;
        },
        async onSubmit() {
          this.generalSubmitError = "";
          this.buttonSubmitted();

          try {
            const response = await $.ajax({
              method: "POST",
              url: `${baseUrl}/rsvp`,
              headers: {
                "Content-Type": "application/json",
              },
              data: JSON.stringify(this.formData),
            }).promise();
            this.resetFormData();
            this.formStatus = "completed";
          } catch (e) {
            this.formStatus = "pending";
            this.generalSubmitError =
              "An error has occured while trying to submit the form. Please try again later.";
          } finally {
            this.$refs.rsvpForm.reset();
          }
        },
        buttonSubmitted() {
          const btnSubmit = document.querySelector('#rsvpSubmit');
          btnSubmit.setAttribute('disabled', 'true');
        },
        resetFormData() {
          this.formData = {
            isAttending: "",
            name: "",
            phoneNumber: "",
            guestType: "",
            paxCount: "",
            timeSlot: "",
          };
          this.formStatus = "pending";
        },
      },
    });
  }

  if (document.getElementById("wishForm")) {
    const wishForm = new Vue({
      el: "#wishForm",
      data: {
        formData: {
          name: "",
          message: "",
        },
        formStatus: "pending",
        generalSubmitError: "",
      },
      components: {
        ValidationProvider,
        ValidationObserver,
      },
      computed: {
        charactersLeft() {
          var char = this.formData.message.length,
            limit = 100;
          return limit - char + " characters remaining";
        },
      },
      methods: {
        // charCount: function () {
        //   this.totalcharacter = this.formData.message.length;
        // },
        async onSubmit() {
          this.generalSubmitError = "";
          this.buttonSubmitted();

          try {
            const response = await $.ajax({
              method: "POST",
              url: `${baseUrl}/wish`,
              headers: {
                "Content-Type": "application/json",
              },
              data: JSON.stringify(this.formData),
            }).promise();
            this.resetFormData();
            this.formStatus = "completed";
          } catch (e) {
            this.formStatus = "pending";
            this.generalSubmitError =
              "An error has occured while trying to submit the form. Please try again later.";
          } finally {
            this.$refs.wishForm.reset();
          }
        },
        buttonSubmitted() {
          const btnSubmit = document.querySelector('#submitWish');
          btnSubmit.setAttribute('disabled', 'true');
        },
        resetFormData() {
          this.formData = {
            name: "",
            message: "",
          };
          this.formStatus = "pending";
        },
      },
    });
  }
});
