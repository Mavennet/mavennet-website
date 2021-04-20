class TextStar {
  static SHINE_RADIUS = 80
  static MIN_OPACITY = 0.3
  static MAX_OPACITY = 1
  static OPACITY_DELTA = 0.1
  static MAX_STAR_OPACITY = 0.7
  static MIN_STAR_OPACITY = 0.2
  static STAR_RADIUS = 6

  constructor(text, posX, posY, to, canvasRef) {
    this.canvas = canvasRef
    this.context = canvasRef.getContext("2d")

    this.currentOpacity = TextStar.MIN_OPACITY
    this.isShining = false

    this.posX = this.normalizeValues(posX, 0, 1000, 0, this.canvas.width)
    this.posY = this.normalizeValues(posY, 0, 1000, 0, this.canvas.height)
    this.text = text
    this.to = to
  }

  normalizeValues(value, currMin, currMax, newMin, newMax) {
    return (
      ((newMax - newMin) * (value - currMin)) / (currMax - currMin) + newMin
    )
  }

  drawStar() {
    this.context.fillStyle = `rgba(255,255,255, ${this.normalizeValues(
      this.currentOpacity,
      TextStar.MIN_OPACITY,
      TextStar.MAX_OPACITY,
      TextStar.MIN_STAR_OPACITY,
      TextStar.MAX_STAR_OPACITY
    )})`
    this.context.beginPath()
    this.context.arc(this.posX, this.posY, TextStar.STAR_RADIUS, 0, Math.PI * 2)
    this.context.fill()
  }

  drawText() {
    this.context.font = "20px 'barlow'"
    this.context.fillStyle = `rgba(255,255,255, ${this.currentOpacity})`
    this.context.shadowBlur = this.isShining ? 10 : null
    this.context.shadowColor = this.isShining
      ? `rgba(255,255,255, ${this.currentOpacity})`
      : null
    this.context.textAlign = "center"
    this.context.fillText(this.text, this.posX, this.posY)
  }

  update() {
    let opacityVariation = 0
    if (this.isShining && this.currentOpacity < TextStar.MAX_OPACITY) {
      opacityVariation = TextStar.OPACITY_DELTA
    } else if (!this.isShining && this.currentOpacity > TextStar.MIN_OPACITY) {
      opacityVariation = -TextStar.OPACITY_DELTA
    }

    this.currentOpacity += opacityVariation
  }

  draw() {
    this.drawStar()
    this.drawText()
  }

  setIsShining(isShining) {
    this.isShining = isShining
  }

  handleClick() {
  }
}

export default TextStar
