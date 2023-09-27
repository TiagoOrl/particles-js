
let item1
let item2
let size
let diam

function setup() {
  size = 600
  diam = 20
  createCanvas(size, size);
  item1 = new Item(250, 40, size, size, diam, random(-10, 10), random(-3, 3), 1.6, 0.5);
  item2 = new Item(300, 40, size, size, diam, random(-10, 10), random(-3, 3), 1.6, 0.5);
}

function draw() {
  background(0);
  fill(255);
  circle(item1.x, item1.y, item1.diameter);
  circle(item2.x, item2.y, item2.diameter);
  item1.update();
  item2.update();
}

function mouseClicked() {
  item1.addVel(random(0, 10), random(0, 10))
  item2.addVel(random(0, 10), random(0, 10))
}
