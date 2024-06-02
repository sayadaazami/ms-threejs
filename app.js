const rootElement = document.querySelector("#root");
let elapsedTime = 0;
let startTime = Date.now();
const width = window.innerWidth - rootElement.offsetWidth;

const looper = () => {
  const x = elapsedTime / 1000;
  const y = (1 + Math.sin(x)) * width /2;
  rootElement.style.transform = `translateX(${y}px)`;
  elapsedTime = Date.now() - startTime;
  requestAnimationFrame(looper);
};

looper();