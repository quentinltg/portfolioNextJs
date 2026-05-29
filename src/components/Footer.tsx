import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
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

        </div>

        <p className={styles.copyright}>
          © {currentYear} Quentin Tripognez. Portfolio développeur informatique.
        </p>
      </div>
    </footer>
  );
}
