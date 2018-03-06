var i = document.getElementById('text')

function updateText() {
  i.innerHTML = "Result: " + rng();
};

function rng() {
  return Math.random()
};
