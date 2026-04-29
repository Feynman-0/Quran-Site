import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ArrowRight, Sparkles, BookOpen, Users, Award, Clock } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CTASection from "./CTASection";
import ornament from "@/assets/ornament.png";

export interface CoursePageProps {
  arabic: string;
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
  intro: string;
  heroImage: string;
  features: { icon: any; title: string; desc: string }[];
  curriculum: { level: string; topics: string[] }[];
  benefits: string[];
  faqs: { q: string; a: string }[];
  accentColor?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6 } }),
};

const CoursePageLayout = (p: CoursePageProps) => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center pt-28 overflow-hidden">
        <img src={p.heroImage} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <motion.img
          src={ornament}
          aria-hidden
          alt=""
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.18, rotate: 360 }}
          transition={{ opacity: { duration: 1.2 }, rotate: { duration: 80, repeat: Infinity, ease: "linear" } }}
          className="absolute -right-32 -bottom-32 w-[480px] pointer-events-none"
        />
        <div className="container relative z-10 grid lg:grid-cols-12 gap-10 items-center py-16">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="lg:col-span-8 text-primary-foreground">
            <p className="font-arabic text-2xl md:text-3xl text-gold mb-3">{p.arabic}</p>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-12 bg-gold" />
              <span className="text-xs tracking-[0.4em] text-gold uppercase">{p.eyebrow}</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              {p.title} <span className="gold-text italic">{p.highlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mb-8 leading-relaxed">{p.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" className="group">Book Free Trial <ArrowRight className="group-hover:translate-x-1 transition-transform" /></Button>
              <Button variant="ornate" size="xl">View Curriculum</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 relative">
        <div className="container max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Sparkles className="w-8 h-8 text-gold mx-auto mb-4" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              About <span className="gold-text italic">This Course</span>
            </h2>
            <div className="arabesque-divider" />
            <p className="text-lg text-muted-foreground leading-relaxed">{p.intro}</p>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-secondary/40 relative overflow-hidden">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] text-gold uppercase mb-3">What You Get</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">Course <span className="italic gold-text">Highlights</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {p.features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="ornate-card p-8 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-emerald grid place-items-center text-gold group-hover:scale-110 transition-transform">
                  <f.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="py-24">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] text-gold uppercase mb-3">Step-by-Step</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">Course <span className="italic gold-text">Curriculum</span></h2>
          </div>
          <div className="space-y-5">
            {p.curriculum.map((c, i) => (
              <motion.div
                key={c.level}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="ornate-card p-7 flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="shrink-0 w-20 h-20 rounded-2xl bg-gradient-gold grid place-items-center text-gold-foreground font-display text-3xl font-bold shadow-gold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-primary mb-3">{c.level}</h3>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {c.topics.map((t) => (
                      <li key={t} className="flex gap-2 text-sm text-foreground/80">
                        <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 islamic-pattern relative">
        <div className="absolute inset-0 bg-gradient-emerald opacity-95" />
        <div className="container relative max-w-5xl text-primary-foreground">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] text-gold uppercase mb-3">Why Choose Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Key <span className="italic gold-text">Benefits</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {p.benefits.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="flex gap-4 p-5 rounded-xl bg-white/5 border border-gold/20 backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-full bg-gold grid place-items-center text-gold-foreground shrink-0">
                  <Check className="w-5 h-5" />
                </div>
                <p className="leading-relaxed">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container max-w-3xl">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] text-gold uppercase mb-3">FAQ</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">Frequently Asked <span className="italic gold-text">Questions</span></h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {p.faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="ornate-card px-6 border-0">
                <AccordionTrigger className="font-display text-lg text-primary hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export { BookOpen, Users, Award, Clock };
export default CoursePageLayout;
