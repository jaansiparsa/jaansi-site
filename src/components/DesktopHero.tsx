import { Link } from 'react-router-dom'
import { desktopItems } from '../site'
import './DesktopHero.css'

export function DesktopHero() {
  return (
    <section className="desktop-hero" aria-label="Home">
      <div className="desktop-scene">
        <div className="sparkles" aria-hidden="true" />

        {desktopItems.map((item) => (
          <Link
            key={item.id}
            to={item.to}
            className={[
              'desktop-item',
              item.size && `desktop-item--${item.size}`,
            ]
              .filter(Boolean)
              .join(' ')}
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
            }}
          >
            <img src={item.icon} alt="" />
            <span>{item.label}</span>
          </Link>
        ))}

        <img
          src="/heropic.png"
          alt="Jaansi working on a laptop"
          className="hero-photo"
        />
      </div>
    </section>
  )
}
