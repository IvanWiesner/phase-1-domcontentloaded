// Your code goes here
const jsText = document.querySelector('#text')
const p = document.createElement('p')
p.innerHTML = "This is really cool!"
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  }); 
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );
  