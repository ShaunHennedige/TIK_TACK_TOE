var cells = document.querySelectorAll("td");
var currentPlayer = "X";

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function(event) {
    if (event.target.textContent === "") {
      event.target.textContent = currentPlayer;
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
    }
  });
}
function checkForWinner() {
  var winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];

  for (var i = 0; i < winningCombinations.length; i++) {
    var combination = winningCombinations[i];
    var cell1 = document.getElementById("cell-" + combination[0]).textContent;
    var cell2 = document.getElementById("cell-" + combination[1]).textContent;
    var cell3 = document.getElementById("cell-" + combination[2]).textContent;
    if (cell1 !== "" && cell1 === cell2 && cell1 === cell3) {
      alert("Player " + cell1 + " wins!");
      return;
    }
  }
}
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function(event) {
    if (event.target.textContent === "") {
      event.target.textContent = currentPlayer;
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
      checkForWinner();
    }
  });
  var button = document.getElementById("check-winner-button");
  button.addEventListener("click", checkForWinner);
}
function resetGame() {
  window.location.href = window.location.href;
}
var resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetGame);