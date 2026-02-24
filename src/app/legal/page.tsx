import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du portfolio éco-responsable. Informations sur l\'hébergeur, propriété intellectuelle et protection des données.',
};

export default function LegalPage() {
  return (
    <div className="container">
      <header className="page-header">
        <h1 className="page-title">Mentions légales</h1>
      </header>

      <div className="legal-content">
        <section className="legal-section" aria-labelledby="editor-title">
          <h2 id="editor-title" className="legal-title">
            Éditeur du site
          </h2>
          <p className="legal-text">
            <strong>Nom :</strong> Quentin
            <br />
            <strong>Email :</strong> contact@example.com
            <br />
            <strong>Statut :</strong> Portfolio personnel
          </p>
        </section>

        <section className="legal-section" aria-labelledby="hosting-title">
          <h2 id="hosting-title" className="legal-title">
            Hébergement
          </h2>
          <p className="legal-text">
            Ce site est hébergé sur un service d'hébergement statique éco-responsable.
            <br />
            Les fichiers statiques sont servis via CDN pour optimiser la performance
            et réduire la consommation énergétique.
          </p>
        </section>

        <section className="legal-section" aria-labelledby="data-title">
          <h2 id="data-title" className="legal-title">
            Données personnelles
          </h2>
          <p className="legal-text">
            Ce site ne collecte aucune donnée personnelle de manière directe.
          </p>
          <ul className="legal-list">
            <li>Aucun cookie de tracking ou analytics</li>
            <li>Aucun formulaire de contact hébergé sur ce domaine</li>
            <li>Les formulaires externes (Framaforms) sont soumis à leurs propres
              politiques de confidentialité</li>
            <li>Aucune base de données, tout est statique</li>
          </ul>
          <p className="legal-text">
            Pour toute question concernant vos données, contactez-moi à
            l'adresse : contact@example.com
          </p>
        </section>

        <section className="legal-section" aria-labelledby="property-title">
          <h2 id="property-title" className="legal-title">
            Propriété intellectuelle
          </h2>
          <p className="legal-text">
            Le contenu de ce site (textes, images, code source) est protégé par
            le droit d'auteur. Toute reproduction ou utilisation sans autorisation
            préalable est interdite.
          </p>
          <p className="legal-text">
            Le code source du portfolio peut être consulté et réutilisé à des fins
            éducatives avec mention de l'auteur.
          </p>
        </section>

        <section className="legal-section" aria-labelledby="credits-title">
          <h2 id="credits-title" className="legal-title">
            Crédits
          </h2>
          <ul className="legal-list">
            <li>Développement : Quentin</li>
            <li>Framework : Next.js (MIT License)</li>
            <li>Typographie : Polices système pour performance optimale</li>
            <li>Icônes : Emojis natifs (pas de bibliothèque externe)</li>
          </ul>
        </section>

        <section className="legal-section" aria-labelledby="accessibility-title">
          <h2 id="accessibility-title" className="legal-title">
            Accessibilité
          </h2>
          <p className="legal-text">
            Ce site est conçu pour être accessible à tous, conformément aux
            directives WCAG 2.1 niveau AA. Si vous rencontrez des difficultés
            d'accès au contenu, merci de me contacter à : contact@example.com
          </p>
        </section>

        <section className="legal-section" aria-labelledby="update-title">
          <h2 id="update-title" className="legal-title">
            Mises à jour
          </h2>
          <p className="legal-text">
            Dernière mise à jour : Février 2026
            <br />
            Ces mentions légales peuvent être modifiées à tout moment. La version
            en ligne fait foi.
          </p>
        </section>
      </div>
    </div>
  );
}
