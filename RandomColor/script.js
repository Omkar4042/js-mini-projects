// Generate a random HEX color
function generateRandomColor() {

  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
}


let intervalId = null;


// Change background color
function changeBackgroundColor() {
  document.body.style.backgroundColor = generateRandomColor();
}


// Start color changing
function startChangingColor() {

  if (intervalId === null) {
    intervalId = setInterval(changeBackgroundColor, 1000);
  }

}


// Stop color changing
function stopChangingColor() {

  clearInterval(intervalId);
  intervalId = null;

}


// Event listeners
document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);