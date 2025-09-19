import Link from "next/link";
import { ArrowRight, Bot, Calendar, FileText, Mail, MessageCircle, Target, Users, Workflow, Zap } from "lucide-react";
import { SectionHeading, Surface, Pill, BulletList } from "@/components/ui/primitives";

export const metadata = {
  title: "Coaching Business Workflows | Trinity AI",
  description: "Streamline your coaching business with proven workflows, automation templates, and agentic tools. From client onboarding to program delivery."
};

const workflowCategories = [
  {
    id: "client-journey",
    title: "Client Journey Automation",
    description: "Complete client lifecycle from discovery to transformation",
    icon: <Users className="h-6 w-6" />,
    color: "emerald",
    workflows: [
      {
        name: "Lead to Client Pipeline",
        description: "Automated nurturing sequence that converts prospects into committed clients",
        tools: ["Calendly", "ActiveCampaign", "Zoom", "Stripe"],
        complexity: "Beginner",
        timeToSetup: "2-3 hours",
        templateUrl: "https://n8n.io/workflows/1896-lead-nurturing-email-automation",
        steps: [
          "Lead capture via landing page form",
          "Automated discovery call booking",
          "Pre-call intake form delivery",
          "Post-call follow-up sequence",
          "Payment processing & onboarding"
        ]
      },
      {
        name: "Client Onboarding Experience",
        description: "Seamless welcome journey with document collection and goal setting",
        tools: ["Notion", "Typeform", "Slack", "Google Drive"],
        complexity: "Intermediate",
        timeToSetup: "4-5 hours",
        templateUrl: "https://n8n.io/workflows/1234-client-onboarding-automation",
        steps: [
          "Welcome email with portal access",
          "Goal-setting questionnaire auto-delivery",
          "Calendar integration for session booking",
          "Resource library access provisioning",
          "First session preparation automation"
        ]
      }
    ]
  },
  {
    id: "content-delivery",
    title: "Program Delivery & Content",
    description: "Automated content delivery and progress tracking systems",
    icon: <Target className="h-6 w-6" />,
    color: "blue",
    workflows: [
      {
        name: "Drip Content Delivery",
        description: "Progressive content unlock based on client progress and milestones",
        tools: ["Thinkific", "Zapier", "Airtable", "Loom"],
        complexity: "Intermediate",
        timeToSetup: "6-8 hours",
        templateUrl: "https://zapier.com/apps/thinkific/integrations/airtable",
        steps: [
          "Progress milestone tracking setup",
          "Content library organization",
          "Automated content unlock triggers",
          "Progress notification system",
          "Completion certificate generation"
        ]
      },
      {
        name: "Session Management Hub",
        description: "Complete session lifecycle from scheduling to follow-up",
        tools: ["Calendly", "Zoom", "Otter.ai", "Notion"],
        complexity: "Advanced",
        timeToSetup: "8-10 hours",
        templateUrl: "https://n8n.io/workflows/2156-meeting-automation-workflow",
        steps: [
          "Smart scheduling with buffer management",
          "Pre-session reminder automation",
          "Recording & transcription processing",
          "Action item extraction & delivery",
          "Next session booking automation"
        ]
      }
    ]
  },
  {
    id: "engagement-retention",
    title: "Engagement & Retention",
    description: "Keep clients motivated and accountable throughout their journey",
    icon: <MessageCircle className="h-6 w-6" />,
    color: "purple",
    workflows: [
      {
        name: "Accountability Check-in System",
        description: "Automated weekly check-ins with progress tracking and encouragement",
        tools: ["Typeform", "Slack", "Google Sheets", "OpenAI"],
        complexity: "Advanced",
        timeToSetup: "5-6 hours",
        templateUrl: "https://n8n.io/workflows/3456-ai-powered-check-in-system",
        steps: [
          "Weekly check-in form automation",
          "Progress data analysis & insights",
          "Personalized encouragement messages",
          "Intervention trigger for low engagement",
          "Success celebration automation"
        ]
      },
      {
        name: "Community Engagement Engine",
        description: "Foster peer connections and group accountability",
        tools: ["Discord", "Circle", "Zapier", "Calendly"],
        complexity: "Beginner",
        timeToSetup: "3-4 hours",
        templateUrl: "https://zapier.com/apps/discord/integrations/circle",
        steps: [
          "New member welcome sequence",
          "Weekly challenge posting",
          "Peer matching system",
          "Group session coordination",
          "Achievement recognition automation"
        ]
      }
    ]
  }
];

