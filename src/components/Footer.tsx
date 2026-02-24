import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Navigation</h2>
            <ul className={styles.links}>
              <li>
                <Link href="/" className={styles.link}>
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/projects" className={styles.link}>
                  Projets
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.link}>
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/cv" className={styles.link}>
                  CV
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.link}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Informations</h2>
            <ul className={styles.links}>
              <li>
                <Link href="/legal" className={styles.link}>
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className={styles.link}>
                  Plan du site
                </Link>
              </li>
              <li>
                <a
                  href="https://framaforms.org"
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Ouvre dans un nouvel onglet"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className={styles.copyright}>
          © {currentYear} Portfolio Éco-responsable. Conçu avec sobriété
          numérique.
        </p>
      </div>
    </footer>
  );
}
