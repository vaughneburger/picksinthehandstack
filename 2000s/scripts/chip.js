const canvas = document.getElementById("cover");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "assets/GOOG_EAR_PERU_MOUNTAIN.jpg";

function resizeCanvas(){
  const dpr = window.devicePixelRatio || 1;
  const W = window.innerWidth;
  const H = window.innerHeight;

  canvas.style.width = W + "px";
  canvas.style.height = H + "px";
  canvas.width = Math.floor(W * dpr);
  canvas.height = Math.floor(H * dpr);

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0); 
}

function drawCover(){
  const W = window.innerWidth;
  const H = window.innerHeight;

  const s = Math.max(W / img.width, H / img.height);
  const drawW = img.width * s;
  const drawH = img.height * s;
  const x = (W - drawW) / 2;
  const y = (H - drawH) / 2;

  ctx.globalCompositeOperation = "source-over";
  ctx.clearRect(0, 0, W, H);
  ctx.drawImage(img, x, y, drawW, drawH);

  ctx.globalCompositeOperation = "destination-out";
}

img.onload = () => {
  resizeCanvas();
  drawCover();
};

window.addEventListener("resize", () => {
  resizeCanvas();
  drawCover(); 
});


function chip(x, y){
  ctx.beginPath();


  for (let i = 0; i < 8; i++){
    const dx = (Math.random() - 0.5) * 18;
    const dy = (Math.random() - 0.5) * 18;
    const r  = 10 + Math.random() * 8;
    ctx.moveTo(x + dx + r, y + dy);
    ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
  }

  ctx.fill();
}

const SWING_MS = 500;
const IMPACT_T = 0.66;

canvas.addEventListener("mousedown", (e) => {
  if (!document.body.classList.contains("holding")) return;

  const x = e.clientX, y = e.clientY;

  swingAll();

  setTimeout(() => chip(x, y), SWING_MS * IMPACT_T);
});