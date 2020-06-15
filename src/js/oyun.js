$("audio").prop("muted", false);

$("#muteaudio").click(function () {
  if ($("audio").prop("muted")) {
    $("audio").prop("muted", false);
  } else {
    $("audio").prop("muted", true);
  }
});

$(document).ready(function() {
  $('#modal2').modal();
});


var isStartedTimer = false;
var playerscore = 0;
var pcscore = 0;
var initial = 99;
var count = initial;
var counter;
$( "#playerscore" ).append(">  &nbsp;");
$( "#pcscore" ).append(">  &nbsp;");
$("#stop").hide();

function timer() {
  if (count <= 0)
    count = 99;
  else
    count--;

  displayCount(count);
}

function displayCount(count) {
  document.getElementById("timer").innerHTML = count < 10 ? `0${count.toString()}` : count.toString();

}


$('#start').on('click', function () {
  if (!isStartedTimer) {
    counter = setInterval(timer, 10);
    isStartedTimer = true;
    $("#stop").show();
  }
});

$('#stop').on('click', function () {
  if (isStartedTimer) {
    clearInterval(counter);
    isStartedTimer = false;
  }
  if (count <= 10)
   $( "#playerscore" ).append(playerscore = playerscore + 1);
   $(this).hide();

  if (playerscore == 5)
  window.location.replace("../src/winner.html");
});
displayCount(count);

$('#start').on('click', function () {
  rand = Math.floor((Math.random() * 100) + 1);
  if (rand <= 10)
  $( "#pcscore" ).append(pcscore = pcscore + 1);
  if (pcscore == 5)
  window.location.replace("../src/loser.html");
});