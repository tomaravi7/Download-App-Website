let counts = setInterval(updated);
let upto = 0;
function updated() {
  var count = document.getElementById("counter");
  count.innerHTML = ++upto*5000;
  if (upto >= 500) {
    clearInterval(counts);
  }
}
