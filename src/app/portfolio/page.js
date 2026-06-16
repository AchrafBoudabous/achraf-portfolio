import Link from 'next/link';
import styles from './portfolio.module.css';
import { projects } from '../../data/projects';
import PortfolioProjects from './PortfolioProjects';

export const metadata = {
  title: 'Portfolio',
  description: 'Explore my projects and work in AI, automation, and software development.',
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

      <PortfolioProjects projects={projects} />

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