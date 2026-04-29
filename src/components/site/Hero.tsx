import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-mosque.jpg";
import ornament from "@/assets/ornament.png";
import { ArrowRight, PlayCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <img
        src={heroBg}
        alt="Ornate mosque interior with golden dome"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <img
        src={ornament}
        alt=""
        aria-hidden
        className="absolute -right-32 -bottom-32 w-[480px] opacity-15 animate-spin-slow pointer-events-none"
      />

      <div className="container relative z-10 grid lg:grid-cols-12 gap-10 items-center py-20">
        <div className="lg:col-span-7 text-primary-foreground animate-fade-up">
          <p className="font-arabic text-2xl md:text-3xl text-gold mb-3">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-gold" />
            <span className="text-xs tracking-[0.4em] text-gold uppercase">Online Quran Academy</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-bold mb-6">
            Online <span className="gold-text italic">Quran</span> Classes
            <br />for Kids & Adults <br />
            <span className="text-3xl md:text-4xl font-normal text-gold-soft italic">with Tajweed</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mb-10 leading-relaxed">
            Begin your journey of learning the Holy Quran with certified scholars from the comfort of your home — one-on-one, flexible, and rooted in tradition.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl" className="group">
              Start Free 3-Day Trial
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="ornate" size="xl">
              <PlayCircle /> Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-14 max-w-xl">
            {[
              { n: "1,200+", l: "Active Students" },
              { n: "150+", l: "Expert Tutors" },
              { n: "113K+", l: "Classes Held" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl md:text-4xl font-bold gold-text">{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-primary-foreground/70 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trial form */}
        <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="bg-card/95 backdrop-blur-md rounded-2xl p-8 shadow-emerald border border-gold/30">
            <div className="text-center mb-6">
              <div className="inline-block px-3 py-1 rounded-full bg-gold/20 text-gold-foreground text-xs tracking-widest uppercase font-semibold">Limited Seats</div>
              <h3 className="font-display text-3xl font-bold text-primary mt-3">Book Free Trial Class</h3>
              <p className="text-sm text-muted-foreground mt-1">No credit card required</p>
            </div>
            <form className="space-y-3">
              <input className="w-full h-11 px-4 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="Your Name" />
              <input type="email" className="w-full h-11 px-4 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="Email Address" />
              <div className="grid grid-cols-2 gap-3">
                <input className="h-11 px-4 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="Phone" />
                <input className="h-11 px-4 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="Country" />
              </div>
              <textarea rows={3} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none" placeholder="Message (optional)" />
              <Button variant="hero" size="lg" className="w-full">Submit Now</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
