// High level schema + data for TrinityAI Coaching portal experiences.
// Used across dashboard, directories, hub, and docs to keep language consistent.

export type Archetype = "Body" | "Mind" | "Soul" | "Integrative" | "Operations";

export type AvatarPersona = {
  id: string;
  name: string;
  archetype: Archetype;
  mood: string;
  tagline: string;
  focusAreas: string[];
  aiStack: string[];
  voiceStyle: string;
  signatureMoves: string[];
  activeExperiments: string[];
};

export const avatarPersonas: AvatarPersona[] = [
  {
    id: "trinity-prime",
    name: "Trinity Prime",
    archetype: "Integrative",
    mood: "Warm strategist",
    tagline: "Orchestrates the whole journey with calm precision.",
    focusAreas: ["Ritual design", "Weekly alignment", "Brotherhood accountability"],
    aiStack: ["GPT-4o orchestration", "Slack realtime", "Notion knowledgebase"],
    voiceStyle: "Grounded mentor with firm optimism.",
    signatureMoves: [
      "Runs the Victory Protocol daily reset.",
      "Routes clients to the right avatar based on energy scan.",
      "Summons breath + focus sequences before big commitments."
    ],
    activeExperiments: [
      "Adaptive motivational tone using wearable biometrics.",
      "Tokenized streak rewards tied to Brotherhood tiers."
    ]
  },
  {
    id: "trinity-athlete",
    name: "Trinity Athlete",
    archetype: "Body",
    mood: "Explosive hype coach",
    tagline: "Demands embodied action and disciplined recovery.",
    focusAreas: ["Strength cycles", "Zone 2 conditioning", "Breath + cold exposure"],
    aiStack: ["HeyGen motion capture", "TrueCoach API", "Whoop metrics"],
    voiceStyle: "Direct fire with locker-room energy.",
    signatureMoves: [
      "Turns biometrics into 24h game plans.",
      "Delivers post-lift visualization scripts.",
      "Auto-adjusts training loads with injury guardrails."
    ],
    activeExperiments: [
      "Suno generated hype tracks keyed to workout tempo.",
      "Computer vision form checks via webcam pulses."
    ]
  },
  {
    id: "trinity-sage",
    name: "Trinity Sage",
    archetype: "Soul",
    mood: "Quiet mystic",
    tagline: "Anchors clients in meaning, numerology, and cosmology.",
    focusAreas: ["Numerology decoding", "Dream + shadow work", "Breath-led meditations"],
    aiStack: ["ElevenLabs storytelling", "Astrology APIs", "Custom ritual graph"],
    voiceStyle: "Slow cadence, poetic, ceremonial.",
    signatureMoves: [
      "Guides lunar cycle ceremonies.",
      "Maps decisions to destiny charts.",
      "Issues Brotherhood Honors after spiritual thresholds."
    ],
    activeExperiments: [
      "Token-gated mystery school micro-courses.",
      "Haptic breath guidance through AR glasses."
    ]
  },
  {
    id: "trinity-tactician",
    name: "Trinity Tactician",
    archetype: "Mind",
    mood: "Sharp operator",
    tagline: "Systems thinker that eradicates friction and builds leverage.",
    focusAreas: ["Deep work architecture", "Offer design", "Automation sprints"],
    aiStack: ["Linear API", "Zapier AI actions", "Claude code interpreter"],
    voiceStyle: "Concise strategist with data receipts.",
    signatureMoves: [
      "Runs weekly leverage heatmaps across projects.",
      "Spins up AI agent pods for repetitive ops.",
      "Designs 30-60-90 game plans for business arenas."
    ],
    activeExperiments: [
      "Tokenized bounty board for Brotherhood builds.",
      "Sales call debrief loops with real-time objection tagging."
    ]
  },
  {
    id: "trinity-guardian",
    name: "Trinity Guardian",
    archetype: "Operations",
    mood: "Calm sentinel",
    tagline: "Keeps integrity, compliance, and trust across the ecosystem.",
    focusAreas: ["Safety protocols", "Data stewardship", "Token economics"],
    aiStack: ["Ledger integrations", "OpenZeppelin Defender", "Trust layer AI"],
    voiceStyle: "Measured, transparent, detail-rich.",
    signatureMoves: [
      "Audits coach claims versus biometric truth.",
      "Publishes transparency dashboards for the Brotherhood.",
      "Escalates red flags directly to founders."
    ],
    activeExperiments: [
      "Soulbound credential ledger for graduates.",
      "Incentive curves that reward long-term adherence."
    ]
  }
];

