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
        <div className={styles.gridLines} aria-hidden />
        <div className={styles.container}>
          <span className={styles.heroComment}>// about_me</span>
          <h1 className={styles.title}>{about.hero.title}</h1>
          <p className={styles.subtitle}>{about.hero.subtitle}</p>
        </div>
      </section>

      {/* Bio */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.comment}>// bio</span>
            <h2 className={styles.sectionTitle}>Who I Am</h2>
          </div>
          <div className={styles.bioContent}>
            {about.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className={`${styles.section} ${styles.altSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.comment}>// professional_experience</span>
            <h2 className={styles.sectionTitle}>Experience</h2>
          </div>
          <div className={styles.timeline}>
            {about.experience.map((item, idx) => (
              <div className={styles.timelineItem} key={`${item.role}-${idx}`}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <h3>{item.role}</h3>
                    <span className={styles.timelinePeriod}>{item.period}</span>
                  </div>
                  <p className={styles.institution}>
                    {item.institution}
                    <span className={styles.location}> · {item.location}</span>
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
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.comment}>// education</span>
            <h2 className={styles.sectionTitle}>Education</h2>
          </div>
          <div className={styles.timeline}>
            {about.education.map((edu, idx) => (
              <div className={styles.timelineItem} key={`${edu.degree}-${idx}`}>
                <div className={`${styles.timelineDot} ${styles.timelineDotAlt}`} />
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
      <section className={`${styles.section} ${styles.altSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.comment}>// technical_skills</span>
            <h2 className={styles.sectionTitle}>Technical Skills</h2>
          </div>
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
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.comment}>// soft_skills</span>
            <h2 className={styles.sectionTitle}>Soft Skills</h2>
          </div>
          <div className={styles.softSkillsGrid}>
            {about.softSkills.map((s) => (
              <div className={styles.softSkill} key={s.label}>
                <span className={styles.softSkillIcon}>{s.icon}</span>
                <h3>{s.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className={`${styles.section} ${styles.altSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.comment}>// certifications</span>
            <h2 className={styles.sectionTitle}>Certifications</h2>
          </div>
          <div className={styles.certificatesGrid}>
            {about.certifications.map((c) => (
              <div className={styles.certificate} key={c}>
                <span className={styles.certAccent}>▹</span>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.comment}>// languages</span>
            <h2 className={styles.sectionTitle}>Languages</h2>
          </div>
          <div className={styles.languagesGrid}>
            {about.languages.map((l) => (
              <div className={styles.language} key={l.name}>
                <h3>{l.name}</h3>
                <p className={styles.languageLevel}>{l.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className={`${styles.section} ${styles.interestsSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.comment}>// personal_interests</span>
            <h2 className={styles.sectionTitle}>Beyond the Code</h2>
          </div>
          <p className={styles.interestsParagraph}>{about.interestsParagraph}</p>
        </div>
      </section>

    </main>
  );
}