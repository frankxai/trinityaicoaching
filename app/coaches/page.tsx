import Link from "next/link";
import { ArrowRight, Brain, Heart, Shield, Sparkles, Target, Users, Zap } from "lucide-react";
import { SectionHeading, Surface, Pill, BulletList } from "@/components/ui/primitives";
import { avatarPersonas } from "@/lib/portalData";

export const metadata = {
  title: "Elite Coaching Experience | Trinity AI",
  description: "Experience transformational coaching powered by AI avatars and human mentors. Body, mind, and soul integration with personalized guidance and accountability."
};

const coachingExperiences = [
  {
    title: "Trinity Body Coach",
    subtitle: "Physical Excellence & Vitality",
    description: "Transform your physical foundation with precision nutrition, movement optimization, and energy mastery.",
    icon: <Zap className="h-8 w-8" />,
    color: "emerald",
    features: [
      { label: "Metabolic Optimization", detail: "Personalized nutrition and supplementation protocols" },
      { label: "Movement Mastery", detail: "Functional fitness and mobility enhancement" },
      { label: "Energy Systems", detail: "Sleep, recovery, and circadian rhythm optimization" },
      { label: "Biometric Tracking", detail: "HRV, glucose, and performance monitoring" }
    ],
    outcomes: ["20% energy increase", "15 lbs optimal body composition", "90% sleep quality improvement"],
    avatar: "trinity-prime",
    duration: "90-day intensive",
    investment: "$2,997"
  },
  {
    title: "Trinity Mind Coach",
    subtitle: "Cognitive Performance & Focus",
    description: "Optimize mental clarity, decision-making, and productivity through advanced cognitive training.",
    icon: <Brain className="h-8 w-8" />,
    color: "blue",
    features: [
      { label: "Cognitive Enhancement", detail: "Memory, focus, and processing speed optimization" },
      { label: "Decision Architecture", detail: "Strategic thinking and mental models mastery" },
      { label: "Flow States", detail: "Deep work and peak performance protocols" },
      { label: "Stress Resilience", detail: "Pressure management and emotional regulation" }
    ],
    outcomes: ["40% productivity gain", "300% focus improvement", "80% stress reduction"],
    avatar: "trinity-tactician",
    duration: "90-day intensive",
    investment: "$3,497"
  },
  {
    title: "Trinity Soul Coach",
    subtitle: "Purpose & Spiritual Alignment",
    description: "Discover your deepest purpose and align your life with your soul's highest expression.",
    icon: <Heart className="h-8 w-8" />,
    color: "purple",
    features: [
      { label: "Purpose Discovery", detail: "Uncover your unique soul mission and calling" },
      { label: "Spiritual Practices", detail: "Meditation, energy work, and consciousness expansion" },
      { label: "Intuitive Development", detail: "Enhance inner guidance and spiritual connection" },
      { label: "Life Integration", detail: "Align career, relationships, and lifestyle with purpose" }
    ],
    outcomes: ["Crystal clear life purpose", "Deep spiritual connection", "Authentic self-expression"],
    avatar: "trinity-guardian",
    duration: "120-day journey",
    investment: "$4,997"
  }
];

const coachingProcess = [
  {
    phase: "Assessment",
    title: "Deep Dive Discovery",
    description: "Comprehensive assessment across body, mind, and soul dimensions",
    duration: "Week 1",
    activities: [
      "Complete Trinity Assessment (200+ data points)",
      "Biometric baseline testing and analysis",
      "Goal setting and vision alignment session",
      "Custom protocol design and roadmap creation"
    ]
  },
  {
    phase: "Activation",
    title: "Protocol Implementation",
    description: "Begin your personalized transformation protocols with daily support",
    duration: "Weeks 2-8",
    activities: [
      "Daily AI coach check-ins and guidance",
      "Weekly 1:1 sessions with human mentor",
      "Progress tracking and protocol adjustments",
      "Community support and accountability"
    ]
  },
  {
    phase: "Integration",
    title: "Mastery & Lifestyle Design",
    description: "Lock in your gains and design sustainable lifestyle systems",
    duration: "Weeks 9-12+",
    activities: [
      "Advanced protocol optimization",
      "Lifestyle integration and habit stacking",
      "Long-term maintenance system design",
      "Graduation to Trinity Community leadership"
    ]
  }
];

