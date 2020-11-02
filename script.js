const {body} = document;
const BALLS = 40

const COLORS = [
  "linear-gradient(to bottom, #ffff66 0%, #00ff00 100%)",
  "linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)",
  "linear-gradient(to bottom, #9900cc 0%, #ffcc66 100%)",
  "linear-gradient(to bottom, #ffff66 0%, #ff0066 100%)",
  "linear-gradient(to bottom, #3333ff 0%, #99ff33 100%)",
  "linear-gradient(to bottom, #ff0066 0%, #ff99cc 100%)"
]

function randomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

for(let i=0; i<BALLS; i++) {
    const ballEl = document.createElement('div');
    ballEl.classList.add('balls');
    ballEl.style.left = Math.random() * 90 + "%";
    ballEl.style.animationDelay = Math.random() * 2+ "s";
    ballEl.style.animationDuration = Math.random() * 3 + 2.5 + "s";
    ballEl.style.background = randomColor();
    body.appendChild(ballEl);
}