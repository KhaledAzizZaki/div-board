// Date
let toDay = new Date();
let toDay1 = toDay.toDateString().split(" ");
let toDate = `${toDay1[1]} ${toDay1[2]} ${toDay1[3]}`;
document.getElementById("day-of-week").innerText = toDay1[0] + ",";
document.getElementById("full-date").innerText = toDate;

// Completed section
let completeBtn = document.querySelectorAll(".completedBtn");
for (let i of completeBtn) {
  i.addEventListener("click", function (event) {
    // task assigned number
    let number1 = parseInt(document.getElementById("number").innerText);
    number1 = number1 - 1;
    document.getElementById("number").innerText = number1;
    // task complete number
    let number2 = parseInt(document.getElementById("com-number").innerText);
    number2 = number2 + 1;
    document.getElementById("com-number").innerText = number2;
    // task complete alert
    alert("Board Updated Successfully");
    if (number1 == 0) {
      alert("Congrates!!! You have completed all the current task");
    }
    // remove color
    event.target.classList.add("bg-blue-300");
    event.target.classList.remove("accent");
    // disable button
    i.disabled = true;
    // add activity log
  });
}

// Go to blogs page
document.getElementById("discover").addEventListener("click", function () {
  window.location.href = "blogs.html";
});
