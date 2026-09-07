import Sprig from "./Sprig";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-pine-50 text-pine-900"
    >
      <Sprig className="pointer-events-none absolute -left-6 top-0 h-[130%] w-28 text-pine-300/50 sm:w-36" />
      <Sprig
        flip
        className="pointer-events-none absolute -right-6 top-0 h-[130%] w-28 text-pine-300/50 sm:w-36"
      />
      <div className="mx-auto max-w-content px-6 py-28 text-center lg:px-10 lg:py-36">
        <p className="section-eyebrow justify-center text-amber-deep">
          Naturopathe à Annecy
        </p>
        <h1 className="mx-auto mt-6 max-w-3xl text-balance font-serif text-4xl italic leading-[1.15] text-pine-900 sm:text-5xl lg:text-6xl">
          Retrouver l&rsquo;équilibre, avec le vivant comme allié
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-pine-800/80 sm:text-lg">
          Consultations de naturopathie à Annecy pour accompagner votre
          digestion, votre sommeil et votre énergie au quotidien, avec une
          approche naturelle, précise et sur mesure.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#contact" className="btn-primary bg-amber-deep hover:bg-amber-deep/90">
            Prendre rendez-vous
          </a>
          <a
            href="#approche"
            className="btn-secondary border-pine-700/30 text-pine-800 hover:border-pine-700 hover:bg-pine-800/5"
          >
            Découvrir mon approche
          </a>
        </div>
        <p className="mt-8 text-xs uppercase tracking-[0.25em] text-pine-800/50">
          Ouverture du cabinet — novembre
        </p>
      </div>
    </section>
  );
}
