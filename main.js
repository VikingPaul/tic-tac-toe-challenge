var button = document.getElementById("button")
var xScore = 0
var oScore = 0
var tieScore = 0
var player1 = document.getElementById("player1")
var player2 = document.getElementById("player2")
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
  if ((one1 === "X" && one2 === "X" && one3 === "X") || (two1 === "X" && two2 === "X" && two3 === "X") || (three3 === "X" && three2 === "X" && three1 === "X") || (one1 === "X" && two1 === "X" && three1 === "X") || (one2 === "X" && two2 === "X" && three2 === "X") || (one3 === "X" && two3 === "X" && three3 === "X") || (one1 === "X" && two2 === "X" && three3 === "X") || (one3 === "X" && two2 === "X" && three1 === "X")) {
    disable()
    alert("CONGRATS! X Won!")
    xScore++
    player1.innerHTML = "P1:<br>" + xScore
    reset.style.visibility = "visible"
  } else if ((one1 === "O" && one2 === "O" && one3 === "O") || (two1 === "O" && two2 === "O" && two3 === "O") || (three3 === "O" && three2 === "O" && three1 === "O") || (one1 === "O" && two1 === "O" && three1 === "O") || (one2 === "O" && two2 === "O" && three2 === "O") || (one3 === "O" && two3 === "O" && three3 === "O") || (one1 === "O" && two2 === "O" && three3 === "O") || (one3 === "O" && two2 === "O" && three1 === "O")) {
    disable()
    alert("CONGRATS! O Won!")
    oScore++
    player2.innerHTML = "P2:<br>" + oScore
    reset.style.visibility = "visible"
  } else if (one1 != "" && one2 != "" && one3 != "" && two1 != "" && two2 != "" && two3 != "" && three1 != "" && three2 != "" && three3 != "") {
    disable()
    tieScore++
    alert("This is tie number: " + tieScore)
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

function disable() {
  for (var i = 1; i < 4; i++) {
    var one = document.getElementById("one" + i)
    var two = document.getElementById("two" + i)
    var three = document.getElementById("three" + i)

    if (one.innerHTML === "") {
      one.innerHTML = " "
    }
    if (two.innerHTML === "") {
      two.innerHTML = " "
    }
    if (three.innerHTML === "") {
      three.innerHTML = " "
    }
  }
}
function destroy() {
  xScore = 0
  oScore = 0
  tieScore = 0
  erase()
  player1.innerHTML = "P1:<br>0"
  player2.innerHTML = "P2:<br>0"
}


clear.addEventListener("click", destroy)
button.addEventListener("click", erase)