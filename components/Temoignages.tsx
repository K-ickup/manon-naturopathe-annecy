const avis = [
  {
    quote:
      "Un accompagnement précis et à l'écoute. J'ai enfin compris le lien entre mon alimentation et mes troubles du sommeil, avec des conseils simples à appliquer.",
    name: "Camille R.",
    context: "Suivi digestion & sommeil",
  },
  {
    quote:
      "Le bilan initial était d'une grande finesse : rien de générique, tout était adapté à mon rythme de vie. Je repars avec un vrai plan d'action.",
    name: "Julien M.",
    context: "Bilan de vitalité",
  },
  {
    quote:
      "Une approche bienveillante et rigoureuse à la fois. L'atelier de saison m'a donné des outils concrets que j'utilise encore au quotidien.",
    name: "Sophie D.",
    context: "Atelier saisonnier",
  },
];

export default function Temoignages() {
  return (
    <section id="temoignages" className="bg-ivory-deep py-24 text-pine-900 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow justify-center text-amber-deep">
            Témoignages
          </p>
          <h2 className="mt-5 text-balance font-serif text-3xl italic text-pine-900 sm:text-4xl">
            Retours de consultations en cabinet-école
          </h2>
          <div className="divider-leaf mt-8 bg-amber-deep/50" />
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {avis.map((avis) => (
            <figure
              key={avis.name}
              className="rounded-2xl border border-pine-900/10 bg-ivory-soft p-8"
            >
              <blockquote className="text-pretty font-serif text-lg italic leading-relaxed text-pine-800/90">
                &laquo;&nbsp;{avis.quote}&nbsp;&raquo;
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-semibold text-pine-900">
                  {avis.name}
                </span>
                <span className="block text-xs uppercase tracking-[0.14em] text-amber-deep/80">
                  {avis.context}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
