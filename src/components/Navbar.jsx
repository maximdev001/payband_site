import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { useLang } from '../i18n/LangContext';
import { useLocation, useNavigate } from 'react-router-dom';
import paybandLogo from '../assets/images/paybandlogo.svg';

export default function Navbar() {
  const { t, lang, toggleLang, isRtl } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleNavigation = (sectionId) => {
    if (isHome) {
      // If on home, smooth scroll to section
      const element = document.getElementById(sectionId.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on other page, navigate to home with hash
      navigate(`/${sectionId}`);
    }
  };

  const navLinks = [
    { label: t.nav.solutions, onClick: () => handleNavigation('#solutions') },
    { label: t.nav.whoWeAre, onClick: () => handleNavigation('#who-we-are') },
    { label: t.nav.whatWeDo, onClick: () => handleNavigation('#what-we-do') },
    { label: t.nav.contact, onClick: () => handleNavigation('#contact') },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash scrolling on route change
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.logoNavGroup}>
          {/* Logo */}
          <a href="/" className={styles.logo}>
            <img src={paybandLogo} alt="Pay Band" className={styles.logoImg} />
          </a>

          {/* Desktop Nav */}
          <nav className={styles.navLinks}>
          {navLinks.map((link, index) => (
            <button key={index} onClick={link.onClick} className={styles.navLink}>
              {link.label}
            </button>
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
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => {
                link.onClick();
                setMenuOpen(false);
              }}
              className={styles.mobileLink}
            >
              {link.label}
            </button>
          ))}
          <button className={`${styles.langBtn} ${styles.mobileLangBtn}`} onClick={toggleLang}>
            {lang === 'en' ? 'العربية' : 'English'}
          </button>
        </div>
      )}
    </header>
  );
}
