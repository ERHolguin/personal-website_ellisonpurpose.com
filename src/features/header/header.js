const header = document.querySelector(".header");
let commonHeader = document.getElementById("common-header");
const body = document.body.innerHTML;

console.log(commonHeader);

function loadCommonHeader() {
  commonHeader = header;
}

body.addEventListener("DOMContentLoaded", commonHeader);
