let ghost = null;
let sourceImg = null;
let grabX = 0;
let grabY = 0;
const holdOffsetX = 12; 
const holdOffsetY = 0;   

function dropBack() {
  if (!ghost) return;

  ghost.remove();
  ghost = null;

  if (sourceImg) {
    sourceImg.classList.remove("silhouette");
    sourceImg = null;
  }

  document.body.classList.remove("holding");
}


document.addEventListener("mousedown", (e) => {

  if (ghost) {
    if (e.target.closest("#picktable")) dropBack();
    return;
  }


  const img = e.target.closest("img.pick");
  if (!img) return;


  ghost = img.cloneNode(false);
  ghost.classList.add("ghost");
  document.body.appendChild(ghost);

  sourceImg = img;
  sourceImg.classList.add("silhouette");
  document.body.classList.add("holding");

  grabX = e.offsetX;
  grabY = e.offsetY;


  ghost.style.left = (e.clientX - grabX + holdOffsetX) + "px";
  ghost.style.top  = (e.clientY - grabY + holdOffsetY) + "px";
});

const arm = document.getElementById("arm");
const armOffsetX = -145;
const armOffsetY = -99;

document.addEventListener("mousemove", (e) => {
  if (document.body.classList.contains("holding")) {
    arm.style.left = (e.clientX + armOffsetX) + "px";
    arm.style.top  = (e.clientY + armOffsetY) + "px";
  }

  if (!ghost) return;
  ghost.style.left = (e.clientX - grabX) + "px";
  ghost.style.top  = (e.clientY - grabY) + "px";
});

function swingAll(){

  arm.classList.remove("swing");
  void arm.offsetWidth;
  arm.classList.add("swing");


  if (ghost){
    ghost.classList.remove("swing");
    void ghost.offsetWidth;
    ghost.classList.add("swing");
  }
}

document.addEventListener("mousedown", (e) => {
  if (!ghost) return;                         
  if (e.target.closest("#picktable")) return; 
  if (e.target.closest("#sidebar")) return;   
  swingAll();
});

