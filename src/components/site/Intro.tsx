import { Button } from "@/components/ui/button";
import ornament from "@/assets/ornament.png";

const Intro = () => (
  <section className="relative py-24 md:py-32 overflow-hidden">
    <div className="container text-center max-w-4xl">
      <p className="text-xs uppercase tracking-[0.5em] text-gold font-semibold">Discover the Joy of</p>
      <img src={ornament} alt="" className="w-16 mx-auto my-6 opacity-90" loading="lazy" width={64} height={64} />
      <h2 className="font-display text-4xl md:text-6xl font-bold text-primary leading-tight">
        Learning <span className="italic gold-text">Quran</span> Online
      </h2>
      <div className="arabesque-divider" />
      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        At <span className="font-semibold text-primary">Nur Al-Quran</span>, we guide you and your children step by step to learn the Quran online with proper Tajweed. With over <span className="text-gold font-semibold">1,100+ registered students</span>, <span className="text-gold font-semibold">150+ skilled tutors</span>, and <span className="text-gold font-semibold">113,000+ classes</span> conducted, we take pride in being a leading online Quran academy.
      </p>
      <p className="text-base text-muted-foreground leading-relaxed mb-10">
        We offer tailored Quran courses for kids, ladies, adults, and new Muslims across the United States, United Kingdom, Australia, and Canada. Whether you're mastering recitation with Tajweed or deepening your understanding, we're here for your journey.
      </p>
      <Button variant="emerald" size="xl">Start Your Free 3-Day Trial</Button>
    </div>
  </section>
);

export default Intro;
