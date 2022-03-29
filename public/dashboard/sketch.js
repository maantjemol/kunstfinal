let particles = []
let bg
let scale = 50
let amountParticles = 500
let w = 600
let h = 500
let dia = scale/5
let explosion = 5
let distanceMouse = 75
let fleeMult = 3
let arriveMult = 1
let c
let cols = w/scale
let rows = h/scale
let colors
let compliment = ""

function preload(){
  img = loadImage('https://i.ibb.co/3sG6b60/sterrending-500x500.jpg');
  bg = loadImage('https://i.ibb.co/z2kBw4w/Webp-net-resizeimage.jpg')
}

function setup() {
  fetch('http://server.maantjemol.com:3123/box_2eb7b42fe95dbf8a1202')
  .then(response => response.json())
  .then(data => compliment = data[0].compliment);
  //print(colorss)
  let canvass = createCanvas(w, h, P2D);
  canvass.parent("frame");
  image(img, 0, 0);
  var particleCount = 0
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      // c = 
      particles[particleCount] = new Particle(x * scale, y * scale, getColor());
      particleCount += 1
    }
  }
}

function getColor(){
  let num = Math.floor(Math.random() * 3)
  if(num == 0){
    return "#FFEA00"
  }
  if(num == 1){
    return "#41E2BA"
  }
  if(num == 2){
    return "#E86A92"
  }
}


function removeParticle(word){
  console.log(word);
  if(word != compliment){
    particles[Math.floor(Math.random() * particles.length)].dying = true
    compliment = word
  }
}
// function mouseDragged() {
//   for (let i = 0; i < amountParticles; i++) {
//     p[i]= new Particle(mouseX, mouseY, 3, 0, 3/speedParticles);
//     for(let par of p) 
//       particles.push(par)
//   }
// }

let timer = 0


function draw() {
  if(timer == 150){
    timer = 0
    fetch('http://server.maantjemol.com:3123/box_2eb7b42fe95dbf8a1202')
    .then(response => response.json())
    .then(data => removeParticle(data[0].compliment))
  }

  background(bg);
  beginShape()
  for (let i = 0; i < particles.length; i++) {
    if(particles[i].alive == false){
      particles.splice(i, 1)
    }
    particles[i].show();
  }
  endShape()

  timer++
}

class Particle {
  constructor(_x, _y, _c) {
    //values particles
    this.pos = createVector(_x, _y)
    this.target = createVector(_x, _y)
    this.vel = p5.Vector.random2D() //createVector()
    this.acc = createVector()
    this.maxSpeed = 5
    this.maxForce = 0.3
    this.c = _c
    this.alive = true
    this.dying = false
    this.scaleFac = 1
  }


  show() {
    noStroke(255)//noStroke();
    fill(this.c);
    if(this.dying){
      square(this.pos.x - scale * this.scaleFac * 0.5 + scale * 0.5, this.pos.y - scale * this.scaleFac * 0.5 + scale * 0.5, scale * this.scaleFac)
      this.scaleFac -= 0.005
      if(this.scaleFac <= 0){
        this.alive = false
      }
    } else {
      square(this.pos.x, this.pos.y, scale)
    }
  }
}