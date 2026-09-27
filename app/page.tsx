import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import OrderNowFAB from "@/components/OrderNowFAB";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream dark:bg-night">
      <Navbar />
      <Hero />
      <Categories />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <OrderNowFAB />
    </main>
  );
}
