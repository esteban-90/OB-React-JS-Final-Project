import { useState, useEffect } from 'react'

export default function Clock() {
  const [data, setData] = useState({
    fecha: new Date(),
    edad: 0,
    nombre: 'Martín',
    apellidos: 'San José',
  })

  const tick = () => {
    setData(({ edad, ...rest }) => {
      edad++
      return { ...rest, fecha: new Date(), edad }
    })
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1_000)
    return () => clearInterval(timerID)
  }, [])

  return (
    <div>
      <h2>Hora Actual: {data.fecha.toLocaleTimeString()}</h2>

      <h3>
        {data.nombre} {data.apellidos}
      </h3>

      <h1>Edad: {data.edad}</h1>
    </div>
  )
}