const socialProof = [
  {
    name: "Sarah Chen",
    title: "Tech Executive",
    program: "Trinity Mind",
    result: "Doubled productivity while working 20% fewer hours",
    avatar: "/testimonials/sarah.jpg"
  },
  {
    name: "Marcus Rodriguez",
    title: "Entrepreneur",
    program: "Trinity Body",
    result: "Lost 25 lbs and gained more energy than I had in my 20s",
    avatar: "/testimonials/marcus.jpg"
  },
  {
    name: "Emily Watson",
    title: "Creative Director",
    program: "Trinity Soul",
    result: "Found my life purpose and launched my dream business",
    avatar: "/testimonials/emily.jpg"
  }
];

export default function CoachesPage() {
  const featuredPersonas = avatarPersonas.filter((persona) =>
    ["trinity-prime", "trinity-tactician", "trinity-guardian"].includes(persona.id)
  );

  return (
    <main className="pb-24">
      {/* Hero Section */}
      <section className="container-px mx-auto max-w-6xl pt-16">
        <Surface tone="highlight" className="p-8 sm:p-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-500/20 px-4 py-2 text-sm font-medium text-brand-200 mb-6">
            <Sparkles className="h-4 w-4" />
            Elite Transformation Experience
          </div>

          <SectionHeading
            title="Transform with AI-Powered Coaching"
            description="Experience the future of human potential optimization. Our elite coaches combine ancient wisdom with cutting-edge AI to guide your complete body, mind, and soul transformation."
          />

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/app/get-started"
              className="rounded-lg bg-brand-600 hover:bg-brand-700 px-8 py-4 text-lg font-semibold text-white transition inline-flex items-center gap-2"
            >
              Begin Your Journey <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="#coaching-experiences"
              className="rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 px-8 py-4 text-lg font-semibold text-white transition"
            >
              Explore Programs
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6">
              <Shield className="h-8 w-8 text-emerald-300 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-sm text-emerald-200">Success Rate</div>
            </div>
            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">
              <Users className="h-8 w-8 text-blue-300 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">1,200+</div>
              <div className="text-sm text-blue-200">Lives Transformed</div>
            </div>
            <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-6">
              <Target className="h-8 w-8 text-purple-300 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">90 Days</div>
              <div className="text-sm text-purple-200">To Complete Transformation</div>
            </div>
          </div>
        </Surface>
      </section>

      {/* Coaching Experiences */}
      <section id="coaching-experiences" className="container-px mx-auto max-w-6xl mt-16">
        <Surface tone="default">
          <SectionHeading
            eyebrow="Transformation Programs"
            title="Choose your path to excellence"
            description="Each program is designed to optimize a specific dimension of your being, with the option to integrate multiple paths for complete transformation."
          />

          <div className="mt-8 space-y-8">
            {coachingExperiences.map((experience, index) => {
              const colorClasses = {
                emerald: {
                  gradient: 'bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent',
                  iconBg: 'bg-emerald-500/20',
                  iconText: 'text-emerald-300',
                  subtitle: 'text-emerald-200',
                  button: 'bg-emerald-600 hover:bg-emerald-700',
                  dot: 'bg-emerald-400'
                },
                blue: {
                  gradient: 'bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent',
                  iconBg: 'bg-blue-500/20',
                  iconText: 'text-blue-300',
                  subtitle: 'text-blue-200',
                  button: 'bg-blue-600 hover:bg-blue-700',
                  dot: 'bg-blue-400'
                },
                purple: {
                  gradient: 'bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-transparent',
                  iconBg: 'bg-purple-500/20',
                  iconText: 'text-purple-300',
                  subtitle: 'text-purple-200',
                  button: 'bg-purple-600 hover:bg-purple-700',
                  dot: 'bg-purple-400'
                }
              };
              const colors = colorClasses[experience.color as keyof typeof colorClasses];

              return (
              <div key={experience.title} className={`rounded-3xl border border-white/10 ${colors.gradient} p-8`}>
                <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
                  <div>
                    <div className={`inline-flex items-center gap-3 rounded-xl ${colors.iconBg} p-4 ${colors.iconText} mb-6`}>
                      {experience.icon}
                      <div>
                        <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                        <p className={`text-sm ${colors.subtitle}`}>{experience.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-neutral-300 mb-6">{experience.description}</p>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center py-2 border-b border-white/10">
                        <span className="text-sm text-neutral-400">Duration:</span>
                        <span className="text-sm font-medium text-white">{experience.duration}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-white/10">
                        <span className="text-sm text-neutral-400">Investment:</span>
                        <span className="text-lg font-bold text-white">{experience.investment}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm text-neutral-400">AI Coach:</span>
                        <Pill tone="success">{experience.avatar}</Pill>
                      </div>
                    </div>

                    <Link
                      href="/app/get-started"
                      className={`inline-flex items-center gap-2 w-full justify-center rounded-lg ${colors.button} px-6 py-3 font-semibold text-white transition`}
                    >
                      Start This Program <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">What You'll Master</h4>
                      <BulletList items={experience.features} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Expected Outcomes</h4>
                      <div className="grid gap-3">
                        {experience.outcomes.map((outcome, idx) => (
                          <div key={idx} className="flex items-center gap-3 rounded-lg bg-white/5 p-3">
                            <div className={`h-2 w-2 rounded-full ${colors.dot}`}></div>
                            <span className="text-sm text-white">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </Surface>
      </section>

      {/* Coaching Process */}
      <section className="container-px mx-auto max-w-6xl mt-16">
        <Surface tone="default">
          <SectionHeading
            eyebrow="The Trinity Method"
            title="Your transformation journey"
            description="Our proven 3-phase process ensures lasting change through assessment, activation, and integration."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {coachingProcess.map((phase, index) => (
              <div key={phase.phase} className="rounded-2xl border border-white/10 bg-white/5 p-6 relative">
                <div className="absolute -top-3 left-6 bg-brand-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                <div className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">{phase.title}</h3>
                    <Pill tone="warning">{phase.duration}</Pill>
                  </div>

                  <p className="text-sm text-neutral-300 mb-4">{phase.description}</p>

                  <div className="space-y-2">
                    {phase.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <div className="h-1.5 w-1.5 rounded-full bg-brand-400 mt-1.5 flex-shrink-0"></div>
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Surface>
      </section>

      {/* AI Coaches Preview */}
      <section className="container-px mx-auto max-w-6xl mt-16">
        <Surface tone="default">
          <SectionHeading
            eyebrow="Meet Your AI Coaches"
            title="Personalized guidance, 24/7"
            description="Each Trinity program pairs you with a specialized AI coach personality designed for your transformation journey."
            actions={[{ href: "/agents", label: "Meet All Coaches" }]}
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featuredPersonas.map((persona) => (
              <div key={persona.id} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  {persona.name.charAt(0)}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">{persona.name}</h3>
                <div className="mb-3">
                  <Pill>{persona.archetype}</Pill>
                </div>
                <p className="text-sm text-neutral-300 mb-4">{persona.tagline}</p>

                <div className="text-xs text-neutral-400 mb-2">Specializes in:</div>
                <div className="flex flex-wrap gap-1 justify-center">
                  {persona.signatureMoves.slice(0, 3).map((move) => (
                    <span key={move} className="text-xs bg-white/10 px-2 py-1 rounded text-neutral-300">
                      {move}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Surface>
      </section>

      {/* Social Proof */}
      <section className="container-px mx-auto max-w-6xl mt-16">
        <Surface tone="default">
          <SectionHeading
            eyebrow="Success Stories"
            title="Real transformations, real people"
            description="See how Trinity coaching has transformed the lives of professionals, entrepreneurs, and leaders."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {socialProof.map((testimonial) => (
              <div key={testimonial.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-neutral-400">{testimonial.title}</div>
                  </div>
                </div>

                <blockquote className="text-sm text-neutral-300 mb-4">
                  "{testimonial.result}"
                </blockquote>

                <Pill tone="success">{testimonial.program}</Pill>
              </div>
            ))}
          </div>
        </Surface>
      </section>

      {/* CTA Section */}
      <section className="container-px mx-auto max-w-6xl mt-16">
        <Surface tone="highlight" className="p-8 sm:p-12 text-center">
          <SectionHeading
            title="Ready to begin your transformation?"
            description="Join the Trinity community and experience coaching that adapts to you, challenges you, and transforms you completely."
          />

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/app/get-started"
              className="rounded-lg bg-brand-600 hover:bg-brand-700 px-8 py-4 text-lg font-semibold text-white transition inline-flex items-center gap-2"
            >
              Start Your Assessment <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/workflows"
              className="rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 px-8 py-4 text-lg font-semibold text-white transition"
            >
              Explore Workflows
            </Link>
          </div>

          <div className="mt-8 text-sm text-neutral-300">
            <p>🚀 Start your 7-day trial • 💯 100% satisfaction guarantee • 🎯 Personalized coaching protocols</p>
          </div>
        </Surface>
      </section>
    </main>
  );
}