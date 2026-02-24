import styles from './SkipLink.module.css';

export default function SkipLink() {
  return (
    <a href="#main-content" className={styles.skipLink}>
      Aller au contenu principal
    </a>
  );
}