const agenticTools = [
  {
    name: "n8n",
    description: "Self-hosted workflow automation with AI integration",
    pros: ["Free self-hosted option", "AI-powered nodes", "Custom code execution", "Advanced logic"],
    cons: ["Technical setup required", "Learning curve for non-developers"],
    bestFor: "Technical coaches wanting full control and AI integration",
    pricing: "Free (self-hosted) / $20/month (cloud)",
    templatesCount: "5,610+ workflows",
    url: "https://n8n.io/"
  },
  {
    name: "Zapier",
    description: "User-friendly automation platform with extensive app integrations",
    pros: ["Easy setup", "8,000+ app integrations", "AI-powered workflows", "Template library"],
    cons: ["Can get expensive", "Limited customization", "Task limits on lower plans"],
    bestFor: "Non-technical coaches wanting quick setup",
    pricing: "$29.99/month starter plan",
    templatesCount: "1,000+ coaching templates",
    url: "https://zapier.com/"
  },
  {
    name: "Make (Integromat)",
    description: "Visual workflow builder with powerful data manipulation",
    pros: ["Visual workflow designer", "Advanced data processing", "Competitive pricing", "Scenario templates"],
    cons: ["Steeper learning curve", "Complex for simple automations"],
    bestFor: "Coaches needing complex data workflows",
    pricing: "$9/month for 1,000 operations",
    templatesCount: "2,000+ templates",
    url: "https://www.make.com/"
  }
];

const quickStartGuides = [
  {
    title: "30-Minute Setup: Lead Capture to Calendar",
    description: "Get your first automation running in 30 minutes",
    tools: ["Calendly", "Zapier", "Gmail"],
    outcome: "Automatic lead follow-up and booking",
    difficulty: "Beginner",
    templateUrl: "https://zapier.com/shared/calendly-gmail-automation"
  },
  {
    title: "1-Hour Setup: Complete Client Onboarding",
    description: "Full onboarding sequence with document collection",
    tools: ["Typeform", "Notion", "Slack", "Stripe"],
    outcome: "Hands-free client onboarding experience",
    difficulty: "Intermediate",
    templateUrl: "https://n8n.io/workflows/client-onboarding-complete"
  },
  {
    title: "2-Hour Setup: AI-Powered Session Management",
    description: "Smart session scheduling with AI insights",
    tools: ["Calendly", "OpenAI", "Notion", "Loom"],
    outcome: "Intelligent session prep and follow-up",
    difficulty: "Advanced",
    templateUrl: "https://n8n.io/workflows/ai-session-management"
  }
];

