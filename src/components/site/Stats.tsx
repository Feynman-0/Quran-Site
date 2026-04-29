import { Button } from "@/components/ui/button";
import { Star, GraduationCap, Users, Award } from "lucide-react";

const stats = [
  { icon: Users, n: "1,200+", l: "Active Students" },
  { icon: GraduationCap, n: "150+", l: "Expert Tutors" },
  { icon: Award, n: "113K+", l: "Classes Conducted" },
  { icon: Star, n: "4.9/5", l: "Trustpilot Rating" },
];

const Stats = () => (
  <section className="py-24 islamic-pattern relative">
    <div className="absolute inset-0 bg-gradient-emerald opacity-90" />
    <div className="container relative">
      <div className="text-center text-primary-foreground mb-14">
        <p className="text-xs uppercase tracking-[0.5em] text-gold font-semibold mb-3">Alhamdulillah</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">We Have Reached <span className="italic gold-text">Over</span></h2>
        <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">Each achievement is a testament to dedication, perseverance, and the divine blessings that have illuminated our path.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((s) => (
          <div key={s.l} className="text-center text-primary-foreground p-8 rounded-2xl bg-white/5 border border-gold/20 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-1 transition-all">
            <s.icon className="w-10 h-10 mx-auto mb-4 text-gold" />
            <div className="font-display text-4xl md:text-5xl font-bold gold-text mb-2">{s.n}</div>
            <div className="text-xs uppercase tracking-widest text-primary-foreground/80">{s.l}</div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="hero" size="xl">Join Our Family Today</Button>
      </div>
    </div>
  </section>
);

export default Stats;
