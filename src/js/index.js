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

const profile_picture = document.getElementsByClassName("profile-image")[0];
let current_mode = 0;

profile_picture.addEventListener("click", () => {
  // hide all bio. dont use forEach because it will return an array
  // store the current mode as 0 if it is 0, show all bio

  if (current_mode === 0) {
    array = document.getElementsByClassName("bio");
    for (let i = 0; i < array.length; i++) {
      array[i].style.display = "none";
    }
    email = document.getElementsByClassName("email")[0];
    email.style.display = "none";
    github = document.getElementsByClassName("github")[0];
    github.style.display = "none";
    current_mode = 1;
  } else {
    array = document.getElementsByClassName("bio");
    for (let i = 0; i < array.length; i++) {
      // reset the display
      array[i].style.display = "block";
    }
    email.style.display = "block";
    github.style.display = "block";
    current_mode = 0;
  }
});