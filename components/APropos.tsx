import Sprig from "./Sprig";

export default function APropos() {
  return (
    <section id="a-propos" className="bg-ivory-soft py-24 lg:py-32">
      <div className="mx-auto grid max-w-content gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-10">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] bg-pine-800">
          <Sprig className="absolute inset-0 m-auto h-2/3 w-2/3 text-amber-soft/70" />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-pine-950/60 via-transparent to-transparent p-6">
            <p className="font-serif text-lg italic text-ivory-soft">
              Manon Poussonnel
            </p>
          </div>
        </div>

        <div>
          <p className="section-eyebrow">À propos</p>
          <h2 className="mt-5 text-balance font-serif text-3xl italic text-pine-900 sm:text-4xl">
            Une formation exigeante, une pratique de terrain
          </h2>
          <div className="mt-8 space-y-5 text-pretty leading-relaxed text-pine-800/80">
            <p>
              Je m&rsquo;appelle Manon Poussonnel. Après plusieurs années de
              formation approfondie en naturopathie — physiologie,
              phytologie, nutrition, techniques manuelles — j&rsquo;ouvre mon
              cabinet à Annecy à l&rsquo;issue de mon cursus, fin octobre.
            </p>
            <p>
              Passionnée par les plantes et les mécanismes naturels du corps,
              j&rsquo;ai choisi la naturopathie comme un prolongement logique
              de mon attention à la santé au sens large : celle du corps,
              mais aussi du rythme de vie, de l&rsquo;alimentation et de
              l&rsquo;environnement.
            </p>
            <p>
              Mon cabinet vous accueille à Annecy, avec la possibilité de
              consultations à distance pour le suivi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
