import { Clock, Home, Wallet, UserCheck, UserCog, Globe } from "lucide-react";

const items = [
  { icon: Clock, title: "Flexible Timings", desc: "Schedule your classes around your routine — the most important advantage of online Quran learning." },
  { icon: Home, title: "Learn Quran at Home", desc: "Studying from your home is convenient, comfortable, and stress-free for the whole family." },
  { icon: Wallet, title: "Affordable Fees", desc: "Online Quran classes offer a fair, accessible fee structure for students worldwide." },
  { icon: UserCheck, title: "One on One Classes", desc: "Personalized attention from your tutor — far superior to crowded group classes." },
  { icon: UserCog, title: "Female Tutors", desc: "Dedicated qualified female teachers for sisters and children who prefer them." },
  { icon: Globe, title: "Global Access", desc: "Available in the US, UK, Canada, Australia and beyond — taught in multiple languages." },
];

const Advantages = () => (
  <section className="py-24 bg-secondary/40">
    <div className="container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-xs uppercase tracking-[0.5em] text-gold font-semibold mb-3">Discover the Advantages</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
          Why Learn the <span className="italic gold-text">Quran Online?</span>
        </h2>
        <div className="arabesque-divider" />
        <p className="text-muted-foreground">Many beginners find traditional methods overwhelming. Online learning removes those barriers — making the Quran accessible to everyone, everywhere.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="group p-8 rounded-2xl bg-card border border-border hover:border-gold/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft">
            <div className="w-14 h-14 rounded-xl bg-gradient-emerald grid place-items-center mb-5 group-hover:bg-gradient-gold transition-all">
              <it.icon className="w-6 h-6 text-gold group-hover:text-gold-foreground transition-colors" />
            </div>
            <h3 className="font-display text-2xl font-bold text-primary mb-2">{it.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Advantages;
