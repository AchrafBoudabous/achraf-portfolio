import Link from 'next/link';
import styles from './blog.module.css';
import { blogPosts } from '../../data/blogs';

function formatDateUTC(isoDate) {
  if (!isoDate) return '';
  const MONTHS = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ];
  const [y, m, d] = isoDate.split('-').map(Number);
  const dt = new Date(Date.UTC(y, (m || 1) - 1, d || 1));
  if (Number.isNaN(dt.getTime())) return String(isoDate);
  return `${MONTHS[dt.getUTCMonth()]} ${dt.getUTCDate()}, ${dt.getUTCFullYear()}`;
}

export const metadata = {
  title: 'Blog',
  description:
    'Read my latest articles on software engineering, AI, automation, and technology.',
};

export default function Blog() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Blog</h1>
          <p className={styles.subtitle}>
            Insights on software engineering, AI, automation, and technology trends.
          </p>
        </div>
      </section>

      <section className={styles.blogSection}>
        <div className={styles.container}>
          {blogPosts.length === 0 ? (
            <div className={styles.emptyState}>
              <h2>Coming Soon!</h2>
              <p>
                Blog posts will be published here. Stay tuned for articles on software
                engineering, AI, and automation.
              </p>
            </div>
          ) : (
            <div className={styles.blogGrid}>
              {blogPosts.map((post) => (
                <article key={post.id} className={styles.blogCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.category}>{post.category}</span>
                    <span className={styles.readTime}>{post.readTime}</span>
                  </div>

                  <h2 className={styles.postTitle}>{post.title}</h2>

                  <p className={styles.excerpt}>{post.excerpt}</p>

                  <div className={styles.cardFooter}>
                    <span className={styles.date}>{formatDateUTC(post.date)}</span>
                    <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
