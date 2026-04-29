import { Button } from "@/components/ui/button";
import ornament from "@/assets/ornament.png";

const CTASection = () => (
  <section className="py-24 islamic-pattern relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-emerald opacity-95" />
    <img src={ornament} alt="" className="absolute -right-20 -top-20 w-96 opacity-15 animate-spin-slow" aria-hidden />
    <img src={ornament} alt="" className="absolute -left-20 -bottom-20 w-96 opacity-15 animate-spin-slow" aria-hidden style={{ animationDirection: "reverse" }} />

    <div className="container relative text-center text-primary-foreground max-w-3xl">
      <p className="font-arabic text-3xl text-gold mb-6">وَقُل رَّبِّ زِدْنِي عِلْمًا</p>
      <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
        Begin Your <span className="italic gold-text">Quranic Journey</span> Today
      </h2>
      <p className="text-lg text-primary-foreground/80 mb-10">
        Join thousands of students learning Quran with Tajweed from certified scholars. Your first 3 days are completely free.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button variant="hero" size="xl">Start Free Trial</Button>
        <Button variant="ornate" size="xl">Talk to an Advisor</Button>
      </div>
    </div>
  </section>
);

export default CTASection;
