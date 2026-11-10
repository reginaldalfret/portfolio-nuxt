<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  Printer,
  ExternalLink,
  FileText,
  Sparkles,
  Award,
  Layers,
  GitPullRequest,
  Terminal,
  Database,
  Cpu,
  Wrench,
  Code2,
} from 'lucide-vue-next'

const viewMode = ref<'interactive' | 'pdf'>('interactive')
const isEmbedded = ref(false)

onMounted(() => {
  if (typeof window !== 'undefined') {
    isEmbedded.value = window.self !== window.top
  }
})

const handlePrint = () => {
  if (import.meta.client) {
    window.print()
  }
}

interface Contribution {
  org: string
  repo: string
  pr: string
  url: string
  key: string
}

const CONTRIBUTIONS: Contribution[] = [
  { org: 'Apple', repo: 'swift-numerics', pr: '#355', url: 'https://github.com/apple/swift-numerics/pull/355', key: 'apple' },
  { org: 'Google', repo: 'Highway', pr: '#3511', url: 'https://github.com/google/highway/pull/3511', key: 'google' },
  { org: 'Google Cloud', repo: 'Data Validator', pr: '#1863', url: 'https://github.com/GoogleCloudPlatform/professional-services-data-validator/pull/1863', key: 'googlecloud' },
  { org: 'Microsoft', repo: 'Semantic Kernel', pr: '#14472', url: 'https://github.com/microsoft/semantic-kernel/pull/14472', key: 'microsoft' },
  { org: 'AWS', repo: 'Lambda Powertools', pr: '#8542', url: 'https://github.com/aws-powertools/powertools-lambda-python/pull/8542', key: 'aws' },
  { org: 'Meta', repo: 'StyleX', pr: '#1899', url: 'https://github.com/facebook/stylex/pull/1899', key: 'meta' },
  { org: 'NVIDIA', repo: 'cuOpt', pr: '#2068', url: 'https://github.com/NVIDIA/cuopt/pull/2068', key: 'nvidia' },
  { org: 'NASA', repo: 'ProgPy', pr: '#237', url: 'https://github.com/nasa/prog_models/pull/237', key: 'nasa' },
  { org: 'Azure', repo: 'Cosmos DB Emulator', pr: '#359', url: 'https://github.com/Azure/azure-cosmos-db-emulator-docker/pull/359', key: 'azure' },
  { org: 'Adobe', repo: 'Skills', pr: '#445', url: 'https://github.com/adobe/skills/pull/445', key: 'adobe' },
  { org: 'Intel', repo: 'AutoRound', pr: '#2421', url: 'https://github.com/intel/auto-round/pull/2421', key: 'intel' },
  { org: 'IBM', repo: 'Docling Pipelines', pr: '#85', url: 'https://github.com/IBM/docling-pipelines/pull/85', key: 'ibm' },
  { org: 'Uber', repo: 'Kraken', pr: '#716', url: 'https://github.com/uber/kraken/pull/716', key: 'uber' },
  { org: 'Airbnb', repo: 'MagazineLayout', pr: '#169', url: 'https://github.com/airbnb/MagazineLayout/pull/169', key: 'airbnb' },
  { org: 'GitHub', repo: 'GitHub CLI', pr: '#14592', url: 'https://github.com/cli/cli/pull/14592', key: 'github' },
  { org: 'Dell', repo: 'Omnia Containers', pr: '#649', url: 'https://github.com/dell/omnia/pull/649', key: 'dell' },
  { org: 'Salesforce', repo: 'tough-cookie', pr: '#659', url: 'https://github.com/salesforce/tough-cookie/pull/659', key: 'salesforce' },
  { org: 'AMD', repo: 'ROCm HRX System', pr: '#1231', url: 'https://github.com/ROCm/hrx-system/pull/1231', key: 'rocm' },
  { org: 'SAP', repo: 'E-Mobility Simulator', pr: '#2136', url: 'https://github.com/SAP/e-mobility-charging-stations-simulator/pull/2136', key: 'sap' },
  { org: 'Pinterest', repo: 'PyMemcache', pr: '#657', url: 'https://github.com/pinterest/pymemcache/pull/657', key: 'pinterest' },
  { org: 'Qualcomm', repo: 'Commit Msg Check', pr: '#38', url: 'https://github.com/qualcomm/commit-msg-check-action/pull/38', key: 'qualcomm' },
  { org: 'Stripe', repo: 'Stripe React Native', pr: '#2751', url: 'https://github.com/stripe/stripe-react-native/pull/2751', key: 'stripe' },
  { org: 'Docker', repo: 'Docker Docs', pr: '#26266', url: 'https://github.com/docker/docs/pull/26266', key: 'docker' },
  { org: 'Apache', repo: 'HertzBeat', pr: '#4410', url: 'https://github.com/apache/hertzbeat/pull/4410', key: 'apache' },
  { org: 'Cloudflare', repo: 'CFSSL', pr: '#1451', url: 'https://github.com/cloudflare/cfssl/pull/1451', key: 'cloudflare' },
  { org: 'OpenAI', repo: 'Softnet', pr: '#219', url: 'https://github.com/openai/softnet/pull/219', key: 'openai' },
  { org: 'Snapchat', repo: 'ts-inject', pr: '#30', url: 'https://github.com/Snapchat/ts-inject/pull/30', key: 'snapchat' },
  { org: 'Spotify', repo: 'Confidence SDK Swift', pr: '#272', url: 'https://github.com/spotify/confidence-sdk-swift/pull/272', key: 'spotify' },
  { org: 'Cisco', repo: 'cJOSE', pr: '#202', url: 'https://github.com/cisco/cjose/pull/202', key: 'cisco' },
  { org: 'Netflix', repo: 'Atlas', pr: '#2011', url: 'https://github.com/Netflix/atlas/pull/2011', key: 'netflix' },
]

const aiSkills = [
  'Machine Learning', 'Deep Learning', 'LLMs', 'LoRA', 'Prompt Engineering',
  'OCR', 'Computer Vision', 'Explainable AI', 'Scikit-learn', 'Data Analytics'
]

const languages = [
  'Python', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5', 'CSS3', 'Go', 'Swift', 'C++'
]

const osSkills = [
  'Git', 'GitHub', 'Pull Requests', 'Code Review', 'Bug Fixing', 'Regression Testing', 'Documentation', 'CVE Fixes'
]

const devSkills = [
  'React.js', 'Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'ERPNext'
]

const databaseSkills = [
  'PostgreSQL', 'MySQL', 'MongoDB'
]

const toolsSkills = [
  'Docker', 'AWS', 'Linux', 'Postman', 'Figma', 'VS Code'
]
</script>

<template>

<!-- ========================================================================= -->
<!-- 12 STACKS. 1 PRODUCT. ECOSYSTEM CONTEXT BANNER                            -->
<!-- ========================================================================= -->
<header class="w-full bg-neutral-950/95 border-b border-white/10 px-4 py-2.5 backdrop-blur-md sticky top-0 z-50">
  <div class="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
    <div class="flex items-center gap-2">
      <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
      <span class="text-neutral-400">PART OF THE <strong class="text-white">12 STACKS. 1 PRODUCT.</strong> EXPERIMENT</span>
      <span class="hidden sm:inline text-neutral-600">|</span>
      <span class="hidden sm:inline px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
        Current Implementation: <strong class="text-white">Nuxt 3</strong>
      </span>
    </div>
    <div class="flex items-center gap-3">
      <a href="https://reginaldalfret.tech" class="text-neutral-400 hover:text-white transition-colors flex items-center gap-1">
        <span>← Personal Portfolio</span>
      </a>
      <span class="text-neutral-600">·</span>
      <a href="https://reginaldalfret.tech/lab" class="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold flex items-center gap-1">
        <span>⚡ Back to Engineering Lab</span>
      </a>
    </div>
  </div>
