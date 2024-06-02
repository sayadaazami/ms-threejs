const rootElement = document.querySelector("#root");
let elapsedTime = 0;
let startTime = Date.now();

const looper = () => {
  //TODO
  elapsedTime = Date.now() - startTime;
  requestAnimationFrame(looper);
};

looper();
