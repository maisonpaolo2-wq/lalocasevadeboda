import Image from 'next/image'
import Link from 'next/link'
import { navLinks, siteConfig } from '@/content/data'
import { waLink } from './WhatsAppButton'

export default function Footer() {
  const ig = siteConfig.instagram.replace('@', '')
  return (
    <footer className="footer">
      <div className="footer__bg">
        <Image src="/photos/rosas-rojas-espigas.webp" alt="Rosas rojas de tallo largo entre espigas doradas" fill sizes="100vw" />
      </div>
      <div className="container">
        <p className="footer__quote">“{siteConfig.quote}”</p>
        <p className="footer__sig">{siteConfig.planner}</p>
        <div className="footer__grid">
          <div className="footer__brand">
            <b>La Loca Se Va De Boda</b>
            <p className="small" style={{ opacity: 0.8, marginTop: '1rem', maxWidth: '22rem' }}>
              Organización de bodas diferentes y despedidas en Barcelona y toda Catalunya.
            </p>
          </div>
          <div>
            <h4>Explorar</h4>
            <ul>
              {navLinks.slice(0, 4).map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Hablemos</h4>
            <ul>
              <li>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <Link href="/contacto">Formulario de contacto</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Sígueme</h4>
            <ul>
              <li>
                <a href={`https://www.instagram.com/${ig}/`} target="_blank" rel="noopener noreferrer">
                  Instagram {siteConfig.instagram}
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/entre_tonos_weddingplanacademy/" target="_blank" rel="noopener noreferrer">
                  Formada en Entre Tonos
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__legal">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}
          </span>
          <span>Wedding planner · Barcelona · Catalunya</span>
        </div>
      </div>
    </footer>
  )
}
