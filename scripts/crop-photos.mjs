// Recorta el "chrome" de capturas de iPhone/Instagram (barras oscuras o claras
// arriba/abajo), optimiza a WebP y genera public/og-image.jpg.
// Uso: node scripts/crop-photos.mjs   (fuentes en photos-src/, salida en public/photos/)
import sharp from 'sharp'
import { readdir, mkdir } from 'node:fs/promises'
import path from 'node:path'

const SRC = path.resolve('photos-src')
const OUT = path.resolve('public/photos')
const MAX_W = 2000
const HERO = 'novia-jardin-rosa'

// Una fila es "chrome" si es casi uniforme y muy oscura o muy clara
function isBarRow(data, width, channels, y) {
  let sum = 0
  let sumSq = 0
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * channels
    const l = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]
    sum += l
    sumSq += l * l
  }
  const mean = sum / width
  const std = Math.sqrt(Math.max(0, sumSq / width - mean * mean))
  return std < 10 && (mean < 30 || mean > 235)
}

async function detectCrop(file) {
  const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true })
  const { width, height, channels } = info
  const limit = Math.floor(height * 0.25)
  let top = 0
  while (top < limit && isBarRow(data, width, channels, top)) top++
  let bottom = 0
  while (bottom < limit && isBarRow(data, width, channels, height - 1 - bottom)) bottom++
  // Ignorar recortes mínimos (ruido de bordes)
  if (top < 4) top = 0
  if (bottom < 4) bottom = 0
  return { left: 0, top, width, height: height - top - bottom }
}

async function run() {
  await mkdir(OUT, { recursive: true })
  const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
  for (const f of files) {
    const input = path.join(SRC, f)
    const crop = await detectCrop(input)
    const name = f.replace(/\.[^.]+$/, '')
    const img = sharp(input).extract(crop).resize({ width: MAX_W, withoutEnlargement: true })
    const meta = await img.clone().webp({ quality: 82 }).toFile(path.join(OUT, `${name}.webp`))
    const trimmed = crop.top || crop.height !== (await sharp(input).metadata()).height
    console.log(`${trimmed ? 'recortada' : 'ok       '}  ${name}.webp  ${meta.width}x${meta.height}`)
  }

  // OG image 1200x630: foto del hero + overlay + nombre del estudio
  const svg = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1c1416" stop-opacity="0.25"/>
        <stop offset="1" stop-color="#1c1416" stop-opacity="0.8"/>
      </linearGradient></defs>
      <rect width="1200" height="630" fill="url(#g)"/>
      <line x1="80" y1="470" x2="140" y2="470" stroke="#d4304b" stroke-width="2"/>
      <text x="80" y="450" font-family="Georgia, serif" font-size="30" letter-spacing="6" fill="#fbf6f2">WEDDING PLANNER · BARCELONA</text>
      <text x="80" y="560" font-family="Georgia, serif" font-style="italic" font-size="84" fill="#ffffff">La Loca Se Va De Boda</text>
    </svg>`)
  await sharp(path.join(SRC, `${HERO}.jpg`))
    .resize(1200, 630, { fit: 'cover' })
    .composite([{ input: svg }])
    .jpeg({ quality: 86 })
    .toFile(path.resolve('public/og-image.jpg'))
  console.log('og-image.jpg generada')
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
