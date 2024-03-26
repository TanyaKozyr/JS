const images = document.querySelectorAll("img");

 
const options = {
  root: null,
  rootMargin: "20px",
  threshold: 0.5,
};

function handleImg(myImg) {
  myImg.forEach((myImgSingle) => {
    console.log(myImgSingle.intersectionRatio);
    if (myImgSingle.intersectionRatio > 0) {
      loadImage(myImgSingle.target);
    }
  });
}
function loadImage(image) {
  image.src = image.getAttribute("data");
}
const observer = new IntersectionObserver(handleImg, options);
images.forEach((img) => {
  observer.observe(img);
});
