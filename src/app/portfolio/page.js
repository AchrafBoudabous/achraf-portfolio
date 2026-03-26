import Link from 'next/link';
import styles from './portfolio.module.css';
import { projects } from '../../data/projects';

export const metadata = {
  title: 'Portfolio',
  description: 'Explore my projects and work in AI, automation, and software development.',
};

const badgeVariant = (badge) => {
  if (badge.toLowerCase().includes('thesis')) return 'thesis';
  if (badge.toLowerCase().includes('work')) return 'work';
  return 'personal';
};

export default function Portfolio() {
  return (
    <main className={styles.main}>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.gridLines} aria-hidden="true" />
        <div className={styles.container}>
          <span className={styles.heroComment}>// portfolio</span>
          <h1 className={styles.title}>My Work</h1>
          <p className={styles.subtitle}>
            Projects combining AI, automation, and innovative software solutions.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className={styles.projectsSection}>
        <div className={styles.projectsContainer}>
          {projects.map((project) => (
            <article key={project.id} className={styles.projectCard}>

              <div className={styles.cardTop}>
                <span className={`${styles.badge} ${styles[badgeVariant(project.badge)]}`}>
                  {project.badge}
                </span>
                <span className={styles.year}>{project.year}</span>
              </div>

              <h2 className={styles.cardTitle}>{project.title}</h2>

              <p className={styles.institution}>{project.institution}</p>

              <p className={styles.description}>{project.description}</p>

              <div className={styles.technologies}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.tech}>{tech}</span>
                ))}
              </div>

              {(project.github || project.demo) && (
                <div className={styles.links}>
                  {project.github && (
                    <a
                      href={project.github}
                      className={styles.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className={styles.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              )}

            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <span className={styles.ctaComment}>// lets_work_together</span>
          <h2 className={styles.ctaTitle}>Open to Collaborations</h2>
          <p className={styles.ctaText}>
            Open to new projects, freelance work, and full-time opportunities in software engineering,
            AI development, and automation.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            ./get-in-touch
          </Link>
        </div>
      </section>

    </main>
  );
}