class Star {
  STAR_MAX_WIDTH = 2
  DEFAULT_STAR_SPEED_MULTIPLIER = 0.3
  SHADOW_COLOR = "white"
  SHADOW_BLUR = 0

  static MAX_DISTANCE = 115

  constructor(initialX, initialY, canvasRef, starConfig) {
    this.context = canvasRef.getContext("2d")
    this.canvasWidth = canvasRef.width
    this.canvasHeigth = canvasRef.height

    this.posX = initialX || Math.random() * this.canvasWidth
    this.posY = initialY || Math.random() * this.canvasHeigth

    const { isRandomRadius, starRadius } = starConfig

    this.initialRadius = isRandomRadius
      ? (Math.random() + 0.5) * this.STAR_MAX_WIDTH
      : starRadius

    this.speedX = this.DEFAULT_STAR_SPEED_MULTIPLIER - Math.random() * 0.5
    this.speedY = this.DEFAULT_STAR_SPEED_MULTIPLIER - Math.random() * 0.5
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
    this.context.strokeStyle = `rgba(255, 255, 255, ${opacity})`
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
    this.context.fillStyle = "rgba(255, 255, 255, .8)"
    this.context.beginPath()
    this.context.arc(this.posX, this.posY, this.initialRadius, 0, Math.PI * 2)
    this.context.fill()
  }
}

export default Star
