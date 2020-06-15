$("audio").prop("muted", false);

$("#muteaudio").click(function () {
  if ($("audio").prop("muted")) {
    $("audio").prop("muted", false);
  } else {
    $("audio").prop("muted", true);
  }
});

$("#basla").click(function () {
  window.location = "oyun.html";
});

$(document).ready(function() {
  $('#modal1').modal();
});

$(document).ready(function() {
  $('#modal2').modal();
});


function closeWin() {
  myWindow.close();   // Closes the new window
} 