document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("myButton");

  button.addEventListener("click", function () {
    alert("Button was clicked successfully!");
    console.log("Click event triggered");
  });
});