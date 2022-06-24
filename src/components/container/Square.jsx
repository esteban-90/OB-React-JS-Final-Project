import { useRef } from 'react'

export default function Square() {
  const squareRef = useRef()

  const style = {
    height: '250px',
    width: '250px',
    backgroundColor: 'rgb(0, 0, 0)',
    transition: 'background-color 500ms',
  }

  const getRandomRGB = () => Math.floor(Math.random() * 256)

  let interval

  const changeColor = () => {
    interval = setInterval(() => {
      squareRef.current.style.backgroundColor = `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`
    }, 1_000)
  }

  const stopChange = () => {
    clearInterval(interval)
  }

  return (
    <div
      style={style}
      ref={squareRef}
      onMouseEnter={changeColor}
      onMouseLeave={stopChange}
      onDoubleClick={stopChange}
    />
  )
}
