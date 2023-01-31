const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

function Particle(x,y){
  this.x=x;
  this.y=y;
  this.vol = {
    x: Math.random()*.6,
    y: Math.random()*.6
  }
  this.radius = Math.random()*4 + 2;
  this.draw = () => {
    ctx.beginPath();
    ctx.lineWidth=5;
    ctx.fillStyle='rgba(0,167,225,.8)';
    ctx.strokeStyle='rgba(255,225,225,.1)'
    ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
    ctx.fill();
    ctx.stroke();
  }
  this.update = () => {
    this.x += this.vol.x;
    this.y += this.vol.y;
    if(this.x - this.radius < 10 || this.x + this.radius > canvas.width){
      this.vol.x = -this.vol.x;
    }
    if(this.y - this.radius < 10 || this.y + this.radius > canvas.height){
      this.vol.y = -this.vol.y;
    }
    this.draw();
  }
  /* this.draw(); */
  this.update();
}

/* const p= new Particle(100,100);
p.draw();  */

let particleArray=[];
for(let i=0; i<30; i++){
  const x=Math.random()*canvas.width;
  const y=Math.random()*canvas.height;
  particleArray.push(new Particle(x,y));
}
//console.log(particleArray)

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvas.width,canvas.height)
  for(i=0; i<particleArray.length; i++){
    particleArray[i].update();
  }
}
window.onresize =function(){
  canvas.width=innerWidth;
  canvas.height=innerHeight;
}
animate();