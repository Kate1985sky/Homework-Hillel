const el = document.querySelector(".block");
const STEP = 10;
const maxWidth = window.innerWidth - el.offsetWidth;
const maxHeight = window.innerHeight - el.offsetHeight;

const KEY_MAP = {
  ArrowDown: mooveDown,
  ArrowRight: mooveRight,
  ArrowLeft: mooveLeft,
  ArrowUp: mooveUp,
  ControlLeft: controlLeft,
  Space: space,
};

function mooveRight(e) {
  const deadline = el.offsetleft + STEP;
  el.style.left = el.offsetLeft + STEP + "px";
  if (deadline > maxWidth) {
    el.style.left = el.offsetLeft + 2 + "px";
    el.innerHTML = "БЭМС";

    setTimeout(() => {
      el.innerHTML = "";
    }, 2000);
  }
  console.log(e.code);
}

function mooveLeft(e) {
  const deadline = el.offsetLeft + STEP;
  el.style.left = el.offsetLeft - STEP + "px";
  if (deadline > maxWidth) {
    el.style.left = el.offsetLeft + 2 + "px";
    el.innerHTML = "БЭМС";

    setTimeout(() => {
      el.innerHTML = "";
    }, 2000);
  }
  console.log(e.code);
}

function mooveDown(e) {
  const deadline = el.offsetTop + STEP;
  el.style.top = el.offsetTop + STEP + "px";
  if (deadline > maxHeight) {
    el.style.top = el.offsetTop + 2 + "px";
    el.innerHTML = "БЭМС";

    setTimeout(() => {
      el.innerHTML = "";
    }, 2000);
  }
  console.log(e.code);
}

function mooveUp(e) {
  const deadline = el.offsetTop - STEP;
  el.style.top = el.offsetTop - STEP + "px";
  if (deadline <= STEP) {
    el.style.top = el.offsetTop - 2 + "px";
    el.innerHTML = "БЭМС";

    setTimeout(() => {
      el.innerHTML = "";
    }, 2000);
  }
  console.log(e.code);
}

function controlLeft(e) {
  el.style.top = el.offsetTop - 10 + "px";
  setTimeout(() => {
    el.style.top = el.offsetTop + 10 + "px";
  }, 200);
  console.log(e.code);
}

function space(e) {
  el.style.transform = "scaleX(125%) scaleY(60%)";
  
}


document.addEventListener("keydown", (e) => KEY_MAP[e.code](e));
