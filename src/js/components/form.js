import Vue from "vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import _ from "lodash";

$(function () {
  if(document.getElementById('rsvpForm')) {
    const rsvpForm = new Vue({
      el: "#rsvpForm",
      data: {
        formData: {
          isAttending: "",
          Name: "",
          PhoneNumber: "",
          GuestType: "",
          TotalHeadCount: "",
          TimeSlot: "",
        },
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
              url: "https://digicraft-api-central.herokuapp.com/api/rsvp",
              headers: {
                "Content-Type": "application/json",
              },
              data: JSON.stringify(this.formData),
            }).promise();
            console.log(response)
            this.resetFormData();
          } catch (e) {
            this.generalSubmitError =
              "An error has occured while trying to submit the form. Please try again later.";
          } finally {
            this.$refs.rsvpForm.reset();
          }
        },
        resetFormData() {
          this.formData = {
            isAttending: "",
            Name: "",
            PhoneNumber: "",
            GuestType: "",
            TotalHeadCount: "",
            TimeSlot: "",
          };
        },
      },
    });
  };
});
