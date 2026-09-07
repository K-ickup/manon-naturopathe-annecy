import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Approche from "@/components/Approche";
import Accompagnements from "@/components/Accompagnements";
import APropos from "@/components/APropos";
import Temoignages from "@/components/Temoignages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Approche />
        <Accompagnements />
        <APropos />
        <Temoignages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
