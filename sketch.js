
let system
let size
let diam

function setup() {
  size = 600
  diam = 20
  createCanvas(size, size);
  system = new System(10, 10, size, size, 0.6, 0.8)
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
