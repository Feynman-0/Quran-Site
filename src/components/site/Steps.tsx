const steps = [
  { n: "01", title: "Book a Free Trial Class", desc: "Fill out the form to schedule your free online Quran class. Our team confirms your slot via WhatsApp.", cta: "Book Trial" },
  { n: "02", title: "Take Your Free Lesson", desc: "Attend a free Quran lesson with a qualified teacher at your scheduled time — no payment required.", cta: "Claim Free Lesson" },
  { n: "03", title: "Enroll in Full Course", desc: "After your demo class, choose a monthly plan, register, and unlock the full Online Quran Course.", cta: "Enroll Now" },
];

const Steps = () => (
  <section className="py-24 bg-gradient-parchment relative overflow-hidden">
    <div className="container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-xs uppercase tracking-[0.5em] text-gold font-semibold mb-3">How it works</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
          Start Learning Quran in <span className="italic gold-text">3 Easy Steps</span>
        </h2>
        <div className="arabesque-divider" />
        <p className="text-muted-foreground">Embark on your Quranic journey effortlessly with our user-friendly platform.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {steps.map((s, i) => (
          <div key={s.n} className="relative group">
            {/* Arch frame */}
            <div className="relative bg-card border border-border rounded-t-[180px] rounded-b-2xl p-10 pt-16 text-center shadow-soft hover:shadow-emerald hover:-translate-y-2 transition-all duration-500">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-gold grid place-items-center font-display font-bold text-2xl text-gold-foreground shadow-gold">
                {s.n}
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-3 mt-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <a href="#" className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold border-b-2 border-gold pb-1 hover:text-primary hover:border-primary transition-colors">
                {s.cta} →
              </a>
            </div>
            {i < 2 && (
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-gold to-transparent" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Steps;
