const rootElement = document.querySelector("#root");
const width = window.innerWidth - rootElement.offsetWidth;

const duration = 5;
const step = width / duration;
let elapsedTime = 0;
let startTime = Date.now();
let endTime = startTime + duration * 1000;

const reset = () => {
  startTime = Date.now();
  endTime = startTime + duration * 1000;
  elapsedTime = 0;
  rootElement.style.left = 0;
  looper();
};

const looper = () => {
  rootElement.style.left = elapsedTime * step + "px";
  elapsedTime = (Date.now() - startTime) / 1000;
  console.log(elapsedTime);
  if (Date.now() < endTime) requestAnimationFrame(looper);
};

looper();


rootElement.addEventListener("click", reset);