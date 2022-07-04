$(function () {
  $(".myModal").on("show.bs.modal", function (e) {
    // $(".navbar").hide()
  });
  $(".myModal").on("hidden.bs.modal", function (e) {
    // $(".navbar").show()
  });

  var userGuestType = window.sessionStorage.getItem("SessionUserGuestType");
  if (!userGuestType) {
    openBootstrapPopup();
  } else {
    setActiveTab(userGuestType);
  }

  var audioAllowed = window.sessionStorage.getItem("SessionAudioAllowed");
  if (audioAllowed) {
    $(".player-button").click();
  }

  $(".button-selectGuestType").click(function () {
    var type = $(this).attr("data-guest");

    $(".button-selectGuestType").hide();
    $(this).show();
    setSessionStorage(type);
    setActiveTab(type);
    // closeBootstrapPopup();
  });

  $("#closeStartPopup").click(function () {
    $(".player-button").click();
  });
});

function openBootstrapPopup() {
  // $(".navbar").hide();
  $("#startpopup-modal").modal("show");
}

function closeBootstrapPopup() {
  $(".navbar").show();
  // $("#startpopup-modal").modal("hide");
}

function setSessionStorage(guestType) {
  sessionStorage.setItem("SessionUserGuestType", guestType);
  sessionStorage.setItem("SessionAudioAllowed", true);
}

function setActiveTab(guestType) {
  $("#" + guestType).click();
}
