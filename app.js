const rootElement = document.querySelector("#root");
let elapsedTime = 0;
let startTime = Date.now();

const looper = () => {
  rootElement.style.transform = `rotate(${elapsedTime / 1000 * 6}deg)`;

  elapsedTime = Date.now() - startTime;
  requestAnimationFrame(looper);
};

looper();