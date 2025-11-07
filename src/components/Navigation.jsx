'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import styles from '../styles/Navigation.module.css';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(v => !v);
  const closeMenu = () => setOpen(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          Achraf Boudabous
        </Link>

        {/* Desktop cluster */}
        <div className={styles.right}>
          <ul className={styles.navLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile hamburger */}
        <button
          className={`${styles.menuButton} ${open ? styles.open : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={toggle}
        >
          <div className={styles.hamburger} aria-hidden>
            <span />
            <span />
            <span />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={styles.mobileMenu}
        data-open={open ? 'true' : 'false'}
      >
        <ul className={styles.mobileLinks} onClick={closeMenu}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div className={styles.mobileExtras}>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
