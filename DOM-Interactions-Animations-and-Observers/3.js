const data = [
  "https://picsum.photos/id/5/200/300",
  "https://picsum.photos/id/25/200/300",
  "https://picsum.photos/id/15/200/300",
  "https://picsum.photos/id/45/200/300",
];

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const img = document.getElementById("image");

let currentPicture = 0;

const changeImage = (index) => {
  if (index < 0) {
    currentPicture = data.length - 1;
  } else if (index >= data.length) {
    currentPicture = 0;
  }
  img.setAttribute("src", data[currentPicture]);
};

const next = () => {
  currentPicture++;
  changeImage(currentPicture);
};
const prev = () => {
  currentPicture--;
  changeImage(currentPicture);
};
nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);
changeImage(currentPicture);
