const animatedElement = document.getElementById("elem");

const anime1 = () => {
  animatedElement.classList.add("animation1");
};
const anime2 = () => {
  animatedElement.classList.remove("animation1");
  animatedElement.classList.add("animation2");
  setTimeout(() => {
    animatedElement.classList.remove("animation2");
  }, 3000);
};

setTimeout(anime1, 2000);
setTimeout(anime2, 5000);

// const animatedElement = document.getElementById("elem");

// const animateElement = (className1, className2, delay1, delay2) => {
//   animatedElement.classList.add(className1);
//   setTimeout(() => {
//     animatedElement.classList.remove(className1);
//     animatedElement.classList.add(className2);
//     setTimeout(() => {
//       animatedElement.classList.remove(className2);
//     }, delay2);
//   }, delay1);
// };

// animateElement("animation1", "animation2", 4000, 5000);
