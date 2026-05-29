'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Projets', href: '/projects' },
    { name: 'À propos', href: '/about' },
    { name: 'CV', href: '/cv' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} title="Retour à l'accueil">
          Quentin T.
        </Link>
        <nav aria-label="Navigation principale">
          <ul className={styles.nav}>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${
                    isActive(item.href) ? styles.navLinkActive : ''
                  }`}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
