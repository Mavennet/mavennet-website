class Star {
  STAR_MAX_WIDTH = 4
  DEFAULT_STAR_SPEED_MULTIPLIER = 0.3
  SHADOW_COLOR = "black"
  SHADOW_BLUR = 10

  static MAX_DISTANCE = 150

  constructor(initialX, initialY, canvasRef, starConfig) {
    this.context = canvasRef.getContext("2d")
    this.canvasWidth = canvasRef.width
    this.canvasHeigth = canvasRef.height

    this.posX = initialX || Math.random() * this.canvasWidth
    this.posY = initialY || Math.random() * this.canvasHeigth

    const { isRandomRadius, starRadius } = starConfig

    this.initialRadius = isRandomRadius
      ? Math.random() * this.STAR_MAX_WIDTH
      : starRadius

    this.speedX = (this.DEFAULT_STAR_SPEED_MULTIPLIER - Math.random() * 0.5) / 2
    this.speedY = (this.DEFAULT_STAR_SPEED_MULTIPLIER - Math.random() * 0.5) / 2
  }

  normalizeDistance(val) {
    const positiveVal = Math.abs(val)
    return positiveVal / Star.MAX_DISTANCE
  }

  updateSpeed() {
    if (this.posX < 0 || this.posX > this.canvasWidth) {
      this.speedX = -this.speedX
    }
    if (this.posY < 0 || this.posY > this.canvasHeigth) {
      this.speedY = -this.speedY
    }

    this.posX += this.speedX
    this.posY += this.speedY
  }

  drawLine(posX, posY, distance) {
    const opacity = 1 - this.normalizeDistance(distance)
    this.context.strokeStyle = `rgba(0, 0, 0, ${opacity})`
    this.context.shadowBlur = this.SHADOW_BLUR
    this.context.shadowColor = this.SHADOW_COLOR
    this.context.beginPath()
    this.context.moveTo(this.posX, this.posY)
    this.context.lineTo(posX, posY)
    this.context.stroke()
    this.context.closePath()
  }

  update() {
    this.updateSpeed()
  }

  draw() {
    this.context.shadowBlur = null
    this.context.shadowColor = null
    this.context.fillStyle = "black"
    this.context.beginPath()
    this.context.arc(this.posX, this.posY, this.initialRadius, 0, Math.PI * 2)
    this.context.fill()
  }
}

export default Star