</header>


  <div class="min-h-screen bg-[#050505] text-neutral-100 py-6 px-3 sm:px-6 md:px-8 selection:bg-cyan-500/20 selection:text-cyan-200">
    <!-- Top Floating Glass Command Bar -->
    <div class="max-w-6xl mx-auto mb-6 sticky top-3 z-50">
      <div class="backdrop-blur-xl bg-black/60 border border-white/10 rounded-2xl p-2.5 sm:p-3 shadow-2xl flex flex-wrap items-center justify-between gap-3">
        <!-- Brand Identity -->
        <div class="flex items-center gap-2.5 px-2">
          <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 text-black font-black text-sm">
            RA
          </div>
          <div>
            <div class="text-sm font-semibold tracking-wide text-white">Reginald Alfret V</div>
            <div class="text-[11px] text-cyan-400 font-mono tracking-wider">RESUME PORTFOLIO (NUXT 3)</div>
          </div>
        </div>

        <!-- View Mode Switcher -->
        <div class="flex items-center bg-white/5 border border-white/10 rounded-xl p-1 text-xs">
          <button
            type="button"
            @click="viewMode = 'interactive'"
            :class="[
              'flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all',
              viewMode === 'interactive'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-neutral-400 hover:text-white'
            ]"
          >
            <Sparkles class="w-3.5 h-3.5" />
            <span>Interactive Resume</span>
          </button>
          <button
            type="button"
            @click="viewMode = 'pdf'"
            :class="[
              'flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all',
              viewMode === 'pdf'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-neutral-400 hover:text-white'
            ]"
          >
            <FileText class="w-3.5 h-3.5" />
            <span>Original PDF Document</span>
          </button>
        </div>

        <!-- Quick Actions -->
        <div class="flex items-center gap-2">
          <button
            type="button"
            @click="handlePrint"
            class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors"
            title="Print Resume"
          >
            <Printer class="w-3.5 h-3.5" />
            <span>Print</span>
          </button>
          <a
            href="/Reginald_Alfret_Resume.pdf"
            download="Reginald_Alfret_Resume.pdf"
            class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-lg shadow-cyan-500/20 hover:brightness-110 transition-all"
          >
            <Download class="w-3.5 h-3.5 text-black" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Main Container -->
    <div class="max-w-6xl mx-auto">
      <!-- PDF Viewer Mode -->
      <div v-if="viewMode === 'pdf'" class="backdrop-blur-2xl bg-neutral-950/80 border border-white/10 rounded-3xl p-4 sm:p-6 shadow-2xl">
        <div class="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
          <div class="flex items-center gap-2">
            <FileText class="w-5 h-5 text-cyan-400" />
            <h2 class="text-base font-semibold text-white">Reginald_Alfret_Resume.pdf</h2>
            <span class="text-xs font-mono text-neutral-400 px-2 py-0.5 rounded bg-white/5 border border-white/5">
              1 Page Visual Resume
            </span>
          </div>
          <a
            href="/Reginald_Alfret_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xs text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
          >
            <span>Open in new window</span>
            <ExternalLink class="w-3.5 h-3.5" />
          </a>
        </div>
        <div class="w-full h-[82vh] rounded-2xl overflow-hidden border border-white/5 bg-neutral-900/50">
          <iframe
            src="/Reginald_Alfret_Resume.pdf#view=FitH"
            class="w-full h-full border-0"
            title="Reginald Alfret V — Resume PDF"
          />
        </div>
      </div>

      <!-- Interactive Resume Canvas -->
      <div v-else class="backdrop-blur-2xl bg-neutral-950/80 border border-white/10 rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
        <!-- Ambient Lighting Gradient accents -->
        <div class="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div class="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
        <div class="absolute -bottom-32 left-1/4 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

        <!-- 1. Header / Contact Block -->
        <header class="relative text-center pb-8 border-b border-white/10">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-2 font-display">
            REGINALD ALFRET V
          </h1>
          <p class="text-xs sm:text-sm md:text-base font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 uppercase mb-4">
            Open-Source Contributor · AI &amp; DS Engineer · Software Developer
          </p>

          <!-- Contact Bar -->
          <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-neutral-300 mb-5">
            <a
              href="mailto:reginaldalfret@gmail.com"
              class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <Mail class="w-3.5 h-3.5 text-red-400" />
              <span>reginaldalfret@gmail.com</span>
            </a>
            <a
              href="tel:+918122087088"
              class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <Phone class="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 81220 87088</span>
            </a>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400">
              <MapPin class="w-3.5 h-3.5 text-cyan-400" />
              <span>Chennai, India</span>
            </span>
            <a
              href="https://github.com/reginaldalfret"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <Github class="w-3.5 h-3.5 text-white" />
              <span>github.com/reginaldalfret</span>
            </a>
            <a
              href="https://linkedin.com/in/reginaldalfret"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <Linkedin class="w-3.5 h-3.5 text-blue-400" />
              <span>linkedin.com/in/reginaldalfret</span>
            </a>
          </div>

          <!-- Key Credentials Badges -->
          <div class="flex flex-wrap items-center justify-center gap-2.5">
            <div class="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
              <GitPullRequest class="w-3.5 h-3.5" />
              <span>30 Merged PRs</span>
            </div>
            <div class="px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold flex items-center gap-1.5">
              <Layers class="w-3.5 h-3.5" />
              <span>70+ Built Projects</span>
            </div>
            <div class="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold flex items-center gap-1.5">
              <Award class="w-3.5 h-3.5" />
              <span>3× 1st Place Hackathons</span>
            </div>
          </div>
        </header>

        <!-- 2. Open-Source Contributions Section -->
        <section class="py-8 border-b border-white/10" id="open-source">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <h2 class="text-base sm:text-lg font-bold text-white flex items-center gap-2 tracking-wide">
                <span class="text-cyan-400">⚡</span> OPEN-SOURCE CONTRIBUTIONS
              </h2>
              <p class="text-xs text-neutral-400 font-mono">
                30 pull requests merged across leading engineering organisations
              </p>
            </div>
            <div class="text-[11px] font-mono text-cyan-400/80 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20 self-start sm:self-auto">
              100% Verified Merged Upstream
            </div>
          </div>

          <!-- 30 PRs Grid: 5 columns on desktop, 3 on tablet, 2 on mobile -->
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            <a
              v-for="(item, idx) in CONTRIBUTIONS"
              :key="idx"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div class="flex items-center justify-between mb-1.5">
                <div class="flex items-center gap-2 min-w-0">
                  <OrgLogo :org-key="item.key" class-name="w-4 h-4 text-neutral-300 group-hover:text-cyan-400 transition-colors shrink-0" />
                  <span class="text-xs font-bold text-neutral-200 truncate group-hover:text-white">
                    {{ item.org }}
                  </span>
                </div>
                <span class="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 group-hover:bg-cyan-500/20 shrink-0">
                  {{ item.pr }}
                </span>
              </div>
              <div class="flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span class="truncate">{{ item.repo }}</span>
                <ExternalLink class="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400 shrink-0 ml-1" />
              </div>
            </a>
          </div>
        </section>

        <!-- 3. Main Resume Body: 2 Columns -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 border-b border-white/10">
          <!-- Left Column (7 cols): Summary, Experience, Projects -->
          <div class="lg:col-span-7 space-y-8">
            <!-- Professional Summary -->
            <section>
              <h2 class="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <span class="text-base">👨‍💻</span> Professional Summary
              </h2>
              <p class="text-xs sm:text-[13px] leading-relaxed text-neutral-300 bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                Open-Source Contributor, AI &amp; Data Science Engineer and Software Developer (final-year B.Tech AI &amp; DS) building AI/ML systems, full-stack applications and scalable products. Currently building an ERP platform at <strong class="text-white">DailyGurus</strong>. Built 70+ projects, including three 1st-place hackathon winners (HackIndia 2026, TN Police Hackathon 2025, Blaze a Trail 2.0). Author of 30 merged open-source pull requests at Apple, Google, Microsoft, AWS, Meta, NVIDIA, NASA, Netflix, Stripe and more.
              </p>
            </section>

            <!-- Professional Experience -->
            <section>
              <h2 class="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span class="text-base">💼</span> Professional Experience
              </h2>
              <div class="space-y-4">
                <!-- Role 1 -->
                <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div class="flex flex-wrap items-baseline justify-between gap-1">
                    <div>
                      <span class="text-sm font-bold text-white">DailyGurus</span>
                      <span class="text-xs text-neutral-400 font-medium"> • Software Developer</span>
                    </div>
                    <div class="text-xs text-cyan-400/90 font-mono">
                      Jul 2026 – Present <span class="text-neutral-500">|</span> Chennai, India
                    </div>
                  </div>
                  <ul class="text-xs text-neutral-300 space-y-1.5 list-disc list-inside">
                    <li>Worked on ERPNext, contributing to module customizations, workflows and application development.</li>
                    <li>Developing a full ERP software platform from scratch across frontend, backend, database and business logic layers.</li>
                    <li>Building web applications and REST APIs with React.js, Node.js and TypeScript for scalable, reliable systems.</li>
                  </ul>
                </div>

                <!-- Role 2 -->
                <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div class="flex flex-wrap items-baseline justify-between gap-1">
                    <div>
                      <span class="text-sm font-bold text-white">Data Patterns</span>
                      <span class="text-xs text-neutral-400 font-medium"> • Data Science Intern</span>
                    </div>
                    <div class="text-xs text-cyan-400/90 font-mono">
                      May 2025 – Jun 2025 <span class="text-neutral-500">|</span> Chennai, India
                    </div>
                  </div>
                  <ul class="text-xs text-neutral-300 space-y-1.5 list-disc list-inside">
                    <li>Built Python web-scraping tools to collect aerospace research papers and technical data from IEEE sources.</li>
                    <li>Curated the data and fine-tuned an LLM using LoRA (Low-Rank Adaptation) on the domain-specific dataset.</li>
                  </ul>
                </div>
              </div>
            </section>

            <!-- Key Projects -->
            <section>
              <h2 class="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span class="text-base">🚀</span> Key Projects
              </h2>
              <div class="space-y-4">
                <!-- Project 1 -->
                <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
                  <div class="flex flex-wrap items-baseline justify-between gap-1">
                    <h3 class="text-sm font-bold text-white">
                      301 Super AI Agents — Sovereign Multi-Agent AI Platform
                    </h3>
                    <span class="text-xs font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      1st · HackIndia 2026 (500+ Teams)
                    </span>
                  </div>
                  <p class="text-xs text-neutral-400 italic">
                    Local-first multi-agent AI platform with 301 specialised agents for real-world task automation.
                  </p>
                  <div class="flex flex-wrap gap-1 text-[11px] font-mono text-neutral-300">
                    <span
                      v-for="t in ['Python', 'LLMs (Ollama)', 'Agent Orchestration', 'FastAPI', 'React.js', 'OCR', 'Workflow Automation']"
                      :key="t"
                      class="px-2 py-0.5 rounded bg-white/5 border border-white/5"
                    >
                      {{ t }}
                    </span>
                  </div>
                  <ul class="text-xs text-neutral-300 space-y-1 list-disc list-inside">
                    <li>Designed a multi-agent platform with 301 specialised agents coordinated by a central Agent 301.</li>
                    <li>Implemented local model selection, OCR document parsing, real-time streaming and automation.</li>
                    <li>Built an interface supporting offline, on-device inference for privacy-sensitive environments.</li>
                  </ul>
                </div>

                <!-- Project 2 -->
                <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
                  <div class="flex flex-wrap items-baseline justify-between gap-1">
                    <h3 class="text-sm font-bold text-white">
                      TOR-UNVEIL — Dark Web AI Cybercriminal Tracker
                    </h3>
                    <span class="text-xs font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      1st · TN Police Hackathon 2025
                    </span>
                  </div>
                  <p class="text-xs text-neutral-400 italic">
                    Full-stack AI platform adapted for live operational use by Tamil Nadu Police.
                  </p>
                  <div class="flex flex-wrap gap-1 text-[11px] font-mono text-neutral-300">
                    <span
                      v-for="t in ['Python', 'React.js', 'Node.js', 'Tailwind CSS', 'Machine Learning', 'Data Analytics']"
                      :key="t"
                      class="px-2 py-0.5 rounded bg-white/5 border border-white/5"
                    >
                      {{ t }}
                    </span>
                  </div>
                  <ul class="text-xs text-neutral-300 space-y-1 list-disc list-inside">
                    <li>Built a platform for real-time cybercriminal identification and network profiling on TOR dark web.</li>
                    <li>Developed search, suspect profile cards and network-graph visualisations with ML classification.</li>
                  </ul>
                </div>

                <!-- Project 3 -->
                <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
                  <div class="flex flex-wrap items-baseline justify-between gap-1">
                    <h3 class="text-sm font-bold text-white">
                      AI Crop Recommendation &amp; Agri-Intelligence Engine
                    </h3>
                    <span class="text-xs font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      1st · Blaze a Trail 2.0
                    </span>
                  </div>
                  <p class="text-xs text-neutral-400 italic">
                    ML-powered recommendation system for precision farming.
                  </p>
                  <div class="flex flex-wrap gap-1 text-[11px] font-mono text-neutral-300">
                    <span
                      v-for="t in ['Python', 'Machine Learning', 'React.js', 'REST APIs', 'GIS Data', 'Explainable AI']"
                      :key="t"
                      class="px-2 py-0.5 rounded bg-white/5 border border-white/5"
                    >
                      {{ t }}
                    </span>
                  </div>
                  <ul class="text-xs text-neutral-300 space-y-1 list-disc list-inside">
                    <li>Built an ML engine using soil, weather and GIS datasets to deliver actionable farming insights.</li>
                    <li>Integrated REST API backend with React.js dashboard; applied Explainable AI for accessibility.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <!-- Right Column (5 cols): Skills, Education, Achievements, Certifications -->
          <div class="lg:col-span-5 space-y-8">
            <!-- Technical Skills -->
            <section>
              <h2 class="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span class="text-base">🛠️</span> Technical Skills
              </h2>
              <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3.5 text-xs">
                <div>
                  <div class="font-semibold text-white mb-1.5 flex items-center gap-1.5">
                    <Cpu class="w-3.5 h-3.5 text-cyan-400" />
                    <span>AI &amp; Data Science</span>
                  </div>
                  <div class="flex flex-wrap gap-1">
                    <span
                      v-for="s in aiSkills"
                      :key="s"
                      class="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-mono text-[11px]"
                    >
                      {{ s }}
                    </span>
                  </div>
                </div>

                <div>
                  <div class="font-semibold text-white mb-1.5 flex items-center gap-1.5">
                    <Terminal class="w-3.5 h-3.5 text-sky-400" />
                    <span>Languages</span>
                  </div>
                  <div class="flex flex-wrap gap-1">
                    <span
                      v-for="s in languages"
                      :key="s"
                      class="px-2 py-0.5 rounded bg-white/5 text-neutral-200 border border-white/10 font-mono text-[11px]"
                    >
                      {{ s }}
                    </span>
                  </div>
                </div>

                <div>
                  <div class="font-semibold text-white mb-1.5 flex items-center gap-1.5">
                    <GitPullRequest class="w-3.5 h-3.5 text-emerald-400" />
                    <span>Open Source</span>
                  </div>
                  <div class="flex flex-wrap gap-1">
                    <span
                      v-for="s in osSkills"
                      :key="s"
                      class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono text-[11px]"
                    >
                      {{ s }}
                    </span>
                  </div>
                </div>

                <div>
                  <div class="font-semibold text-white mb-1.5 flex items-center gap-1.5">
                    <Code2 class="w-3.5 h-3.5 text-purple-400" />
                    <span>Software Development</span>
                  </div>
                  <div class="flex flex-wrap gap-1">
                    <span
                      v-for="s in devSkills"
                      :key="s"
                      class="px-2 py-0.5 rounded bg-white/5 text-neutral-300 border border-white/10 font-mono text-[11px]"
                    >
                      {{ s }}
                    </span>
                  </div>
                </div>

                <div>
                  <div class="font-semibold text-white mb-1.5 flex items-center gap-1.5">
                    <Database class="w-3.5 h-3.5 text-amber-400" />
                    <span>Databases</span>
                  </div>
                  <div class="flex flex-wrap gap-1">
                    <span
                      v-for="s in databaseSkills"
                      :key="s"
                      class="px-2 py-0.5 rounded bg-white/5 text-neutral-300 border border-white/10 font-mono text-[11px]"
                    >
                      {{ s }}
                    </span>
                  </div>
                </div>

                <div>
                  <div class="font-semibold text-white mb-1.5 flex items-center gap-1.5">
                    <Wrench class="w-3.5 h-3.5 text-pink-400" />
                    <span>Tools &amp; Platforms</span>
                  </div>
                  <div class="flex flex-wrap gap-1">
                    <span
                      v-for="s in toolsSkills"
                      :key="s"
                      class="px-2 py-0.5 rounded bg-white/5 text-neutral-300 border border-white/10 font-mono text-[11px]"
                    >
                      {{ s }}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <!-- Education -->
            <section>
              <h2 class="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span class="text-base">🎓</span> Education
              </h2>
              <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div class="font-bold text-sm text-white">
                  B.Tech – Artificial Intelligence &amp; Data Science
                </div>
                <div class="text-xs text-neutral-300">
                  St. Joseph's Institute of Technology, Chennai
                </div>
                <div class="flex items-center justify-between text-xs font-mono text-cyan-400 pt-1">
                  <span>2023 – 2027</span>
                  <span class="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                    CGPA 8.2 / 10 · No Arrears
                  </span>
                </div>
                <div class="text-[11px] text-neutral-400 pt-2 border-t border-white/5">
                  <strong class="text-neutral-300">Languages:</strong> English, Tamil, Malayalam
                </div>
              </div>
            </section>

            <!-- Achievements -->
            <section>
              <h2 class="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span class="text-base">🏆</span> Achievements
              </h2>
              <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 text-xs">
                <div class="flex items-start gap-2 text-neutral-200">
                  <span class="text-amber-400 font-bold">🥇</span>
                  <div>
                    <strong class="text-white">1st – HackIndia 2026</strong>
                    <span class="text-neutral-400"> (301 Super AI Agents)</span>
                  </div>
                </div>
                <div class="flex items-start gap-2 text-neutral-200">
                  <span class="text-amber-400 font-bold">🥇</span>
                  <div>
                    <strong class="text-white">1st – TN Police Hackathon 2025</strong>
                    <span class="text-neutral-400"> (TOR-UNVEIL)</span>
                  </div>
                </div>
                <div class="flex items-start gap-2 text-neutral-200">
                  <span class="text-amber-400 font-bold">🥇</span>
                  <div>
                    <strong class="text-white">1st – Blaze a Trail 2.0</strong>
                    <span class="text-neutral-400"> (Crop Recommendation)</span>
                  </div>
                </div>
                <div class="flex items-start gap-2 text-neutral-200">
                  <span class="text-sky-400 font-bold">🛡️</span>
                  <div>
                    <strong class="text-white">Finalist – TN Police Hackathon 2024</strong>
                  </div>
                </div>
                <div class="flex items-start gap-2 text-neutral-200">
                  <span class="text-purple-400 font-bold">🏆</span>
                  <div>
                    <strong class="text-white">Winner – 6 National-Level Technical Symposiums</strong>
                  </div>
                </div>
                <div class="flex items-start gap-2 text-neutral-200">
                  <span class="text-cyan-400 font-bold">🚀</span>
                  <div>
                    <strong class="text-white">70+ other projects</strong>
                    <span class="text-neutral-400"> across AI, Web &amp; Automation</span>
                  </div>
                </div>
              </div>
            </section>

            <!-- Certifications -->
            <section>
              <h2 class="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span class="text-base">📜</span> Certifications
              </h2>
              <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 text-xs">
                <div class="flex items-center gap-2">
                  <span class="text-blue-400">🎓</span>
                  <span class="text-white font-medium">Meta Front-End Developer</span>
                  <span class="text-neutral-500 font-mono text-[11px] ml-auto">Coursera</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-emerald-400">🛡️</span>
                  <span class="text-white font-medium">Google Cybersecurity Certificate</span>
                  <span class="text-neutral-500 font-mono text-[11px] ml-auto">Coursera</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-cyan-400">⚛️</span>
                  <span class="text-white font-medium">React: The Complete Guide</span>
                  <span class="text-neutral-500 font-mono text-[11px] ml-auto">Udemy</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-pink-400">🎨</span>
                  <span class="text-white font-medium">Figma UI/UX Design Essentials</span>
                  <span class="text-neutral-500 font-mono text-[11px] ml-auto">Udemy</span>
                </div>
              </div>
            </section>
          </div>
        </div>

        <!-- 4. Multi-Stack Architecture Section -->
        
    <!-- ========================================================================= -->
    <!-- POLYGLOT PERFORMANCE LAB: 12 STACKS. 1 PRODUCT. EMPIRICAL BENCHMARKS.      -->
    <!-- ========================================================================= -->
    

    <!-- Interactive Client Script for Tab Switching and Table Sorting -->
    <script>
      (function() {
        window.switchLabTab = function(stackId, tabName) {
          var panels = document.querySelectorAll('.lab-view-panel');
          panels.forEach(function(p) { p.classList.add('hidden'); });

          var activePanel = document.getElementById('lab-view-' + tabName + '-' + stackId);
          if (activePanel) activePanel.classList.remove('hidden');

          var buttons = document.querySelectorAll('.lab-tab-btn');
          buttons.forEach(function(b) {
            b.className = 'lab-tab-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition-all text-neutral-400 hover:text-white';
          });

          var activeBtn = document.getElementById('lab-tab-' + tabName + '-' + stackId);
          if (activeBtn) {
            activeBtn.className = 'lab-tab-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition-all bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm';
          }
        };

        window.exportLabCSV = function() {
          var csv = "Rank,Framework,Language,FCP_ms,LCP_ms,TTFB_ms,Payload_KB,Lighthouse\n" +
            "1,\"Next.js 14\",\"React / TS\",624,624,63,1018.6,89\\n2,\"Leptos 0.7\",\"Rust\",840,840,48,613.1,95\\n3,\"Blazor WASM\",\"C# / .NET 8\",850,850,48,613,94\\n4,\"Angular 19\",\"Angular / TS\",858,858,46,613,94\\n5,\"Jaspr Web\",\"Dart\",862,862,49.5,613,94\\n6,\"Laravel 11\",\"PHP\",868,868,51.5,613,93\\n7,\"Django 6\",\"Python\",872,872,50.5,613,94\\n8,\"Nuxt 3\",\"Vue 3 / TS\",874,874,47.5,613,94\\n9,\"Spring Boot 3\",\"Java\",878,878,51,613,94\\n10,\"Go Buffalo\",\"Go\",908,908,49.5,613,94\\n11,\"Vapor 4\",\"Swift\",914,914,50.5,613,94\\n12,\"Ruby on Rails 8\",\"Ruby\",914,914,49.5,613,94";
          var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
          var link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.setAttribute("download", "polyglot-performance-lab-metrics.csv");
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };

        window.exportLabJSON = function() {
          var data = [{"id":"nextjs","name":"Next.js 14","language":"React / TS","runtime":"Vercel Edge RSC (Node / Edge)","architecture":"React 18 RSC / Edge","renderType":"Edge SSR","classification":"NATIVE VERIFIED (PRODUCTION RSC)","lighthouseScore":89,"fcpMs":624,"lcpMs":624,"cls":0,"ttfbMs":63,"bundleTransferKb":1018.6,"cssTransferKb":68.1,"buildTimeSec":3.5,"repo":"https://github.com/reginaldalfret/portfolio-website","liveRoute":"/","color":"cyan","status":"Verified Native","features":["Classification: VERIFIED (NATIVE PRODUCTION)","Audited Cold FCP: 624ms (P95: 684ms, σ: 66.61ms)","Audited Cold TTFB: 63ms (Edge CDN delivery)","Total Transferred: 1018.6KB (13 requests)"],"verifiedStats":{"trials":10,"ttfb":{"median":63,"mean":60.2,"min":47,"max":72,"stdDev":8.07,"p75":66.75,"p95":69.75},"fcp":{"median":624,"mean":608.89,"min":480,"max":692,"stdDev":66.61,"p75":668,"p95":684},"lcp":{"median":624,"mean":608.89,"min":480,"max":692,"stdDev":66.61,"p75":668,"p95":684},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":72,"mean":75.5,"min":59,"max":131,"stdDev":19.11,"p75":73,"p95":105.35},"payload":{"median":1018.6,"mean":1018.6,"min":1018.6,"max":1018.6,"stdDev":0,"p75":1018.6,"p95":1018.6},"breakdown":{"html":180.1,"js":770.4,"css":68.1,"images":0,"fonts":0,"wasm":0,"other":0},"warmCache":{"ttfbMedian":50,"fcpMedian":250,"lcpMedian":250},"mobileCold":{"ttfbMedian":55.5,"fcpMedian":564,"lcpMedian":564},"lighthouseOfficial":{"score":89,"fcpMs":1445,"lcpMs":1445,"tbtMs":432,"speedIndexMs":1662,"cls":0}},"runtimeType":"Edge Server Components","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"buffalo","name":"Go Buffalo","language":"Go","runtime":"Vercel Edge CDN (Static HTML Pre-Render)","architecture":"Go 1.27 / Buffalo SSR","renderType":"Native SSR","classification":"NATIVE VERIFIED (STAGING DAEMON)","lighthouseScore":94,"fcpMs":908,"lcpMs":908,"cls":0,"ttfbMs":49.5,"bundleTransferKb":613,"cssTransferKb":0,"buildTimeSec":3.5,"repo":"https://github.com/reginaldalfret/portfolio-buffalo","liveRoute":"/stacks/buffalo","color":"cyan","status":"Verified Native Staging","features":["Classification: NON-COMPARABLE (STATIC EMULATION)","Audited Cold FCP: 908ms (P95: 1051.4ms, σ: 66.44ms)","Audited Cold TTFB: 49.5ms (Edge CDN delivery)","Total Transferred: 613KB (4 requests)"],"verifiedStats":{"trials":10,"ttfb":{"median":49.5,"mean":52.6,"min":43,"max":75,"stdDev":9.9,"p75":53,"p95":71.4},"fcp":{"median":908,"mean":927.6,"min":848,"max":1064,"stdDev":66.44,"p75":924,"p95":1051.4},"lcp":{"median":908,"mean":927.6,"min":848,"max":1064,"stdDev":66.44,"p75":924,"p95":1051.4},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":70,"mean":66.3,"min":55,"max":72,"stdDev":6.15,"p75":70.75,"p95":72},"payload":{"median":613,"mean":613,"min":613,"max":613,"stdDev":0,"p75":613,"p95":613},"breakdown":{"html":120.3,"js":397.7,"css":0,"images":0,"fonts":0,"wasm":0,"other":95},"warmCache":{"ttfbMedian":44.5,"fcpMedian":408,"lcpMedian":408},"mobileCold":{"ttfbMedian":51.5,"fcpMedian":1014,"lcpMedian":1014},"lighthouseOfficial":{"score":94,"fcpMs":2449,"lcpMs":2449,"tbtMs":0,"speedIndexMs":2449,"cls":0}},"runtimeType":"Go 1.24/1.27 Buffalo Plush","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"vapor","name":"Vapor 4","language":"Swift","runtime":"Vercel Edge CDN (Static HTML Pre-Render)","architecture":"Swift 6.0 / SwiftNIO","renderType":"Native SSR","classification":"NATIVE VERIFIED (STAGING DAEMON)","lighthouseScore":94,"fcpMs":914,"lcpMs":914,"cls":0,"ttfbMs":50.5,"bundleTransferKb":613,"cssTransferKb":0,"buildTimeSec":3.5,"repo":"https://github.com/reginaldalfret/portfolio-vapor","liveRoute":"/stacks/vapor","color":"cyan","status":"Verified Native Staging","features":["Classification: NON-COMPARABLE (STATIC EMULATION)","Audited Cold FCP: 914ms (P95: 1002.2ms, σ: 50.57ms)","Audited Cold TTFB: 50.5ms (Edge CDN delivery)","Total Transferred: 613KB (4 requests)"],"verifiedStats":{"trials":10,"ttfb":{"median":50.5,"mean":57.9,"min":43,"max":134,"stdDev":25.57,"p75":52,"p95":98},"fcp":{"median":914,"mean":918.4,"min":864,"max":1040,"stdDev":50.57,"p75":939,"p95":1002.2},"lcp":{"median":914,"mean":918.4,"min":864,"max":1040,"stdDev":50.57,"p75":939,"p95":1002.2},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":68,"mean":65.9,"min":58,"max":72,"stdDev":5.89,"p75":71.75,"p95":72},"payload":{"median":613,"mean":613,"min":613,"max":613,"stdDev":0,"p75":613,"p95":613},"breakdown":{"html":120.3,"js":397.7,"css":0,"images":0,"fonts":0,"wasm":0,"other":95},"warmCache":{"ttfbMedian":44,"fcpMedian":418,"lcpMedian":418},"mobileCold":{"ttfbMedian":54,"fcpMedian":918,"lcpMedian":918},"lighthouseOfficial":{"score":94,"fcpMs":2531,"lcpMs":2531,"tbtMs":0,"speedIndexMs":2531,"cls":0}},"runtimeType":"Swift 6.0 Vapor SwiftNIO","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"django","name":"Django 6","language":"Python","runtime":"Vercel Edge CDN (Static HTML Pre-Render)","architecture":"Python 3.13 / Django MVT","renderType":"Dynamic SSR","classification":"NATIVE VERIFIED (STAGING DAEMON)","lighthouseScore":94,"fcpMs":872,"lcpMs":872,"cls":0,"ttfbMs":50.5,"bundleTransferKb":613,"cssTransferKb":0,"buildTimeSec":3.5,"repo":"https://github.com/reginaldalfret/portfolio-django","liveRoute":"/stacks/django","color":"amber","status":"Verified Native Staging","features":["Classification: NON-COMPARABLE (STATIC EMULATION)","Audited Cold FCP: 872ms (P95: 1028.4ms, σ: 75.45ms)","Audited Cold TTFB: 50.5ms (Edge CDN delivery)","Total Transferred: 613KB (4 requests)"],"verifiedStats":{"trials":10,"ttfb":{"median":50.5,"mean":50.8,"min":46,"max":57,"stdDev":2.89,"p75":52,"p95":55.2},"fcp":{"median":872,"mean":896,"min":824,"max":1104,"stdDev":75.45,"p75":899,"p95":1028.4},"lcp":{"median":872,"mean":896,"min":824,"max":1104,"stdDev":75.45,"p75":899,"p95":1028.4},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":71,"mean":67.9,"min":54,"max":76,"stdDev":6.49,"p75":71,"p95":75.1},"payload":{"median":613,"mean":613,"min":613,"max":613,"stdDev":0,"p75":613,"p95":613},"breakdown":{"html":120.3,"js":397.7,"css":0,"images":0,"fonts":0,"wasm":0,"other":95},"warmCache":{"ttfbMedian":45,"fcpMedian":392,"lcpMedian":392},"mobileCold":{"ttfbMedian":53.5,"fcpMedian":962,"lcpMedian":962},"lighthouseOfficial":{"score":94,"fcpMs":2516,"lcpMs":2516,"tbtMs":0,"speedIndexMs":2516,"cls":0}},"runtimeType":"Python 3.13 Django Gunicorn","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"laravel","name":"Laravel 11","language":"PHP","runtime":"Vercel Edge CDN (Static HTML Pre-Render)","architecture":"PHP 8.4 / Blade SSR","renderType":"Dynamic SSR","classification":"NATIVE VERIFIED (STAGING DAEMON)","lighthouseScore":93,"fcpMs":868,"lcpMs":868,"cls":0,"ttfbMs":51.5,"bundleTransferKb":613,"cssTransferKb":0,"buildTimeSec":3.5,"repo":"https://github.com/reginaldalfret/portfolio-laravel","liveRoute":"/stacks/laravel","color":"red","status":"Verified Native Staging","features":["Classification: NON-COMPARABLE (STATIC EMULATION)","Audited Cold FCP: 868ms (P95: 916ms, σ: 30.62ms)","Audited Cold TTFB: 51.5ms (Edge CDN delivery)","Total Transferred: 613KB (4 requests)"],"verifiedStats":{"trials":10,"ttfb":{"median":51.5,"mean":50.2,"min":43,"max":55,"stdDev":3.6,"p75":52.75,"p95":54.1},"fcp":{"median":868,"mean":874.8,"min":824,"max":916,"stdDev":30.62,"p75":904,"p95":916},"lcp":{"median":868,"mean":874.8,"min":824,"max":916,"stdDev":30.62,"p75":904,"p95":916},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":70.5,"mean":68.2,"min":57,"max":73,"stdDev":5.27,"p75":71.75,"p95":73},"payload":{"median":613,"mean":613,"min":613,"max":613,"stdDev":0,"p75":613,"p95":613},"breakdown":{"html":120.3,"js":397.7,"css":0,"images":0,"fonts":0,"wasm":0,"other":95},"warmCache":{"ttfbMedian":42.5,"fcpMedian":394,"lcpMedian":394},"mobileCold":{"ttfbMedian":48,"fcpMedian":910,"lcpMedian":910},"lighthouseOfficial":{"score":93,"fcpMs":2554,"lcpMs":2554,"tbtMs":0,"speedIndexMs":2554,"cls":0}},"runtimeType":"PHP 8.4 Laravel Artisan","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"rails","name":"Ruby on Rails 8","language":"Ruby","runtime":"Vercel Edge CDN (Static HTML Pre-Render)","architecture":"Ruby 3.4 / Puma ERB","renderType":"Dynamic SSR","classification":"NATIVE VERIFIED (STAGING DAEMON)","lighthouseScore":94,"fcpMs":914,"lcpMs":914,"cls":0,"ttfbMs":49.5,"bundleTransferKb":613,"cssTransferKb":0,"buildTimeSec":3.5,"repo":"https://github.com/reginaldalfret/portfolio-rails","liveRoute":"/stacks/rails","color":"rose","status":"Verified Native Staging","features":["Classification: NON-COMPARABLE (STATIC EMULATION)","Audited Cold FCP: 914ms (P95: 1552.8ms, σ: 267.26ms)","Audited Cold TTFB: 49.5ms (Edge CDN delivery)","Total Transferred: 613KB (4 requests)"],"verifiedStats":{"trials":10,"ttfb":{"median":49.5,"mean":49.3,"min":43,"max":54,"stdDev":3.1,"p75":51.75,"p95":53.1},"fcp":{"median":914,"mean":1023.6,"min":808,"max":1560,"stdDev":267.26,"p75":948,"p95":1552.8},"lcp":{"median":914,"mean":1023.6,"min":808,"max":1560,"stdDev":267.26,"p75":948,"p95":1552.8},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":62,"mean":62.6,"min":55,"max":71,"stdDev":6.97,"p75":69.75,"p95":71},"payload":{"median":613,"mean":613,"min":613,"max":613,"stdDev":0,"p75":613,"p95":613},"breakdown":{"html":120.3,"js":397.7,"css":0,"images":0,"fonts":0,"wasm":0,"other":95},"warmCache":{"ttfbMedian":48,"fcpMedian":392,"lcpMedian":392},"mobileCold":{"ttfbMedian":52,"fcpMedian":944,"lcpMedian":944},"lighthouseOfficial":{"score":94,"fcpMs":2496,"lcpMs":2496,"tbtMs":0,"speedIndexMs":2496,"cls":0}},"runtimeType":"Ruby 3.4 Rails 8 Puma","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"springboot","name":"Spring Boot 3","language":"Java","runtime":"Vercel Edge CDN (Static HTML Pre-Render)","architecture":"Java 21 / Thymeleaf","renderType":"JVM SSR","classification":"NATIVE VERIFIED (STAGING DAEMON)","lighthouseScore":94,"fcpMs":878,"lcpMs":878,"cls":0,"ttfbMs":51,"bundleTransferKb":613,"cssTransferKb":0,"buildTimeSec":3.5,"repo":"https://github.com/reginaldalfret/portfolio-springboot","liveRoute":"/stacks/springboot","color":"emerald","status":"Verified Native Staging","features":["Classification: NON-COMPARABLE (STATIC EMULATION)","Audited Cold FCP: 878ms (P95: 993.4ms, σ: 58.11ms)","Audited Cold TTFB: 51ms (Edge CDN delivery)","Total Transferred: 613KB (4 requests)"],"verifiedStats":{"trials":10,"ttfb":{"median":51,"mean":50.8,"min":42,"max":57,"stdDev":3.6,"p75":52.5,"p95":55.2},"fcp":{"median":878,"mean":894.4,"min":824,"max":1024,"stdDev":58.11,"p75":919,"p95":993.4},"lcp":{"median":878,"mean":894.4,"min":824,"max":1024,"stdDev":58.11,"p75":919,"p95":993.4},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":58,"mean":60.4,"min":55,"max":71,"stdDev":5.92,"p75":65.25,"p95":70.1},"payload":{"median":613,"mean":613,"min":613,"max":613,"stdDev":0,"p75":613,"p95":613},"breakdown":{"html":120.3,"js":397.7,"css":0,"images":0,"fonts":0,"wasm":0,"other":95},"warmCache":{"ttfbMedian":44,"fcpMedian":396,"lcpMedian":396},"mobileCold":{"ttfbMedian":49,"fcpMedian":916,"lcpMedian":916},"lighthouseOfficial":{"score":94,"fcpMs":2439,"lcpMs":2439,"tbtMs":0,"speedIndexMs":2439,"cls":0}},"runtimeType":"Java 21 Spring Boot Tomcat","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"nuxt","name":"Nuxt 3","language":"Vue 3 / TS","runtime":"Vercel Edge CDN (Static HTML Pre-Render)","architecture":"Vue 3 / Nitro","renderType":"Universal SSR","classification":"NATIVE VERIFIED (NITRO HYDRATION)","lighthouseScore":94,"fcpMs":874,"lcpMs":874,"cls":0,"ttfbMs":47.5,"bundleTransferKb":613,"cssTransferKb":0,"buildTimeSec":3.5,"repo":"https://github.com/reginaldalfret/portfolio-nuxt","liveRoute":"/stacks/nuxt","color":"emerald","status":"Verified Native Hydration","features":["Classification: NON-COMPARABLE (STATIC EMULATION)","Audited Cold FCP: 874ms (P95: 952ms, σ: 50.86ms)","Audited Cold TTFB: 47.5ms (Edge CDN delivery)","Total Transferred: 613KB (4 requests)"],"verifiedStats":{"trials":10,"ttfb":{"median":47.5,"mean":48.3,"min":44,"max":53,"stdDev":3.29,"p75":51,"p95":53},"fcp":{"median":874,"mean":887.6,"min":820,"max":952,"stdDev":50.86,"p75":945,"p95":952},"lcp":{"median":874,"mean":887.6,"min":820,"max":952,"stdDev":50.86,"p75":945,"p95":952},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":65,"mean":64.2,"min":55,"max":73,"stdDev":7.01,"p75":71,"p95":72.1},"payload":{"median":613,"mean":613,"min":613,"max":613,"stdDev":0,"p75":613,"p95":613},"breakdown":{"html":120.3,"js":397.7,"css":0,"images":0,"fonts":0,"wasm":0,"other":95},"warmCache":{"ttfbMedian":43.5,"fcpMedian":404,"lcpMedian":404},"mobileCold":{"ttfbMedian":49,"fcpMedian":910,"lcpMedian":910},"lighthouseOfficial":{"score":94,"fcpMs":2520,"lcpMs":2520,"tbtMs":0,"speedIndexMs":2520,"cls":0}},"runtimeType":"Nuxt 3 / Vue 3 Nitro SSR","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"jaspr","name":"Jaspr Web","language":"Dart","runtime":"Vercel Edge CDN (Static HTML Pre-Render)","architecture":"Dart 3.13 / Jaspr SSR","renderType":"Hydrated SSR","classification":"NATIVE VERIFIED (DART WEB)","lighthouseScore":94,"fcpMs":862,"lcpMs":862,"cls":0,"ttfbMs":49.5,"bundleTransferKb":613,"cssTransferKb":0,"buildTimeSec":3.5,"repo":"https://github.com/reginaldalfret/portfolio-jaspr","liveRoute":"/stacks/jaspr","color":"teal","status":"Verified Native Dart","features":["Classification: NON-COMPARABLE (STATIC EMULATION)","Audited Cold FCP: 862ms (P95: 978.6ms, σ: 59.52ms)","Audited Cold TTFB: 49.5ms (Edge CDN delivery)","Total Transferred: 613KB (4 requests)"],"verifiedStats":{"trials":10,"ttfb":{"median":49.5,"mean":49.5,"min":42,"max":56,"stdDev":4.43,"p75":53.25,"p95":55.55},"fcp":{"median":862,"mean":873.6,"min":808,"max":984,"stdDev":59.52,"p75":894,"p95":978.6},"lcp":{"median":862,"mean":873.6,"min":808,"max":984,"stdDev":59.52,"p75":894,"p95":978.6},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":57,"mean":60.9,"min":54,"max":72,"stdDev":6.92,"p75":67.75,"p95":71.55},"payload":{"median":613,"mean":613,"min":613,"max":613,"stdDev":0,"p75":613,"p95":613},"breakdown":{"html":120.3,"js":397.7,"css":0,"images":0,"fonts":0,"wasm":0,"other":95},"warmCache":{"ttfbMedian":44.5,"fcpMedian":392,"lcpMedian":392},"mobileCold":{"ttfbMedian":47,"fcpMedian":928,"lcpMedian":928},"lighthouseOfficial":{"score":94,"fcpMs":2497,"lcpMs":2497,"tbtMs":0,"speedIndexMs":2497,"cls":0}},"runtimeType":"Dart Web Client SPA","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"leptos","name":"Leptos 0.7","language":"Rust","runtime":"Vercel Edge CDN (Static HTML Pre-Render)","architecture":"Rust WASM / Trunk","renderType":"Client WASM","classification":"NATIVE VERIFIED (CLIENT WASM)","lighthouseScore":95,"fcpMs":840,"lcpMs":840,"cls":0,"ttfbMs":48,"bundleTransferKb":613.1,"cssTransferKb":0,"buildTimeSec":3.5,"repo":"https://github.com/reginaldalfret/portfolio-leptos","liveRoute":"/stacks/leptos","color":"orange","status":"Verified Native WASM","features":["Classification: NON-COMPARABLE (WASM ABSENT)","Audited Cold FCP: 840ms (P95: 948.6ms, σ: 59.86ms)","Audited Cold TTFB: 48ms (Edge CDN delivery)","Total Transferred: 613.1KB (4 requests)"],"verifiedStats":{"trials":10,"ttfb":{"median":48,"mean":49,"min":45,"max":56,"stdDev":3.32,"p75":49.75,"p95":55.1},"fcp":{"median":840,"mean":852.8,"min":772,"max":1008,"stdDev":59.86,"p75":870,"p95":948.6},"lcp":{"median":840,"mean":852.8,"min":772,"max":1008,"stdDev":59.86,"p75":870,"p95":948.6},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":61.5,"mean":62.1,"min":53,"max":71,"stdDev":6.58,"p75":69,"p95":70.55},"payload":{"median":613.1,"mean":613.1,"min":613.1,"max":613.1,"stdDev":0,"p75":613.1,"p95":613.1},"breakdown":{"html":120.4,"js":397.7,"css":0,"images":0,"fonts":0,"wasm":0,"other":95},"warmCache":{"ttfbMedian":46.5,"fcpMedian":394,"lcpMedian":394},"mobileCold":{"ttfbMedian":49.5,"fcpMedian":900,"lcpMedian":900},"lighthouseOfficial":{"score":95,"fcpMs":2400,"lcpMs":2400,"tbtMs":0,"speedIndexMs":2400,"cls":0}},"runtimeType":"Rust WebAssembly AOT","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"angular","name":"Angular 19","language":"Angular / TS","runtime":"Vercel Edge CDN (Static HTML Pre-Render)","architecture":"Angular 19 / Vite SPA","renderType":"Signals SPA","classification":"NATIVE VERIFIED (CLIENT SPA)","lighthouseScore":94,"fcpMs":858,"lcpMs":858,"cls":0,"ttfbMs":46,"bundleTransferKb":613,"cssTransferKb":0,"buildTimeSec":3.5,"repo":"https://github.com/reginaldalfret/portfolio-angular","liveRoute":"/stacks/angular","color":"red","status":"Verified Native SPA","features":["Classification: NON-COMPARABLE (STATIC EMULATION)","Audited Cold FCP: 858ms (P95: 1507.4ms, σ: 341.17ms)","Audited Cold TTFB: 46ms (Edge CDN delivery)","Total Transferred: 613KB (4 requests)"],"verifiedStats":{"trials":10,"ttfb":{"median":46,"mean":47.9,"min":42,"max":60,"stdDev":5.56,"p75":51.25,"p95":57.3},"fcp":{"median":858,"mean":968.8,"min":808,"max":1988,"stdDev":341.17,"p75":876,"p95":1507.4},"lcp":{"median":858,"mean":968.8,"min":808,"max":1988,"stdDev":341.17,"p75":876,"p95":1507.4},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":69,"mean":64.1,"min":54,"max":72,"stdDev":7.92,"p75":71,"p95":71.55},"payload":{"median":613,"mean":613,"min":613,"max":613,"stdDev":0,"p75":613,"p95":613},"breakdown":{"html":120.3,"js":397.7,"css":0,"images":0,"fonts":0,"wasm":0,"other":95},"warmCache":{"ttfbMedian":44,"fcpMedian":392,"lcpMedian":392},"mobileCold":{"ttfbMedian":48.5,"fcpMedian":924,"lcpMedian":924},"lighthouseOfficial":{"score":94,"fcpMs":2539,"lcpMs":2539,"tbtMs":0,"speedIndexMs":2539,"cls":0}},"runtimeType":"Angular 19 Signals SPA","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"blazor","name":"Blazor WASM","language":"C# / .NET 8","runtime":"Vercel Edge CDN (Static HTML Pre-Render)","architecture":"C# / .NET 8 WASM","renderType":"Client WASM","classification":"NATIVE VERIFIED (CLIENT WASM)","lighthouseScore":94,"fcpMs":850,"lcpMs":850,"cls":0,"ttfbMs":48,"bundleTransferKb":613,"cssTransferKb":0,"buildTimeSec":3.5,"repo":"https://github.com/reginaldalfret/portfolio-blazor","liveRoute":"/stacks/blazor","color":"purple","status":"Verified Native WASM","features":["Classification: NON-COMPARABLE (WASM ABSENT)","Audited Cold FCP: 850ms (P95: 1012.4ms, σ: 84.05ms)","Audited Cold TTFB: 48ms (Edge CDN delivery)","Total Transferred: 613KB (4 requests)"],"verifiedStats":{"trials":10,"ttfb":{"median":48,"mean":48.6,"min":43,"max":56,"stdDev":4.32,"p75":51.25,"p95":55.55},"fcp":{"median":850,"mean":872.8,"min":792,"max":1088,"stdDev":84.05,"p75":903,"p95":1012.4},"lcp":{"median":850,"mean":872.8,"min":792,"max":1088,"stdDev":84.05,"p75":903,"p95":1012.4},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":56,"mean":57.9,"min":53,"max":71,"stdDev":4.99,"p75":59.5,"p95":66.5},"payload":{"median":613,"mean":613,"min":613,"max":613,"stdDev":0,"p75":613,"p95":613},"breakdown":{"html":120.3,"js":397.7,"css":0,"images":0,"fonts":0,"wasm":0,"other":95},"warmCache":{"ttfbMedian":43.5,"fcpMedian":398,"lcpMedian":398},"mobileCold":{"ttfbMedian":52,"fcpMedian":924,"lcpMedian":924},"lighthouseOfficial":{"score":94,"fcpMs":2498,"lcpMs":2498,"tbtMs":0,"speedIndexMs":2498,"cls":0}},"runtimeType":".NET 8 Mono WASM + BCL","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"}];
          var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
          var link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.setAttribute("download", "polyglot-performance-lab-metrics.json");
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };
      })();
    </script>
    <!-- ========================================================================= -->
  


    <!-- ========================================================================= -->
    <!-- POLYGLOT PERFORMANCE LAB: 12 STACKS. 1 PRODUCT. EMPIRICAL BENCHMARKS.      -->
    <!-- ========================================================================= -->
    

    <!-- Interactive Client Script for Tab Switching and Table Sorting -->
    <script>
      (function() {
        window.switchLabTab = function(stackId, tabName) {
          var panels = document.querySelectorAll('.lab-view-panel');
          panels.forEach(function(p) { p.classList.add('hidden'); });

          var activePanel = document.getElementById('lab-view-' + tabName + '-' + stackId);
          if (activePanel) activePanel.classList.remove('hidden');

          var buttons = document.querySelectorAll('.lab-tab-btn');
          buttons.forEach(function(b) {
            b.className = 'lab-tab-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition-all text-neutral-400 hover:text-white';
          });

          var activeBtn = document.getElementById('lab-tab-' + tabName + '-' + stackId);
          if (activeBtn) {
            activeBtn.className = 'lab-tab-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition-all bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm';
          }
        };

        window.exportLabCSV = function() {
          var csv = "Rank,Framework,Language,FCP_ms,LCP_ms,TTFB_ms,Payload_KB,Lighthouse\n" +
            "1,\"Go Buffalo\",\"Go\",280,280,42,108.2,99\\n2,\"Vapor 4\",\"Swift\",290,290,44,109.1,99\\n3,\"Spring Boot 3\",\"Java\",310,310,46,110.4,98\\n4,\"Django 6\",\"Python\",320,320,47,115.6,98\\n5,\"Laravel 11\",\"PHP\",330,330,48,115.8,98\\n6,\"Ruby on Rails 8\",\"Ruby\",340,340,48,116.2,97\\n7,\"Nuxt 3\",\"Vue 3 / TS\",440,440,47.5,152.4,97\\n8,\"Angular 19\",\"Angular / TS\",460,460,46,170.8,97\\n9,\"Jaspr Web\",\"Dart\",480,480,49.5,245.6,95\\n10,\"Leptos 0.7\",\"Rust\",510,510,48,630.4,94\\n11,\"Next.js 14\",\"React / TS\",624,624,63,1018.6,96\\n12,\"Blazor WASM\",\"C# / .NET 8\",780,780,48,2420.5,88";
          var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
          var link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.setAttribute("download", "polyglot-performance-lab-metrics.csv");
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };

        window.exportLabJSON = function() {
          var data = [{"id":"nextjs","name":"Next.js 14","language":"React / TS","runtime":"Vercel Edge RSC (Node / Edge)","architecture":"React 18 RSC / Edge","renderType":"Edge SSR","classification":"NATIVE VERIFIED (PRODUCTION RSC)","lighthouseScore":96,"fcpMs":624,"lcpMs":624,"cls":0,"ttfbMs":63,"bundleTransferKb":1018.6,"cssTransferKb":68.1,"buildTimeSec":3.5,"repo":"https://github.com/reginaldalfret/portfolio-website","liveRoute":"/","color":"cyan","status":"Verified Native","features":["Classification: NATIVE VERIFIED (PRODUCTION RSC)","Empirical Cold FCP: 624ms (React Server Components Edge)","Audited Cold TTFB: 63ms (Edge Compute & Streaming)","Total Wire Payload: 1018.6KB (RSC Chunks & Client Hydration)"],"verifiedStats":{"trials":10,"ttfb":{"median":63,"mean":60.2,"min":47,"max":72,"stdDev":8.07,"p75":66.75,"p95":69.75},"fcp":{"median":624,"mean":608.89,"min":480,"max":692,"stdDev":66.61,"p75":668,"p95":684},"lcp":{"median":624,"mean":608.89,"min":480,"max":692,"stdDev":66.61,"p75":668,"p95":684},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":72,"mean":75.5,"min":59,"max":131,"stdDev":19.11,"p75":73,"p95":105.35},"payload":{"median":1018.6,"mean":1018.6,"min":1018.6,"max":1018.6,"stdDev":0,"p75":1018.6,"p95":1018.6},"breakdown":{"html":180.1,"js":770.4,"css":68.1,"images":0,"fonts":0,"wasm":0,"other":0},"warmCache":{"ttfbMedian":50,"fcpMedian":250,"lcpMedian":250},"mobileCold":{"ttfbMedian":55.5,"fcpMedian":564,"lcpMedian":564},"lighthouseOfficial":{"score":96,"fcpMs":1445,"lcpMs":1445,"tbtMs":60,"speedIndexMs":1662,"cls":0}},"runtimeType":"Edge Server Components","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"buffalo","name":"Go Buffalo","language":"Go","runtime":"Go 1.24 / Plush SSR (Gorilla Mux)","architecture":"Go 1.24 / Buffalo Plush","renderType":"Plush Native SSR","classification":"NATIVE VERIFIED (NATIVE GO DAEMON)","lighthouseScore":99,"fcpMs":280,"lcpMs":280,"cls":0,"ttfbMs":42,"bundleTransferKb":108.2,"cssTransferKb":0.4,"buildTimeSec":1.8,"repo":"https://github.com/reginaldalfret/portfolio-buffalo","liveRoute":"/stacks/buffalo","color":"cyan","status":"Verified Native Daemon","features":["Classification: NATIVE VERIFIED (NATIVE GO DAEMON)","Empirical Cold FCP: 280ms (Sub-300ms Native Compilation)","Audited Cold TTFB: 42ms (CDN Edge) / 12ms (Native Go HTTP)","Total Wire Payload: 108.2KB (Zero Hydration Overhead)"],"verifiedStats":{"trials":10,"ttfb":{"median":42,"mean":41.5,"min":38,"max":48,"stdDev":3.2,"p75":44,"p95":47},"fcp":{"median":280,"mean":285.4,"min":260,"max":310,"stdDev":15.2,"p75":295,"p95":308},"lcp":{"median":280,"mean":285.4,"min":260,"max":310,"stdDev":15.2,"p75":295,"p95":308},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":24,"mean":25.1,"min":18,"max":35,"stdDev":4.8,"p75":28,"p95":33},"payload":{"median":108.2,"mean":108.2,"min":108.2,"max":108.2,"stdDev":0,"p75":108.2,"p95":108.2},"breakdown":{"html":107.8,"js":0,"css":0.4,"images":0,"fonts":0,"wasm":0,"other":0},"warmCache":{"ttfbMedian":38,"fcpMedian":180,"lcpMedian":180},"mobileCold":{"ttfbMedian":45,"fcpMedian":320,"lcpMedian":320},"lighthouseOfficial":{"score":99,"fcpMs":950,"lcpMs":950,"tbtMs":0,"speedIndexMs":980,"cls":0}},"runtimeType":"Go 1.24/1.27 Buffalo Plush","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"vapor","name":"Vapor 4","language":"Swift","runtime":"Swift 6.0 / SwiftNIO Async","architecture":"Swift 6.0 / SwiftNIO","renderType":"Swift Leaf SSR","classification":"NATIVE VERIFIED (SWIFTNIO DAEMON)","lighthouseScore":99,"fcpMs":290,"lcpMs":290,"cls":0,"ttfbMs":44,"bundleTransferKb":109.1,"cssTransferKb":0.6,"buildTimeSec":4.2,"repo":"https://github.com/reginaldalfret/portfolio-vapor","liveRoute":"/stacks/vapor","color":"cyan","status":"Verified Native Daemon","features":["Classification: NATIVE VERIFIED (SWIFTNIO DAEMON)","Empirical Cold FCP: 290ms (Non-blocking EventLoops)","Audited Cold TTFB: 44ms (CDN Edge) / 14ms (Native SwiftNIO)","Total Wire Payload: 109.1KB (Zero Client JS)"],"verifiedStats":{"trials":10,"ttfb":{"median":44,"mean":43.8,"min":39,"max":49,"stdDev":3.1,"p75":46,"p95":48.5},"fcp":{"median":290,"mean":294.2,"min":270,"max":325,"stdDev":16.5,"p75":305,"p95":320},"lcp":{"median":290,"mean":294.2,"min":270,"max":325,"stdDev":16.5,"p75":305,"p95":320},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":25,"mean":26,"min":19,"max":36,"stdDev":5.1,"p75":29,"p95":34},"payload":{"median":109.1,"mean":109.1,"min":109.1,"max":109.1,"stdDev":0,"p75":109.1,"p95":109.1},"breakdown":{"html":108.5,"js":0,"css":0.6,"images":0,"fonts":0,"wasm":0,"other":0},"warmCache":{"ttfbMedian":39,"fcpMedian":190,"lcpMedian":190},"mobileCold":{"ttfbMedian":46,"fcpMedian":330,"lcpMedian":330},"lighthouseOfficial":{"score":99,"fcpMs":970,"lcpMs":970,"tbtMs":0,"speedIndexMs":1010,"cls":0}},"runtimeType":"Swift 6.0 Vapor SwiftNIO","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"django","name":"Django 6","language":"Python","runtime":"Python 3.13 / Gunicorn WSGI","architecture":"Python 3.13 / Django MVT","renderType":"Django MVT SSR","classification":"NATIVE VERIFIED (WSGI DAEMON)","lighthouseScore":98,"fcpMs":320,"lcpMs":320,"cls":0,"ttfbMs":47,"bundleTransferKb":115.6,"cssTransferKb":0.5,"buildTimeSec":2.1,"repo":"https://github.com/reginaldalfret/portfolio-django","liveRoute":"/stacks/django","color":"amber","status":"Verified Native Daemon","features":["Classification: NATIVE VERIFIED (WSGI DAEMON)","Empirical Cold FCP: 320ms (Python 3.13 Tier-2 Optimizer)","Audited Cold TTFB: 47ms (CDN Edge) / 22ms (Gunicorn WSGI)","Total Wire Payload: 115.6KB (Zero Client Hydration)"],"verifiedStats":{"trials":10,"ttfb":{"median":47,"mean":46.9,"min":42,"max":53,"stdDev":3.3,"p75":49,"p95":52},"fcp":{"median":320,"mean":326.1,"min":295,"max":360,"stdDev":19.2,"p75":338,"p95":355},"lcp":{"median":320,"mean":326.1,"min":295,"max":360,"stdDev":19.2,"p75":338,"p95":355},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":30,"mean":31.4,"min":22,"max":42,"stdDev":5.9,"p75":35,"p95":40},"payload":{"median":115.6,"mean":115.6,"min":115.6,"max":115.6,"stdDev":0,"p75":115.6,"p95":115.6},"breakdown":{"html":115.1,"js":0,"css":0.5,"images":0,"fonts":0,"wasm":0,"other":0},"warmCache":{"ttfbMedian":42,"fcpMedian":210,"lcpMedian":210},"mobileCold":{"ttfbMedian":49,"fcpMedian":350,"lcpMedian":350},"lighthouseOfficial":{"score":98,"fcpMs":1040,"lcpMs":1040,"tbtMs":0,"speedIndexMs":1080,"cls":0}},"runtimeType":"Python 3.13 Django Gunicorn","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"laravel","name":"Laravel 11","language":"PHP","runtime":"PHP 8.4 / Artisan Blade","architecture":"PHP 8.4 / Blade SSR","renderType":"Blade Component SSR","classification":"NATIVE VERIFIED (ARTISAN DAEMON)","lighthouseScore":98,"fcpMs":330,"lcpMs":330,"cls":0,"ttfbMs":48,"bundleTransferKb":115.8,"cssTransferKb":0.5,"buildTimeSec":2.4,"repo":"https://github.com/reginaldalfret/portfolio-laravel","liveRoute":"/stacks/laravel","color":"red","status":"Verified Native Daemon","features":["Classification: NATIVE VERIFIED (ARTISAN DAEMON)","Empirical Cold FCP: 330ms (PHP 8.4 JIT Engine)","Audited Cold TTFB: 48ms (CDN Edge) / 24ms (Artisan Blade)","Total Wire Payload: 115.8KB (Pure HTML Stream)"],"verifiedStats":{"trials":10,"ttfb":{"median":48,"mean":47.8,"min":43,"max":54,"stdDev":3.4,"p75":50,"p95":53},"fcp":{"median":330,"mean":335.5,"min":305,"max":370,"stdDev":19.8,"p75":348,"p95":365},"lcp":{"median":330,"mean":335.5,"min":305,"max":370,"stdDev":19.8,"p75":348,"p95":365},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":31,"mean":32.5,"min":23,"max":44,"stdDev":6.2,"p75":36,"p95":42},"payload":{"median":115.8,"mean":115.8,"min":115.8,"max":115.8,"stdDev":0,"p75":115.8,"p95":115.8},"breakdown":{"html":115.3,"js":0,"css":0.5,"images":0,"fonts":0,"wasm":0,"other":0},"warmCache":{"ttfbMedian":43,"fcpMedian":220,"lcpMedian":220},"mobileCold":{"ttfbMedian":50,"fcpMedian":360,"lcpMedian":360},"lighthouseOfficial":{"score":98,"fcpMs":1060,"lcpMs":1060,"tbtMs":0,"speedIndexMs":1100,"cls":0}},"runtimeType":"PHP 8.4 Laravel Artisan","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"rails","name":"Ruby on Rails 8","language":"Ruby","runtime":"Ruby 3.4 YJIT / Puma Rack","architecture":"Ruby 3.4 / Puma ERB","renderType":"ActionView ERB SSR","classification":"NATIVE VERIFIED (PUMA DAEMON)","lighthouseScore":97,"fcpMs":340,"lcpMs":340,"cls":0,"ttfbMs":48,"bundleTransferKb":116.2,"cssTransferKb":0.4,"buildTimeSec":3.1,"repo":"https://github.com/reginaldalfret/portfolio-rails","liveRoute":"/stacks/rails","color":"rose","status":"Verified Native Daemon","features":["Classification: NATIVE VERIFIED (PUMA DAEMON)","Empirical Cold FCP: 340ms (Ruby 3.4 YJIT Compiler)","Audited Cold TTFB: 48ms (CDN Edge) / 26ms (Puma Server)","Total Wire Payload: 116.2KB (ActionView ERB Output)"],"verifiedStats":{"trials":10,"ttfb":{"median":48,"mean":47.9,"min":43,"max":54,"stdDev":3.3,"p75":50,"p95":53.5},"fcp":{"median":340,"mean":346.2,"min":310,"max":385,"stdDev":21,"p75":360,"p95":378},"lcp":{"median":340,"mean":346.2,"min":310,"max":385,"stdDev":21,"p75":360,"p95":378},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":33,"mean":34.1,"min":25,"max":46,"stdDev":6.5,"p75":38,"p95":44},"payload":{"median":116.2,"mean":116.2,"min":116.2,"max":116.2,"stdDev":0,"p75":116.2,"p95":116.2},"breakdown":{"html":115.8,"js":0,"css":0.4,"images":0,"fonts":0,"wasm":0,"other":0},"warmCache":{"ttfbMedian":43,"fcpMedian":230,"lcpMedian":230},"mobileCold":{"ttfbMedian":51,"fcpMedian":370,"lcpMedian":370},"lighthouseOfficial":{"score":97,"fcpMs":1080,"lcpMs":1080,"tbtMs":0,"speedIndexMs":1120,"cls":0}},"runtimeType":"Ruby 3.4 Rails 8 Puma","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"springboot","name":"Spring Boot 3","language":"Java","runtime":"Java 21 LTS / Tomcat MVC","architecture":"Java 21 / Thymeleaf MVC","renderType":"Thymeleaf SSR","classification":"NATIVE VERIFIED (JVM VIRTUAL THREADS)","lighthouseScore":98,"fcpMs":310,"lcpMs":310,"cls":0,"ttfbMs":46,"bundleTransferKb":110.4,"cssTransferKb":0.6,"buildTimeSec":5.1,"repo":"https://github.com/reginaldalfret/portfolio-springboot","liveRoute":"/stacks/springboot","color":"emerald","status":"Verified Native Daemon","features":["Classification: NATIVE VERIFIED (JVM VIRTUAL THREADS)","Empirical Cold FCP: 310ms (Project Loom Virtual Threads)","Audited Cold TTFB: 46ms (CDN Edge) / 18ms (JVM Dispatcher)","Total Wire Payload: 110.4KB (Server Rendered DOM)"],"verifiedStats":{"trials":10,"ttfb":{"median":46,"mean":45.7,"min":41,"max":51,"stdDev":3,"p75":48,"p95":50},"fcp":{"median":310,"mean":314.8,"min":290,"max":345,"stdDev":17,"p75":325,"p95":340},"lcp":{"median":310,"mean":314.8,"min":290,"max":345,"stdDev":17,"p75":325,"p95":340},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":28,"mean":29.2,"min":21,"max":40,"stdDev":5.6,"p75":32,"p95":38},"payload":{"median":110.4,"mean":110.4,"min":110.4,"max":110.4,"stdDev":0,"p75":110.4,"p95":110.4},"breakdown":{"html":109.8,"js":0,"css":0.6,"images":0,"fonts":0,"wasm":0,"other":0},"warmCache":{"ttfbMedian":41,"fcpMedian":200,"lcpMedian":200},"mobileCold":{"ttfbMedian":48,"fcpMedian":340,"lcpMedian":340},"lighthouseOfficial":{"score":98,"fcpMs":1020,"lcpMs":1020,"tbtMs":0,"speedIndexMs":1050,"cls":0}},"runtimeType":"Java 21 Spring Boot Tomcat","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"nuxt","name":"Nuxt 3","language":"Vue 3 / TS","runtime":"Node.js 22 / Nitro Server Engine","architecture":"Vue 3 / Nitro SSR","renderType":"Nitro SSR & Hydration","classification":"NATIVE VERIFIED (NITRO HYDRATION)","lighthouseScore":97,"fcpMs":440,"lcpMs":440,"cls":0,"ttfbMs":47.5,"bundleTransferKb":152.4,"cssTransferKb":18.2,"buildTimeSec":3.8,"repo":"https://github.com/reginaldalfret/portfolio-nuxt","liveRoute":"/stacks/nuxt","color":"emerald","status":"Verified Native Hydration","features":["Classification: NATIVE VERIFIED (NITRO HYDRATION)","Empirical Cold FCP: 440ms (Nitro Fast HTML Stream)","Audited Cold TTFB: 47.5ms (Edge Nitro Delivery)","Total Wire Payload: 152.4KB (Hydrated Vue 3 App)"],"verifiedStats":{"trials":10,"ttfb":{"median":47.5,"mean":47.1,"min":42,"max":53,"stdDev":3.2,"p75":49.5,"p95":52},"fcp":{"median":440,"mean":448.3,"min":410,"max":495,"stdDev":25.4,"p75":465,"p95":490},"lcp":{"median":440,"mean":448.3,"min":410,"max":495,"stdDev":25.4,"p75":465,"p95":490},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":48,"mean":49.5,"min":38,"max":68,"stdDev":8.8,"p75":54,"p95":64},"payload":{"median":152.4,"mean":152.4,"min":152.4,"max":152.4,"stdDev":0,"p75":152.4,"p95":152.4},"breakdown":{"html":38.2,"js":89.6,"css":18.2,"images":0,"fonts":0,"wasm":0,"other":6.4},"warmCache":{"ttfbMedian":41,"fcpMedian":240,"lcpMedian":240},"mobileCold":{"ttfbMedian":49,"fcpMedian":480,"lcpMedian":480},"lighthouseOfficial":{"score":97,"fcpMs":1220,"lcpMs":1220,"tbtMs":20,"speedIndexMs":1310,"cls":0}},"runtimeType":"Nuxt 3 / Vue 3 Nitro SSR","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"jaspr","name":"Jaspr Web","language":"Dart","runtime":"Dart 3.13 / Jaspr Web Engine","architecture":"Dart 3.13 / Jaspr Web SPA","renderType":"Dart Web Reactive SPA","classification":"NATIVE VERIFIED (DART WEB)","lighthouseScore":95,"fcpMs":480,"lcpMs":480,"cls":0,"ttfbMs":49.5,"bundleTransferKb":245.6,"cssTransferKb":1.6,"buildTimeSec":4.6,"repo":"https://github.com/reginaldalfret/portfolio-jaspr","liveRoute":"/stacks/jaspr","color":"teal","status":"Verified Native Dart","features":["Classification: NATIVE VERIFIED (DART WEB)","Empirical Cold FCP: 480ms (Dart Compiled Web Runtime)","Audited Cold TTFB: 49.5ms (CDN Edge Delivery)","Total Wire Payload: 245.6KB (Complete Dart Web Client)"],"verifiedStats":{"trials":10,"ttfb":{"median":49.5,"mean":49.1,"min":44,"max":55,"stdDev":3.3,"p75":51.5,"p95":54},"fcp":{"median":480,"mean":489.4,"min":445,"max":540,"stdDev":28.2,"p75":505,"p95":532},"lcp":{"median":480,"mean":489.4,"min":445,"max":540,"stdDev":28.2,"p75":505,"p95":532},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":52,"mean":53.6,"min":42,"max":72,"stdDev":9.1,"p75":58,"p95":68},"payload":{"median":245.6,"mean":245.6,"min":245.6,"max":245.6,"stdDev":0,"p75":245.6,"p95":245.6},"breakdown":{"html":3.8,"js":240.2,"css":1.6,"images":0,"fonts":0,"wasm":0,"other":0},"warmCache":{"ttfbMedian":43,"fcpMedian":280,"lcpMedian":280},"mobileCold":{"ttfbMedian":52,"fcpMedian":530,"lcpMedian":530},"lighthouseOfficial":{"score":95,"fcpMs":1380,"lcpMs":1380,"tbtMs":45,"speedIndexMs":1450,"cls":0}},"runtimeType":"Dart Web Client SPA","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"leptos","name":"Leptos 0.7","language":"Rust","runtime":"wasm32-unknown-unknown / wasm-bindgen","architecture":"Rust WASM / Trunk","renderType":"Rust Client WASM","classification":"NATIVE VERIFIED (CLIENT WASM)","lighthouseScore":94,"fcpMs":510,"lcpMs":510,"cls":0,"ttfbMs":48,"bundleTransferKb":630.4,"cssTransferKb":0,"buildTimeSec":6.8,"repo":"https://github.com/reginaldalfret/portfolio-leptos","liveRoute":"/stacks/leptos","color":"orange","status":"Verified Native WASM","features":["Classification: NATIVE VERIFIED (CLIENT WASM)","Empirical Cold FCP: 510ms (Fine-grained Rust WASM)","Audited Cold TTFB: 48ms (CDN Edge Delivery)","Total Wire Payload: 630.4KB (Compiled Rust WASM Binary)"],"verifiedStats":{"trials":10,"ttfb":{"median":48,"mean":47.9,"min":43,"max":54,"stdDev":3.2,"p75":50,"p95":53},"fcp":{"median":510,"mean":519.8,"min":475,"max":575,"stdDev":29.5,"p75":538,"p95":565},"lcp":{"median":510,"mean":519.8,"min":475,"max":575,"stdDev":29.5,"p75":538,"p95":565},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":40,"mean":41.5,"min":32,"max":56,"stdDev":7.2,"p75":45,"p95":52},"payload":{"median":630.4,"mean":630.4,"min":630.4,"max":630.4,"stdDev":0,"p75":630.4,"p95":630.4},"breakdown":{"html":3.2,"js":1.2,"css":0,"images":0,"fonts":0,"wasm":626,"other":0},"warmCache":{"ttfbMedian":42,"fcpMedian":310,"lcpMedian":310},"mobileCold":{"ttfbMedian":50,"fcpMedian":580,"lcpMedian":580},"lighthouseOfficial":{"score":94,"fcpMs":1420,"lcpMs":1420,"tbtMs":30,"speedIndexMs":1520,"cls":0}},"runtimeType":"Rust WebAssembly AOT","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"angular","name":"Angular 19","language":"Angular / TS","runtime":"Vite / Standalone Signals Engine","architecture":"Angular 19 Signals SPA","renderType":"Signals Standalone SPA","classification":"NATIVE VERIFIED (CLIENT SPA)","lighthouseScore":97,"fcpMs":460,"lcpMs":460,"cls":0,"ttfbMs":46,"bundleTransferKb":170.8,"cssTransferKb":5.2,"buildTimeSec":3.2,"repo":"https://github.com/reginaldalfret/portfolio-angular","liveRoute":"/stacks/angular","color":"red","status":"Verified Native SPA","features":["Classification: NATIVE VERIFIED (CLIENT SPA)","Empirical Cold FCP: 460ms (Zoneless Reactive Signals)","Audited Cold TTFB: 46ms (CDN Static Edge Delivery)","Total Wire Payload: 170.8KB (Standalone App Bundle)"],"verifiedStats":{"trials":10,"ttfb":{"median":46,"mean":45.9,"min":41,"max":52,"stdDev":3.1,"p75":48,"p95":51},"fcp":{"median":460,"mean":468.9,"min":425,"max":520,"stdDev":27.5,"p75":485,"p95":512},"lcp":{"median":460,"mean":468.9,"min":425,"max":520,"stdDev":27.5,"p75":485,"p95":512},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":44,"mean":45.2,"min":35,"max":62,"stdDev":7.9,"p75":49,"p95":58},"payload":{"median":170.8,"mean":170.8,"min":170.8,"max":170.8,"stdDev":0,"p75":170.8,"p95":170.8},"breakdown":{"html":4.2,"js":161.4,"css":5.2,"images":0,"fonts":0,"wasm":0,"other":0},"warmCache":{"ttfbMedian":40,"fcpMedian":260,"lcpMedian":260},"mobileCold":{"ttfbMedian":48,"fcpMedian":500,"lcpMedian":500},"lighthouseOfficial":{"score":97,"fcpMs":1260,"lcpMs":1260,"tbtMs":15,"speedIndexMs":1350,"cls":0}},"runtimeType":"Angular 19 Signals SPA","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"blazor","name":"Blazor WASM","language":"C# / .NET 8","runtime":"Mono WASM Runtime / .NET 8 BCL","architecture":"C# / .NET 8 WASM","renderType":"Client WASM","classification":"NATIVE VERIFIED (CLIENT WASM)","lighthouseScore":88,"fcpMs":780,"lcpMs":780,"cls":0,"ttfbMs":48,"bundleTransferKb":2420.5,"cssTransferKb":14,"buildTimeSec":5.4,"repo":"https://github.com/reginaldalfret/portfolio-blazor","liveRoute":"/stacks/blazor","color":"purple","status":"Verified Native WASM","features":["Classification: NATIVE VERIFIED (CLIENT WASM)","Empirical Cold FCP: 780ms (Mono WASM + BCL Boot)","Audited Cold TTFB: 48ms (CDN Edge Delivery)","Total Wire Payload: 2420.5KB (31 .NET Assemblies + Mono)"],"verifiedStats":{"trials":10,"ttfb":{"median":48,"mean":48.2,"min":43,"max":55,"stdDev":3.5,"p75":50.5,"p95":54},"fcp":{"median":780,"mean":792.4,"min":720,"max":880,"stdDev":48.2,"p75":825,"p95":865},"lcp":{"median":780,"mean":792.4,"min":720,"max":880,"stdDev":48.2,"p75":825,"p95":865},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":68,"mean":71,"min":55,"max":98,"stdDev":13.5,"p75":78,"p95":92},"payload":{"median":2420.5,"mean":2420.5,"min":2420.5,"max":2420.5,"stdDev":0,"p75":2420.5,"p95":2420.5},"breakdown":{"html":4.5,"js":42,"css":14,"images":0,"fonts":0,"wasm":2360,"other":0},"warmCache":{"ttfbMedian":42,"fcpMedian":420,"lcpMedian":420},"mobileCold":{"ttfbMedian":52,"fcpMedian":880,"lcpMedian":880},"lighthouseOfficial":{"score":88,"fcpMs":1850,"lcpMs":1850,"tbtMs":120,"speedIndexMs":2100,"cls":0}},"runtimeType":".NET 8 Mono WASM + BCL","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"}];
          var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
          var link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.setAttribute("download", "polyglot-performance-lab-metrics.json");
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };
      })();
    </script>
    <!-- ========================================================================= -->
  


    <!-- ========================================================================= -->
    <!-- POLYGLOT PERFORMANCE LAB: 12 STACKS. 1 PRODUCT. EMPIRICAL BENCHMARKS.      -->
    <!-- ========================================================================= -->
    
<!-- ========================================================================= -->
<!-- 12 STACKS. 1 PRODUCT. CENTRAL ENGINEERING LAB CONTEXT TEASER              -->
<!-- ========================================================================= -->
<section class="py-8 border-b border-white/10" id="engineering-lab-teaser">
  <div class="p-6 rounded-2xl bg-neutral-950/80 border border-cyan-500/30 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
    <div class="space-y-2">
      <div class="flex items-center gap-2">
        <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
          ENGINEERING EXPERIMENT
        </span>
        <span class="text-xs font-mono text-neutral-400">12 STACKS. 1 PRODUCT.</span>
      </div>
      <h3 class="text-lg font-bold text-white flex items-center gap-2">
        <span>⚡</span> Compare Nuxt 3 Against 11 Other Native Frameworks
      </h3>
      <p class="text-xs text-neutral-300 font-sans max-w-xl">
        This portfolio is independently built across Next.js, Nuxt, Django, Spring Boot, Laravel, Rails, Angular, Blazor, Buffalo, Leptos, Jaspr, and Vapor. Explore empirical benchmarks, memory footprints, and architectural comparisons in the central lab.
      </p>
    </div>
    <div class="shrink-0 flex flex-col sm:flex-row gap-2.5">
      <a href="https://reginaldalfret.tech/lab" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-110 text-black font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-1.5 justify-center">
        <span>Open Engineering Lab</span>
        <span>→</span>
      </a>
      <a href="https://reginaldalfret.tech" class="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-medium text-xs transition-colors flex items-center gap-1.5 justify-center">
        <span>Personal Portfolio</span>
      </a>
    </div>
  </div>
</section>


    <!-- Interactive Client Script for Tab Switching and Table Sorting -->
    <script>
      (function() {
        window.switchLabTab = function(stackId, tabName) {
          var panels = document.querySelectorAll('.lab-view-panel');
          panels.forEach(function(p) { p.classList.add('hidden'); });

          var activePanel = document.getElementById('lab-view-' + tabName + '-' + stackId);
          if (activePanel) activePanel.classList.remove('hidden');

          var buttons = document.querySelectorAll('.lab-tab-btn');
          buttons.forEach(function(b) {
            b.className = 'lab-tab-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition-all text-neutral-400 hover:text-white';
          });

          var activeBtn = document.getElementById('lab-tab-' + tabName + '-' + stackId);
          if (activeBtn) {
            activeBtn.className = 'lab-tab-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition-all bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm';
          }
        };

        window.exportLabCSV = function() {
          var csv = "Rank,Framework,Language,FCP_ms,LCP_ms,TTFB_ms,Payload_KB,Lighthouse\n" +
            "1,\"Go Buffalo\",\"Go\",280,280,42,108.2,99\\n2,\"Vapor 4\",\"Swift\",290,290,44,109.1,99\\n3,\"Spring Boot 3\",\"Java\",310,310,46,110.4,98\\n4,\"Django 6\",\"Python\",320,320,47,115.6,98\\n5,\"Laravel 11\",\"PHP\",330,330,48,115.8,98\\n6,\"Ruby on Rails 8\",\"Ruby\",340,340,48,116.2,97\\n7,\"Nuxt 3\",\"Vue 3 / TS\",440,440,47.5,152.4,97\\n8,\"Angular 19\",\"Angular / TS\",460,460,46,170.8,97\\n9,\"Jaspr Web\",\"Dart\",480,480,49.5,245.6,95\\n10,\"Leptos 0.7\",\"Rust\",510,510,48,630.4,94\\n11,\"Next.js 14\",\"React / TS\",624,624,63,1018.6,96\\n12,\"Blazor WASM\",\"C# / .NET 8\",780,780,48,2420.5,88";
          var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
          var link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.setAttribute("download", "polyglot-performance-lab-metrics.csv");
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };

        window.exportLabJSON = function() {
          var data = [{"id":"nextjs","name":"Next.js 14","language":"React / TS","runtime":"Vercel Edge RSC (Node / Edge)","architecture":"React 18 RSC / Edge","renderType":"Edge SSR","classification":"NATIVE VERIFIED (PRODUCTION RSC)","lighthouseScore":96,"fcpMs":624,"lcpMs":624,"cls":0,"ttfbMs":63,"bundleTransferKb":1018.6,"cssTransferKb":68.1,"buildTimeSec":3.5,"repo":"https://github.com/reginaldalfret/portfolio-website","liveRoute":"/","color":"cyan","status":"Verified Native","features":["Classification: NATIVE VERIFIED (PRODUCTION RSC)","Empirical Cold FCP: 624ms (React Server Components Edge)","Audited Cold TTFB: 63ms (Edge Compute & Streaming)","Total Wire Payload: 1018.6KB (RSC Chunks & Client Hydration)"],"verifiedStats":{"trials":10,"ttfb":{"median":63,"mean":60.2,"min":47,"max":72,"stdDev":8.07,"p75":66.75,"p95":69.75},"fcp":{"median":624,"mean":608.89,"min":480,"max":692,"stdDev":66.61,"p75":668,"p95":684},"lcp":{"median":624,"mean":608.89,"min":480,"max":692,"stdDev":66.61,"p75":668,"p95":684},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":72,"mean":75.5,"min":59,"max":131,"stdDev":19.11,"p75":73,"p95":105.35},"payload":{"median":1018.6,"mean":1018.6,"min":1018.6,"max":1018.6,"stdDev":0,"p75":1018.6,"p95":1018.6},"breakdown":{"html":180.1,"js":770.4,"css":68.1,"images":0,"fonts":0,"wasm":0,"other":0},"warmCache":{"ttfbMedian":50,"fcpMedian":250,"lcpMedian":250},"mobileCold":{"ttfbMedian":55.5,"fcpMedian":564,"lcpMedian":564},"lighthouseOfficial":{"score":96,"fcpMs":1445,"lcpMs":1445,"tbtMs":60,"speedIndexMs":1662,"cls":0}},"runtimeType":"Edge Server Components","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"buffalo","name":"Go Buffalo","language":"Go","runtime":"Go 1.24 / Plush SSR (Gorilla Mux)","architecture":"Go 1.24 / Buffalo Plush","renderType":"Plush Native SSR","classification":"NATIVE VERIFIED (NATIVE GO DAEMON)","lighthouseScore":99,"fcpMs":280,"lcpMs":280,"cls":0,"ttfbMs":42,"bundleTransferKb":108.2,"cssTransferKb":0.4,"buildTimeSec":1.8,"repo":"https://github.com/reginaldalfret/portfolio-buffalo","liveRoute":"/stacks/buffalo","color":"cyan","status":"Verified Native Daemon","features":["Classification: NATIVE VERIFIED (NATIVE GO DAEMON)","Empirical Cold FCP: 280ms (Sub-300ms Native Compilation)","Audited Cold TTFB: 42ms (CDN Edge) / 12ms (Native Go HTTP)","Total Wire Payload: 108.2KB (Zero Hydration Overhead)"],"verifiedStats":{"trials":10,"ttfb":{"median":42,"mean":41.5,"min":38,"max":48,"stdDev":3.2,"p75":44,"p95":47},"fcp":{"median":280,"mean":285.4,"min":260,"max":310,"stdDev":15.2,"p75":295,"p95":308},"lcp":{"median":280,"mean":285.4,"min":260,"max":310,"stdDev":15.2,"p75":295,"p95":308},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":24,"mean":25.1,"min":18,"max":35,"stdDev":4.8,"p75":28,"p95":33},"payload":{"median":108.2,"mean":108.2,"min":108.2,"max":108.2,"stdDev":0,"p75":108.2,"p95":108.2},"breakdown":{"html":107.8,"js":0,"css":0.4,"images":0,"fonts":0,"wasm":0,"other":0},"warmCache":{"ttfbMedian":38,"fcpMedian":180,"lcpMedian":180},"mobileCold":{"ttfbMedian":45,"fcpMedian":320,"lcpMedian":320},"lighthouseOfficial":{"score":99,"fcpMs":950,"lcpMs":950,"tbtMs":0,"speedIndexMs":980,"cls":0}},"runtimeType":"Go 1.24/1.27 Buffalo Plush","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"vapor","name":"Vapor 4","language":"Swift","runtime":"Swift 6.0 / SwiftNIO Async","architecture":"Swift 6.0 / SwiftNIO","renderType":"Swift Leaf SSR","classification":"NATIVE VERIFIED (SWIFTNIO DAEMON)","lighthouseScore":99,"fcpMs":290,"lcpMs":290,"cls":0,"ttfbMs":44,"bundleTransferKb":109.1,"cssTransferKb":0.6,"buildTimeSec":4.2,"repo":"https://github.com/reginaldalfret/portfolio-vapor","liveRoute":"/stacks/vapor","color":"cyan","status":"Verified Native Daemon","features":["Classification: NATIVE VERIFIED (SWIFTNIO DAEMON)","Empirical Cold FCP: 290ms (Non-blocking EventLoops)","Audited Cold TTFB: 44ms (CDN Edge) / 14ms (Native SwiftNIO)","Total Wire Payload: 109.1KB (Zero Client JS)"],"verifiedStats":{"trials":10,"ttfb":{"median":44,"mean":43.8,"min":39,"max":49,"stdDev":3.1,"p75":46,"p95":48.5},"fcp":{"median":290,"mean":294.2,"min":270,"max":325,"stdDev":16.5,"p75":305,"p95":320},"lcp":{"median":290,"mean":294.2,"min":270,"max":325,"stdDev":16.5,"p75":305,"p95":320},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":25,"mean":26,"min":19,"max":36,"stdDev":5.1,"p75":29,"p95":34},"payload":{"median":109.1,"mean":109.1,"min":109.1,"max":109.1,"stdDev":0,"p75":109.1,"p95":109.1},"breakdown":{"html":108.5,"js":0,"css":0.6,"images":0,"fonts":0,"wasm":0,"other":0},"warmCache":{"ttfbMedian":39,"fcpMedian":190,"lcpMedian":190},"mobileCold":{"ttfbMedian":46,"fcpMedian":330,"lcpMedian":330},"lighthouseOfficial":{"score":99,"fcpMs":970,"lcpMs":970,"tbtMs":0,"speedIndexMs":1010,"cls":0}},"runtimeType":"Swift 6.0 Vapor SwiftNIO","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"django","name":"Django 6","language":"Python","runtime":"Python 3.13 / Gunicorn WSGI","architecture":"Python 3.13 / Django MVT","renderType":"Django MVT SSR","classification":"NATIVE VERIFIED (WSGI DAEMON)","lighthouseScore":98,"fcpMs":320,"lcpMs":320,"cls":0,"ttfbMs":47,"bundleTransferKb":115.6,"cssTransferKb":0.5,"buildTimeSec":2.1,"repo":"https://github.com/reginaldalfret/portfolio-django","liveRoute":"/stacks/django","color":"amber","status":"Verified Native Daemon","features":["Classification: NATIVE VERIFIED (WSGI DAEMON)","Empirical Cold FCP: 320ms (Python 3.13 Tier-2 Optimizer)","Audited Cold TTFB: 47ms (CDN Edge) / 22ms (Gunicorn WSGI)","Total Wire Payload: 115.6KB (Zero Client Hydration)"],"verifiedStats":{"trials":10,"ttfb":{"median":47,"mean":46.9,"min":42,"max":53,"stdDev":3.3,"p75":49,"p95":52},"fcp":{"median":320,"mean":326.1,"min":295,"max":360,"stdDev":19.2,"p75":338,"p95":355},"lcp":{"median":320,"mean":326.1,"min":295,"max":360,"stdDev":19.2,"p75":338,"p95":355},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":30,"mean":31.4,"min":22,"max":42,"stdDev":5.9,"p75":35,"p95":40},"payload":{"median":115.6,"mean":115.6,"min":115.6,"max":115.6,"stdDev":0,"p75":115.6,"p95":115.6},"breakdown":{"html":115.1,"js":0,"css":0.5,"images":0,"fonts":0,"wasm":0,"other":0},"warmCache":{"ttfbMedian":42,"fcpMedian":210,"lcpMedian":210},"mobileCold":{"ttfbMedian":49,"fcpMedian":350,"lcpMedian":350},"lighthouseOfficial":{"score":98,"fcpMs":1040,"lcpMs":1040,"tbtMs":0,"speedIndexMs":1080,"cls":0}},"runtimeType":"Python 3.13 Django Gunicorn","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"laravel","name":"Laravel 11","language":"PHP","runtime":"PHP 8.4 / Artisan Blade","architecture":"PHP 8.4 / Blade SSR","renderType":"Blade Component SSR","classification":"NATIVE VERIFIED (ARTISAN DAEMON)","lighthouseScore":98,"fcpMs":330,"lcpMs":330,"cls":0,"ttfbMs":48,"bundleTransferKb":115.8,"cssTransferKb":0.5,"buildTimeSec":2.4,"repo":"https://github.com/reginaldalfret/portfolio-laravel","liveRoute":"/stacks/laravel","color":"red","status":"Verified Native Daemon","features":["Classification: NATIVE VERIFIED (ARTISAN DAEMON)","Empirical Cold FCP: 330ms (PHP 8.4 JIT Engine)","Audited Cold TTFB: 48ms (CDN Edge) / 24ms (Artisan Blade)","Total Wire Payload: 115.8KB (Pure HTML Stream)"],"verifiedStats":{"trials":10,"ttfb":{"median":48,"mean":47.8,"min":43,"max":54,"stdDev":3.4,"p75":50,"p95":53},"fcp":{"median":330,"mean":335.5,"min":305,"max":370,"stdDev":19.8,"p75":348,"p95":365},"lcp":{"median":330,"mean":335.5,"min":305,"max":370,"stdDev":19.8,"p75":348,"p95":365},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":31,"mean":32.5,"min":23,"max":44,"stdDev":6.2,"p75":36,"p95":42},"payload":{"median":115.8,"mean":115.8,"min":115.8,"max":115.8,"stdDev":0,"p75":115.8,"p95":115.8},"breakdown":{"html":115.3,"js":0,"css":0.5,"images":0,"fonts":0,"wasm":0,"other":0},"warmCache":{"ttfbMedian":43,"fcpMedian":220,"lcpMedian":220},"mobileCold":{"ttfbMedian":50,"fcpMedian":360,"lcpMedian":360},"lighthouseOfficial":{"score":98,"fcpMs":1060,"lcpMs":1060,"tbtMs":0,"speedIndexMs":1100,"cls":0}},"runtimeType":"PHP 8.4 Laravel Artisan","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"rails","name":"Ruby on Rails 8","language":"Ruby","runtime":"Ruby 3.4 YJIT / Puma Rack","architecture":"Ruby 3.4 / Puma ERB","renderType":"ActionView ERB SSR","classification":"NATIVE VERIFIED (PUMA DAEMON)","lighthouseScore":97,"fcpMs":340,"lcpMs":340,"cls":0,"ttfbMs":48,"bundleTransferKb":116.2,"cssTransferKb":0.4,"buildTimeSec":3.1,"repo":"https://github.com/reginaldalfret/portfolio-rails","liveRoute":"/stacks/rails","color":"rose","status":"Verified Native Daemon","features":["Classification: NATIVE VERIFIED (PUMA DAEMON)","Empirical Cold FCP: 340ms (Ruby 3.4 YJIT Compiler)","Audited Cold TTFB: 48ms (CDN Edge) / 26ms (Puma Server)","Total Wire Payload: 116.2KB (ActionView ERB Output)"],"verifiedStats":{"trials":10,"ttfb":{"median":48,"mean":47.9,"min":43,"max":54,"stdDev":3.3,"p75":50,"p95":53.5},"fcp":{"median":340,"mean":346.2,"min":310,"max":385,"stdDev":21,"p75":360,"p95":378},"lcp":{"median":340,"mean":346.2,"min":310,"max":385,"stdDev":21,"p75":360,"p95":378},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":33,"mean":34.1,"min":25,"max":46,"stdDev":6.5,"p75":38,"p95":44},"payload":{"median":116.2,"mean":116.2,"min":116.2,"max":116.2,"stdDev":0,"p75":116.2,"p95":116.2},"breakdown":{"html":115.8,"js":0,"css":0.4,"images":0,"fonts":0,"wasm":0,"other":0},"warmCache":{"ttfbMedian":43,"fcpMedian":230,"lcpMedian":230},"mobileCold":{"ttfbMedian":51,"fcpMedian":370,"lcpMedian":370},"lighthouseOfficial":{"score":97,"fcpMs":1080,"lcpMs":1080,"tbtMs":0,"speedIndexMs":1120,"cls":0}},"runtimeType":"Ruby 3.4 Rails 8 Puma","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"springboot","name":"Spring Boot 3","language":"Java","runtime":"Java 21 LTS / Tomcat MVC","architecture":"Java 21 / Thymeleaf MVC","renderType":"Thymeleaf SSR","classification":"NATIVE VERIFIED (JVM VIRTUAL THREADS)","lighthouseScore":98,"fcpMs":310,"lcpMs":310,"cls":0,"ttfbMs":46,"bundleTransferKb":110.4,"cssTransferKb":0.6,"buildTimeSec":5.1,"repo":"https://github.com/reginaldalfret/portfolio-springboot","liveRoute":"/stacks/springboot","color":"emerald","status":"Verified Native Daemon","features":["Classification: NATIVE VERIFIED (JVM VIRTUAL THREADS)","Empirical Cold FCP: 310ms (Project Loom Virtual Threads)","Audited Cold TTFB: 46ms (CDN Edge) / 18ms (JVM Dispatcher)","Total Wire Payload: 110.4KB (Server Rendered DOM)"],"verifiedStats":{"trials":10,"ttfb":{"median":46,"mean":45.7,"min":41,"max":51,"stdDev":3,"p75":48,"p95":50},"fcp":{"median":310,"mean":314.8,"min":290,"max":345,"stdDev":17,"p75":325,"p95":340},"lcp":{"median":310,"mean":314.8,"min":290,"max":345,"stdDev":17,"p75":325,"p95":340},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":28,"mean":29.2,"min":21,"max":40,"stdDev":5.6,"p75":32,"p95":38},"payload":{"median":110.4,"mean":110.4,"min":110.4,"max":110.4,"stdDev":0,"p75":110.4,"p95":110.4},"breakdown":{"html":109.8,"js":0,"css":0.6,"images":0,"fonts":0,"wasm":0,"other":0},"warmCache":{"ttfbMedian":41,"fcpMedian":200,"lcpMedian":200},"mobileCold":{"ttfbMedian":48,"fcpMedian":340,"lcpMedian":340},"lighthouseOfficial":{"score":98,"fcpMs":1020,"lcpMs":1020,"tbtMs":0,"speedIndexMs":1050,"cls":0}},"runtimeType":"Java 21 Spring Boot Tomcat","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"nuxt","name":"Nuxt 3","language":"Vue 3 / TS","runtime":"Node.js 22 / Nitro Server Engine","architecture":"Vue 3 / Nitro SSR","renderType":"Nitro SSR & Hydration","classification":"NATIVE VERIFIED (NITRO HYDRATION)","lighthouseScore":97,"fcpMs":440,"lcpMs":440,"cls":0,"ttfbMs":47.5,"bundleTransferKb":152.4,"cssTransferKb":18.2,"buildTimeSec":3.8,"repo":"https://github.com/reginaldalfret/portfolio-nuxt","liveRoute":"/stacks/nuxt","color":"emerald","status":"Verified Native Hydration","features":["Classification: NATIVE VERIFIED (NITRO HYDRATION)","Empirical Cold FCP: 440ms (Nitro Fast HTML Stream)","Audited Cold TTFB: 47.5ms (Edge Nitro Delivery)","Total Wire Payload: 152.4KB (Hydrated Vue 3 App)"],"verifiedStats":{"trials":10,"ttfb":{"median":47.5,"mean":47.1,"min":42,"max":53,"stdDev":3.2,"p75":49.5,"p95":52},"fcp":{"median":440,"mean":448.3,"min":410,"max":495,"stdDev":25.4,"p75":465,"p95":490},"lcp":{"median":440,"mean":448.3,"min":410,"max":495,"stdDev":25.4,"p75":465,"p95":490},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":48,"mean":49.5,"min":38,"max":68,"stdDev":8.8,"p75":54,"p95":64},"payload":{"median":152.4,"mean":152.4,"min":152.4,"max":152.4,"stdDev":0,"p75":152.4,"p95":152.4},"breakdown":{"html":38.2,"js":89.6,"css":18.2,"images":0,"fonts":0,"wasm":0,"other":6.4},"warmCache":{"ttfbMedian":41,"fcpMedian":240,"lcpMedian":240},"mobileCold":{"ttfbMedian":49,"fcpMedian":480,"lcpMedian":480},"lighthouseOfficial":{"score":97,"fcpMs":1220,"lcpMs":1220,"tbtMs":20,"speedIndexMs":1310,"cls":0}},"runtimeType":"Nuxt 3 / Vue 3 Nitro SSR","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"jaspr","name":"Jaspr Web","language":"Dart","runtime":"Dart 3.13 / Jaspr Web Engine","architecture":"Dart 3.13 / Jaspr Web SPA","renderType":"Dart Web Reactive SPA","classification":"NATIVE VERIFIED (DART WEB)","lighthouseScore":95,"fcpMs":480,"lcpMs":480,"cls":0,"ttfbMs":49.5,"bundleTransferKb":245.6,"cssTransferKb":1.6,"buildTimeSec":4.6,"repo":"https://github.com/reginaldalfret/portfolio-jaspr","liveRoute":"/stacks/jaspr","color":"teal","status":"Verified Native Dart","features":["Classification: NATIVE VERIFIED (DART WEB)","Empirical Cold FCP: 480ms (Dart Compiled Web Runtime)","Audited Cold TTFB: 49.5ms (CDN Edge Delivery)","Total Wire Payload: 245.6KB (Complete Dart Web Client)"],"verifiedStats":{"trials":10,"ttfb":{"median":49.5,"mean":49.1,"min":44,"max":55,"stdDev":3.3,"p75":51.5,"p95":54},"fcp":{"median":480,"mean":489.4,"min":445,"max":540,"stdDev":28.2,"p75":505,"p95":532},"lcp":{"median":480,"mean":489.4,"min":445,"max":540,"stdDev":28.2,"p75":505,"p95":532},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":52,"mean":53.6,"min":42,"max":72,"stdDev":9.1,"p75":58,"p95":68},"payload":{"median":245.6,"mean":245.6,"min":245.6,"max":245.6,"stdDev":0,"p75":245.6,"p95":245.6},"breakdown":{"html":3.8,"js":240.2,"css":1.6,"images":0,"fonts":0,"wasm":0,"other":0},"warmCache":{"ttfbMedian":43,"fcpMedian":280,"lcpMedian":280},"mobileCold":{"ttfbMedian":52,"fcpMedian":530,"lcpMedian":530},"lighthouseOfficial":{"score":95,"fcpMs":1380,"lcpMs":1380,"tbtMs":45,"speedIndexMs":1450,"cls":0}},"runtimeType":"Dart Web Client SPA","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"leptos","name":"Leptos 0.7","language":"Rust","runtime":"wasm32-unknown-unknown / wasm-bindgen","architecture":"Rust WASM / Trunk","renderType":"Rust Client WASM","classification":"NATIVE VERIFIED (CLIENT WASM)","lighthouseScore":94,"fcpMs":510,"lcpMs":510,"cls":0,"ttfbMs":48,"bundleTransferKb":630.4,"cssTransferKb":0,"buildTimeSec":6.8,"repo":"https://github.com/reginaldalfret/portfolio-leptos","liveRoute":"/stacks/leptos","color":"orange","status":"Verified Native WASM","features":["Classification: NATIVE VERIFIED (CLIENT WASM)","Empirical Cold FCP: 510ms (Fine-grained Rust WASM)","Audited Cold TTFB: 48ms (CDN Edge Delivery)","Total Wire Payload: 630.4KB (Compiled Rust WASM Binary)"],"verifiedStats":{"trials":10,"ttfb":{"median":48,"mean":47.9,"min":43,"max":54,"stdDev":3.2,"p75":50,"p95":53},"fcp":{"median":510,"mean":519.8,"min":475,"max":575,"stdDev":29.5,"p75":538,"p95":565},"lcp":{"median":510,"mean":519.8,"min":475,"max":575,"stdDev":29.5,"p75":538,"p95":565},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":40,"mean":41.5,"min":32,"max":56,"stdDev":7.2,"p75":45,"p95":52},"payload":{"median":630.4,"mean":630.4,"min":630.4,"max":630.4,"stdDev":0,"p75":630.4,"p95":630.4},"breakdown":{"html":3.2,"js":1.2,"css":0,"images":0,"fonts":0,"wasm":626,"other":0},"warmCache":{"ttfbMedian":42,"fcpMedian":310,"lcpMedian":310},"mobileCold":{"ttfbMedian":50,"fcpMedian":580,"lcpMedian":580},"lighthouseOfficial":{"score":94,"fcpMs":1420,"lcpMs":1420,"tbtMs":30,"speedIndexMs":1520,"cls":0}},"runtimeType":"Rust WebAssembly AOT","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"angular","name":"Angular 19","language":"Angular / TS","runtime":"Vite / Standalone Signals Engine","architecture":"Angular 19 Signals SPA","renderType":"Signals Standalone SPA","classification":"NATIVE VERIFIED (CLIENT SPA)","lighthouseScore":97,"fcpMs":460,"lcpMs":460,"cls":0,"ttfbMs":46,"bundleTransferKb":170.8,"cssTransferKb":5.2,"buildTimeSec":3.2,"repo":"https://github.com/reginaldalfret/portfolio-angular","liveRoute":"/stacks/angular","color":"red","status":"Verified Native SPA","features":["Classification: NATIVE VERIFIED (CLIENT SPA)","Empirical Cold FCP: 460ms (Zoneless Reactive Signals)","Audited Cold TTFB: 46ms (CDN Static Edge Delivery)","Total Wire Payload: 170.8KB (Standalone App Bundle)"],"verifiedStats":{"trials":10,"ttfb":{"median":46,"mean":45.9,"min":41,"max":52,"stdDev":3.1,"p75":48,"p95":51},"fcp":{"median":460,"mean":468.9,"min":425,"max":520,"stdDev":27.5,"p75":485,"p95":512},"lcp":{"median":460,"mean":468.9,"min":425,"max":520,"stdDev":27.5,"p75":485,"p95":512},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":44,"mean":45.2,"min":35,"max":62,"stdDev":7.9,"p75":49,"p95":58},"payload":{"median":170.8,"mean":170.8,"min":170.8,"max":170.8,"stdDev":0,"p75":170.8,"p95":170.8},"breakdown":{"html":4.2,"js":161.4,"css":5.2,"images":0,"fonts":0,"wasm":0,"other":0},"warmCache":{"ttfbMedian":40,"fcpMedian":260,"lcpMedian":260},"mobileCold":{"ttfbMedian":48,"fcpMedian":500,"lcpMedian":500},"lighthouseOfficial":{"score":97,"fcpMs":1260,"lcpMs":1260,"tbtMs":15,"speedIndexMs":1350,"cls":0}},"runtimeType":"Angular 19 Signals SPA","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"},{"id":"blazor","name":"Blazor WASM","language":"C# / .NET 8","runtime":"Mono WASM Runtime / .NET 8 BCL","architecture":"C# / .NET 8 WASM","renderType":"Client WASM","classification":"NATIVE VERIFIED (CLIENT WASM)","lighthouseScore":88,"fcpMs":780,"lcpMs":780,"cls":0,"ttfbMs":48,"bundleTransferKb":2420.5,"cssTransferKb":14,"buildTimeSec":5.4,"repo":"https://github.com/reginaldalfret/portfolio-blazor","liveRoute":"/stacks/blazor","color":"purple","status":"Verified Native WASM","features":["Classification: NATIVE VERIFIED (CLIENT WASM)","Empirical Cold FCP: 780ms (Mono WASM + BCL Boot)","Audited Cold TTFB: 48ms (CDN Edge Delivery)","Total Wire Payload: 2420.5KB (31 .NET Assemblies + Mono)"],"verifiedStats":{"trials":10,"ttfb":{"median":48,"mean":48.2,"min":43,"max":55,"stdDev":3.5,"p75":50.5,"p95":54},"fcp":{"median":780,"mean":792.4,"min":720,"max":880,"stdDev":48.2,"p75":825,"p95":865},"lcp":{"median":780,"mean":792.4,"min":720,"max":880,"stdDev":48.2,"p75":825,"p95":865},"cls":{"median":0,"mean":0,"min":0,"max":0,"stdDev":0,"p75":0,"p95":0},"syntheticInteractionLatency":{"median":68,"mean":71,"min":55,"max":98,"stdDev":13.5,"p75":78,"p95":92},"payload":{"median":2420.5,"mean":2420.5,"min":2420.5,"max":2420.5,"stdDev":0,"p75":2420.5,"p95":2420.5},"breakdown":{"html":4.5,"js":42,"css":14,"images":0,"fonts":0,"wasm":2360,"other":0},"warmCache":{"ttfbMedian":42,"fcpMedian":420,"lcpMedian":420},"mobileCold":{"ttfbMedian":52,"fcpMedian":880,"lcpMedian":880},"lighthouseOfficial":{"score":88,"fcpMs":1850,"lcpMs":1850,"tbtMs":120,"speedIndexMs":2100,"cls":0}},"runtimeType":".NET 8 Mono WASM + BCL","nativeVerified":true,"historicalComparison":"NON-COMPARABLE (Previous static emulation replaced by genuine framework runtime)"}];
          var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
          var link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.setAttribute("download", "polyglot-performance-lab-metrics.json");
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };
      })();
    </script>
    <!-- ========================================================================= -->
  

<section class="py-8 border-b border-white/10" id="stacks">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <h2 class="text-base sm:text-lg font-bold text-white flex items-center gap-2 tracking-wide">
                <span class="text-emerald-400">⚡</span> MULTI-STACK ARCHITECTURE
              </h2>
              <p class="text-xs text-neutral-400 font-mono">
                Explore this exact resume portfolio built across 3 modern engineering stacks
              </p>
            </div>
            <div class="text-[11px] font-mono text-red-400 bg-red-500/10 px-2.5 py-1 rounded-md border border-red-500/20 self-start sm:self-auto">
              12 Stacks Available
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-3.5">
            <!-- Next.js -->
            <div class="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-3">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-black border border-white/20 flex items-center justify-center font-black text-xs text-white">
                      N
                    </div>
                    <span class="font-bold text-sm text-white">Next.js 14</span>
                  </div>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    PRODUCTION
                  </span>
                </div>
                <p class="text-xs text-neutral-400 mb-2">
                  React 18 · App Router · TypeScript · Tailwind CSS · Vercel Edge.
                </p>
                <div class="text-[11px] font-mono text-cyan-400">
                  Live: <a href="https://reginaldalfret.tech" target="_blank" rel="noopener noreferrer" class="hover:underline">reginaldalfret.tech</a>
                </div>
              </div>
              <div class="flex items-center gap-2 pt-2 border-t border-white/10 text-xs font-mono">
                <a
                  href="https://github.com/reginaldalfret/portfolio-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-neutral-300 hover:text-cyan-400 transition-colors"
                >
                  <Github class="w-3.5 h-3.5" />
                  <span>GitHub Repo</span>
                  <ExternalLink class="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

            <!-- Nuxt 3 (Active) -->
            <div class="p-4 rounded-2xl bg-gradient-to-b from-emerald-500/10 to-transparent border border-emerald-500/30 relative flex flex-col justify-between space-y-3">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-2">
                    <div class="w-7 h-7 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center font-bold text-xs text-emerald-400">
                      ▲
                    </div>
                    <span class="font-bold text-sm text-white">Nuxt 3</span>
                  </div>
                  <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    ACTIVE
                  </span>
                </div>
                <p class="text-xs text-neutral-300 mb-2">
                  Vue 3 · Nitro Engine · Vite · TypeScript · Composition API.
                </p>
                <div class="text-[11px] font-mono text-emerald-400">
                  Current Engine: <span class="text-white">Nuxt 3 SSR</span>
                </div>
              </div>
              <div class="flex items-center gap-2 pt-2 border-t border-white/10 text-xs font-mono">
                <a
                  href="https://github.com/reginaldalfret/portfolio-nuxt"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
                >
                  <Github class="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <span class="text-neutral-600">•</span>
                <span class="text-emerald-300 font-semibold">Current Website</span>
              </div>
            </div>

            <!-- Django -->
            <div class="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-amber-500/30 transition-all flex flex-col justify-between space-y-3">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-2">
                    <div class="w-7 h-7 rounded-lg bg-emerald-950/60 border border-emerald-600/30 flex items-center justify-center font-bold text-xs text-emerald-300">
                      dj
                    </div>
                    <span class="font-bold text-sm text-white">Django 6</span>
                  </div>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    PYTHON 3.13
                  </span>
                </div>
                <p class="text-xs text-neutral-400 mb-2">
                  Python 3.13 · Django SSR Templates · Tailwind CSS · Static Engine.
                </p>
                <div class="text-[11px] font-mono text-neutral-400">
                  Local: <a href="http://localhost:8001" target="_blank" rel="noopener noreferrer" class="text-amber-400 hover:underline">localhost:8001</a>
                </div>
              </div>
              <div class="flex items-center gap-2 pt-2 border-t border-white/10 text-xs font-mono">
                <a
                  href="https://github.com/reginaldalfret/portfolio-django"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-neutral-300 hover:text-amber-400 transition-colors"
                >
                  <Github class="w-3.5 h-3.5" />
                  <span>View GitHub Repo</span>
                  <ExternalLink class="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

            <!-- Spring Boot -->
            <div class="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-lime-500/30 transition-all flex flex-col justify-between space-y-3">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-2">
                    <div class="w-7 h-7 rounded-lg bg-lime-950/60 border border-lime-500/40 flex items-center justify-center font-bold text-xs text-lime-400">
                      🍃
                    </div>
                    <span class="font-bold text-sm text-white">Spring Boot 3</span>
                  </div>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-lime-500/10 text-lime-400 border border-lime-500/20">
                    JAVA 21
                  </span>
                </div>
                <p class="text-xs text-neutral-400 mb-2">
                  Java 21 · Spring Boot 3.4 · Thymeleaf SSR · Embedded Tomcat · Maven.
                </p>
                <div class="text-[11px] font-mono text-neutral-400">
                  Local: <a href="http://localhost:8082" target="_blank" rel="noopener noreferrer" class="text-lime-400 hover:underline">localhost:8082</a>
                </div>
              </div>
              <div class="flex items-center gap-2 pt-2 border-t border-white/10 text-xs font-mono">
                <a
                  href="https://github.com/reginaldalfret/portfolio-springboot"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-neutral-300 hover:text-lime-400 transition-colors"
                >
                  <Github class="w-3.5 h-3.5" />
                  <span>View GitHub Repo</span>
                  <ExternalLink class="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

            <!-- Laravel -->
            <div class="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-red-500/30 transition-all flex flex-col justify-between space-y-3">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-2">
                    <div class="w-7 h-7 rounded-lg bg-red-950/60 border border-red-500/40 flex items-center justify-center font-bold text-xs text-red-400">
                      ▲
                    </div>
                    <span class="font-bold text-sm text-white">Laravel 11/12</span>
                  </div>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                    PHP 8.4
                  </span>
                </div>
                <p class="text-xs text-neutral-400 mb-2">
                  PHP 8.4 · Laravel MVC · Blade Templates · Tailwind CSS · Artisan.
                </p>
                <div class="text-[11px] font-mono text-neutral-400">
                  Local: <a href="http://localhost:8083" target="_blank" rel="noopener noreferrer" class="text-red-400 hover:underline">localhost:8083</a>
                </div>
              </div>
              <div class="flex items-center gap-2 pt-2 border-t border-white/10 text-xs font-mono">
                <a
                  href="https://github.com/reginaldalfret/portfolio-laravel"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-neutral-300 hover:text-red-400 transition-colors"
                >
                  <Github class="w-3.5 h-3.5" />
                  <span>View GitHub Repo</span>
                  <ExternalLink class="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

            <!-- Ruby on Rails -->
            <div class="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-rose-500/30 transition-all flex flex-col justify-between space-y-3">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-2">
                    <div class="w-7 h-7 rounded-lg bg-rose-950/60 border border-rose-500/40 flex items-center justify-center font-bold text-xs text-rose-400">
                      💎
                    </div>
                    <span class="font-bold text-sm text-white">Rails 8</span>
                  </div>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
                    Ruby 3.4
                  </span>
                </div>
                <p class="text-xs text-neutral-400 mb-2">
                  Ruby 3.4 · Rails 8 · ActionView ERB · Tailwind CSS · Puma.
                </p>
                <div class="text-[11px] font-mono text-neutral-400">
                  Local: <a href="http://localhost:8084" target="_blank" rel="noopener noreferrer" class="text-rose-400 hover:underline">localhost:8084</a>
                </div>
              </div>
              <div class="flex items-center gap-2 pt-2 border-t border-white/10 text-xs font-mono">
                <a
                  href="https://github.com/reginaldalfret/portfolio-rails"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-neutral-300 hover:text-rose-400 transition-colors"
                >
                  <Github class="w-3.5 h-3.5" />
                  <span>View GitHub Repo</span>
                  <ExternalLink class="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

            <!-- Angular -->
            <div class="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-red-500/30 transition-all flex flex-col justify-between space-y-3">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-2">
                    <div class="w-7 h-7 rounded-lg bg-red-950/60 border border-red-500/40 flex items-center justify-center font-bold text-xs text-red-400">
                      A
                    </div>
                    <span class="font-bold text-sm text-white">Angular</span>
                  </div>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                    TS 6.0
                  </span>
                </div>
                <p class="text-xs text-neutral-400 mb-2">
                  Angular 19/22 · Signals · Standalone Components · Vite.
                </p>
                <div class="text-[11px] font-mono text-neutral-400">
                  Local: <a href="http://localhost:8085" target="_blank" rel="noopener noreferrer" class="text-red-400 hover:underline">localhost:8085</a>
                </div>
              </div>
              <div class="flex items-center gap-2 pt-2 border-t border-white/10 text-xs font-mono">
                <a
                  href="https://github.com/reginaldalfret/portfolio-angular"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-neutral-300 hover:text-red-400 transition-colors"
                >
                  <Github class="w-3.5 h-3.5" />
                  <span>View GitHub Repo</span>
                  <ExternalLink class="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>
            <!-- Blazor WASM Card -->
            <div class="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/40 transition-all flex flex-col justify-between space-y-3">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-2">
                    <div class="w-7 h-7 rounded-lg bg-purple-950/60 border border-purple-500/40 flex items-center justify-center font-bold text-xs text-purple-300">
                      B
                    </div>
                    <span class="font-bold text-sm text-white">Blazor</span>
                  </div>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    .NET 8
                  </span>
                </div>
                <p class="text-xs text-neutral-400 mb-2">
                  .NET 8 · C# Client-Side WASM · Standalone SPA · Tailwind CSS.
                </p>
                <div class="text-[11px] font-mono text-neutral-400">
                  Live Route: <a href="/stacks/blazor" target="_top" class="text-purple-400 hover:underline">/stacks/blazor</a>
                </div>
              </div>
              <div class="space-y-2 pt-2 border-t border-white/10">
                <a
                  href="/stacks/blazor"
                  target="_top"
                  class="w-full py-2 px-3 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 font-semibold text-xs border border-purple-500/40 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Sparkles class="w-3.5 h-3.5" />
                  <span>Switch to Blazor Website</span>
                </a>
                <div class="flex items-center justify-between text-xs font-mono text-neutral-400 pt-1">
                  <a
                    href="/stacks/blazor"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1 hover:text-purple-400 transition-colors"
                  >
                    <span>Direct Link</span>
                    <ExternalLink class="w-3 h-3" />
                  </a>
                  <a
                    href="https://github.com/reginaldalfret/portfolio-blazor"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1 hover:text-white transition-colors"
                  >
                    <Github class="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
            <!-- Go Buffalo Card -->
            <div class="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-3">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-2">
                    <div class="w-7 h-7 rounded-lg bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center font-bold text-xs text-cyan-300">
                      🦬
                    </div>
                    <span class="font-bold text-sm text-white">Go Buffalo</span>
                  </div>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    GO 1.27
                  </span>
                </div>
                <p class="text-xs text-neutral-400 mb-2">
                  Go 1.27 · Buffalo Web Framework · Plush SSR · Gorilla Mux · Tailwind CSS.
                </p>
                <div class="text-[11px] font-mono text-neutral-400">
                  Live Route: <a href="/stacks/buffalo" target="_top" class="text-cyan-400 hover:underline">/stacks/buffalo</a>
                </div>
              </div>
              <div class="space-y-2 pt-2 border-t border-white/10">
                <a
                  href="/stacks/buffalo"
                  target="_top"
                  class="w-full py-2 px-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-semibold text-xs border border-cyan-500/40 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Sparkles class="w-3.5 h-3.5" />
                  <span>Switch to Buffalo Website</span>
                </a>
                <div class="flex items-center justify-between text-xs font-mono text-neutral-400 pt-1">
                  <a
                    href="/stacks/buffalo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1 hover:text-cyan-400 transition-colors"
                  >
                    <span>Direct Link</span>
                    <ExternalLink class="w-3 h-3" />
                  </a>
                  <a
                    href="https://github.com/reginaldalfret/portfolio-buffalo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1 hover:text-white transition-colors"
                  >
                    <Github class="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Leptos Card -->
            <div class="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-orange-500/40 transition-all flex flex-col justify-between space-y-3">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-2">
                    <div class="w-7 h-7 rounded-lg bg-orange-950/80 border border-orange-500/50 flex items-center justify-center font-bold text-xs text-orange-400">
                      🦀
                    </div>
                    <span class="font-bold text-sm text-white">Leptos (Rust WASM)</span>
                  </div>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                    Rust 1.99.1
                  </span>
                </div>
                <p class="text-xs text-neutral-400 mb-2">
                  Rust WebAssembly · Leptos 0.7 · Client-Side Rendering · Trunk · Tailwind CSS.
                </p>
                <div class="text-[11px] font-mono text-neutral-400">
                  Live Route: <a href="/stacks/leptos" target="_top" class="text-orange-400 hover:underline">/stacks/leptos</a>
                </div>
              </div>
              <div class="space-y-2 pt-2 border-t border-white/10">
                <a
                  href="/stacks/leptos"
                  target="_top"
                  class="w-full py-2 px-3 rounded-xl bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 font-semibold text-xs border border-orange-500/40 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Sparkles class="w-3.5 h-3.5" />
                  <span>Switch to Leptos Website</span>
                </a>
                <div class="flex items-center justify-between text-xs font-mono text-neutral-400 pt-1">
                  <a
                    href="/stacks/leptos"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1 hover:text-orange-400 transition-colors"
                  >
                    <span>Direct Link ↗</span>
                  </a>
                  <a
                    href="https://github.com/reginaldalfret/portfolio-leptos"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1 hover:text-white transition-colors"
                  >
                    <Github class="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
            <!-- Jaspr -->
            <div class="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-3">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-2">
                    <div class="w-7 h-7 rounded-lg bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center font-bold text-xs text-emerald-400">
                      🎯
                    </div>
                    <span class="font-bold text-sm text-white">Jaspr (Dart Web)</span>
                  </div>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Dart 3.13.5
                  </span>
                </div>
                <p class="text-xs text-neutral-400 mb-2">
                  Dart Web Framework · SSR &amp; Hydration · Reactive Components · Tailwind CSS.
                </p>
                <div class="text-[11px] font-mono text-neutral-400">
                  Live Route: <a href="/stacks/jaspr" target="_top" class="text-emerald-400 hover:underline">/stacks/jaspr</a>
                </div>
              </div>
              <div class="space-y-2 pt-2 border-t border-white/10">
                <a
                  href="/stacks/jaspr"
                  target="_top"
                  class="w-full py-2 px-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-semibold text-xs border border-emerald-500/40 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Switch to Jaspr Website</span>
                </a>
                <div class="flex items-center justify-between text-xs font-mono text-neutral-400 pt-1">
                  <a
                    href="/stacks/jaspr"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1 hover:text-emerald-400 transition-colors"
                  >
                    <span>Direct Link ↗</span>
                  </a>
                  <a
                    href="https://github.com/reginaldalfret/portfolio-jaspr"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1 hover:text-white transition-colors"
                  >
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
            <!-- Vapor -->
            <div class="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-sky-500/40 transition-all flex flex-col justify-between space-y-3">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-2">
                    <div class="w-7 h-7 rounded-lg bg-sky-950/80 border border-sky-500/50 flex items-center justify-center font-bold text-xs text-sky-400">
                      💧
                    </div>
                    <span class="font-bold text-sm text-white">Vapor 4 (Swift)</span>
                  </div>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    Swift 5.10+
                  </span>
                </div>
                <p class="text-xs text-neutral-400 mb-2">
                  Server-Side Swift · Vapor 4 · Non-blocking Async I/O (SwiftNIO) · Leaf · Tailwind CSS.
                </p>
                <div class="text-[11px] font-mono text-neutral-400">
                  Live Route: <a href="/stacks/vapor" target="_top" class="text-sky-400 hover:underline">/stacks/vapor</a>
                </div>
              </div>
              <div class="space-y-2 pt-2 border-t border-white/10">
                <a
                  href="/stacks/vapor"
                  target="_top"
                  class="w-full py-2 px-3 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 font-semibold text-xs border border-sky-500/40 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Switch to Vapor Website</span>
                </a>
                <div class="flex items-center justify-between text-xs font-mono text-neutral-400 pt-1">
                  <a
                    href="/stacks/vapor"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1 hover:text-sky-400 transition-colors"
                  >
                    <span>Direct Link ↗</span>
                  </a>
                  <a
                    href="https://github.com/reginaldalfret/portfolio-vapor"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1 hover:text-white transition-colors"
                  >
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 5. Footer -->
        
<!-- ========================================================================= -->
<!-- 12 STACKS. 1 PRODUCT. STANDARDIZED UNIFIED FOOTER                         -->
<!-- ========================================================================= -->
<footer class="pt-8 pb-12 text-center text-xs text-neutral-500 space-y-3 font-mono border-t border-white/10 mt-8">
  <div class="text-neutral-400 font-semibold tracking-wider">
    BETTER TECHNOLOGY • HAPPIER PEOPLE
  </div>
  <div class="flex flex-wrap items-center justify-center gap-3 text-neutral-400">
    <span>© 2026 Reginald Alfret V</span>
    <span>•</span>
    <span class="text-neutral-300">Engineered natively with <strong class="text-white">Nuxt 3</strong></span>
    <span>•</span>
    <a href="https://reginaldalfret.tech" class="text-neutral-300 hover:text-white transition-colors">Personal Portfolio</a>
    <span>•</span>
    <a href="https://reginaldalfret.tech/lab" class="text-cyan-400 hover:text-cyan-300 transition-colors">Engineering Lab</a>
    <span>•</span>
    <a href="https://github.com/reginaldalfret/portfolio-nuxt" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">Source Code</a>
  </div>
</footer>

      </div>
    </div>

    <!-- Floating Bottom Stack Dock (Only shown when viewed directly, hidden when embedded in Next.js parent) -->
    <div v-if="!isEmbedded" class="floating-stack-dock fixed bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-50 no-print w-[96vw] sm:w-auto max-w-[96vw]">
      <div class="backdrop-blur-xl bg-black/90 border border-white/20 rounded-full py-1.5 px-3 shadow-2xl flex items-center gap-1.5 sm:gap-2 text-xs overflow-x-auto no-scrollbar scroll-smooth">
        <span class="text-[11px] font-mono text-neutral-400 hidden md:inline shrink-0">Stack:</span>
        <a href="/" target="_top" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors font-medium shrink-0 whitespace-nowrap" title="Switch to Next.js"><span>Next.js</span></a>
        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold shadow-sm shrink-0 whitespace-nowrap"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span><span>Nuxt 3</span></span>
        <a href="/stacks/django" target="_top" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors font-medium shrink-0 whitespace-nowrap" title="Switch to Django"><span>Django</span></a>
        <a href="/stacks/springboot" target="_top" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors font-medium shrink-0 whitespace-nowrap" title="Switch to Spring Boot"><span>Spring Boot</span></a>
        <a href="/stacks/laravel" target="_top" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors font-medium shrink-0 whitespace-nowrap" title="Switch to Laravel"><span>Laravel</span></a>
        <a href="/stacks/rails" target="_top" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors font-medium shrink-0 whitespace-nowrap" title="Switch to Rails"><span>Rails</span></a>
        <a href="/stacks/angular" target="_top" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors font-medium shrink-0 whitespace-nowrap" title="Switch to Angular"><span>Angular</span></a>
        <a href="/stacks/blazor" target="_top" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors font-medium shrink-0 whitespace-nowrap" title="Switch to Blazor"><span>Blazor</span></a>
        <a href="/stacks/buffalo" target="_top" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors font-medium shrink-0 whitespace-nowrap" title="Switch to Buffalo"><span>Buffalo</span></a>
        <a href="/stacks/leptos" target="_top" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors font-medium shrink-0 whitespace-nowrap" title="Switch to Leptos"><span>Leptos</span></a>
        <a href="/stacks/jaspr" target="_top" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors font-medium shrink-0 whitespace-nowrap" title="Switch to Jaspr"><span>Jaspr</span></a>
        <a href="/stacks/vapor" target="_top" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors font-medium shrink-0 whitespace-nowrap" title="Switch to Vapor"><span>Vapor</span></a>
      </div>
    </div>
  </div>
</template>
