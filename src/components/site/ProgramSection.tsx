import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export interface ProgramSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
  description: string;
  image: string;
  features: { title: string; desc: string }[];
}

const ProgramSection = ({ id, eyebrow, title, highlight, subtitle, description, image, features }: ProgramSectionProps) => (
  <section id={id} className="py-24">
    <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-gold font-semibold mb-3">{eyebrow}</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-5">
          {title} <span className="gold-text italic">{highlight}</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">{subtitle}</p>
        <p className="text-base text-foreground/80 leading-relaxed mb-10 max-w-2xl">{description}</p>

        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-soft"
            >
              <p className="font-display text-lg font-semibold text-primary mb-2">{feature.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button variant="hero" size="lg">Book Free Trial</Button>
          <Button variant="ornate" size="lg">View Full Program</Button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-tr from-emerald-200/30 via-emerald-100/30 to-transparent shadow-soft">
        <img src={image} alt={`${title} hero`} className="w-full h-full min-h-[420px] object-cover" />
      </div>
    </div>
  </section>
);

export default ProgramSection;
