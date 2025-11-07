import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import styles from '../styles/Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Achraf Boudabous
        </Link>
        <div className={styles.navRight}>
          <ul className={styles.navLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}