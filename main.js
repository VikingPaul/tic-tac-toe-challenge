var button = document.getElementById("button")
function tester() {
  var one1 = document.getElementById('one1').innerHTML
  var one2 = document.getElementById('one2').innerHTML
  var one3 = document.getElementById('one3').innerHTML
  var two1 = document.getElementById('two1').innerHTML
  var two2 = document.getElementById('two2').innerHTML
  var two3 = document.getElementById('two3').innerHTML
  var three1 = document.getElementById('three1').innerHTML
  var three2 = document.getElementById('three2').innerHTML
  var three3 = document.getElementById('three3').innerHTML
  if ((one1 === "X" && one2 === "X" && one3 === "X") || (two1 === "X" && two2 === "X" && two3 === "X") || (three3 === "X" && three2 === "X" && three1 === "X") || (one1 === "X" && two1 === "X" && three1 === "X") || (one2 === "X" && two2 === "X" && three2 === "X") || (one3 === "X" && two3 === "X" && three3 === "X") || (one1 === "X" && two2 === "X" && three3=== "X") || (one3 === "X" && two2 === "X" && three1=== "X")) {
    alert("CONGRATS! X Won!")
    reset.style.visibility = "visible"
  } else if ((one1 === "O" && one2 === "O" && one3 === "O") || (two1 === "O" && two2 === "O" && two3 === "O") || (three3 === "O" && three2 === "O" && three1 === "O") || (one1 === "O" && two1 === "O" && three1 === "O") || (one2 === "O" && two2 === "O" && three2 === "O") || (one3 === "O" && two3 === "O" && three3 === "O") || (one1 === "O" && two2 === "O" && three3=== "O") || (one3 === "O" && two2 === "O" && three1=== "O")) {
    alert("CONGRATS! O Won!")
    reset.style.visibility = "visible"

  } else if (one1 != "" && one2 != "" && one3 != "" && two1 != "" && two2 != "" && two3 != "" && three1 != "" && three2 != "" && three3 != "") {
    alert("Tie Game. Sorry.")
    reset.style.visibility = "visible"
  }
}
var clicky = document.getElementById('table')
var turn = true
clicky.addEventListener("click", function(e) {
  var clickedElement = e.target.id
  if (document.getElementById(clickedElement).innerHTML === "") {
    if (turn) {
      document.getElementById(clickedElement).innerHTML = "X"
      document.getElementById(clickedElement).style.color = "red"
      turn = false
    } else {
      document.getElementById(clickedElement).innerHTML = "O"
      document.getElementById(clickedElement).style.color = "blue"
      turn = true
    }
    tester()
  } else {
    alert('PICK SOMETHING ELSE!')
  }
})

function erase() {
  document.getElementById('one1').innerHTML = ""
  document.getElementById('one2').innerHTML = ""
  document.getElementById('one3').innerHTML = ""
  document.getElementById('two1').innerHTML = ""
  document.getElementById('two2').innerHTML = ""
  document.getElementById('two3').innerHTML = ""
  document.getElementById('three1').innerHTML = ""
  document.getElementById('three2').innerHTML = ""
  document.getElementById('three3').innerHTML = ""
  turn = true
  reset.style.visibility = "hidden"
}





button.addEventListener("click", erase)