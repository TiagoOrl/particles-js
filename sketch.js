
let system
let w 
let h 
let diam
let count

function setup() {
  w = 1600
  h = 900
  diam = 25
  count = 1200
  createCanvas(w, h);
  system = new System(count, diam, w, h, 0, 0.8, 0.005)
}

function draw() {
  background(0);
  fill(255);
  
  system.items.forEach((it) => {
    circle(it.x, it.y, it.diameter)
  })

  system.update()
}

function mouseClicked() {
  system.pulse(
    random(0, 10),
    random(0, 10)
  )
}
