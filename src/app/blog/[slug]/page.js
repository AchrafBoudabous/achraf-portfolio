import { notFound } from 'next/navigation';
import styles from '../blog.module.css';
import { blogPosts, getPostBySlug } from '../../../data/blogs';

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

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post not found' };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.subtitle}>
            <span>{post.category}</span> • <span>{formatDateUTC(post.date)}</span> •{' '}
            <span>{post.readTime}</span>
          </p>
        </div>
      </section>

      <section className={styles.blogSection}>
        <div className={styles.container}>
          <article className={styles.blogCard}>
            <div
              className={styles.postBody}
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </article>

          <div className={styles.cardFooter} style={{ marginTop: '1rem' }}>
            <a className={styles.readMore} href="/blog">
              ← Back to Blog
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
