import { Quote, Star } from "lucide-react";

const reviews = [
  { name: "Abrar", country: "Netherlands", text: "Nur Al-Quran helped my children go from not being able to read Quran in Arabic to reading completely with Tajweed. Thank you for all the teachers' effort." },
  { name: "Kubra", country: "Saudi Arabia", text: "My son got an opportunity to study with this institute. The assigned teacher was regular and punctual, with a strong grip on Qirat rules and principles." },
  { name: "Khalida Uddin", country: "Saudi Arabia", text: "The best platform for kids and adults to learn the Quran online with the most qualified and experienced tutors serving 24/7. I strongly recommend their services." },
  { name: "Mohammed Aqib", country: "United Kingdom", text: "Your Islamic teaching service is wonderful and I am grateful to be taking lessons. May Allah bless you all — Jazak Allahu khairan." },
  { name: "Osama Abou", country: "Canada", text: "Masha Allah, great and professional teachers. May Allah bless you all for this wonderful opportunity. The teachers are always available and their level is excellent." },
  { name: "Aisha Hussain", country: "United Kingdom", text: "I really enjoy my classes with my teacher. She is very helpful and caters to my needs in whatever I want to learn. Highly recommend." },
];

const Testimonials = () => (
  <section className="py-24">
    <div className="container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-xs uppercase tracking-[0.5em] text-gold font-semibold mb-3">Customer Reviews</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
          Loved by <span className="italic gold-text">Students Worldwide</span>
        </h2>
        <div className="arabesque-divider" />
        <p className="text-muted-foreground">Explore stories from families discovering the beauty of the Quran with us.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <figure key={r.name} className="ornate-card p-8">
            <Quote className="w-10 h-10 text-gold/40 mb-4" />
            <blockquote className="text-foreground leading-relaxed mb-6">"{r.text}"</blockquote>
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
            </div>
            <figcaption className="flex items-center gap-3 pt-4 border-t border-border">
              <div className="w-12 h-12 rounded-full bg-gradient-emerald grid place-items-center text-gold font-display font-bold text-lg">
                {r.name[0]}
              </div>
              <div>
                <div className="font-bold text-primary">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.country}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
