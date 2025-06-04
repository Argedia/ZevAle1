import { useState } from "react"

function formatTime(seconds) {
  const days = Math.floor(seconds / (24 * 3600))
  seconds %= 24 * 3600
  const hours = Math.floor(seconds / 3600)
  seconds %= 3600
  const minutes = Math.floor(seconds / 60)
  seconds %= 60
  return { days, hours, minutes, seconds }
}

function pad(n) {
  return n.toString().padStart(2, "0")
}

export default function CountdownScreen({ seconds, onButtonClick }) {
  const { days, hours, minutes, seconds: secs } = formatTime(seconds)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 text-white p-6">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-8 drop-shadow-lg text-center">
        ¡La cuenta regresiva está en marcha!
      </h1>
      <div className="text-5xl md:text-9xl font-mono bg-black bg-opacity-30 rounded-xl px-10 py-6 drop-shadow-xl select-none">
        {days}:{pad(hours)}:{pad(minutes)}:{pad(secs)}
      </div>
      <p className="mt-6 text-lg md:text-3xl max-w-xl text-center drop-shadow-md">
        Estamos esperando con mucha emoción, ¡cada segundo cuenta!
      </p>

      {/* Mostrar botón solo cuando seconds <= 0 */}
      {seconds <= 0 && (
        <button
          onClick={onButtonClick}
          className="mt-10 px-8 py-4 text-3xl font-bold rounded-full bg-pink-600 hover:bg-pink-700 active:bg-pink-800 transition-colors shadow-lg drop-shadow-lg"
        >
          ¡Llegó el momento, clickeame!
        </button>
      )}
    </div>
  )
}
