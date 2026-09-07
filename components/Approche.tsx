const piliers = [
  {
    title: "Écouter le terrain",
    text: "Chaque organisme a son histoire. Le bilan initial prend le temps de comprendre votre hygiène de vie, vos antécédents et vos habitudes avant toute recommandation.",
  },
  {
    title: "Activer, plutôt que forcer",
    text: "La naturopathie s'appuie sur la capacité naturelle du corps à s'autoréguler : alimentation, plantes, respiration et mouvement sont des leviers, pas des contraintes.",
  },
  {
    title: "Accompagner dans la durée",
    text: "Un changement durable se construit par étapes. Le suivi ajuste les conseils au fil des saisons et de l'évolution de votre équilibre.",
  },
];

export default function Approche() {
  return (
    <section id="approche" className="bg-ivory-soft py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow justify-center">Philosophie</p>
          <h2 className="mt-5 text-balance font-serif text-3xl italic text-pine-900 sm:text-4xl">
            Une naturopathie de terrain, précise et sans dogme
          </h2>
          <div className="divider-leaf mt-8" />
          <p className="mt-8 text-pretty leading-relaxed text-pine-800/80">
            Mon rôle n&rsquo;est pas de vous imposer une méthode, mais de vous
            aider à décrypter les signaux de votre corps pour retrouver, pas
            à pas, votre propre équilibre. Une naturopathie exigeante,
            enracinée dans l&rsquo;observation, loin des recettes toutes
            faites.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {piliers.map((pilier, i) => (
            <div key={pilier.title} className="text-center">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-amber-deep/40 font-serif text-sm text-amber-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-serif text-xl text-pine-900">
                {pilier.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-pine-800/75">
                {pilier.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
