import kids from "@/assets/course-kids.jpg";
import adults from "@/assets/course-adults.jpg";
import female from "@/assets/course-female.jpg";

const items = [
  { img: kids, title: "Online Quran Classes for Kids", desc: "Specially designed for children who are beginners or have basic knowledge of Quran reading." },
  { img: adults, title: "Online Quran Classes for Adults", desc: "Equally suitable for brothers and sisters to learn Quran with Tajweed and enhance recitation skills." },
  { img: female, title: "Online Quran Classes for Females", desc: "Designed for Muslim sisters who want to enhance their understanding of the Quran with female teachers." },
];

const Audiences = () => (
  <section className="py-24">
    <div className="container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
          Quran Classes for <span className="italic gold-text">Kids, Adults & Ladies</span>
        </h2>
        <div className="arabesque-divider" />
        <p className="text-muted-foreground">Personalized Quran courses with tailored curricula for an engaging, insightful experience.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((it) => (
          <article key={it.title} className="ornate-card group">
            <div className="relative h-72 overflow-hidden">
              <img src={it.img} alt={it.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={800} height={600} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
            </div>
            <div className="p-7">
              <h3 className="font-display text-2xl font-bold text-primary mb-3">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{it.desc}</p>
              <a href="#" className="text-sm font-bold text-gold uppercase tracking-wider hover:text-primary transition-colors">Read More →</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Audiences;
