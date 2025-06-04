import { useEffect, useState } from "react"

// Corazón animado simple con CSS
function Heart() {
  return (
    <svg
      className="w-6 h-6 text-pink-500 animate-pulse"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3 9.24 3 10.91 3.81 12 5.09 13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )
}

export default function EndScreen({ imageUrl, title, message }) {
  // Para hacer un efecto "latido" de corazón alternando opacidad o escala
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => setPulse((v) => !v), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="relative min-h-screen bg-center bg-cover flex flex-col justify-end"
      style={{
        backgroundImage: `url(${imageUrl})`,
        filter: "brightness(0.75) saturate(1.2)",
      }}
    >
      {/* Overlay oscuro con degradado y brillo rosado */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-pink-600 opacity-70" />

      {/* Contenedor del texto y decoraciones */}
      <div className="relative z-10 p-10 text-center text-white max-w-3xl mx-auto flex flex-col items-center">
        {/* Imagen de la carta tipo "letter" */}
        <img
          src="letter.jpg" // ← Asegúrate de tener esta imagen en /public
          alt="Carta de amor"
          className="w-[450px] md:w-[600px] h-auto mb-6 shadow-xl rounded-lg"
        />
        <h1 className="text-6xl md:text-8xl font-extrabold drop-shadow-lg mb-6 select-none">
          {title}
        </h1>
        <p className="text-2xl md:text-3xl drop-shadow-md mb-8 select-none">
          {message}
        </p>

        {/* Corazones animados alrededor */}
        <div className="flex justify-center gap-6">
          <div
            className={`transform transition-transform duration-700 ${
              pulse ? "scale-110" : "scale-90"
            }`}
          >
            <Heart />
          </div>
          <div
            className={`transform transition-transform duration-700 delay-200 ${
              pulse ? "scale-110" : "scale-90"
            }`}
          >
            <Heart />
          </div>
          <div
            className={`transform transition-transform duration-700 delay-400 ${
              pulse ? "scale-110" : "scale-90"
            }`}
          >
            <Heart />
          </div>
        </div>
      </div>
    </div>
  )
}
