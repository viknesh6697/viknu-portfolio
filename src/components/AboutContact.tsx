import { about, site } from '@/data/site'
import { Slot } from '@/components/Slot'

export function About() {
  return (
    <section className="panel about" data-panel="about">
      <div className="cell about__copy">
        <p className="eyebrow">About</p>
        <h2 className="about__title">{about.title}</h2>
        <p className="about__text">{about.text}</p>
        <ul className="about__badges">
          {about.certifications.map((cert) => (
            <li key={cert.image}>
              <a href={site.credly} target="_blank" rel="noreferrer">
                <img src={cert.image} alt={cert.label} />
              </a>
            </li>
          ))}
        </ul>
        <p className="about__cert">{about.otherCertifications}</p>
        <a className="about__atlas" href={about.atlas.href} target="_blank" rel="noreferrer">
          {about.atlas.label} →
        </a>
      </div>
      <div className="about__side">
        <ul className="about__list">
          {about.skills.map((skill, index) => (
            <li key={skill}>
              <span className="about__num">{String(index + 1).padStart(2, '0')}</span>
              {skill}
            </li>
          ))}
        </ul>
        <div className="photo-well about__frame">
          <Slot
            className="about__photo"
            src={about.photo}
            alt="At a desk, in front of a wall of posters"
            label="Image"
            ratio={about.photoRatio}
          />
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section className="panel contact" data-panel="contact">
      <div className="cell contact__copy">
        <p className="eyebrow">Have an AI system to ship?</p>
        <h2 className="contact__title">
          Let’s build it,
          <em> together.</em>
        </h2>
        <a className="contact__email" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <ul className="contact__socials">
          {site.socials.map((item) => (
            <li key={item.label}>
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.label} →
              </a>
            </li>
          ))}
        </ul>
        <p className="contact__location">{site.location}</p>
      </div>
      <div className="photo-well contact__photo">
        <Slot
          src={site.contactPhoto}
          alt="Standing on a cliff above a wide valley"
          label="Candid photo"
          ratio={site.contactPhotoRatio}
        />
      </div>
    </section>
  )
}
