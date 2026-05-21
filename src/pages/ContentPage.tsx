import { type ReactNode, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import {
  aboutLinks,
  creations,
  curationsBooks,
  experiences,
  isPageSlug,
  pages,
} from '../site'
import { CreationEntryCard } from '../components/CreationEntry'
import './ContentPage.css'

const lineLinkPattern = /\[([^\]]+)\]\(([^)]+)\)/g

function renderExperienceLine(line: string): ReactNode {
  lineLinkPattern.lastIndex = 0
  const parts: ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = lineLinkPattern.exec(line)) !== null) {
    if (match.index > lastIndex) {
      parts.push(line.slice(lastIndex, match.index))
    }
    parts.push(
      <a key={match.index} href={match[2]} target="_blank" rel="noreferrer">
        {match[1]}
      </a>,
    )
    lastIndex = match.index + match[0].length
  }

  lineLinkPattern.lastIndex = 0

  if (lastIndex < line.length) parts.push(line.slice(lastIndex))
  return parts.length === 1 ? parts[0] : parts
}

export function ContentPage() {
  const { slug } = useParams()
  if (!isPageSlug(slug)) return <Navigate to="/" replace />

  const page = pages[slug]
  const isExperiences = slug === 'experiences'
  const [hoveredExperienceId, setHoveredExperienceId] = useState<string | null>(
    null,
  )

  const experienceImages = experiences.filter(
    (item): item is (typeof experiences)[number] & { image: string } =>
      Boolean(item.image),
  )

  return (
    <article
      className={
        isExperiences ? 'content-page content-page--experiences' : 'content-page'
      }
    >
      <Link to="/" className="content-back">
        ← home
      </Link>
      <h1>{page.title}</h1>
      {page.paragraphs.map((text) => (
        <p key={text}>{text}</p>
      ))}

      {slug === 'about' && (
        <nav className="about-links" aria-label="Contact and social links">
          {aboutLinks.map((link) =>
            link.href.startsWith('http') ? (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ) : (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ),
          )}
        </nav>
      )}

      {isExperiences && (
        <div className="experience-body">
          {experienceImages.length > 0 && (
            <div className="experience-gallery" aria-hidden="true">
              {experienceImages.map((item) => (
                <img
                  key={item.id}
                  className={
                    hoveredExperienceId && hoveredExperienceId !== item.id
                      ? 'experience-gallery-image is-dimmed'
                      : 'experience-gallery-image'
                  }
                  data-for={item.id}
                  src={item.image}
                  alt=""
                  loading="lazy"
                />
              ))}
            </div>
          )}

          <div className="experience-main">
            <ul className="experience-list">
              {experiences.map((item) => (
                <li
                  key={item.id}
                  className="experience-entry"
                  data-experience-id={item.id}
                  onMouseEnter={() => setHoveredExperienceId(item.id)}
                  onMouseLeave={() => setHoveredExperienceId(null)}
                  onFocus={() => setHoveredExperienceId(item.id)}
                  onBlur={() => setHoveredExperienceId(null)}
                >
                  <div className="experience-copy">
                    <p className="experience-title">{item.experience}</p>
                    {item.period && (
                      <p className="experience-period">{item.period}</p>
                    )}
                    {item.location && (
                      <p className="experience-location">{item.location}</p>
                    )}
                    {item.work && <p className="experience-work">{item.work}</p>}
                    {item.lines?.map((line) => (
                      <p key={line}>{renderExperienceLine(line)}</p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {slug === 'creations' && (
        <ul className="creation-list">
          {creations.map((item) => (
            <li key={item.id}>
              <CreationEntryCard item={item} />
            </li>
          ))}
        </ul>
      )}

      {slug === 'curations' && (
        <section className="curations-section" aria-labelledby="five-star-reads">
          <h2 id="five-star-reads" className="content-subheading">
            five-star reads
          </h2>
          <ul className="curation-books">
            {curationsBooks.map((book) => (
              <li key={book.cover}>
                <figure>
                  <img src={book.cover} alt={book.title} loading="lazy" />
                  <figcaption>{book.title}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  )
}
