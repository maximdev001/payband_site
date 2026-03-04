import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { useLang } from '../i18n/LangContext';

export default function Navbar() {
  const { t, lang, toggleLang, isRtl } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.solutions, href: '#solutions' },
    { label: t.nav.whoWeAre, href: '#who-we-are' },
    { label: t.nav.whatWeDo, href: '#what-we-do' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          <span className={styles.logoIcon}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="url(#logoGrad)" strokeWidth="3" fill="none"/>
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#b026ff"/>
                  <stop offset="1" stopColor="#00c9b1"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className={styles.logoText}>pay band</span>
        </a>

        {/* Desktop Nav */}
        <nav className={styles.navLinks}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right controls: lang switcher + hamburger */}
        <div className={styles.controls}>
          <button
            className={styles.langBtn}
            onClick={toggleLang}
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'العربية' : 'English'}
          </button>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`}/>
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`}/>
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`}/>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className={`${styles.langBtn} ${styles.mobileLangBtn}`} onClick={toggleLang}>
            {lang === 'en' ? 'العربية' : 'English'}
          </button>
        </div>
      )}
    </header>
  );
}
