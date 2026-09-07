import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-ivory-soft py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow justify-center">Contact</p>
          <h2 className="mt-5 text-balance font-serif text-3xl italic text-pine-900 sm:text-4xl">
            Prendre rendez-vous à Annecy
          </h2>
          <div className="divider-leaf mt-8" />
          <p className="mt-8 text-pretty leading-relaxed text-pine-800/80">
            Cabinet ouvert dès novembre à Annecy. Pour toute question ou pour
            réserver votre première consultation, écrivez-moi ou appelez-moi.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-lg text-pine-900">Cabinet</h3>
              <p className="mt-2 text-sm leading-relaxed text-pine-800/75">
                Annecy, Haute-Savoie
                <br />
                Consultations en cabinet et à distance
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-pine-900">Téléphone</h3>
              <p className="mt-2 text-sm text-pine-800/75">
                <a href="tel:+33600000000" className="hover:text-pine-900">
                  06 00 00 00 00
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-pine-900">E-mail</h3>
              <p className="mt-2 text-sm text-pine-800/75">
                <a
                  href="mailto:contact@manon-poussonnel-naturopathe.fr"
                  className="hover:text-pine-900"
                >
                  contact@manon-poussonnel-naturopathe.fr
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-pine-900">Horaires</h3>
              <p className="mt-2 text-sm leading-relaxed text-pine-800/75">
                Lundi – Vendredi, sur rendez-vous
                <br />
                Ouverture du cabinet : novembre
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
