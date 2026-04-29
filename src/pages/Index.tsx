import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Intro from "@/components/site/Intro";
import Steps from "@/components/site/Steps";
import Audiences from "@/components/site/Audiences";
import Stats from "@/components/site/Stats";
import Courses from "@/components/site/Courses";
import Discover from "@/components/site/Discover";
import Advantages from "@/components/site/Advantages";
import Testimonials from "@/components/site/Testimonials";
import CTASection from "@/components/site/CTASection";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Intro />
      <Steps />
      <Audiences />
      <Stats />
      <Courses />
      <Discover />
      <Advantages />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
