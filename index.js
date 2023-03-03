//generate an Array of objects which used to track the state of the game board status
const numObjects = 12;
const objects = [];
const blocks = [...document.querySelectorAll(".block")];
//const img = document.createElement("img");

for (let i = 1; i <= numObjects; i++) {
  objects.push({
    id: "block" + i,
    status: false,
  });
}
const View = (() => {
  const domSelector = {
    startBtn: document.querySelector("#start"),
    board_container: document.querySelector("#board_container"),
    countDown: document.querySelector("#time"),
    img: document.querySelector("img"),
    block1: document.querySelector("#block1"),
  };

  const render = (ele, template) => {
    ele.innerHTML = template;
  };

  return {
    domSelector,
    render,
  };
})();

const Model = ((view) => {
  const { render } = view;

  return {
    render,
  };
})(View);

const Controller = ((view) => {
  const { domSelector, render } = view;
  domSelector.startBtn.addEventListener("click", () => {
    console.log("clicked start");
    domSelector.startBtn.style.pointerEvents = "none";
    var count = 30;
    var counter = setInterval(timer, 1000);
    function timer() {
      count = count - 1;
      if (count < 0) {
        clearInterval(counter);
        //counter ended, do something here
        domSelector.startBtn.style.pointerEvents = "auto";
        alert("Time is up!");
        return;
      }

      //Do code for showing the number of seconds here
      domSelector.countDown.innerHTML = count;
      const i = Math.floor(Math.random() * blocks.length);
      const hole = blocks[i];
      let timer = null;
      // const img = document.createElement("img");
      //img.setAttribute("moleImg");
      domSelector.img.classList.add("mole");
      domSelector.img.src = "img/mole.jpeg";
      hole.appendChild(domSelector.img);

      timer = setTimeout(() => {
        hole.removeChild(domSelector.img);
      }, 1500);
    }
  });
  document.getElementById("moleImg").addEventListener("click", () => {
    console.log("clicked mole");
  });
})(View);
