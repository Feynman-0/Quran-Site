import { useState, createContext, useContext, ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

/* ───────── Context so any component can open the modal ───────── */
interface ModalCtx {
  open: boolean;
  openModal: (course?: string) => void;
  closeModal: () => void;
}

const FormModalContext = createContext<ModalCtx>({
  open: false,
  openModal: () => {},
  closeModal: () => {},
});

export const useFormModal = () => useContext(FormModalContext);

/* ───────── Provider — wrap App ───────── */
export const FormModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState("");

  const openModal = (c?: string) => {
    setCourse(c || "");
    setOpen(true);
  };
  const closeModal = () => setOpen(false);

  return (
    <FormModalContext.Provider value={{ open, openModal, closeModal }}>
      {children}
      <TrialFormModal open={open} onOpenChange={setOpen} course={course} />
    </FormModalContext.Provider>
  );
};

/* ───────── The modal itself ───────── */
type Status = "idle" | "sending" | "success" | "error";

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  course?: string;
}

const TrialFormModal = ({ open, onOpenChange, course }: Props) => {
  const [status, setStatus] = useState<Status>("idle");
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
      course: fd.get("course"),
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

  const handleOpenChange = (v: boolean) => {
    onOpenChange(v);
    if (!v) {
      // Reset on close
      setTimeout(() => {
        setStatus("idle");
        setErrorMsg("");
      }, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-card border-gold/30 p-0 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-emerald px-6 pt-6 pb-5 text-primary-foreground">
          <DialogHeader>
            <div className="inline-block px-3 py-1 rounded-full bg-gold/20 text-gold-foreground text-xs tracking-widest uppercase font-semibold w-fit mb-2">
              Limited Seats
            </div>
            <DialogTitle className="font-display text-2xl font-bold text-primary-foreground">
              Book Your Free Trial Class
            </DialogTitle>
            <DialogDescription className="text-primary-foreground/70 text-sm">
              No credit card required — start learning Quran today.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Body */}
        <div className="px-6 pb-6 pt-4">
          {status === "success" ? (
            <div className="text-center py-8 animate-fade-up">
              <CheckCircle2 className="w-16 h-16 text-gold mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-primary mb-2">
                JazakAllah Khair!
              </h3>
              <p className="text-muted-foreground">
                We've received your request. Our team will contact you within 24
                hours to schedule your free trial class.
              </p>
              <Button
                variant="hero"
                size="lg"
                className="mt-6"
                onClick={() => handleOpenChange(false)}
              >
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                name="name"
                required
                className="w-full h-11 px-4 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-gold/50 text-foreground placeholder:text-muted-foreground"
                placeholder="Your Name *"
              />
              <input
                name="email"
                type="email"
                required
                className="w-full h-11 px-4 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-gold/50 text-foreground placeholder:text-muted-foreground"
                placeholder="Email Address *"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  name="phone"
                  className="h-11 px-4 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-gold/50 text-foreground placeholder:text-muted-foreground"
                  placeholder="Phone"
                />
                <input
                  name="country"
                  className="h-11 px-4 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-gold/50 text-foreground placeholder:text-muted-foreground"
                  placeholder="Country"
                />
              </div>
              <select
                name="course"
                defaultValue={course || ""}
                className="w-full h-11 px-4 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-gold/50 text-foreground appearance-none"
              >
                <option value="">Select a Course (optional)</option>
                <option value="Female Quran Teacher">Female Quran Teacher</option>
                <option value="Quran Classes for Kids">Quran Classes for Kids</option>
                <option value="Learn Quran with Tajweed">Learn Quran with Tajweed</option>
                <option value="Quran Memorization (Hifz)">Quran Memorization (Hifz)</option>
                <option value="Quran Reading (Qirat)">Quran Reading (Qirat)</option>
              </select>
              <textarea
                name="message"
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none text-foreground placeholder:text-muted-foreground"
                placeholder="Message (optional)"
              />

              {status === "error" && (
                <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {errorMsg}
                </div>
              )}

              <Button
                variant="hero"
                size="lg"
                className="w-full"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  "Submit — Start Free Trial"
                )}
              </Button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TrialFormModal;
