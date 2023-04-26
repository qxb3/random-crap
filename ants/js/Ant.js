class Ant {
  constructor(x, y) {
    this.x = x
    this.y = y

    this.point = this.getRandomPointInCircle(this.x, this.y, 50)
  }

  draw() {
    ellipse(this.x, this.y, 8, 8)
  }

  update() {
    const moveX = lerp(this.x, this.point.x, 0.3)
    const moveY = lerp(this.y, this.point.y, 0.3)

    this.x = moveX
    this.y = moveY

    if (
      Math.floor(this.x) === Math.floor(this.point.x) &&
      Math.floor(this.y) === Math.floor(this.point.y)
    ) {
      this.point = this.getRandomPointInCircle(this.x, this.y, 50)
    }
  }

  getRandomPointInCircle(x0, y0, r) {
    const angle = Math.random() * 2 * Math.PI
    const x = Math.max(8, Math.min(x0 + r * Math.cos(angle), width - 8))
    const y = Math.max(8, Math.min(y0 + r * Math.sin(angle), height - 8))

    return { x, y }
  }
}
