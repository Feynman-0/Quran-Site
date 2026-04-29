import { Button } from "@/components/ui/button";
import img from "@/assets/course-quran.jpg";
import ornament from "@/assets/ornament.png";
import { Check } from "lucide-react";

const Discover = () => (
  <section className="py-24 relative overflow-hidden">
    <img src={ornament} alt="" className="absolute -left-32 top-20 w-96 opacity-10 animate-spin-slow" aria-hidden />
    <div className="container grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="relative arch-frame overflow-hidden shadow-emerald border-4 border-gold/40">
          <img src={img} alt="Open Quran on rehal" className="w-full h-[600px] object-cover" loading="lazy" width={800} height={600} />
        </div>
        <div className="absolute -bottom-8 -right-8 w-44 h-44 rounded-full bg-gradient-gold shadow-gold grid place-items-center text-gold-foreground text-center p-4 animate-float">
          <div>
            <div className="font-display text-4xl font-bold">10+</div>
            <div className="text-xs uppercase tracking-widest font-semibold">Years Experience</div>
          </div>
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.5em] text-gold font-semibold mb-3">Discover the Joy of</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary leading-tight">
          Online Quran Classes for <span className="italic gold-text">Kids & Adults</span>
        </h2>
        <div className="h-px w-24 bg-gold my-6" />
        <p className="text-muted-foreground leading-relaxed mb-5">
          Our online Quran classes provide students with the opportunity to learn Quran with precise pronunciation and proper intonation, accessible to all ages and backgrounds.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          With expert instructors, interactive lessons, and a structured curriculum, students develop a strong foundation in recitation, Tajweed, memorization (Hifz), and understanding.
        </p>

        <ul className="space-y-3 mb-10">
          {["Certified Quran scholars from Egypt & Arabia", "Flexible scheduling — 24/7 availability", "One-on-one personalized attention", "Free trial — no credit card required"].map((p) => (
            <li key={p} className="flex items-start gap-3">
              <span className="mt-1 w-5 h-5 rounded-full bg-gradient-gold grid place-items-center shrink-0">
                <Check className="w-3 h-3 text-gold-foreground" />
              </span>
              <span className="text-foreground">{p}</span>
            </li>
          ))}
        </ul>

        <Button variant="hero" size="xl">Start Your 3-Day Free Trial</Button>
      </div>
    </div>
  </section>
);

export default Discover;
