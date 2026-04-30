import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Intro from "@/components/site/Intro";
import Steps from "@/components/site/Steps";
import Audiences from "@/components/site/Audiences";
import Stats from "@/components/site/Stats";
import Courses from "@/components/site/Courses";
import Discover from "@/components/site/Discover";
import Advantages from "@/components/site/Advantages";
import Testimonials from "@/components/site/Testimonials";
import CTASection from "@/components/site/CTASection";
import Footer from "@/components/site/Footer";
import ProgramSection from "@/components/site/ProgramSection";
import female from "@/assets/course-female.jpg";
import kids from "@/assets/course-kids.jpg";
import quran from "@/assets/course-quran.jpg";
import hifz from "@/assets/course-hifz.jpg";
import tajweed from "@/assets/course-tajweed.jpg";

const programs = [
  {
    id: "female-teacher",
    eyebrow: "For Sisters & Daughters",
    title: "Female Quran Teacher",
    highlight: "Online",
    subtitle: "Learn the Holy Quran in a safe, respectful environment with certified female scholars for sisters and young women.",
    description: "Our female Quran program connects learners with patient, qualified Hafizahs and female educators who teach Tajweed, recitation, and Islamic dignity in a women-only setting.",
    image: female,
    features: [
      { title: "Comfort & Privacy", desc: "Women-only classes designed for safety and confidence in every lesson." },
      { title: "Certified Female Teachers", desc: "Ijazah-certified female tutors who guide your Quranic journey with grace." },
      { title: "Flexible Timing", desc: "Schedule lessons around your life with easy booking and support." },
      { title: "Personal Progress Tracking", desc: "Monthly reports and tailored plans help you grow consistently." },
    ],
  },
  {
    id: "kids",
    eyebrow: "Ages 4–15",
    title: "Quran Classes",
    highlight: "for Kids",
    subtitle: "Engaging, active Quran lessons made fun for children while preserving authentic learning methods.",
    description: "Our kids program blends storytelling, colorful visuals, and gentle repetition so young learners build a love for Quran recitation and Arabic with ease.",
    image: kids,
    features: [
      { title: "Kid-Friendly Teachers", desc: "Experienced tutors who make each class playful, patient, and effective." },
      { title: "Gamified Learning", desc: "Rewards, stickers, and progress charts keep children motivated." },
      { title: "Sibling Discounts", desc: "Save more when multiple children enroll together." },
      { title: "Parent Progress Reports", desc: "Follow your child’s growth with weekly updates and recordings." },
    ],
  },
  {
    id: "tajweed",
    eyebrow: "The Art of Recitation",
    title: "Learn Quran",
    highlight: "with Tajweed",
    subtitle: "Perfect your Quran recitation with the correct pronunciation and rhythm taught by expert Qaris.",
    description: "Tajweed training helps you read Allah’s words exactly as they were revealed, with proper articulation of letters, pauses, and flowing recitation.",
    image: tajweed,
    features: [
      { title: "Live Voice Correction", desc: "Receive real-time feedback to refine every sound and syllable." },
      { title: "Theory + Practice", desc: "Learn rules and immediately apply them to Quranic verses." },
      { title: "Multiple Recitation Styles", desc: "Study Hafs, Warsh, or Qaloon depending on your preference." },
      { title: "Ijazah Track", desc: "Advance toward official recitation certification at your own pace." },
    ],
  },
  {
    id: "memorization",
    eyebrow: "The Hifz Journey",
    title: "Quran",
    highlight: "Memorization",
    subtitle: "Commit the Noble Quran to memory through a structured Hifz system backed by qualified mentors.",
    description: "Our memorization program combines Sabaq, Sabqi, and Manzil methods so you memorize consistently while retaining what you learn.",
    image: hifz,
    features: [
      { title: "Classical Hifz Method", desc: "A proven system used by traditional madrassas and online Quran academies." },
      { title: "Custom Pace", desc: "Learn at a rhythm that fits your schedule and learning style." },
      { title: "Daily Revision", desc: "Built-in reviews keep your memorization strong and lasting." },
      { title: "Completion Certificate", desc: "Receive recognition when you finish your Hifz journey." },
    ],
  },
  {
    id: "reading",
    eyebrow: "Nazra & Qirat",
    title: "Quran",
    highlight: "Reading",
    subtitle: "From beginner letters to fluent Mushaf recitation, this course teaches Quran reading step-by-step.",
    description: "Learn Arabic reading, pronunciation, and basic Tajweed so you can confidently read the Quran from any Mushaf.",
    image: quran,
    features: [
      { title: "Beginner-Friendly", desc: "No prior Arabic knowledge is required to start reading immediately." },
      { title: "Reading Fluency", desc: "Build speed and accuracy through daily guided practice." },
      { title: "Standard Madinah Script", desc: "Read comfortably from the Quran text used worldwide." },
      { title: "Step-by-Step Support", desc: "Each lesson is designed to remove confusion and build lasting confidence." },
    ],
  },
];

const Index = () => {
  return (
    <main id="home" className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Intro />
      <Steps />
      <Audiences />
      <Stats />
      <Courses />

      <section className="py-24">
        <div className="container text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.5em] text-gold font-semibold mb-3">Our Programs</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            All five core Quran programs now available on one page.
          </h2>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            Explore every course offering from female-led classes and kids sessions to Tajweed, memorization, and reading — all from our homepage.
          </p>
        </div>
      </section>

      {programs.map((program) => (
        <ProgramSection key={program.id} {...program} />
      ))}

      <Discover />
      <Advantages />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