export type LearningModule = {
  id: string;
  track: Archetype;
  title: string;
  outcome: string;
  duration: string;
  format: "Live" | "Self-paced" | "Hybrid";
  prerequisites: string[];
  rituals: string[];
  curriculum: string[];
  tools: string[];
  metrics: { northStar: string; leadIndicators: string[] };
};

export const learningModules: LearningModule[] = [
  {
    id: "body-foundation",
    track: "Body",
    title: "Embodied Strength Foundation",
    outcome: "Build resilient muscle, endurance, and recovery habits.",
    duration: "30 days",
    format: "Hybrid",
    prerequisites: ["Baseline intake", "Mobility assessment"],
    rituals: ["Victory Protocol AM", "Cold plunge cadence", "Nightly fascia reset"],
    curriculum: [
      "Phase 1: Nervous system priming & breathwork",
      "Phase 2: Foundational compound cycle",
      "Phase 3: Regeneration & sleep optimization",
      "Phase 4: Performance retest + Brotherhood honors"
    ],
    tools: ["Coach dashboard", "Wearable sync", "Movement library"],
    metrics: {
      northStar: "Power-to-weight readiness score ≥ 80",
      leadIndicators: ["Strength adherence", "Sleep quality", "HRV trend"]
    }
  },
  {
    id: "mind-ops",
    track: "Mind",
    title: "Leverage Operations Sprint",
    outcome: "Automate workflows and reclaim 10 hours/week of focus.",
    duration: "21 days",
    format: "Self-paced",
    prerequisites: ["Deep work baseline", "Tool stack audit"],
    rituals: ["Daily leverage standup", "Weekly friction audit"],
    curriculum: [
      "Phase 1: Systems triage & backlog purge",
      "Phase 2: AI pod deployment",
      "Phase 3: Offer optimization",
      "Phase 4: Focus block mastery"
    ],
    tools: ["Automation board", "Agent library", "Meeting transcriber"],
    metrics: {
      northStar: "Leverage index +30%",
      leadIndicators: ["Hours saved", "Tasks auto-resolved", "Offer conversion"]
    }
  },
  {
    id: "soul-ascension",
    track: "Soul",
    title: "Soul Alignment Ascension",
    outcome: "Integrate identity, values, and sacred rituals into daily life.",
    duration: "6 weeks",
    format: "Live",
    prerequisites: ["Soul numerology reading"],
    rituals: ["Brotherhood fire call", "Shadow journal cadence", "Numerology check-ins"],
    curriculum: [
      "Week 1: Myth + Origin story mapping",
      "Week 2: Shadow transmutation practice",
      "Week 3: Cosmic blueprint alignment",
      "Week 4: Service design & community impact",
      "Week 5: Embodied ceremony",
      "Week 6: Integration + honors"
    ],
    tools: ["Ceremony scripts", "Voice-guided meditations", "Token-gated circles"],
    metrics: {
      northStar: "Soul coherence score ≥ 90",
      leadIndicators: ["Ritual consistency", "Brotherhood contributions", "Sentiment"]
    }
  },
  {
    id: "integrative-master",
    track: "Integrative",
    title: "Triad Mastery Intensive",
    outcome: "Synchronize body, mind, and soul into a single operating system.",
    duration: "90 days",
    format: "Hybrid",
    prerequisites: ["Completion of two core modules", "Coach referral"],
    rituals: ["Weekly triad review", "Tri-channel accountability"],
    curriculum: [
      "Phase 0: Intake + wearable calibration",
      "Phase 1: Triad sprint cycles",
      "Phase 2: Brotherhood leadership project",
      "Phase 3: Tokenized graduation summit"
    ],
    tools: ["Unified dashboard", "Agent orchestrator", "Token vault"],
    metrics: {
      northStar: "Momentum score ≥ 85 with zero red weeks",
      leadIndicators: ["Module completion", "Coach feedback", "Token rewards"]
    }
  }
];

export type ToolIntegration = {
  id: string;
  title: string;
  category: "Creation" | "Automation" | "Biometrics" | "Community" | "Finance";
  description: string;
  actions: string[];
  dependencies: string[];
  surfacedIn: string[];
};

