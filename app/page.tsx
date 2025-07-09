
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingChatButton } from "@/components/FloatingChatButton";

export default function Home () {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingChatButton />
    </div>
  );
};
