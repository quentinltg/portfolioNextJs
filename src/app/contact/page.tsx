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
            Je suis disponible pour échanger sur vos projets web éco-responsables.
            Que ce soit pour une collaboration, des conseils ou simplement discuter
            de bonnes pratiques, n'hésitez pas à me contacter.
          </p>

          <div className="contact-methods">
            <div className="contact-card">
              <h3 className="contact-card-title">📧 Email</h3>
              <p className="contact-card-description">
                Pour les demandes détaillées et les devis
              </p>
              <a
                href="mailto:contact@example.com"
                className="button button-primary"
                title="Envoyer un email"
              >
                contact@example.com
              </a>
            </div>

            <div className="contact-card">
              <h3 className="contact-card-title">📝 Formulaire</h3>
              <p className="contact-card-description">
                Via Framaforms, plateforme respectueuse de la vie privée
              </p>
              <a
                href="https://framaforms.org"
                className="button button-primary"
                target="_blank"
                rel="noopener noreferrer"
                title="Ouvre dans un nouvel onglet"
              >
                Accéder au formulaire
              </a>
            </div>
          </div>
        </section>

        <section className="content-section" aria-labelledby="faq-title">
          <h2 id="faq-title" className="content-title">
            Questions fréquentes
          </h2>

          <div className="faq-list">
            <div className="faq-item">
              <h3 className="faq-question">
                Quels types de projets acceptez-vous ?
              </h3>
              <p className="faq-answer">
                Je privilégie les projets qui ont un impact positif et qui
                valorisent l'éco-conception. Sites vitrines, blogs, portfolios,
                applications web statiques ou peu dynamiques.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Quels sont vos délais ?</h3>
              <p className="faq-answer">
                Les délais varient selon la complexité du projet. Comptez entre
                2 et 6 semaines pour un site vitrine éco-conçu, tests et
                optimisations inclus.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">
                Proposez-vous de l'accompagnement ?
              </h3>
              <p className="faq-answer">
                Oui, je peux vous accompagner sur l'éco-conception de vos
                projets existants : audits de performance, optimisation du code,
                formation de vos équipes.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section" aria-labelledby="socials-title">
          <h2 id="socials-title" className="content-title">
            Restons en contact
          </h2>
          <p className="content-text">
            Abonnez-vous à ma newsletter pour recevoir des conseils sur l'éco-conception
            et les dernières actualités du web durable. Pas de spam, juste du contenu
            de qualité une fois par mois.
          </p>
          <a
            href="https://framaforms.org"
            className="button button-secondary"
            target="_blank"
            rel="noopener noreferrer"
            title="S'abonner à la newsletter (ouvre dans un nouvel onglet)"
          >
            S'abonner à la newsletter
          </a>
        </section>
      </div>
    </div>
  );
}
