import CoursePageLayout from "@/components/site/CoursePageLayout";
import { Brain, Calendar, Repeat, Crown } from "lucide-react";
import hero from "@/assets/course-hifz.jpg";

const QuranMemorization = () => (
  <CoursePageLayout
    arabic="﴿ وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ ﴾"
    eyebrow="The Hifz Journey"
    title="Quran"
    highlight="Memorization"
    subtitle="Become a Hafiz of the Holy Quran with a structured, time-tested memorization program — taught by Hafizs from Madinah and Al-Azhar."
    intro="Memorizing the Quran is among the noblest pursuits a Muslim can undertake. Our Hifz program combines proven techniques — daily new portion (Sabaq), recent review (Sabqi), and old portion review (Manzil) — with personal mentorship to guide students from their first ayah to becoming a complete Hafiz, in shaa Allah."
    heroImage={hero}
    features={[
      { icon: Brain, title: "Proven Method", desc: "The classical 3-stage Sabaq–Sabqi–Manzil system used in Madrassas worldwide." },
      { icon: Calendar, title: "Custom Pace", desc: "Choose your speed — full-time intensive or part-time alongside studies/work." },
      { icon: Repeat, title: "Daily Revision", desc: "Built-in revision sessions ensure what you memorize stays with you forever." },
      { icon: Crown, title: "Hafiz Certificate", desc: "Receive a recognized Hafiz certificate upon completing all 30 Juz." },
    ]}
    curriculum={[
      { level: "Preparation Phase", topics: ["Tajweed assessment", "Memory technique training", "Goal-setting & timeline", "Choose your daily portion"] },
      { level: "Juz Amma (30)", topics: ["Short, motivating surahs", "Building daily habits", "First revision cycles", "Confidence building"] },
      { level: "Long Surahs", topics: ["Al-Baqarah, Al-Imran", "Time management", "Handling difficulties", "Mid-program retention test"] },
      { level: "Final Completion", topics: ["Last Juz memorization", "Full Quran revision", "Ijazah recital", "Khatam ceremony with family"] },
    ]}
    benefits={[
      "One-on-one daily Sabaq sessions",
      "Audio recordings of teacher's recitation for memorization aid",
      "Family-friendly schedule with weekend intensive options",
      "Detailed progress tracker — see your Juz completion in real time",
      "Special graduation Khatam celebration",
      "Lifetime access to alumni revision support group",
    ]}
    faqs={[
      { q: "How long does it take to become Hafiz?", a: "Full-time students complete in 2–3 years; part-time students typically 4–6 years." },
      { q: "What if I forget what I memorized?", a: "Our daily Manzil revision system is specifically designed to prevent forgetting." },
      { q: "Can adults start Hifz?", a: "Absolutely. We have many adult students who have completed Hifz successfully." },
      { q: "Is there an entry test?", a: "Just a basic recitation check — we accept students at every level." },
    ]}
  />
);

export default QuranMemorization;