export default function WorkflowsPage() {
  return (
    <main className="pb-24">
      <section className="container-px mx-auto max-w-6xl pt-16">
        <Surface tone="highlight" className="p-8 sm:p-10">
          <SectionHeading
            eyebrow="Coaching Business Workflows"
            title="Automate your practice, amplify your impact"
            description="Transform your coaching business with proven workflows, automation templates, and AI-powered tools. Focus on transformation while technology handles the operations."
            actions={[
              { href: "#quick-start", label: "Quick Start Guides" },
              { href: "#workflows", label: "Browse Workflows" },
              { href: "#tools", label: "Compare Tools" }
            ]}
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6">
              <div className="flex items-center gap-3 text-emerald-300 font-semibold">
                <Zap className="h-5 w-5" />
                Time Saved
              </div>
              <div className="mt-2 text-2xl font-bold text-white">15+ hrs/week</div>
              <div className="mt-1 text-sm text-emerald-200">Average time saved with full automation</div>
            </div>

            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">
              <div className="flex items-center gap-3 text-blue-300 font-semibold">
                <Target className="h-5 w-5" />
                Client Retention
              </div>
              <div className="mt-2 text-2xl font-bold text-white">+40%</div>
              <div className="mt-1 text-sm text-blue-200">Improvement with automated engagement</div>
            </div>

            <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-6">
              <div className="flex items-center gap-3 text-purple-300 font-semibold">
                <Bot className="h-5 w-5" />
                Revenue Growth
              </div>
              <div className="mt-2 text-2xl font-bold text-white">2.5x</div>
              <div className="mt-1 text-sm text-purple-200">Average revenue increase with workflows</div>
            </div>
          </div>
        </Surface>
      </section>

      <section id="quick-start" className="container-px mx-auto max-w-6xl mt-16">
        <Surface tone="default">
          <SectionHeading
            eyebrow="Quick Start"
            title="Get your first automation running today"
            description="Start with these proven templates that take 30 minutes to 2 hours to implement. Each includes step-by-step setup guides and template links."
          />

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {quickStartGuides.map((guide) => (
              <div key={guide.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between mb-4">
                  <Pill tone={guide.difficulty === "Beginner" ? "success" : guide.difficulty === "Intermediate" ? "warning" : "default"}>
                    {guide.difficulty}
                  </Pill>
                  <span className="text-xs text-neutral-400">{guide.title.split(":")[0]}</span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {guide.title.split(": ")[1]}
                </h3>
                <p className="text-sm text-neutral-300 mb-4">{guide.description}</p>

                <div className="mb-4">
                  <div className="text-xs text-neutral-400 mb-2">Tools needed:</div>
                  <div className="flex flex-wrap gap-1">
                    {guide.tools.map((tool) => (
                      <span key={tool} className="text-xs bg-white/10 px-2 py-1 rounded text-neutral-300">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-3 mb-4">
                  <div className="text-xs text-neutral-400 mb-1">Outcome:</div>
                  <div className="text-sm text-white">{guide.outcome}</div>
                </div>

                <a
                  href={guide.templateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center rounded-lg bg-brand-600 hover:bg-brand-700 px-4 py-2 text-sm font-medium text-white transition"
                >
                  Get Template <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </Surface>
      </section>

      <section id="workflows" className="container-px mx-auto max-w-6xl mt-16">
        <Surface tone="default">
          <SectionHeading
            eyebrow="Workflow Library"
            title="Complete business automation blueprints"
            description="Comprehensive workflows for every aspect of your coaching business. Each includes templates, tool recommendations, and step-by-step implementation guides."
          />

          <div className="mt-6 space-y-8">
            {workflowCategories.map((category) => (
              <div key={category.id} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`rounded-xl bg-${category.color}-500/20 p-3 text-${category.color}-300`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    <p className="text-neutral-300">{category.description}</p>
                  </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  {category.workflows.map((workflow) => (
                    <div key={workflow.name} className="rounded-xl border border-white/10 bg-white/5 p-5">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-white">{workflow.name}</h4>
                        <div className="flex gap-2">
                          <Pill tone={
                            workflow.complexity === "Beginner" ? "success" :
                            workflow.complexity === "Intermediate" ? "warning" : "default"
                          }>
                            {workflow.complexity}
                          </Pill>
                        </div>
                      </div>

                      <p className="text-sm text-neutral-300 mb-4">{workflow.description}</p>

                      <div className="mb-4">
                        <div className="text-xs text-neutral-400 mb-2">Setup Time: {workflow.timeToSetup}</div>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {workflow.tools.map((tool) => (
                            <span key={tool} className="text-xs bg-white/10 px-2 py-1 rounded text-neutral-300">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-xs text-neutral-400 mb-2">Implementation Steps:</div>
                        <ol className="list-decimal list-inside space-y-1 text-xs text-neutral-300">
                          {workflow.steps.map((step, index) => (
                            <li key={index}>{step}</li>
                          ))}
                        </ol>
                      </div>

                      <a
                        href={workflow.templateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 w-full justify-center rounded-lg bg-white/10 hover:bg-white/20 px-4 py-2 text-sm font-medium text-white transition"
                      >
                        View Template <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Surface>
      </section>

      <section id="tools" className="container-px mx-auto max-w-6xl mt-16">
        <Surface tone="default">
          <SectionHeading
            eyebrow="Automation Platforms"
            title="Choose the right tool for your needs"
            description="Compare the leading automation platforms for coaching businesses. Each has strengths depending on your technical comfort and specific requirements."
          />

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {agenticTools.map((tool) => (
              <div key={tool.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
                  <Workflow className="h-5 w-5 text-brand-300" />
                </div>

                <p className="text-sm text-neutral-300 mb-4">{tool.description}</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-xs text-emerald-400 mb-1">Pros:</div>
                    <ul className="list-disc list-inside space-y-1 text-xs text-neutral-300">
                      {tool.pros.map((pro, index) => (
                        <li key={index}>{pro}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="text-xs text-red-400 mb-1">Cons:</div>
                    <ul className="list-disc list-inside space-y-1 text-xs text-neutral-300">
                      {tool.cons.map((con, index) => (
                        <li key={index}>{con}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-lg p-3 space-y-2">
                    <div>
                      <span className="text-xs text-neutral-400">Best for: </span>
                      <span className="text-xs text-white">{tool.bestFor}</span>
                    </div>
                    <div>
                      <span className="text-xs text-neutral-400">Pricing: </span>
                      <span className="text-xs text-white">{tool.pricing}</span>
                    </div>
                    <div>
                      <span className="text-xs text-neutral-400">Templates: </span>
                      <span className="text-xs text-white">{tool.templatesCount}</span>
                    </div>
                  </div>
                </div>

                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center rounded-lg bg-brand-600 hover:bg-brand-700 px-4 py-2 text-sm font-medium text-white transition"
                >
                  Explore {tool.name} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </Surface>
      </section>

      <section className="container-px mx-auto max-w-6xl mt-16">
        <Surface tone="highlight">
          <SectionHeading
            eyebrow="Ready to Automate?"
            title="Start building your workflow stack"
            description="Join thousands of coaches who've transformed their practice with automation. Get personalized recommendations and implementation support."
          />

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link
              href="/app/get-started"
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10 text-center"
            >
              <Calendar className="h-8 w-8 text-brand-300 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Book Strategy Call</h3>
              <p className="text-sm text-neutral-300">Get personalized workflow recommendations</p>
            </Link>

            <Link
              href="/hub"
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10 text-center"
            >
              <Bot className="h-8 w-8 text-brand-300 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Join Coach Hub</h3>
              <p className="text-sm text-neutral-300">Connect with automation experts</p>
            </Link>

            <a
              href="https://github.com/frankxai/trinityaicoaching"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10 text-center"
            >
              <FileText className="h-8 w-8 text-brand-300 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Implementation Guide</h3>
              <p className="text-sm text-neutral-300">Detailed setup documentation</p>
            </a>
          </div>
        </Surface>
      </section>
    </main>
  );
}