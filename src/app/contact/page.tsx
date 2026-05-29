import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez-moi pour discuter de vos projets web éco-responsables. Formulaire de contact et liens directs disponibles.',
};

export default function ContactPage() {
  return (
    <div className="container">
      <header className="page-header">
        <h1 className="page-title">Contact</h1>
        <p className="page-description">
          Vous avez un projet ? Discutons-en ensemble
        </p>
      </header>

      <div className="content-grid">
        <section className="content-section" aria-labelledby="contact-title">
          <h2 id="contact-title" className="content-title">
            Me contacter
          </h2>
          <p className="content-text">
            Actuellement à la recherche d'une alternance d'une durée de 36 mois pour la rentrée 2026, je suis ouvert à toute opportunité de collaboration.
          </p>

          <div className="contact-methods">
            <div className="contact-card">
              <h3 className="contact-card-title">📧 Email</h3>
              <p className="contact-card-description">
                Pour les demandes de contact et échanges professionnels
              </p>
              <a
                href="mailto:quentint2005@gmail.com"
                className="button button-primary"
                title="Envoyer un email"
              >
                quentint2005@gmail.com
              </a>
            </div>

            <div className="contact-card">
              <h3 className="contact-card-title">📞 Téléphone</h3>
              <p className="contact-card-description">
                Disponible pour échanger sur vos projets
              </p>
              <a
                href="tel:+33783001224"
                className="button button-primary"
                title="Appeler"
              >
                07 83 00 12 24
              </a>
            </div>

            <div className="contact-card">
              <h3 className="contact-card-title">💼 LinkedIn</h3>
              <p className="contact-card-description">
                Restons connectés professionnellement
              </p>
              <a
                href="https://www.linkedin.com/in/quentin-tripognez-b2166a303"
                className="button button-primary"
                target="_blank"
                rel="noopener noreferrer"
                title="Visiter mon profil LinkedIn"
              >
                Quentin Tripognez
              </a>
            </div>

            <div className="contact-card">
              <h3 className="contact-card-title">🐙 GitHub</h3>
              <p className="contact-card-description">
                Découvrez mes projets open source
              </p>
              <a
                href="https://github.com/quentinltg"
                className="button button-primary"
                target="_blank"
                rel="noopener noreferrer"
                title="Visiter mon GitHub"
              >
                @quentinltg
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
