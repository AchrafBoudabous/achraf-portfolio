import Link from 'next/link';
import styles from './blog.module.css';
import { blogPosts } from '../../data/blogs';
import { formatDateUTC } from '../lib/formatDate';

export const metadata = {
  title: 'Blog',
  description: 'Read my latest articles on software engineering, AI, automation, and technology.',
};

export default function Blog() {
  return (
    <main className={styles.main}>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.gridLines} aria-hidden="true" />
        <div className={styles.container}>
          <span className={styles.heroComment}>// blog</span>
          <h1 className={styles.title}>Blog</h1>
          <p className={styles.subtitle}>
            Insights on software engineering, AI, automation, and technology trends.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className={styles.blogSection}>
        <div className={styles.container}>
          {blogPosts.length === 0 ? (
            <div className={styles.emptyState}>
              <span className={styles.emptyComment}>// coming_soon</span>
              <h2>Posts incoming</h2>
              <p>Articles on software engineering, AI, and automation — stay tuned.</p>
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
                      Read more →
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