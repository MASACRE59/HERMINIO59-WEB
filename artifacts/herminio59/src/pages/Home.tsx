import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Curriculum from "@/components/sections/Curriculum";
import Roadmap from "@/components/sections/Roadmap";
import Videos from "@/components/sections/Videos";
import Community from "@/components/sections/Community";
import DonationButton from "@/components/DonationButton";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Curriculum />
        <Roadmap />
        <Videos />
        <Community />
      </main>
      <Footer />
      <DonationButton />
    </div>
  );
}
