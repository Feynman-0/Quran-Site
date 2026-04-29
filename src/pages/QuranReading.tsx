import CoursePageLayout from "@/components/site/CoursePageLayout";
import { BookOpen, Type, Eye, Sparkles } from "lucide-react";
import hero from "@/assets/course-quran.jpg";

const QuranReading = () => (
  <CoursePageLayout
    arabic="﴿ اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ﴾"
    eyebrow="Nazra & Qirat"
    title="Quran"
    highlight="Reading"
    subtitle="From recognizing the first Arabic letter to reading the entire Mushaf fluently — a complete pathway for absolute beginners and intermediate students alike."
    intro="The Quran Reading (Nazra) course is your gateway to a personal relationship with the Book of Allah. Starting from Noorani Qaida, we walk you step-by-step through letter recognition, joining, vowels, and finally fluid recitation of any Surah in the Quran. No prior Arabic knowledge required."
    heroImage={hero}
    features={[
      { icon: Type, title: "Noorani Qaida", desc: "The foundational primer used worldwide to learn Quranic Arabic correctly." },
      { icon: Eye, title: "Visual Learning", desc: "Bright, clear digital Mushaf with letter highlighting as the teacher reads." },
      { icon: BookOpen, title: "Read Any Mushaf", desc: "Master the standard Madinah script and read confidently from any copy." },
      { icon: Sparkles, title: "Beautiful Recitation", desc: "Develop a melodious voice with basic Tajweed integrated from day one." },
    ]}
    curriculum={[
      { level: "Step 1 — Letters", topics: ["28 Arabic letters", "Letter shapes (start, middle, end)", "Pronunciation drills", "Recognition speed tests"] },
      { level: "Step 2 — Vowels & Sounds", topics: ["Fatha, Kasra, Damma", "Sukoon and Shaddah", "Tanween rules", "Joining letters into words"] },
      { level: "Step 3 — Words & Verses", topics: ["Reading short ayahs", "Building reading speed", "Stopping marks", "Common Quranic words"] },
      { level: "Step 4 — Full Surahs", topics: ["Reading Juz Amma", "Mid-length Surahs", "Long Surahs introduction", "Daily recitation goals"] },
    ]}
    benefits={[
      "Designed for ages 5 to 75 — no upper age limit",
      "No prior Arabic or Quran knowledge needed",
      "Digital workbook with audio examples for every lesson",
      "Track every letter, word, and surah you've mastered",
      "Bridge into Tajweed and Hifz programs seamlessly",
      "Free Mushaf shipped to qualifying students",
    ]}
    faqs={[
      { q: "I don't know any Arabic — can I still join?", a: "Yes! This course is specifically designed for true beginners with zero Arabic background." },
      { q: "How quickly will I be reading the Quran?", a: "Most students read short Surahs within 3–4 months and full Mushaf within 8–12 months." },
      { q: "Is this suitable for elderly learners?", a: "Absolutely — we have a special pace and patient teachers experienced with senior students." },
      { q: "What comes after this course?", a: "You can advance to our Tajweed program or begin Hifz, whichever you prefer." },
    ]}
  />
);

export default QuranReading;
