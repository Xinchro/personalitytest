const are = "Your personality is that of a filthy liar! 😊"
const areNot = "<img src=\"assets/notxinchro.png\" height=250 width=250/>"

function youAreXinchro() {
  getDOM("the-answer").innerHTML = areNot
  toggleBoth()
  console.log("are")
}

function youAreNotXinchro() {
  getDOM("the-answer").innerHTML = are
  toggleBoth()
  console.log("not")
}

function toggleBoth() {
  toggle("question-wrapper")
  toggle("answer-wrapper")
}

function toggle(id) {
  if(isHidden(id)) {
    show(id)
  } else {
    hide(id)
  }
}

function isHidden(id) {
  if(getDOM(id).style.display === "none") {
    return true
  } else {
    return false
  }
}

function hide(id) {
  getDOM(id).style.display = "none"
}

function show(id) {
  getDOM(id).style.display = "block"
}

function getDOM(id) {
  return document.getElementById(id)
}

function stopSharing() {
  alert("Stop sharing this stuff")
  toggleBoth()
}