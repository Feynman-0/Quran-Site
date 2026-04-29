import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const links = ["Home", "Courses", "About", "Pricing", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-gradient-emerald grid place-items-center text-gold font-arabic text-xl shadow-soft">
            ﷽
          </div>
          <div className="leading-tight">
            <div className="font-display text-xl font-bold text-primary">Nur Al-Quran</div>
            <div className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">Online Academy</div>
          </div>
        </a>
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a href="#" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group">
                {l}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block">
          <Button variant="hero" size="lg">Free Trial</Button>
        </div>
        <button className="lg:hidden text-primary" onClick={() => setOpen(!open)} aria-label="Menu">
          <Menu className="h-6 w-6" />
        </button>
      </nav>
      {open && (
        <div className="lg:hidden border-t border-border/50 bg-background">
          <div className="container py-4 flex flex-col gap-3">
            {links.map((l) => <a key={l} href="#" className="py-2 text-sm font-medium">{l}</a>)}
            <Button variant="hero">Free Trial</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
