// Detta är en "self-invoking function", den körs direkt sidan laddas
(function () {
  // Allt här inne körs automatiskt när sidan laddas.
  // Spara DOM-elementet i en variabel
  var outputFromJavascript = document.getElementById("outputFromJavascript");

  // Do the code
  var myAge = 10;

  // Output to HTML page
  outputFromJavascript.innerHTML = "My age is: " + myAge;
})();

// Detta är en extern funktion som behöver en signal utifrån (knapptryck) för att köras.
function buttonPressed() {
  var buttonPressedText = document.getElementById("buttonPressedText");
  buttonPressedText.innerHTML = "Du har tryckt på knappen";
}
