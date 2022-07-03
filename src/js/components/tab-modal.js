$(function () {
  $(".myModal").on("show.bs.modal", function (e) {
    // $(".navbar").hide()
  });
  $(".myModal").on("hidden.bs.modal", function (e) {
    // $(".navbar").show()
  });

  // var userGuestType = window.sessionStorage.getItem("SessionUserGuestType");
  // if (!userGuestType) {
  //   openBootstrapPopup();
  // } else {
  //   setActiveTab(userGuestType);
  // }

  $(".button-selectGuestType").click(function () {
    var type = $(this).attr("data-guest");
    setGuestType(type);
    setActiveTab(type);
    closeBootstrapPopup();
  });
});

function openBootstrapPopup() {
  $(".navbar").hide();
  $("#startpopup-modal").modal("show");
}

function closeBootstrapPopup() {
  $(".navbar").show();
  $("#startpopup-modal").modal("hide");
}

function setGuestType(guestType) {
  sessionStorage.setItem("SessionUserGuestType", guestType);
}

function setActiveTab(guestType) {
  $("#" + guestType).click();
}
