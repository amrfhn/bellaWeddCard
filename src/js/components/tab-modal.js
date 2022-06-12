$(function () {
  $(".myModal").on("show.bs.modal", function (e) {
    $(".navbar").attr("style", "right:17px");
  });
  $(".myModal").on("hidden.bs.modal", function (e) {
    $(".navbar").removeAttr("style", "right:17px");
  });

  var userGuestType = window.sessionStorage.getItem("SessionUserGuestType");
  if (!userGuestType) {
    openBootstrapPopup();
  } else {
    setActiveTab(userGuestType);
  }

  $(".button-selectGuestType").click(function () {
    var type = $(this).attr("data-guest");
    setGuestType(type);
    setActiveTab(type);
    closeBootstrapPopup();
  });
});

function openBootstrapPopup() {
  $("#startpopup-modal").modal("show");
}

function closeBootstrapPopup() {
  $("#startpopup-modal").modal("hide");
}

function setGuestType(guestType) {
  sessionStorage.setItem("SessionUserGuestType", guestType);
}

function setActiveTab(guestType) {
  $("#" + guestType).click();
}
