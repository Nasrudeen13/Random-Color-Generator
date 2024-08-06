

// get elements from HTML //

const btn = document.querySelector("#btn");
const colorcode = document.querySelector("#input");
const container = document.querySelector("#container");

// create hex value in array //
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
// create hex function //
function randHexValue() {
  let randindex = Math.floor(Math.random() * 16);
  return hex[randindex];
}
// merge hex 6 digit function //
function changeColor() {
  let hexcolor = "#";
  for (let i = 1; i <= 6; i++) {
    hexcolor += randHexValue();
  }

  // call the value to respected elements //
  container.style.backgroundColor = hexcolor;
  colorcode.style.backgroundColor = hexcolor;
  colorcode.value = hexcolor;
}
// add behaviour funtion to btn //
btn.addEventListener("click", changeColor());
