import Vue from "vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import _ from "lodash";

$(function () {
  const hostUrl = window.location.host;
  const baseUrl = hostUrl.includes("localhost")
    ? process.env.LOCAL_BASEURL
    : process.env.PROD_BASEURL;

  if (document.getElementById("rsvpForm")) {
    const rsvpForm = new Vue({
      el: "#rsvpForm",
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
      },
      components: {
        ValidationProvider,
        ValidationObserver,
      },
      methods: {
        setRecaptchaResponse(response) {
          this.recaptchaResponse = response;
        },
        async onSubmit() {
          this.generalSubmitError = "";

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
          } catch (e) {
            this.generalSubmitError =
              "An error has occured while trying to submit the form. Please try again later.";
          } finally {
            this.formStatus = "completed";
            this.$refs.rsvpForm.reset();
          }
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
      methods: {
        async onSubmit() {
          this.generalSubmitError = "";

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
          } catch (e) {
            this.generalSubmitError =
              "An error has occured while trying to submit the form. Please try again later.";
          } finally {
            this.formStatus = "completed";
            this.$refs.wishForm.reset();
          }
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
