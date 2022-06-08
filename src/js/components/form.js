import Vue from "vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import _ from "lodash";
import VueRecaptcha from "vue-recaptcha";

$(function () {
  const rsvpForm = new Vue({
    el: "#rsvpForm",
    data: {
      formData: {
        isAttending: "Ya",
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
      VueRecaptcha,
    },
    methods: {
      setRecaptchaResponse(response) {
        this.recaptchaResponse = response;
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
      async onSubmit() {
        this.generalSubmitError = '';
      },
      //   async onSubmit() {
      //     this.generalSubmitError = "";

      //     try {
      //       const response = await $.ajax({
      //         method: "POST",
      //         url: "/api/leads",
      //         headers: {
      //           "g-recaptcha-response": this.recaptchaResponse,
      //         },
      //         contentType: "application/json",
      //         data: JSON.stringify(this.formData),
      //       }).promise();
      //       this.resetFormData();
      //       this.$refs.contactForm.reset();
      //     } catch (e) {
      //       this.generalSubmitError =
      //         "An error has occured while trying to submit the form. Please try again later.";
      //     } finally {
      //       this.$refs.reCaptcha.reset();
      //     }
      //   },
    },
  });
});
