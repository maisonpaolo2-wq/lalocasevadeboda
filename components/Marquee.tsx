const words = ['Bodas diferentes', 'Rosas rojas', 'Despedidas locas', 'Cero protocolo aburrido', 'Barcelona', 'Mucho baile']

export default function Marquee() {
  const row = [...words, ...words]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((w, i) => (
          <span key={i}>{w} ✿</span>
        ))}
      </div>
    </div>
  )
}
