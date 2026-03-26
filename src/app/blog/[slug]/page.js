import { notFound } from 'next/navigation';
import styles from '../blog.module.css';
import { blogPosts, getPostBySlug } from '../../../data/blogs';
import { formatDateUTC } from '../../lib/formatDate';
import Link from 'next/link';

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

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.gridLines} aria-hidden="true" />
        <div className={styles.container}>
          <span className={styles.heroComment}>// blog_post</span>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.subtitle}>
            <span className={styles.category}>{post.category}</span>
            <span style={{ color: 'var(--text-muted)', margin: '0 0.5rem' }}>·</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              {formatDateUTC(post.date)}
            </span>
            <span style={{ color: 'var(--text-muted)', margin: '0 0.5rem' }}>·</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              {post.readTime}
            </span>
          </p>
        </div>
      </section>

      {/* Content */}
      <section className={styles.blogSection}>
        <div className={styles.container} style={{ maxWidth: '720px' }}>
          <article
            className={styles.postBody}
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
          <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
            <Link
              href="/blog"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--accent)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                border: '1px solid var(--accent-border)',
                padding: '6px 14px',
                borderRadius: '4px',
                transition: 'all 0.2s ease',
              }}
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}