export const toolIntegrations: ToolIntegration[] = [
  {
    id: "suno",
    title: "Suno",
    category: "Creation",
    description: "Generates soundscapes, chants, and hype music for rituals and workouts.",
    actions: ["Generate track", "Tag to ritual", "Push to playlist"],
    dependencies: ["Spotify API", "Brotherhood library"],
    surfacedIn: ["Dashboard rituals", "Hub library", "Avatar workflows"]
  },
  {
    id: "heygen",
    title: "HeyGen",
    category: "Creation",
    description: "Produces avatar-led video briefings and course lessons on demand.",
    actions: ["Scripting", "Avatar render", "Course module publish"],
    dependencies: ["Script AI", "Video storage"],
    surfacedIn: ["Module builder", "Coach directory"]
  },
  {
    id: "elevenlabs",
    title: "ElevenLabs",
    category: "Creation",
    description: "Delivers cinematic voice notes and meditations in each avatar’s tone.",
    actions: ["Voiceover", "Audio reply", "Meditation stream"],
    dependencies: ["Coach prompts", "Audio library"],
    surfacedIn: ["Coach chat", "Journal playback"]
  },
  {
    id: "notion",
    title: "Notion",
    category: "Automation",
    description: "Knowledge graph for methods, protocols, and SOPs.",
    actions: ["Sync doc", "Assign ritual", "Embed inside module"],
    dependencies: ["Graph API"],
    surfacedIn: ["Docs", "Hub", "Operations console"]
  },
  {
    id: "ledger",
    title: "Ledger + Tokens",
    category: "Finance",
    description: "Tracks contribution, mints Brotherhood rewards, and powers token gating.",
    actions: ["Mint reward", "Stake pledge", "View wallet"],
    dependencies: ["Polygon zkEVM", "Soulbound registry"],
    surfacedIn: ["Dashboard treasury", "Community portal"]
  }
];

export type ContributionProgram = {
  id: string;
  title: string;
  summary: string;
  reward: string;
  proof: string[];
  owner: string;
};

export const contributionPrograms: ContributionProgram[] = [
  {
    id: "build-agent-modules",
    title: "Agent Module Architect",
    summary: "Design and ship AI agent modules that automate client onboarding workflows.",
    reward: "400 Trinity tokens + Brotherhood Honors patch",
    proof: ["Repo PR merged", "Agent QA video", "Client result testimonial"],
    owner: "Trinity Tactician"
  },
  {
    id: "brotherhood-rituals",
    title: "Brotherhood Ritual Keeper",
    summary: "Host weekly fire calls and capture highlights into the community library.",
    reward: "250 Trinity tokens + ritual keeper badge",
    proof: ["Call recording", "Ritual recap", "Attendance streak"],
    owner: "Trinity Sage"
  },
  {
    id: "biometric-ops",
    title: "Biometric Ops Sentinel",
    summary: "Integrate wearable data streams and monitor for accountability flags.",
    reward: "300 Trinity tokens + operations honor",
    proof: ["Alert playbook", "Dashboard update", "Integrity report"],
    owner: "Trinity Guardian"
  }
];

export type MomentumMetric = {
  id: string;
  title: string;
  description: string;
  cadence: "Daily" | "Weekly" | "Monthly";
  inputs: string[];
  displayedIn: string[];
};

export const momentumMetrics: MomentumMetric[] = [
  {
    id: "momentum-score",
    title: "Momentum Score",
    description: "Composite view of adherence, sentiment, and biometrics.",
    cadence: "Daily",
    inputs: ["Check-in completion", "HRV", "Coach feedback"],
    displayedIn: ["Dashboard", "Coach console", "Brotherhood leaderboard"]
  },
  {
    id: "soul-coherence",
    title: "Soul Coherence",
    description: "Measures alignment between values, rituals, and actions.",
    cadence: "Weekly",
    inputs: ["Ritual streak", "Journal resonance", "Community impact"],
    displayedIn: ["Soul module", "Community portal"]
  },
  {
    id: "leverage-index",
    title: "Leverage Index",
    description: "Tracks reclaimed time via automations and focus routines.",
    cadence: "Weekly",
    inputs: ["Automations launched", "Deep work hours", "Delegated tasks"],
    displayedIn: ["Mind module", "Operations console"]
  }
];

export type PlatformSurface = {
  id: string;
  title: string;
  purpose: string;
  primaryAudience: string[];
  heroActions: string[];
  connectedData: string[];
};

export const platformSurfaces: PlatformSurface[] = [
  {
    id: "dashboard",
    title: "Coach Dashboard",
    purpose: "Anchor each brother’s daily actions and reflection.",
    primaryAudience: ["Clients", "Coaches"],
    heroActions: [
      "Start check-in",
      "Review avatar brief",
      "Claim Brotherhood reward"
    ],
    connectedData: ["momentum-score", "contribution-programs", "tool-integrations"]
  },
  {
    id: "coach-directory",
    title: "Coach & Avatar Directory",
    purpose: "Surface the right human + AI blend for the moment.",
    primaryAudience: ["Clients", "Ops"],
    heroActions: [
      "Book discovery",
      "Assign avatar",
      "View transparency ledger"
    ],
    connectedData: ["avatarPersonas", "learningModules", "momentum-metrics"]
  },
  {
    id: "brotherhood-portal",
    title: "Brotherhood Portal",
    purpose: "Reward contribution, organize missions, and protect integrity.",
    primaryAudience: ["Community", "Founding team"],
    heroActions: [
      "Launch mission",
      "Mint honor",
      "Review on-chain impact"
    ],
    connectedData: ["contribution-programs", "momentum-metrics", "tool-integrations"]
  }
];

