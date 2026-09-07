const offres = [
  {
    title: "Bilan initial de vitalité",
    duree: "1h30 · en cabinet ou visio",
    text: "Un temps approfondi pour retracer votre histoire de santé, votre hygiène de vie et vos objectifs. Il pose les bases d'un programme naturopathique personnalisé.",
  },
  {
    title: "Suivi individuel",
    duree: "45 min · plusieurs séances",
    text: "Des rendez-vous réguliers pour ajuster les recommandations, mesurer les progrès et adapter l'accompagnement à votre rythme de vie.",
  },
  {
    title: "Digestion & sommeil",
    duree: "45 min · consultation ciblée",
    text: "Une consultation dédiée aux troubles digestifs ou du sommeil, pour identifier les causes profondes et remettre en mouvement les fonctions naturelles du corps.",
  },
  {
    title: "Ateliers saisonniers",
    duree: "2h · en petit groupe",
    text: "Des rencontres collectives au fil des saisons — cures, plantes du moment, alimentation vivante — pour apprendre à accompagner votre corps toute l'année.",
  },
];

export default function Accompagnements() {
  return (
    <section id="accompagnements" className="bg-pine-50/60 py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow justify-center">Accompagnements</p>
          <h2 className="mt-5 text-balance font-serif text-3xl italic text-pine-900 sm:text-4xl">
            Des consultations pensées pour chaque étape
          </h2>
          <div className="divider-leaf mt-8" />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {offres.map((offre) => (
            <article
              key={offre.title}
              className="rounded-2xl border border-pine-900/10 bg-ivory-soft p-8 transition-shadow duration-200 hover:shadow-[0_8px_30px_-12px_rgba(15,28,18,0.25)]"
            >
              <h3 className="font-serif text-xl text-pine-900">
                {offre.title}
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-amber-deep">
                {offre.duree}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-pine-800/75">
                {offre.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
