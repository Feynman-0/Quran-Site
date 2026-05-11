import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-mosque.jpg";
import ornament from "@/assets/ornament.png";
import { ArrowRight, MessageCircle, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { openTawkChat } from "@/lib/tawk";
import { useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

const Hero = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const body = {
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      country: fd.get("country"),
      message: fd.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
    } catch (err: any) {
      setErrorMsg(err.message || "Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <img
        src={heroBg}
        alt="Ornate mosque interior with golden dome"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <img
        src={ornament}
        alt=""
        aria-hidden
        className="absolute -right-32 -bottom-32 w-[480px] opacity-15 animate-spin-slow pointer-events-none"
      />

      <div className="container relative z-10 grid lg:grid-cols-12 gap-10 items-center py-20">
        <div className="lg:col-span-7 text-primary-foreground animate-fade-up">
          <p className="font-arabic text-2xl md:text-3xl text-gold mb-3">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-gold" />
            <span className="text-xs tracking-[0.4em] text-gold uppercase">Online Quran Academy</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-bold mb-6">
            Online <span className="gold-text italic">Quran</span> Classes
            <br />for Kids & Adults <br />
            <span className="text-3xl md:text-4xl font-normal text-gold-soft italic">with Tajweed</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mb-10 leading-relaxed">
            Begin your journey of learning the Holy Quran with certified scholars from the comfort of your home — one-on-one, flexible, and rooted in tradition.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl" className="group" onClick={() => document.getElementById('hero-form-name')?.focus()}>
              Start Free 3-Day Trial
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="ornate" size="xl" onClick={openTawkChat}>
              <MessageCircle /> Chat With Us
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-14 max-w-xl">
            {[
              { n: "1,200+", l: "Active Students" },
              { n: "150+", l: "Expert Tutors" },
              { n: "113K+", l: "Classes Held" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl md:text-4xl font-bold gold-text">{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-primary-foreground/70 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trial form */}
        <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="bg-card/95 backdrop-blur-md rounded-2xl p-8 shadow-emerald border border-gold/30">
            <div className="text-center mb-6">
              <div className="inline-block px-3 py-1 rounded-full bg-gold/20 text-gold-foreground text-xs tracking-widest uppercase font-semibold">Limited Seats</div>
              <h3 className="font-display text-3xl font-bold text-primary mt-3">Book Free Trial Class</h3>
              <p className="text-sm text-muted-foreground mt-1">No credit card required</p>
            </div>

            {status === "success" ? (
              <div className="text-center py-6 animate-fade-up">
                <CheckCircle2 className="w-14 h-14 text-gold mx-auto mb-3" />
                <h4 className="font-display text-xl font-bold text-primary mb-2">JazakAllah Khair!</h4>
                <p className="text-sm text-muted-foreground">We'll contact you within 24 hours to schedule your free trial.</p>
                <Button variant="hero" size="lg" className="mt-4" onClick={() => setStatus("idle")}>Submit Another</Button>
              </div>
            ) : (
              <form className="space-y-3" onSubmit={handleSubmit}>
                <input id="hero-form-name" name="name" required className="w-full h-11 px-4 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-gold/50 text-foreground placeholder:text-muted-foreground" placeholder="Your Name *" />
                <input name="email" type="email" required className="w-full h-11 px-4 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-gold/50 text-foreground placeholder:text-muted-foreground" placeholder="Email Address *" />
                <div className="grid grid-cols-2 gap-3">
                  <input name="phone" className="h-11 px-4 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-gold/50 text-foreground placeholder:text-muted-foreground" placeholder="Phone" />
                  <input name="country" className="h-11 px-4 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-gold/50 text-foreground placeholder:text-muted-foreground" placeholder="Country" />
                </div>
                <textarea name="message" rows={3} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none text-foreground placeholder:text-muted-foreground" placeholder="Message (optional)" />

                {status === "error" && (
                  <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {errorMsg}
                  </div>
                )}

                <Button variant="hero" size="lg" className="w-full" disabled={status === "sending"}>
                  {status === "sending" ? (
                    <><Loader2 className="w-4 h-4 animate-spin mr-2" />Sending...</>
                  ) : (
                    "Submit Now"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
