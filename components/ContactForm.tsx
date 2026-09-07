"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-2xl border border-pine-900/10 bg-pine-50/60 p-10 text-center">
        <p className="font-serif text-xl italic text-pine-900">
          Merci pour votre message
        </p>
        <p className="mt-3 text-sm text-pine-800/75">
          Je vous réponds dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-pine-900/10 bg-pine-50/40 p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label
            htmlFor="name"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-pine-800/70"
          >
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-lg border border-pine-900/15 bg-ivory-soft px-4 py-3 text-sm text-pine-900 outline-none transition-colors focus:border-amber-deep"
          />
        </div>
        <div className="sm:col-span-1">
          <label
            htmlFor="email"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-pine-800/70"
          >
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-lg border border-pine-900/15 bg-ivory-soft px-4 py-3 text-sm text-pine-900 outline-none transition-colors focus:border-amber-deep"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="subject"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-pine-800/70"
          >
            Motif
          </label>
          <select
            id="subject"
            name="subject"
            className="mt-2 w-full rounded-lg border border-pine-900/15 bg-ivory-soft px-4 py-3 text-sm text-pine-900 outline-none transition-colors focus:border-amber-deep"
            defaultValue="Bilan initial"
          >
            <option>Bilan initial</option>
            <option>Suivi individuel</option>
            <option>Digestion & sommeil</option>
            <option>Ateliers saisonniers</option>
            <option>Autre demande</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-pine-800/70"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="mt-2 w-full resize-none rounded-lg border border-pine-900/15 bg-ivory-soft px-4 py-3 text-sm text-pine-900 outline-none transition-colors focus:border-amber-deep"
          />
        </div>
      </div>
      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        Envoyer ma demande
      </button>
    </form>
  );
}
