const blackGlasses = document.querySelector(".blackGlasses");
const blueGlasses = document.querySelector(".blueGlasses");
const sportsGlasses = document.querySelector(".sportsGlasses");
const copGlasses = document.querySelector(".copGlasses");

const glasses = [];
glasses.push(blackGlasses, blueGlasses, sportsGlasses, copGlasses);

const placeholders = document.querySelectorAll(".placeholder");
const placeholderDog = document.querySelector(".placeholderDog");
let whatGlasses;

const dragOver = (event) => {
  event.preventDefault();
};

const dragStart = (event) => {
  if (event.target.classList[0] === "blackGlasses") {
    whatGlasses = blackGlasses;
  } else if (event.target.classList[0] === "blueGlasses") {
    whatGlasses = blueGlasses;
  } else if (event.target.classList[0] === "sportsGlasses") {
    whatGlasses = sportsGlasses;
  } else if (event.target.classList[0] === "copGlasses") {
    whatGlasses = copGlasses;
  }

  setTimeout(() => event.target.classList.add("hide"), 0);
};

const dragEnd = (event) => {
  event.target.classList.remove("hide");
};

const drop = (event) => {
  event.target.classList.remove("hovered");
  event.target.append(whatGlasses);
};

glasses.forEach(
  (glass) =>
    glass.addEventListener("dragstart", dragStart) ||
    glass.addEventListener("dragend", dragEnd)
);

placeholders.forEach(
  (placeholder) =>
    placeholder.addEventListener("dragover", dragOver) ||
    placeholder.addEventListener("drop", drop)
);

placeholderDog.addEventListener("dragover", dragOver);
placeholderDog.addEventListener("drop", drop);
