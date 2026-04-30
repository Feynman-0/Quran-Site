import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", to: "#home" },
  { label: "Female Teacher", to: "#female-teacher" },
  { label: "Kids", to: "#kids" },
  { label: "Tajweed", to: "#tajweed" },
  { label: "Memorization", to: "#memorization" },
  { label: "Reading", to: "#reading" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/50 shadow-soft" : "bg-background/40 backdrop-blur-sm"}`}>
      <nav className="container flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="h-10 w-10 rounded-full bg-gradient-emerald grid place-items-center text-gold font-arabic text-xl shadow-soft group-hover:rotate-12 transition-transform">
            ﷽
          </div>
          <div className="leading-tight">
            <div className="font-display text-xl font-bold text-primary">Nur Al-Quran</div>
            <div className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">Online Academy</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.to}>
              <a href={l.to} className="text-sm font-medium transition-colors text-foreground/80 hover:text-primary relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 group-hover:w-full w-0" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button variant="hero" size="lg">Free Trial</Button>
        </div>

        <button className="lg:hidden text-primary" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-border/50 bg-background overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l.to}
                  href={l.to}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm font-medium text-foreground/80"
                >
                  {l.label}
                </a>
              ))}
              <Button variant="hero" className="mt-2">Free Trial</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
