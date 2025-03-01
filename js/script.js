// page link
let toDay = new Date();
let toDay1 = toDay.toDateString().split(" ");
let toDate = `${toDay1[1]} ${toDay1[2]} ${toDay1[3]}`;

document.getElementById("day-of-week").innerText = toDay1[0];
document.getElementById("full-date").innerText = toDate;

document.getElementById("discover").addEventListener("click", function () {
  window.location.href = "blogs.html";
});
