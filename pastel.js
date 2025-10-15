// 🎵 Música
const birthdaySong = document.getElementById('birthdaySong');
birthdaySong.play().catch(()=>{});

// ELEMENTOS
const candle = document.getElementById('candle');
const fire = document.getElementById('fireParticles');
const smoke = document.getElementById('smokePuff');
const finalMessage = document.getElementById('finalMessage');
const wishForm = document.getElementById('wishForm');
const confettiCanvas = document.getElementById('confettiCanvas');
const ctx = confettiCanvas.getContext('2d');

confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

// CONFETTI
let confettiParticles = [];
function createConfetti() {
  for (let i=0;i<150;i++){
    confettiParticles.push({
      x:Math.random()*confettiCanvas.width,
      y:Math.random()*confettiCanvas.height - confettiCanvas.height,
      r:Math.random()*6+4,
      d:Math.random()*20,
      color:`hsl(${Math.random()*360},100%,50%)`,
      tilt:Math.floor(Math.random()*10)-10,
      tiltAngleIncrement:Math.random()*0.07+0.05,
      tiltAngle:0
    });
  }
}
createConfetti();

function drawConfetti() {
  ctx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height);
  confettiParticles.forEach(p=>{
    p.tiltAngle+=p.tiltAngleIncrement;
    p.y+=(Math.cos(p.d)+3+p.r/2)/2;
    p.x+=Math.sin(p.d);
    p.tilt=Math.sin(p.tiltAngle)*15;
    ctx.beginPath();
    ctx.lineWidth=p.r/2;
    ctx.strokeStyle=p.color;
    ctx.moveTo(p.x+p.tilt+p.r/4,p.y);
    ctx.lineTo(p.x+p.tilt,p.y+p.tilt+p.r/4);
    ctx.stroke();
  });
  requestAnimationFrame(drawConfetti);
}

// VELA CLICK
candle.addEventListener('click', ()=>{
  fire.style.display='none';
  smoke.style.display='block';
  finalMessage.style.display='block';
  wishForm.classList.remove('hidden'); // mostrar formulario
  startConfetti();
});

// INICIAR CONFETTI
function startConfetti(){ drawConfetti(); }

// AJUSTE DE TAMAÑO
window.addEventListener('resize',()=>{
  confettiCanvas.width=window.innerWidth;
  confettiCanvas.height=window.innerHeight;
});
