import { education, experience } from '@/data/site'

export function Experience() {
  return (
    <section className="panel experience" data-panel="experience">
      <div className="cell experience__intro">
        <p className="eyebrow">Experience</p>
        <h2 className="experience__title">Roles across AI systems and data platforms.</h2>
        <p className="experience__education">{education}</p>
      </div>

      <ul className="experience__list">
        {experience.map((role) => (
          <li key={role.id} className="experience__item">
            <div className="experience__meta">
              <span>{role.org}</span>
              <span aria-hidden="true">·</span>
              <span>{role.location}</span>
              <span aria-hidden="true">·</span>
              <span>{role.dates}</span>
            </div>
            <h3 className="experience__item-title">{role.title}</h3>
            <p className="experience__item-summary">{role.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
