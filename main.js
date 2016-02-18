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
  if ((one1 && one2 && one3) || (two1 && two2 && two3) || (three3 && three2 && three1) || (one1 && two1 && three1) || (one2 && two2 && three2) || (one3 && two3 && three3) || (one1 && two2 && three3) || (one3 && two2 && three1)) {
    alert("CONGRATS! You Won!")
  };
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
