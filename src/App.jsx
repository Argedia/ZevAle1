import { useState, useEffect } from "react"
import CountdownScreen from "./CountdownScreen"
import EndScreen from "./EndScreen"
import data from "./config.json" // <-- Asegúrate de importar tu JSON

export default function App() {
  const targetDate = new Date(data.targetDate) // del JSON
  const [secondsLeft, setSecondsLeft] = useState(() =>
    Math.max(0, Math.floor((targetDate - new Date()) / 1000))
  )
  const [showEndScreen, setShowEndScreen] = useState(false)

  useEffect(() => {
    if (secondsLeft <= 0) return
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        const diff = Math.floor((targetDate - new Date()) / 1000)
        return Math.max(0, diff)
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [secondsLeft, targetDate])

  function handleGoToEndScreen() {
    setShowEndScreen(true)
  }

  if (showEndScreen) {
    return (
      <EndScreen
        imageUrl="photo.jpg"
        title="Feliz 6 meses"
        message="Juntos para siempre, cada día es un nuevo comienzo."
      />
    )
  }

  return (
    <CountdownScreen seconds={secondsLeft} onButtonClick={handleGoToEndScreen} />
  )
}
