import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { useLang } from '../i18n/LangContext';
import paybandLogo from '../assets/images/paybandlogo.svg';

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
        <div className={styles.logoNavGroup}>
          {/* Logo */}
          <a href="#" className={styles.logo}>
            <img src={paybandLogo} alt="Pay Band" className={styles.logoImg} />
          </a>

          {/* Desktop Nav */}
          <nav className={styles.navLinks}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
          </nav>
        </div>

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