export type DashboardCard = {
  id: string;
  label: string;
  description: string;
  actions: string[];
  relatedTo: ("Body" | "Mind" | "Soul" | "Ops")[];
};

export const dashboardCards: DashboardCard[] = [
  {
    id: "triad-checkin",
    label: "Triad Check-in",
    description: "Guided daily ritual that syncs mood, energy, and focus.",
    actions: ["Open check-in", "Record reflection", "Send to coach"],
    relatedTo: ["Body", "Mind", "Soul"]
  },
  {
    id: "avatar-brief",
    label: "Avatar Brief",
    description: "Latest updates from assigned avatars with tactical and spiritual guidance.",
    actions: ["Review video", "Download playbook", "Request adjustment"],
    relatedTo: ["Mind", "Soul", "Ops"]
  },
  {
    id: "brotherhood-feed",
    label: "Brotherhood Feed",
    description: "Live stream of wins, honors, and missions from the community.",
    actions: ["Post win", "Send honor", "Join mission"],
    relatedTo: ["Soul", "Ops"]
  },
  {
    id: "token-treasury",
    label: "Token Treasury",
    description: "Track contributions, redemption opportunities, and staking.",
    actions: ["Stake tokens", "Redeem offer", "View ledger"],
    relatedTo: ["Ops"]
  }
];

export type JourneyMilestone = {
  id: string;
  title: string;
  description: string;
  signals: string[];
  celebrants: string[];
};

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: "initiation",
    title: "Initiation", 
    description: "Brother completes intake, avatar matching, and first ritual.",
    signals: ["Intake complete", "Avatar assigned", "First check-in"],
    celebrants: ["Trinity Prime", "Brotherhood circle"]
  },
  {
    id: "ascension",
    title: "Ascension",
    description: "Momentum score stays green for 4 consecutive weeks.",
    signals: ["Momentum >= 80", "Token honors minted"],
    celebrants: ["Trinity Sage", "Community guardian"]
  },
  {
    id: "integration",
    title: "Integration",
    description: "Triad Mastery Intensive graduate leads a cohort mission.",
    signals: ["Capstone shipped", "Brotherhood votes"],
    celebrants: ["Trinity Guardian", "Founders"]
  }
];

export type AutomationPlaybook = {
  id: string;
  title: string;
  problem: string;
  flow: string[];
  ownerAvatar: string;
  tools: string[];
};

export const automationPlaybooks: AutomationPlaybook[] = [
  {
    id: "content-orchestration",
    title: "Content Orchestration",
    problem: "Manual content repurposing across social platforms.",
    flow: [
      "Draft longform thesis inside Notion",
      "Claude condenses into beat sheet",
      "HeyGen avatar records vertical video",
      "Zapier syndicates to channels with context"
    ],
    ownerAvatar: "Trinity Tactician",
    tools: ["Notion", "Claude", "HeyGen", "Zapier"]
  },
  {
    id: "client-onboarding",
    title: "Client Onboarding",
    problem: "Slow intake and manual data entry for new brothers.",
    flow: [
      "Landing page funnels to intake agent",
      "Agent populates CRM + token wallet",
      "Trinity Prime reviews baseline dashboard",
      "Welcome ritual scheduled automatically"
    ],
    ownerAvatar: "Trinity Guardian",
    tools: ["Typeform", "HubSpot", "Ledger"]
  },
  {
    id: "ritual-reminders",
    title: "Ritual Reminders",
    problem: "Inconsistent follow through on soul rituals.",
    flow: [
      "Wearable detects stress spike",
      "Jarvis assistant nudges breath sequence",
      "Suno track plays + ElevenLabs narration",
      "Check-in auto-updates streak"
    ],
    ownerAvatar: "Trinity Sage",
    tools: ["Whoop", "Custom Jarvis", "Suno", "ElevenLabs"]
  }
];

export type SurfaceId = (typeof platformSurfaces)[number]["id"];

export const PORTAL_DATA_EXPORTS = {
  avatarPersonas,
  learningModules,
  toolIntegrations,
  contributionPrograms,
  momentumMetrics,
  platformSurfaces,
  dashboardCards,
  journeyMilestones,
  automationPlaybooks
};
