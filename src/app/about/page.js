import styles from './about.module.css';
import { about } from '@/data/about';

export const metadata = {
  title: 'About',
  description:
    'Learn more about Achraf Boudabous - Software Engineer specializing in AI, automation, and full-stack development.',
};

export default function About() {
  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>{about.hero.title}</h1>
          <p className={styles.subtitle}>{about.hero.subtitle}</p>
        </div>
      </section>

      {/* Bio */}
      <section className={styles.bioSection}>
        <div className={styles.container}>
          <div className={styles.bioContent}>
            {about.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className={styles.experienceSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Professional Experience</h2>
          <div className={styles.timeline}>
            {about.experience.map((item, idx) => (
              <div className={styles.timelineItem} key={`${item.role}-${idx}`}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <h3>{item.role}</h3>
                    <span className={styles.timelinePeriod}>{item.period}</span>
                  </div>
                  <p className={styles.institution}>
                    {item.institution}, {item.location}
                  </p>
                  <ul className={styles.responsibilities}>
                    {item.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className={styles.educationSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.timeline}>
            {about.education.map((edu, idx) => (
              <div className={styles.timelineItem} key={`${edu.degree}-${idx}`}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <h3>{edu.degree}</h3>
                    <span className={styles.timelinePeriod}>{edu.period}</span>
                  </div>
                  <p className={styles.institution}>{edu.institution}</p>
                  <p className={styles.description}>{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className={styles.skillsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
          <div className={styles.skillsGrid}>
            {about.skills.map((group, idx) => (
              <div className={styles.skillCategory} key={`${group.category}-${idx}`}>
                <h3>{group.category}</h3>
                <div className={styles.skillTags}>
                  {group.items.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className={styles.softSkillsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Soft Skills</h2>
          <div className={styles.softSkillsGrid}>
            {about.softSkills.map((s) => (
              <div className={styles.softSkill} key={s.label}>
                <div className={styles.icon}>{s.icon}</div>
                <h3>{s.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className={styles.certificatesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Certifications</h2>
          <div className={styles.certificatesGrid}>
            {about.certifications.map((c) => (
              <div className={styles.certificate} key={c}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className={styles.languagesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Languages</h2>
          <div className={styles.languagesGrid}>
            {about.languages.map((l) => (
              <div className={styles.language} key={l.name}>
                <h3>{l.name}</h3>
                <p>{l.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className={styles.interestsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Personal Interests</h2>
          <div className={styles.interestsContent}>
            <p>{about.interestsParagraph}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
