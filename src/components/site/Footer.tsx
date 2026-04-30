import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const courseLinks = [
  { label: "Female Quran Teacher", to: "#female-teacher" },
  { label: "Quran Classes for Kids", to: "#kids" },
  { label: "Learn Quran with Tajweed", to: "#tajweed" },
  { label: "Quran Memorization", to: "#memorization" },
  { label: "Quran Reading (Qirat)", to: "#reading" },
];

const Footer = () => (
  <footer className="bg-primary text-primary-foreground pt-20 pb-8">
    <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
      <div>
        <div className="flex items-center gap-2 mb-5">
          <div className="h-12 w-12 rounded-full bg-gradient-gold grid place-items-center text-gold-foreground font-arabic text-xl">﷽</div>
          <div>
            <div className="font-display text-2xl font-bold">Nur Al-Quran</div>
            <div className="text-[10px] tracking-[0.25em] text-gold uppercase">Online Academy</div>
          </div>
        </div>
        <p className="text-sm text-primary-foreground/70 leading-relaxed mb-5">
          A leading online Quran academy nurturing a profound and meaningful connection with the sacred teachings of the Holy Quran.
        </p>
        <div className="flex gap-3">
          {[Facebook, Instagram, Youtube].map((Icon, i) => (
            <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 grid place-items-center hover:bg-gold hover:text-gold-foreground transition-colors">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-display text-xl font-bold mb-5 text-gold">Our Courses</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/80">
          {courseLinks.map((l) => (
            <li key={l.to}><a href={l.to} className="hover:text-gold transition-colors">{l.label}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display text-xl font-bold mb-5 text-gold">Quick Links</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/80">
          {["About Us", "Pricing", "Free Trial", "Become a Tutor", "Blog", "Contact"].map((l) => (
            <li key={l}><a href="#" className="hover:text-gold transition-colors">{l}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display text-xl font-bold mb-5 text-gold">Get in Touch</h4>
        <ul className="space-y-3 text-sm text-primary-foreground/80">
          <li className="flex gap-3"><Mail className="w-4 h-4 text-gold mt-0.5" /> info@nuralquran.com</li>
          <li className="flex gap-3"><Phone className="w-4 h-4 text-gold mt-0.5" /> +1 (800) 123-4567</li>
          <li className="flex gap-3"><MapPin className="w-4 h-4 text-gold mt-0.5" /> Serving students worldwide — US, UK, CA, AU</li>
        </ul>
      </div>
    </div>

    <div className="container border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-primary-foreground/60">
      <p>© {new Date().getFullYear()} Nur Al-Quran Academy. All rights reserved.</p>
      <p className="font-arabic text-gold text-base">صَدَقَ اللَّهُ الْعَظِيم</p>
    </div>
  </footer>
);

export default Footer;
