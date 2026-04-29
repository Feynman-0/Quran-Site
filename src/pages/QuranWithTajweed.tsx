import CoursePageLayout from "@/components/site/CoursePageLayout";
import { Mic, BookOpen, Volume2, Award } from "lucide-react";
import hero from "@/assets/course-tajweed.jpg";

const QuranWithTajweed = () => (
  <CoursePageLayout
    arabic="﴿ وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا ﴾"
    eyebrow="The Art of Recitation"
    title="Learn Quran"
    highlight="with Tajweed"
    subtitle="Master the precise rules of Quranic pronunciation — recite the words of Allah exactly as they were revealed to the Prophet ﷺ, with melody and accuracy."
    intro="Tajweed is the science of pronouncing every letter of the Quran from its proper articulation point with its correct attributes. Our certified Qaris teach you the rules, demonstrate them, and patiently correct your recitation until each ayah flows beautifully from your tongue."
    heroImage={hero}
    features={[
      { icon: Mic, title: "Live Voice Correction", desc: "Real-time feedback on every letter, every breath, every pause." },
      { icon: BookOpen, title: "Theory + Practice", desc: "Learn the rule, then apply it on the actual Mushaf with your teacher." },
      { icon: Volume2, title: "Multiple Qira'at", desc: "Hafs, Warsh, Qaloon — choose the recitation style you prefer." },
      { icon: Award, title: "Ijazah Pathway", desc: "Progress toward earning your authentic Ijazah certification." },
    ]}
    curriculum={[
      { level: "Beginner Tajweed", topics: ["Makharij — articulation points", "Sifaat — letter attributes", "Harakat & Sukoon", "Basic recitation drills"] },
      { level: "Intermediate Rules", topics: ["Noon Sakinah & Tanween", "Meem Sakinah rules", "Qalqalah & Lam Shamsiyyah", "Madd categories"] },
      { level: "Advanced Application", topics: ["Stopping (Waqf) rules", "Ghunnah duration mastery", "Tafkheem & Tarqeeq", "Full surah polishing"] },
      { level: "Ijazah Track", topics: ["Complete Quran review", "One-on-one with Sheikh", "Memorized recitation testing", "Ijazah certification ceremony"] },
    ]}
    benefits={[
      "Teachers with authentic chains (Sanad) of Ijazah",
      "Recordings of every class for self-review",
      "Personalized Tajweed workbook included",
      "Optional voice analysis using audio tools",
      "Path to becoming a certified Qari yourself",
      "Group masterclasses with renowned scholars monthly",
    ]}
    faqs={[
      { q: "Do I need to know Arabic first?", a: "No — we teach Tajweed alongside reading, even if you are a complete beginner." },
      { q: "How long until I master Tajweed?", a: "Most students achieve solid Tajweed in 8–12 months with consistent practice." },
      { q: "Will I get an Ijazah?", a: "Yes, students who complete the full track and pass evaluation receive an authentic Ijazah." },
      { q: "Which Qira'ah do you teach?", a: "We primarily teach Hafs 'an Asim, but Warsh and Qaloon are available on request." },
    ]}
  />
);

export default QuranWithTajweed;
