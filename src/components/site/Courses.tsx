import { motion } from "framer-motion";
import female from "@/assets/course-female.jpg";
import quran from "@/assets/course-quran.jpg";
import hifz from "@/assets/course-hifz.jpg";
import kids from "@/assets/course-kids.jpg";
import tajweed from "@/assets/course-tajweed.jpg";
import { BookOpen, Clock, Users, ArrowRight } from "lucide-react";

const courses = [
  { img: female, title: "Female Quran Teacher", desc: "Learn Quran with proper Tajweed from a qualified female teacher.", to: "#female-teacher" },
  { img: kids, title: "Quran Classes for Kids", desc: "Engaging and interactive lessons in a fun, supportive environment.", to: "#kids" },
  { img: tajweed, title: "Learn Quran with Tajweed", desc: "Perfect your recitation with proper pronunciation and rules.", to: "#tajweed" },
  { img: hifz, title: "Quran Memorization", desc: "Strengthen your connection by memorizing the Quran with proven Hifz techniques.", to: "#memorization" },
  { img: quran, title: "Quran Reading (Qirat)", desc: "Read the Quran fluently with clear pronunciation and confidence.", to: "#reading" },
];

const Courses = () => (
  <section className="py-24 bg-gradient-parchment">
    <div className="container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-xs uppercase tracking-[0.5em] text-gold font-semibold mb-3">Popular Courses</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
          Our Arabic & <span className="italic gold-text">Islamic Courses</span>
        </h2>
        <div className="arabesque-divider" />
        <p className="text-muted-foreground">Explore the beauty of Arabic language and Islamic teachings with comprehensive, engaging courses.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((c, i) => (
          <motion.div
            key={c.title + i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
            whileHover={{ y: -10 }}
          >
            <a href={c.to} className="ornate-card group block h-full">
              <div className="relative h-48 overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={800} height={600} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gold text-gold-foreground text-[10px] font-bold tracking-widest uppercase">Course</div>
                <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-gold/95 text-gold-foreground grid place-items-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-primary mb-2 group-hover:text-gold transition-colors">{c.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 min-h-[3rem]">{c.desc}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border/60 pt-3">
                  <span className="flex items-center gap-1"><BookOpen className="w-3 h-3 text-gold" /> 20 Lessons</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-gold" /> 30 min</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3 text-gold" /> 1-on-1</span>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Courses;
