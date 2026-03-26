'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import styles from '../styles/Navigation.module.css';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggle = () => setOpen(v => !v);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { closeMenu(); }, [pathname]);

  const navLinks = [
    { href: '/', label: 'home' },
    { href: '/about', label: 'about' },
    { href: '/portfolio', label: 'portfolio' },
    { href: '/blog', label: 'blog' },
    { href: '/contact', label: 'contact' },
  ];

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoTilde}>~/</span>achraf
        </Link>

        {/* Desktop links */}
        <div className={styles.right}>
          <ul className={styles.navLinks}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`${styles.navLink} ${isActive(href) ? styles.active : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile hamburger */}
        <div className={styles.mobileRight}>
          <ThemeToggle />
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
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={styles.mobileMenu}
        data-open={open ? 'true' : 'false'}
      >
        <ul className={styles.mobileLinks}>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.mobileLink} ${isActive(href) ? styles.active : ''}`}
                onClick={closeMenu}
              >
                <span className={styles.mobileLinkPrefix}>//</span> {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}