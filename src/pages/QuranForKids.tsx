import CoursePageLayout from "@/components/site/CoursePageLayout";
import { Smile, Gamepad2, Star, Trophy } from "lucide-react";
import hero from "@/assets/course-kids.jpg";

const QuranForKids = () => (
  <CoursePageLayout
    arabic="﴿ وَعَلَّمْنَاهُ مِن لَّدُنَّا عِلْمًا ﴾"
    eyebrow="Ages 4 — 15"
    title="Quran Classes"
    highlight="for Kids"
    subtitle="Engaging, interactive, and joyful Quran lessons designed to nurture your child's love for the Holy Book — with gamified rewards and patient, kid-friendly teachers."
    intro="Our Quran for Kids program turns learning into an adventure. Children build a lifelong bond with the Quran through colorful visuals, storytelling, gentle correction, and reward systems. Every teacher is specially trained in child psychology and early Islamic education."
    heroImage={hero}
    features={[
      { icon: Smile, title: "Kid-Friendly Tutors", desc: "Patient teachers trained to make learning fun and stress-free for children." },
      { icon: Gamepad2, title: "Gamified Lessons", desc: "Stars, badges, and progress maps keep kids excited every single class." },
      { icon: Star, title: "Reward System", desc: "Earn certificates, gifts, and recognition for milestones achieved." },
      { icon: Trophy, title: "Parent Reports", desc: "Weekly progress updates so you never miss your child's growth." },
    ]}
    curriculum={[
      { level: "Tiny Tots (Age 4–6)", topics: ["Arabic alphabet songs", "Color & shape integration", "Short duas memorization", "Story-based learning"] },
      { level: "Young Learners (Age 7–10)", topics: ["Noorani Qaida mastery", "Reading short surahs", "Basic Tajweed introduction", "Islamic manners (Adab)"] },
      { level: "Pre-Teens (Age 11–13)", topics: ["Fluent Quran recitation", "Intermediate Tajweed", "Surah memorization plan", "Meaning of daily duas"] },
      { level: "Teens (Age 14–15)", topics: ["Advanced Tajweed rules", "Hifz program enrollment", "Tafseer of Juz Amma", "Islamic identity building"] },
    ]}
    benefits={[
      "Specially trained child educators with police-verified backgrounds",
      "Bright, animated teaching materials kids actually enjoy",
      "Sibling discounts up to 30% on monthly fees",
      "Make-up classes available for missed lessons",
      "Free welcome kit on enrollment (booklet + stickers)",
      "Parent dashboard with full progress visibility",
    ]}
    faqs={[
      { q: "What is the minimum age?", a: "We accept children from 4 years old. Younger kids start with playful alphabet introduction." },
      { q: "How long is each class?", a: "Classes range from 30 to 45 minutes depending on age and attention span." },
      { q: "Can parents observe the class?", a: "Yes — we encourage parents to sit in, especially for younger children." },
      { q: "Do you offer sibling discounts?", a: "Yes, up to 30% off when you enroll multiple children from the same family." },
    ]}
  />
);

export default QuranForKids;
