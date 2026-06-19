import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import StorySection from "@/components/StorySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollLeaf from "@/components/ScrollLeaf";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-cream-white overflow-x-hidden w-full relative">
      <ScrollLeaf />
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Benefits />
      <StorySection />
      <Contact />
      <Footer />
    </main>
  );
}
