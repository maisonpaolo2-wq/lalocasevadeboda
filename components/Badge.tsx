// Sello circular giratorio con la frase del perfil
export default function Badge() {
  return (
    <div className="hero__badge" aria-hidden="true">
      <svg viewBox="0 0 120 120">
        <defs>
          <path id="badge-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
        </defs>
        <circle cx="60" cy="60" r="58" fill="#b3142f" />
        <text fill="#fff" fontSize="10.4" letterSpacing="2.6" fontFamily="DM Sans, sans-serif">
          <textPath href="#badge-circle">SAL DE LO TRADICIONAL · BODA LOCA ·</textPath>
        </text>
      </svg>
      <i>🌹</i>
    </div>
  )
}
