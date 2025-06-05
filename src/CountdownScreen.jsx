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
    <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 text-white">

      {/* VIDEO de fondo en móvil */}
      <video
        src={`${import.meta.env.BASE_URL}video.mp4`}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 md:hidden"
      />

      {/* OVERLAY degradado para texto sobre video en móvil */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 via-pink-700/50 to-red-700/70 z-10 md:hidden" />

      {/* CONTENIDO */}
      <div className="relative z-20 p-6 text-center md:text-left max-w-2xl w-full flex flex-col items-center"> {/* Cambiado: añadido w-full y flex-col items-center */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 drop-shadow-lg text-center">
          ¡La cuenta regresiva está en marcha!
        </h1>
        <div className="text-center text-5xl md:text-7xl font-mono bg-black bg-opacity-30 rounded-xl px-10 py-6 drop-shadow-xl select-none">
          {pad(hours)}:{pad(minutes)}:{pad(secs)}
        </div>
        <p className="mt-6 text-lg md:text-2xl max-w-xl drop-shadow-md text-center">
          Estamos esperando con mucha emoción, ¡cada segundo cuenta!
        </p>

        {seconds <= 0 && (
          <button
            onClick={onButtonClick}
            className="mt-10 px-6 py-3 md:px-8 md:py-4 text-2xl md:text-3xl font-bold rounded-full bg-pink-600 hover:bg-pink-700 active:bg-pink-800 transition-colors shadow-lg drop-shadow-lg mx-auto" /* Cambiado: añadido mx-auto y ajustes de tamaño responsive */
          >
            ¡Llegó el momento, clickeame!
          </button>
        )}
      </div>

      {/* VIDEO lateral en desktop */}
      <div className="hidden md:flex flex-col items-center justify-center p-6">
        <p className="text-lg mb-2 font-semibold">Un videito mientras esperamos</p>
        <video
          src={`${import.meta.env.BASE_URL}video.mp4`}
          autoPlay
          loop
          muted
          playsInline
          className="rounded-xl w-[300px] h-auto shadow-lg"
        />
      </div>
    </div>
  )
}