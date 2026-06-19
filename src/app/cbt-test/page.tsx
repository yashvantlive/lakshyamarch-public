import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { Laptop, Clock, BarChart, CheckCircle2, MonitorPlay } from "lucide-react";
import {
  Badge, SectionHeader, HeroSection, CTASection, Reveal, Stagger, StaggerItem,
} from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";
import Button from "@/components/brand/Button";

export const metadata = {
  title: "CBT Test Practice | Online Mock Tests for NEET & IIT-JEE",
  description: "Boost your NEET and IIT-JEE preparation with LakshyaMarch's Computer Based Test (CBT) practice portal. Experience the real exam environment, improve time management, and get detailed analytics.",
  keywords: ["CBT Test Practice", "NEET CBT", "IIT-JEE CBT", "Online Mock Tests", "LakshyaMarch Test Series"],
};

const CBT_BENEFITS = [
  {
    icon: Laptop,
    title: "Real Exam Simulation",
    text: "Familiarize yourself with the exact interface used in actual NTA exams. Eliminate exam-day anxiety by knowing exactly how to navigate, mark for review, and submit.",
  },
  {
    icon: Clock,
    title: "Time Management Mastery",
    text: "Our CBT platform features a strict countdown timer, helping you build the speed and precision required to tackle all questions within the allotted time.",
  },
  {
    icon: BarChart,
    title: "In-Depth Analytics",
    text: "Get instant, comprehensive reports post-test. Analyze your subject-wise performance, time spent per question, and identify weak areas that need immediate attention.",
  },
];

const EXAM_TRENDS = [
  "IIT-JEE is fully Computer Based, making CBT practice mandatory.",
  "NEET is adopting hybrid/CBT patterns. Early practice gives you a massive advantage.",
  "Online testing eliminates bubbling errors common in OMR sheets.",
  "Immediate results and analytics accelerate your revision cycle.",
];

export default function CBTTestPage() {
  return (
    <div className="flex min-h-screen flex-col bg-ink-50">
      <PublicNavbar />

      <HeroSection accent="blue" minHeight="min-h-[50vh]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Badge tone="onDark" icon={MonitorPlay}>Interactive Practice Portal</Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-tight tracking-tight text-white">
              Master the <span className="text-brand-gold-400">CBT</span> Format
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-lg leading-relaxed text-white/70">
              In today's competitive landscape, knowing the subject is only half the battle. The other half is mastering the Computer Based Test (CBT) environment. Practice online to boost your NEET and IIT-JEE scores.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex justify-center">
              {/* Originally: https://test.lakshyamarch.com */}
              <Button href="https://lakshyamarch-lm-test.netlify.app/" variant="primary" size="lg" withArrow target="_blank" rel="noopener noreferrer">
                Go to Test Portal
              </Button>
            </div>
          </Reveal>
        </div>
      </HeroSection>

      <main className="flex-1">
        {/* What is CBT & Why Practice */}
        <section className={cn(layout.section, "bg-white")}>
          <div className={layout.container}>
            <SectionHeader
              eyebrow="The Future of Exams"
              title="Why Practice CBT Online?"
              accentWord="Online"
              accent="red"
              lead="Transition seamlessly from pen-and-paper to a digital exam environment."
              className="mb-14"
            />
            <Stagger className="grid gap-6 md:grid-cols-3">
              {CBT_BENEFITS.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <StaggerItem key={idx}>
                    <div className="h-full rounded-lg border border-ink-200 bg-white p-8 shadow-brand-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-brand-lg">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-700">
                        <Icon size={28} strokeWidth={1.75} />
                      </div>
                      <h3 className="font-display text-xl font-bold text-ink-900">{benefit.title}</h3>
                      <p className="mt-3 font-sans leading-relaxed text-ink-500">{benefit.text}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </section>

        {/* NEET & JEE Context */}
        <section className={cn(layout.section, "bg-ink-50")}>
          <div className={layout.container}>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <Reveal>
                <div>
                  <h2 className="font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
                    Crucial for <span className="text-brand-blue-700">IIT-JEE</span> & <span className="text-brand-green-600">NEET</span>
                  </h2>
                  <p className="mt-5 font-sans leading-relaxed text-ink-600">
                    With IIT-JEE already fully established as a Computer Based Test and NEET progressively adopting hybrid and online modes, relying solely on offline practice puts you at a disadvantage.
                  </p>
                  <p className="mt-5 font-sans leading-relaxed text-ink-600">
                    Our dedicated CBT portal is designed to mirror the exact NTA UI. By taking mock tests online, you eliminate the risk of OMR bubbling errors, improve your navigation speed between sections, and train your brain to focus on a screen for 3+ hours without fatigue.
                  </p>
                  
                  <div className="mt-8 space-y-4">
                    {EXAM_TRENDS.map((trend, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand-green-500" />
                        <span className="font-sans text-ink-800">{trend}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="relative overflow-hidden rounded-xl border border-ink-200 bg-white shadow-brand-lg">
                  <div className="bg-ink-900 px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="mx-auto bg-white/10 rounded px-16 py-1 text-xs text-white/50 font-sans tracking-wider">
                      {/* Originally: test.lakshyamarch.com */}
                      lakshyamarch-lm-test.netlify.app
                    </div>
                  </div>
                  <div className="p-8 sm:p-12 text-center bg-brand-blue-50">
                    <MonitorPlay size={64} className="mx-auto text-brand-blue-700 mb-6 opacity-80" />
                    <h3 className="font-display text-2xl font-bold text-ink-900 mb-4">Ready to test yourself?</h3>
                    <p className="font-sans text-ink-600 mb-8">Access chapter-wise tests, full mock exams, and previous year papers in our CBT portal.</p>
                    {/* Originally: https://test.lakshyamarch.com */}
                    <Button href="https://lakshyamarch-lm-test.netlify.app/" variant="primary" size="lg" withArrow target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                      Login to Test Portal
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <CTASection
        title="Start Practicing Today"
        accentWord="Practicing"
        lead="Join thousands of students who have boosted their scores through our authentic CBT simulation."
        actions={[
          { label: "Go to Test Portal", href: "https://lakshyamarch-lm-test.netlify.app/", variant: "primary", withArrow: true, external: true },
        ]}
      />
      <PublicFooter />
    </div>
  );
}
