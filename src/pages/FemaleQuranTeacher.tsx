import CoursePageLayout from "@/components/site/CoursePageLayout";
import { Heart, GraduationCap, ShieldCheck, Globe, BookOpen, Users, Award, Clock } from "lucide-react";
import hero from "@/assets/course-female.jpg";

const FemaleQuranTeacher = () => (
  <CoursePageLayout
    arabic="﴿ وَقَرْنَ فِي بُيُوتِكُنَّ ﴾"
    eyebrow="For Sisters & Daughters"
    title="Female Quran Teacher"
    highlight="Online"
    subtitle="Learn the Holy Quran in a safe, comfortable environment with certified female scholars — designed exclusively for sisters who prefer learning from women."
    intro="Our Female Quran Teacher program is thoughtfully crafted for women and girls seeking authentic Islamic education from female Hafizahs and Aalimahs. Whether you are a beginner exploring Arabic letters or an advanced learner perfecting Tajweed, our sisters teach with patience, modesty, and deep scholarly grounding."
    heroImage={hero}
    features={[
      { icon: Heart, title: "Comfort & Privacy", desc: "Women-only classes with verified female teachers in a respectful environment." },
      { icon: GraduationCap, title: "Certified Hafizahs", desc: "Learn from Ijazah-holding scholars from Al-Azhar and renowned institutions." },
      { icon: ShieldCheck, title: "Safe Platform", desc: "End-to-end encrypted classes with parental monitoring options." },
      { icon: Globe, title: "Flexible Timings", desc: "Schedule lessons that fit your life — 24/7 availability across time zones." },
    ]}
    curriculum={[
      { level: "Foundations — Noorani Qaida", topics: ["Arabic alphabet & sounds", "Harakat and joining letters", "Basic pronunciation rules", "Building first words"] },
      { level: "Quran Reading (Nazra)", topics: ["Reading short surahs", "Fluency development", "Tajweed introduction", "Daily recitation practice"] },
      { level: "Tajweed Mastery", topics: ["Makharij of letters", "Rules of Noon & Meem Sakinah", "Madd and stopping rules", "Practical recitation review"] },
      { level: "Memorization & Tafseer", topics: ["Hifz of selected surahs", "Word-by-word meaning", "Asbab al-Nuzul", "Application in daily life"] },
    ]}
    benefits={[
      "Exclusive female-to-female learning environment",
      "Personalized one-on-one attention with progress tracking",
      "Affordable monthly plans starting from $35",
      "Free 3-day trial — no credit card required",
      "Compatible with any device — Zoom, Skype, or our portal",
      "Monthly performance reports for parents and guardians",
    ]}
    faqs={[
      { q: "Are all teachers in this program female?", a: "Yes, 100%. Every teacher in this program is a verified female scholar with proper Ijazah credentials." },
      { q: "Can my young daughter take these classes?", a: "Absolutely. We have specialized teachers for children as young as 4 years old, with a fun and gentle approach." },
      { q: "What software do I need?", a: "Just a laptop or smartphone with internet. We use Zoom or Google Meet — whichever you prefer." },
      { q: "Is the trial really free?", a: "Yes — 3 full classes, no card details, no hidden charges. Continue only if you love it." },
    ]}
  />
);

export default FemaleQuranTeacher;
