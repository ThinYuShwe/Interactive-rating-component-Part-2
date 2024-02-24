const buttons = document.querySelectorAll(".btn");
const submit = document.querySelector(".submitButton");
const rating = document.querySelector(".rating");
const submitted = document.querySelector(".submitted");
const CountNum = document.querySelector(".CountNum");

let chooseNumber = 0;
buttons.forEach((bt) => {
  bt.addEventListener("click", (e) => {
    chooseNumber = e.target.innerHTML;
    CountNum.innerHTML = `You selected ${chooseNumber} out of 5`;
  });
});

submit.addEventListener("click", function () {
  if (chooseNumber === 0) {
    event.preventDefault();
    alert("Please select a number before submitting.");
  } else {
    rating.style.display = "none";
    submitted.style.display = "flex";
  }
});

