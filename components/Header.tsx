const links = [
  { href: "#approche", label: "Approche" },
  { href: "#accompagnements", label: "Accompagnements" },
  { href: "#a-propos", label: "À propos" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-pine-900/10 bg-ivory-soft/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#hero"
          className="font-serif text-lg tracking-tight text-pine-900"
        >
          Manon Poussonnel
          <span className="ml-2 hidden text-xs font-sans font-medium uppercase tracking-[0.2em] text-amber-deep sm:inline">
            Naturopathe
          </span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-pine-800/80 transition-colors hover:text-pine-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-primary !px-5 !py-2.5 text-xs">
          Prendre rendez-vous
        </a>
      </div>
    </header>
  );
}
