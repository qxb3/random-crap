const ants = []

function setup() {
  createCanvas(800, 800)

  for (let i = 0; i < 100; i++) {
    ants.push(new Ant(Math.random() * width, Math.random() * height))
  }
}

function draw() {
  background(0)
  smooth()
  // background(Math.random() * 255)
  fill(Math.random() * 255)
  // fill(Math.random() * 255, Math.random() * 255, Math.random() * 255)

  for (let i = 0; i < ants.length; i++) {
    const ant = ants[i]

    ant.draw()

    if (i < ants.length - 1) {
      line(ant.x, ant.y, ants[i + 1].x, ants[i + 1].y)
      stroke(Math.random() * 255)
    }

    ant.update()
  }
}

function mouseClicked() {
  saveCanvas('canvas', 'png')
}
