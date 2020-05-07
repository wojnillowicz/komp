komplementyKobieta = [
  "jest najmądrzejsza!",
  "jest najpiękniejsza!",
  "jest najlepsza!",
  "ma piękne oczy!",
  "jest zwycięzcą!",
  "jest najodważniejsza!",
  "jest najwspanialsza!",
  "jest najzdolniejsza!",
  "jest najkochańsza!",
  "jest najbystrzejsza!",
  "jest nieustraszona!",
  "jest najodważniejsza!",
  "jest najelokwentniejsza!",
  "ma styl, klasę i szyk!",
  "najpiękniejsze ma ubranie!",
  "zdolna jest niesłychanie!",
  "jest najgenialniejsza!",
  "jest gienią!"
]

komplementyMezczyzna = [
  "jest najsilniejszy!",
  "jest namądrzejszy!",
  "jest najprzystojniejszy!",
  "jest najlepszy!",
  "jest zwycięzcą!",
  "jest najodważniejszy",
]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomComplement(x) {
  var indexComplement = getRandomInt(x.length);
  return x[indexComplement];
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

var chosenName = $("#imie").val();
var chosenGender = $("#plec").val();

if (chosenGender == "Mężczyzna") {
  var komplementyWybrane = komplementyMezczyzna
}else {
  var komplementyWybrane = komplementyKobieta
}

$("#start").click(function () {
  var nameUser = $("#imie").val();
  var genderUser = $("#plec").val();
  console.log(nameUser, genderUser);
  $(".welcome").fadeOut(1500);
  $(".tresc").fadeIn(1500);
  // $("#powitanie").text("Cześć "+nameUser+"!");
  // $("#powitanie").fadeOut(3500);
  var x = getRandomComplement(komplementyKobieta);
  $("#komplement").text(nameUser+" "+x);

});



$("#dalej").click(function () {
  var chosenName = $("#imie").val();
  var y = getRandomComplement(komplementyWybrane);
  $("#komplement").text(chosenName+" "+y).fadeIn(1000);
});
