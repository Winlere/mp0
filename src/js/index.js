/* Your JS here. */
console.log('Hello World!')

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

button1.addEventListener("click", () => {
  document.getElementsByClassName("container")[0].style.background =
    "linear-gradient(to bottom right, rgb(130, 204, 228), rgb(224, 234, 235))";
});

button2.addEventListener("click", () => {
  document.getElementsByClassName("container")[0].style.background =
    "linear-gradient(to bottom right, rgb(169, 237, 169), rgb(224, 234, 235))";
});

button3.addEventListener("click", () => {
  document.getElementsByClassName("container")[0].style.background =
    "linear-gradient(to bottom right, rgb(224, 234, 235), rgb(130, 204, 228))";
});