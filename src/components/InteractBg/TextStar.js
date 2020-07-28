class TextStar {
  static SHINE_RADIUS = 80
  static MIN_OPACITY = 0.3
  static MAX_OPACITY = 1
  static OPACITY_DELTA = 0.1

  constructor(canvasRef) {
    this.canvas = canvasRef
    this.context = canvasRef.getContext("2d")
    this.canvasWidth = canvasRef.width
    this.canvasHeigth = canvasRef.height
    this.isShining = false
    this.posX = this.canvas.width / 2
    this.posY = this.canvas.height / 2
    this.currentOpacity = TextStar.MIN_OPACITY
  }

  drawStar() {
    this.context.fillStyle = `rgba(0,0,0, ${this.currentOpacity})`
    this.context.beginPath()
    this.context.arc(this.posX, this.posY, 20, 0, Math.PI * 2)
    this.context.fill()
  }

  drawText() {
    this.context.font = "30px 'barlow'"
    this.context.fillStyle = `rgba(0,0,0, ${this.currentOpacity})`
    this.context.shadowBlur = this.isShining ? 10 : null
    this.context.shadowColor = this.isShining
      ? `rgba(0,0,0, ${this.currentOpacity})`
      : null
    this.context.textAlign = "center"
    this.context.fillText("Hello World", this.posX, this.posY)
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
    console.log("Hello world clicked")
  }
}

export default TextStar
