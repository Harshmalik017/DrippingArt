import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Personalised Pieces | Dripping Art",
  description:
    "A look at personalised resin art pieces from Dripping Art — wall clocks, keychains, photo frames and more, each customised to order.",
};

export default function PersonalisedPage() {
  return (
    <main className="min-h-screen bg-cream dark:bg-night">
      <Navbar />
      <div className="pt-4">
        <Gallery />
      </div>
      <Footer />
    </main>
  );
}
