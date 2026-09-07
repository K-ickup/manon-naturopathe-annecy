import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://www.manon-poussonnel-naturopathe.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Manon Poussonnel — Naturopathe à Annecy",
  description:
    "Manon Poussonnel, naturopathe à Annecy, vous accompagne avec une approche naturelle et personnalisée : bilan de vitalité, digestion, sommeil, gestion du stress. Prenez rendez-vous.",
  keywords: [
    "naturopathe Annecy",
    "naturopathie Annecy",
    "bilan de vitalité Annecy",
    "naturopathe Haute-Savoie",
    "consultation naturopathie",
  ],
  authors: [{ name: "Manon Poussonnel" }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Manon Poussonnel — Naturopathe à Annecy",
    title: "Manon Poussonnel — Naturopathe à Annecy",
    description:
      "Une approche naturelle et personnalisée de la santé, à Annecy. Bilan de vitalité, suivi individuel, digestion, sommeil, ateliers saisonniers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manon Poussonnel — Naturopathe à Annecy",
    description:
      "Une approche naturelle et personnalisée de la santé, à Annecy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Manon Poussonnel — Naturopathe",
  description:
    "Naturopathe à Annecy proposant bilans de vitalité, suivis individuels et ateliers saisonniers autour de l'alimentation, la digestion, le sommeil et la gestion du stress.",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Annecy",
    addressRegion: "Haute-Savoie",
    addressCountry: "FR",
  },
  areaServed: "Annecy",
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
