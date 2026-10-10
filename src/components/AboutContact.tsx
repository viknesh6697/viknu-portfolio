import { about, site } from '@/data/site'
import { Slot } from '@/components/Slot'

export function About() {
  return (
    <section className="panel about" data-panel="about">
      <div className="cell about__copy">
        <p className="eyebrow">About</p>
        <h2 className="about__title">{about.title}</h2>
        <p className="about__text">{about.text}</p>
        <p className="about__cert">{about.certification}</p>
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
        <p className="eyebrow">Want to</p>
        <h2 className="contact__title">
          Let’s make something
          <em> sharp.</em>
        </h2>
        <a className="contact__email" href={`mailto:${site.email}`}>
          {site.email}
        </a>
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
      <ul className="contact__socials">
        {site.socials.map((item) => (
          <li key={item.label}>
            <a href={item.href} target="_blank" rel="noreferrer">
              {item.label} →
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
