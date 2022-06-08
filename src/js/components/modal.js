$(function () {
  $(".rsvp-modal").on("show.bs.modal", function (e) {
    // do something...
    $(".navbar").attr("style", "right:17px");
  });
  $(".rsvp-modal").on("hidden.bs.modal", function (e) {
    // do something...
    $(".navbar").removeAttr("style", "right:17px");
  });
});
