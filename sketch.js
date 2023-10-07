
let system
let w 
let h 
let diam
let count

function setup() {
  w = 1600
  h = 900
  diam = 15
  count = 1800
  createCanvas(w, h);
  system = new System(count, diam, w, h, 0, 0.8, 0.05)
}

function draw() {
  background(20);
  
  system.items.forEach((it) => {
    fill(it.color.r, it.color.g, it.color.b)
    circle(it.x, it.y, it.diameter)
  })

  system.update()
}

function mouseClicked() {
  system.pulse(-10, 10)
}
