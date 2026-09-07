export default function Footer() {
  return (
    <footer className="border-t border-pine-900/10 bg-ivory-soft py-10">
      <div className="mx-auto flex max-w-content flex-col items-center gap-3 px-6 text-center lg:px-10">
        <p className="font-serif text-lg italic text-pine-900">
          Manon Poussonnel
        </p>
        <p className="text-xs uppercase tracking-[0.2em] text-pine-800/60">
          Naturopathe à Annecy
        </p>
        <p className="mt-4 text-xs text-pine-800/50">
          © {new Date().getFullYear()} Manon Poussonnel — Tous droits
          réservés
        </p>
      </div>
    </footer>
  );
}
