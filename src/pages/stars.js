import React, { createRef, useEffect, useState } from "react"

import Star from "../interactive-bg/Star"
import TextStar from "../interactive-bg/TextStar"

const Stars = () => {
  const canvasRef = createRef(null)
  const [textStars, setTextStars] = useState([])
  const [stars, setStars] = useState([])

  useEffect(() => {
    const initStars = () => {
      let starAux = []
      setTextStars([new TextStar(canvasRef.current)])
      for (let i = 0; i < 100; i++) {
        starAux.push(
          new Star(null, null, canvasRef.current, {
            isRandomRadius: true,
          })
        )
      }

      starAux.forEach(star => star.draw())
      setStars(starAux)
    }

    initStars()
  }, [])

  useEffect(() => {
    console.log("useEffect3")
    if (typeof window === "undefined") return
    window.requestAnimationFrame(startAnimation)
  }, [stars, startAnimation])

  const handleMouseMove = e => {
    const canvas = canvasRef.current
    if (!canvas) return

    const mousePosition = {
      x: e.pageX - canvas.getBoundingClientRect().left,
      y: e.pageY - canvas.getBoundingClientRect().top,
    }

    textStars.forEach(star => {
      let isShining = false
      if (
        getDistanceTwoPoints(
          star.posX,
          star.posY,
          mousePosition.x,
          mousePosition.y
        ) < TextStar.SHINE_RADIUS
      ) {
        isShining = true
      }
      star.setIsShining(isShining)
    })
  }

  const handleMouseClick = e => {
    const canvas = canvasRef.current
    if (!canvas) return

    const mousePosition = {
      x: e.pageX - canvas.getBoundingClientRect().left,
      y: e.pageY - canvas.getBoundingClientRect().top,
    }

    textStars.forEach(star => {
      if (
        getDistanceTwoPoints(
          star.posX,
          star.posY,
          mousePosition.x,
          mousePosition.y
        ) < TextStar.SHINE_RADIUS
      ) {
        star.handleClick()
      }
    })
  }

  const startAnimation = () => {
    loop()
    window.requestAnimationFrame(startAnimation)
  }

  const update = () => {
    stars.forEach(star => star.update())
    textStars.forEach(star => star.update())
  }

  const draw = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext("2d")

    context.clearRect(0, 0, canvas.width, canvas.height)
    textStars.forEach(star => star.draw())
    stars.forEach(star => star.draw())
    getLines()
  }

  const getDistanceTwoPoints = (posXOne, posYOne, posXTwo, posYTwo) => {
    return Math.hypot(posXOne - posXTwo, posYOne - posYTwo)
  }

  const getLines = () => {
    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const starOne = { x: stars[i].posX, y: stars[i].posY }
        const starTwo = { x: stars[j].posX, y: stars[j].posY }

        const pointsDistance = getDistanceTwoPoints(
          starOne.x,
          starOne.y,
          starTwo.x,
          starTwo.y
        )

        if (pointsDistance < Star.MAX_DISTANCE) {
          stars[i].drawLine(stars[j].posX, stars[j].posY, pointsDistance)
        }
      }
    }
  }

  const loop = () => {
    update()
    draw()
  }

  return (
    <canvas
      ref={canvasRef}
      width="2000"
      height="1000"
      onMouseMove={handleMouseMove}
      onClick={handleMouseClick}
    />
  )
}

export default Stars
