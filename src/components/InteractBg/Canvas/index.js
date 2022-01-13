import React, { createRef, useEffect, useState } from "react"
import { navigate } from "gatsby"

import Star from "../Star"
import TextStar from "../TextStar"

const starsWithText = [
  {
    text: "Solutions",
    to: "/solutions",
    posX: 100,
    posY: 250,
  },
  {
    text: "Industries",
    to: "/industries",
    posX: 200,
    posY: 300,
  },
  {
    text: "Approach",
    to: "/approach",
    posX: 600,
    posY: 200,
  },
  {
    text: "R&D",
    to: "/r&d",
    posX: 850,
    posY: 400,
  },
]

const Canvas = () => {
  const canvasRef = createRef(null)
  const [textStars, setTextStars] = useState([])
  const [stars, setStars] = useState([])

  useEffect(() => {
    const initTextStars = () => {
      let textStarsList = starsWithText.map(
        star =>
          new TextStar(
            star.text,
            star.posX,
            star.posY,
            star.to,
            canvasRef.current
          )
      )
      setTextStars(textStarsList)
    }
    const initStars = () => {
      let starAux = []

      for (let i = 0; i < 80; i++) {
        starAux.push(
          new Star(null, null, canvasRef.current, {
            isRandomRadius: true,
          })
        )
      }
      setStars(starAux)
    }

    canvasRef.current.style.width = "100%"
    canvasRef.current.style.height = "100%"
    canvasRef.current.width = canvasRef.current.offsetWidth
    canvasRef.current.height = canvasRef.current.offsetHeight

    initStars()
    initTextStars()
  }, []) // eslint-disable-line

  // eslint-disable-next-line
  const startAnimation = () => {
    loop()
    window.requestAnimationFrame(startAnimation)
  }

  useEffect(() => {
    if (typeof window === "undefined") return
    window.requestAnimationFrame =
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 1000 / 60)
      }
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
        navigate(star.to)
      }
    })
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
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -1,
      }}
    >
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onClick={handleMouseClick}
      />
    </div>
  )
}

export default Canvas
