'use client';

import { motion } from 'framer-motion';
import {
  Activity,
  Award,
  BarChart3,
  Bell,
  BookOpen,
  BriefcaseBusiness,
  Calculator,
  Camera,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  ClipboardCheck,
  Clock3,
  Cpu,
  Download,
  FileCheck2,
  Flag,
  Gauge,
  GraduationCap,
  HardHat,
  Home,
  ImageUp,
  Layers3,
  LayoutDashboard,
  Lightbulb,
  LineChart,
  LockKeyhole,
  Menu,
  MessageSquareText,
  Mic,
  MonitorPlay,
  PanelsTopLeft,
  Play,
  QrCode,
  Search,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Table2,
  Timer,
  Trophy,
  Users,
  Volume2,
  Zap,
} from 'lucide-react';

const navItems = ['Overview', 'Learn', 'Simulate', 'Tutor', 'Exam', 'Career', 'Admin'];

const stats = [
  ['12k+', 'Students trained'],
  ['42', 'Lessons'],
  ['180+', 'Practical exercises'],
  ['98%', 'Certification rate'],
  ['36', 'Partner companies'],
];

const dashboardCards = [
  { label: 'Overall progress', value: '68%', icon: Gauge, tone: 'blue' },
  { label: 'Learning streak', value: '21 days', icon: Zap, tone: 'orange' },
  { label: 'Competency score', value: '84/100', icon: ShieldCheck, tone: 'green' },
  { label: 'Career readiness', value: '76%', icon: BriefcaseBusiness, tone: 'navy' },
];

const lessons = [
  { title: 'Earthing fundamentals', time: '18 min', progress: 92, status: 'In progress' },
  { title: 'Distribution board layout', time: '24 min', progress: 74, status: 'Recommended' },
  { title: 'RCCB testing workflow', time: '16 min', progress: 48, status: 'Weak topic' },
];

const rooms = ['Kitchen', 'Bedroom', 'Living room', 'Bathroom', 'Garage', 'Outdoor'];

const tools = ['Digital multimeter', 'Insulation tester', 'Cable cutter', 'Conduit bender', 'Voltage detector', 'Crimping tool'];

const ppe = ['Helmet', 'Boots', 'Electrical gloves', 'Reflective vest', 'Safety glasses', 'Face shield', 'Ear protection', 'Arc flash suit'];

const adminMetrics = [
  ['Student activity', '84%', '+12%'],
  ['Revenue', 'N18.4M', '+9%'],
  ['Exam pass rate', '91%', '+4%'],
  ['AI resolutions', '6.8k', '+31%'],
];

const mobileScreens = ['Home', 'Curriculum', 'AI Tutor', 'Quiz', 'Career'];

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ');
}

function SectionHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0066ff]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-[#081b33] md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-[#4b5870] md:text-lg">{copy}</p>
    </div>
  );
}

function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={cx('rounded-[24px] border border-white/70 bg-white/72 shadow-[0_24px_70px_rgba(8,27,51,0.10)] backdrop-blur-2xl', className)}>{children}</div>;
}

function ProgressBar({ value, tone = 'bg-[#0066ff]' }: { value: number; tone?: string }) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-[#dfe5ee]">
      <div className={cx('h-full rounded-full', tone)} style={{ width: `${value}%` }} />
    </div>
  );
}

function Pill({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <span className={cx('inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]', className)}>{children}</span>;
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f9fb] text-[#191c1e]">
      <DesktopShell />
      <MobileTopBar />
      <section id="overview" className="relative min-h-screen px-5 pb-14 pt-24 md:px-8 lg:pl-80">
        <div className="absolute inset-0 hero-network" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10">
            <Pill className="border-[#0066ff]/20 bg-[#0066ff]/10 text-[#0066ff]">
              <Zap size={14} /> Admissions open 2026
            </Pill>
            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-[#081b33] md:text-7xl">
              Become a Certified Residential Electrical Installation Technician
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#424656]">
              Learn residential wiring using interactive simulations, AI tutoring, practical projects, and professional assessments built for Nigerian homes and global safety standards.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#dashboard" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0066ff] px-6 py-4 font-bold text-white shadow-[0_18px_45px_rgba(0,102,255,0.28)] transition hover:-translate-y-0.5">
                Start Learning <ChevronRight size={18} />
              </a>
              <a href="#course" className="inline-flex items-center justify-center rounded-2xl border border-white/80 bg-white/70 px-6 py-4 font-bold text-[#081b33] shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5">
                Explore Curriculum
              </a>
              <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#c2c6d8] px-6 py-4 font-bold text-[#081b33] transition hover:bg-white">
                <Play size={18} /> Watch Demo
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {stats.map(([value, label]) => (
                <GlassCard key={label} className="p-4 text-center">
                  <p className="text-2xl font-black text-[#0066ff]">{value}</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#667085]">{label}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative z-10" id="demo">
            <GlassCard className="relative overflow-hidden p-5 md:p-7">
              <div className="absolute inset-0 circuit-grid opacity-70" aria-hidden="true" />
              <div className="relative rounded-[22px] bg-[#081b33] p-5 text-white shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b3c5ff]">Interactive Home Lab</p>
                    <h2 className="mt-2 text-2xl font-black">Live wiring simulator</h2>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-3 text-[#ff8c00]">
                    <Home size={28} />
                  </div>
                </div>
                <div className="mt-6 grid gap-3 rounded-[22px] border border-white/10 bg-white/5 p-4">
                  <div className="grid grid-cols-3 gap-3">
                    {rooms.slice(0, 6).map((room, index) => (
                      <div key={room} className={cx('relative min-h-24 rounded-2xl border border-white/10 p-3', index === 2 ? 'bg-[#0066ff]/30' : 'bg-white/8')}>
                        <span className="text-xs font-bold text-white/75">{room}</span>
                        <span className="absolute bottom-3 left-3 right-3 h-1 rounded-full bg-[#00c853]/80 shadow-[0_0_18px_rgba(0,200,83,0.8)]" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Lighting', 'Sockets', 'DB', 'Earthing', 'Protection'].map((item) => (
                      <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/80">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <div className="space-y-20 px-5 pb-28 md:px-8 lg:pl-80">
        <AuthSection />
        <DashboardSection />
        <CourseSection />
        <InteractiveSection />
        <LibrarySection />
        <AiSection />
        <ExamSection />
        <CertificateCareerSection />
        <AdminSection />
        <MobileSection />
        <DesignSystemSection />
      </div>
      <MobileBottomNav />
    </main>
  );
}

function DesktopShell() {
  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-72 flex-col border-r border-white/70 bg-white/70 p-5 shadow-[18px_0_50px_rgba(8,27,51,0.08)] backdrop-blur-2xl lg:flex">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0066ff] text-white shadow-lg">
          <Zap size={22} />
        </div>
        <div>
          <p className="text-xl font-black text-[#081b33]">NRWA</p>
          <p className="text-xs font-semibold text-[#667085]">Residential Wiring Academy</p>
        </div>
      </div>
      <div className="mt-8 rounded-2xl border border-[#0066ff]/10 bg-[#0066ff]/8 p-4">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0066ff]">Cohort status</p>
        <p className="mt-2 text-sm font-semibold text-[#081b33]">Foundation Technician</p>
        <ProgressBar value={68} />
      </div>
      <nav className="mt-6 space-y-1">
        {navItems.map((item, index) => (
          <a key={item} href={`#${item === 'Overview' ? 'overview' : item.toLowerCase()}`} className={cx('flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition', index === 0 ? 'bg-[#0066ff] text-white shadow-lg' : 'text-[#424656] hover:bg-[#f2f4f6] hover:text-[#0066ff]')}>
            {index === 0 ? <LayoutDashboard size={18} /> : <PanelsTopLeft size={18} />}
            {item}
          </a>
        ))}
      </nav>
      <div className="mt-auto rounded-[24px] bg-[#081b33] p-4 text-white">
        <p className="text-sm font-bold">AI safety assistant</p>
        <p className="mt-2 text-xs leading-5 text-white/70">Upload field photos for compliance review before practical submission.</p>
      </div>
    </aside>
  );
}

function MobileTopBar() {
  return (
    <header className="fixed top-0 z-50 flex h-16 w-full items-center justify-between border-b border-white/70 bg-[#f7f9fb]/85 px-5 backdrop-blur-xl lg:hidden">
      <div className="flex items-center gap-3">
        <Menu className="text-[#0066ff]" size={22} />
        <span className="text-xl font-black text-[#0066ff]">NRWA</span>
      </div>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0066ff] text-white">
        <Bell size={18} />
      </div>
    </header>
  );
}

function AuthSection() {
  return (
    <section id="auth" className="mx-auto max-w-7xl">
      <SectionHeader eyebrow="Authentication" title="Premium onboarding for beginners and professionals" copy="Login and signup are designed as low-friction, trust-first flows with secure access, cohort selection, and personalized learning setup." />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <GlassCard className="p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-[#0066ff]/10 p-3 text-[#0066ff]"><LockKeyhole /></div>
            <div>
              <h3 className="text-2xl font-black text-[#081b33]">Welcome back</h3>
              <p className="text-sm text-[#667085]">Continue your practical wiring pathway.</p>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <input className="w-full rounded-2xl border border-[#d8dde8] bg-white px-4 py-4 outline-none ring-[#0066ff]/20 focus:ring-4" placeholder="Email address" />
            <input className="w-full rounded-2xl border border-[#d8dde8] bg-white px-4 py-4 outline-none ring-[#0066ff]/20 focus:ring-4" placeholder="Password" type="password" />
            <button className="w-full rounded-2xl bg-[#0066ff] py-4 font-bold text-white shadow-lg">Sign in</button>
          </div>
        </GlassCard>
        <GlassCard className="grid gap-4 p-6 md:grid-cols-3">
          {['Beginner path', 'Technician upgrade', 'Employer cohort'].map((item, index) => (
            <div key={item} className="rounded-2xl bg-[#f2f4f6] p-5">
              <div className={cx('mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-white', index === 1 ? 'bg-[#ff8c00]' : 'bg-[#0066ff]')}>
                <GraduationCap />
              </div>
              <h4 className="font-black text-[#081b33]">{item}</h4>
              <p className="mt-2 text-sm leading-6 text-[#667085]">Guided setup, skill baseline, study goals, and mentor matching.</p>
            </div>
          ))}
        </GlassCard>
      </div>
    </section>
  );
}

function DashboardSection() {
  return (
    <section id="dashboard" className="mx-auto max-w-7xl">
      <SectionHeader eyebrow="Student Dashboard" title="A personalized cockpit for mastery" copy="Students see progress, daily goals, weak topics, achievements, certificates, AI shortcuts, and career readiness in one beautiful dashboard." />
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <GlassCard className="p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0066ff]">Good morning, Ada</p>
              <h3 className="mt-2 text-3xl font-black text-[#081b33]">Your DB wiring assessment is due today</h3>
            </div>
            <button className="rounded-2xl bg-[#081b33] px-5 py-3 font-bold text-white">Resume lesson</button>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {dashboardCards.map(({ label, value, icon: Icon, tone }) => (
              <div key={label} className="rounded-2xl bg-[#f2f4f6] p-4">
                <Icon className={cx(tone === 'orange' ? 'text-[#ff8c00]' : tone === 'green' ? 'text-[#00a844]' : tone === 'navy' ? 'text-[#081b33]' : 'text-[#0066ff]')} />
                <p className="mt-4 text-2xl font-black text-[#081b33]">{value}</p>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#667085]">{label}</p>
              </div>
            ))}
          </div>
        </GlassCard>
        <GlassCard className="p-6">
          <h3 className="text-xl font-black text-[#081b33]">Weak topics</h3>
          <div className="mt-5 space-y-4">
            {['RCCB discrimination', 'Earth electrode testing', 'Load balancing'].map((topic, index) => (
              <div key={topic}>
                <div className="mb-2 flex justify-between text-sm font-bold text-[#424656]"><span>{topic}</span><span>{54 + index * 9}%</span></div>
                <ProgressBar value={54 + index * 9} tone={index === 0 ? 'bg-[#ff8c00]' : 'bg-[#0066ff]'} />
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function CourseSection() {
  return (
    <section id="learn" className="mx-auto max-w-7xl">
      <SectionHeader eyebrow="Course Experience" title="Lessons that feel like premium engineering software" copy="Each lesson combines sticky navigation, reading time, objectives, callouts, diagrams, videos, resources, knowledge checks, and next steps." />
      <div className="grid gap-6 xl:grid-cols-[320px_1fr]">
        <GlassCard className="p-5">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-[#0066ff]">Lesson navigation</p>
          {lessons.map((lesson) => (
            <div key={lesson.title} className="mb-3 rounded-2xl bg-[#f2f4f6] p-4">
              <div className="flex items-center justify-between gap-3">
                <h4 className="font-bold text-[#081b33]">{lesson.title}</h4>
                <span className="text-xs text-[#667085]">{lesson.time}</span>
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-[#0066ff]">{lesson.status}</p>
              <div className="mt-3"><ProgressBar value={lesson.progress} /></div>
            </div>
          ))}
        </GlassCard>
        <GlassCard className="overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[1fr_280px]">
            <div className="p-6">
              <Pill className="border-[#00c853]/20 bg-[#00c853]/10 text-[#008f3a]"><Clock3 size={14} /> 24 min lesson</Pill>
              <h3 className="mt-4 text-3xl font-black text-[#081b33]">Distribution Board Layout and Protective Devices</h3>
              <p className="mt-4 leading-8 text-[#424656]">Master the arrangement of MCBs, RCCBs, SPD, neutral bars, earth bars, and labeling for maintainable residential installations.</p>
              <div className="mt-6 rounded-[22px] bg-[#081b33] p-5 text-white">
                <div className="flex items-center justify-between">
                  <span className="font-bold">Video + interactive example</span>
                  <MonitorPlay className="text-[#ff8c00]" />
                </div>
                <div className="mt-5 h-44 rounded-2xl bg-[linear-gradient(135deg,rgba(0,102,255,0.35),rgba(255,140,0,0.2)),radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_30%)]" />
              </div>
            </div>
            <div className="border-t border-[#dfe5ee] bg-[#f2f4f6] p-6 lg:border-l lg:border-t-0">
              <h4 className="font-black text-[#081b33]">Learning objectives</h4>
              <div className="mt-4 space-y-3">
                {['Identify circuit groups', 'Select protection devices', 'Label and test DB safely'].map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-[#424656]"><CheckCircle2 className="shrink-0 text-[#00a844]" size={18} />{item}</div>
                ))}
              </div>
              <button className="mt-6 w-full rounded-2xl bg-[#0066ff] py-3 font-bold text-white">Next lesson</button>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function InteractiveSection() {
  return (
    <section id="simulate" className="mx-auto max-w-7xl">
      <SectionHeader eyebrow="Interactive Lab" title="House blueprint and electrical diagram viewer" copy="Students click rooms, inspect cable routes, zoom diagrams, trace color-coded conductors, and watch animated current flow." />
      <div className="grid gap-6 xl:grid-cols-2">
        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black text-[#081b33]">Interactive House</h3>
            <Sparkles className="text-[#0066ff]" />
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 rounded-[28px] bg-[#081b33] p-4">
            {rooms.map((room, index) => (
              <button key={room} className={cx('relative min-h-28 rounded-2xl border p-3 text-left text-sm font-bold text-white transition hover:scale-[1.02]', index === 0 ? 'border-[#ff8c00] bg-[#ff8c00]/25' : 'border-white/10 bg-white/8')}>
                {room}
                <span className="absolute bottom-3 left-3 right-3 h-1 rounded-full bg-[#00c853] shadow-[0_0_18px_rgba(0,200,83,0.9)]" />
              </button>
            ))}
          </div>
        </GlassCard>
        <GlassCard className="p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-2xl font-black text-[#081b33]">SVG Diagram Viewer</h3>
            <div className="flex gap-2">
              {['Zoom', 'Pan', 'Dark', 'Labels'].map((item) => <button key={item} className="rounded-xl bg-[#f2f4f6] px-3 py-2 text-xs font-bold text-[#424656]">{item}</button>)}
            </div>
          </div>
          <div className="mt-5 rounded-[24px] bg-[#081b33] p-5 text-white">
            <svg viewBox="0 0 520 250" className="h-64 w-full">
              <rect x="24" y="48" width="110" height="150" rx="16" fill="#0f2b4d" stroke="#b3c5ff" />
              <text x="52" y="82" fill="#fff" fontSize="16" fontWeight="700">DB</text>
              <path d="M135 90 C220 55 290 55 385 90" stroke="#0066ff" strokeWidth="8" fill="none" strokeLinecap="round" />
              <path d="M135 126 C220 125 300 125 430 126" stroke="#ff8c00" strokeWidth="8" fill="none" strokeLinecap="round" />
              <path d="M135 162 C225 195 300 192 470 162" stroke="#00c853" strokeWidth="8" fill="none" strokeLinecap="round" />
              {[385, 430, 470].map((x, i) => <circle key={x} cx={x} cy={[90, 126, 162][i]} r="18" fill="#f7f9fb" stroke="#0066ff" strokeWidth="4" />)}
            </svg>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function LibrarySection() {
  return (
    <section className="mx-auto max-w-7xl">
      <SectionHeader eyebrow="Tool + PPE Libraries" title="Premium object cards for field readiness" copy="Every tool and PPE item includes usage, safety notes, specifications, related lessons, and visual hierarchy for fast scanning." />
      <div className="grid gap-6 lg:grid-cols-2">
        <GlassCard className="p-6">
          <h3 className="text-2xl font-black text-[#081b33]">Tool Library</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {tools.map((tool) => <LibraryCard key={tool} title={tool} icon={<Calculator />} accent="#0066ff" />)}
          </div>
        </GlassCard>
        <GlassCard className="p-6">
          <h3 className="text-2xl font-black text-[#081b33]">PPE Library</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {ppe.map((item) => <LibraryCard key={item} title={item} icon={<HardHat />} accent="#ff8c00" />)}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function LibraryCard({ title, icon, accent }: { title: string; icon: React.ReactNode; accent: string }) {
  return (
    <div className="rounded-2xl bg-[#f2f4f6] p-4">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl p-3 text-white shadow-lg" style={{ backgroundColor: accent }}>{icon}</div>
        <div>
          <h4 className="font-black text-[#081b33]">{title}</h4>
          <p className="text-xs font-semibold text-[#667085]">Uses, safety, specs, lessons</p>
        </div>
      </div>
    </div>
  );
}

function AiSection() {
  return (
    <section id="tutor" className="mx-auto max-w-7xl">
      <SectionHeader eyebrow="AI Tutor + Practical Inspector" title="ChatGPT-like coaching for electrical work" copy="Voice input, typing animation, suggested questions, diagram answers, image upload, photo analysis, history, dark mode, and compliance scoring." />
      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <GlassCard className="overflow-hidden">
          <div className="flex items-center justify-between border-b border-[#dfe5ee] bg-white/80 p-5">
            <div className="flex items-center gap-3"><Sparkles className="text-[#0066ff]" /><h3 className="text-xl font-black text-[#081b33]">AI Tutor</h3></div>
            <Pill className="border-[#0066ff]/20 bg-[#0066ff]/10 text-[#0066ff]">High precision</Pill>
          </div>
          <div className="space-y-4 p-5">
            <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-[#0066ff] p-4 text-white">Explain how to test an RCCB before energizing a circuit.</div>
            <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-[#f2f4f6] p-4 text-[#424656]">
              <p>Use the test button first, then verify trip time with an approved tester. Record results, isolate unsafe circuits, and compare with current IEE/NIS-IEC requirements.</p>
              <div className="mt-4 rounded-xl border-l-4 border-[#ff8c00] bg-white p-4">
                <p className="font-bold text-[#081b33]">Safety callout</p>
                <p className="text-sm">Never bypass an RCCB to continue a practical task.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Voice input', 'Photo upload', 'Diagram answer', 'Conversation history'].map((item) => <span key={item} className="rounded-full bg-[#dae1ff] px-3 py-1 text-xs font-bold text-[#003fa4]">{item}</span>)}
            </div>
            <div className="flex items-end gap-3 rounded-2xl border border-[#dfe5ee] bg-white p-3">
              <Mic className="text-[#0066ff]" />
              <input className="min-w-0 flex-1 border-none bg-transparent outline-none" placeholder="Ask about wiring, standards, or upload a photo..." />
              <Volume2 className="text-[#667085]" />
              <button className="rounded-xl bg-[#0066ff] p-3 text-white"><Send size={18} /></button>
            </div>
          </div>
        </GlassCard>
        <GlassCard className="p-6">
          <div className="flex items-center gap-3">
            <Camera className="text-[#ff8c00]" />
            <h3 className="text-2xl font-black text-[#081b33]">AI Practical Inspector</h3>
          </div>
          <div className="mt-5 rounded-[24px] border-2 border-dashed border-[#c2c6d8] bg-[#f2f4f6] p-6 text-center">
            <ImageUp className="mx-auto text-[#0066ff]" size={36} />
            <p className="mt-3 font-bold text-[#081b33]">Upload DB, socket wiring, conduit, switch, or earth pit photos</p>
          </div>
          <div className="mt-5 grid gap-3">
            {['Mistakes detected', 'Safety compliance', 'Suggested corrections', 'Overall score'].map((item, index) => (
              <div key={item} className="flex items-center justify-between rounded-2xl bg-[#f2f4f6] p-4">
                <span className="font-bold text-[#424656]">{item}</span>
                <span className={cx('font-black', index === 3 ? 'text-[#00a844]' : 'text-[#0066ff]')}>{index === 3 ? '88%' : index + 2}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function ExamSection() {
  return (
    <section id="exam" className="mx-auto max-w-7xl">
      <SectionHeader eyebrow="Exam Experience" title="A calm, powerful assessment interface" copy="Question navigator, timer, calculator, flagging, progress, dark mode, review screen, explanations, and analytics." />
      <GlassCard className="grid gap-0 overflow-hidden xl:grid-cols-[260px_1fr_320px]">
        <div className="bg-[#081b33] p-6 text-white">
          <div className="flex items-center gap-3"><Timer className="text-[#ff8c00]" /><span className="text-2xl font-black">42:18</span></div>
          <div className="mt-6 grid grid-cols-5 gap-2 xl:grid-cols-4">
            {Array.from({ length: 20 }).map((_, i) => <button key={i} className={cx('h-10 rounded-xl text-sm font-bold', i < 8 ? 'bg-[#0066ff]' : i === 12 ? 'bg-[#ff8c00]' : 'bg-white/10')}>{i + 1}</button>)}
          </div>
        </div>
        <div className="p-6">
          <Pill className="border-[#0066ff]/20 bg-[#0066ff]/10 text-[#0066ff]">Circuit protection</Pill>
          <h3 className="mt-4 text-2xl font-black text-[#081b33]">Which device provides residual current protection for a socket circuit?</h3>
          <div className="mt-6 space-y-3">
            {['MCB only', 'RCCB or RCBO', 'Main isolator', 'SPD only'].map((answer, index) => (
              <button key={answer} className={cx('flex w-full items-center justify-between rounded-2xl border p-4 text-left font-bold', index === 1 ? 'border-[#00c853] bg-[#00c853]/10 text-[#008f3a]' : 'border-[#dfe5ee] bg-white text-[#424656]')}>
                {answer}{index === 1 ? <Check /> : null}
              </button>
            ))}
          </div>
        </div>
        <div className="border-t border-[#dfe5ee] bg-[#f2f4f6] p-6 xl:border-l xl:border-t-0">
          <div className="grid grid-cols-2 gap-3">
            <button className="rounded-2xl bg-white p-4 font-bold text-[#081b33]"><Calculator className="mb-2 text-[#0066ff]" />Calculator</button>
            <button className="rounded-2xl bg-white p-4 font-bold text-[#081b33]"><Flag className="mb-2 text-[#ff8c00]" />Flag</button>
          </div>
          <div className="mt-5 rounded-2xl bg-white p-4">
            <p className="font-black text-[#081b33]">Performance analytics</p>
            <ProgressBar value={82} tone="bg-[#00c853]" />
            <p className="mt-3 text-sm text-[#667085]">Strong in safety, improve calculations.</p>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}

function CertificateCareerSection() {
  return (
    <section id="career" className="mx-auto max-w-7xl">
      <SectionHeader eyebrow="Certification + Career Hub" title="From learning proof to employment readiness" copy="Luxury certificates, QR verification, portfolio, CV, jobs, apprenticeships, employer messages, interview prep, roadmap, mentorship, and industry news." />
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <GlassCard className="bg-[#081b33] p-6 text-white">
          <div className="rounded-[24px] border border-[#f6c768]/50 bg-white p-6 text-[#081b33]">
            <div className="flex items-center justify-between">
              <Award className="text-[#b88900]" size={44} />
              <QrCode className="text-[#081b33]" />
            </div>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-[#b88900]">Certificate of Competency</p>
            <h3 className="mt-3 text-3xl font-black">Residential Electrical Installation Technician</h3>
            <p className="mt-6 text-[#667085]">Verified by NRWA Academy with printable layout and secure QR verification.</p>
          </div>
        </GlassCard>
        <GlassCard className="p-6">
          <h3 className="text-2xl font-black text-[#081b33]">Career Hub</h3>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {['Portfolio', 'CV builder', 'Jobs', 'Internships', 'Employer messages', 'Mentorship', 'Skill roadmap', 'Industry news'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-[#f2f4f6] p-4 font-bold text-[#424656]">
                <BriefcaseBusiness className="text-[#0066ff]" size={20} /> {item}
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function AdminSection() {
  return (
    <section id="admin" className="mx-auto max-w-7xl">
      <SectionHeader eyebrow="Admin Panel" title="Analytics, content operations, and AI insights" copy="A modern admin dashboard for student activity, revenue, learning progress, exams, content, media, question bank, and AI analytics." />
      <GlassCard className="p-6">
        <div className="grid gap-4 md:grid-cols-4">
          {adminMetrics.map(([label, value, change]) => (
            <div key={label} className="rounded-2xl bg-[#f2f4f6] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#667085]">{label}</p>
              <p className="mt-2 text-3xl font-black text-[#081b33]">{value}</p>
              <p className="mt-1 text-sm font-bold text-[#00a844]">{change}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_360px]">
          <div className="rounded-[24px] bg-[#081b33] p-6 text-white">
            <div className="flex items-center justify-between"><h3 className="font-black">Learning progress chart</h3><LineChart className="text-[#00c853]" /></div>
            <div className="mt-8 flex h-56 items-end gap-3">
              {[46, 72, 58, 84, 76, 92, 88].map((h, i) => <div key={i} className="flex-1 rounded-t-2xl bg-[#0066ff]" style={{ height: `${h}%` }} />)}
            </div>
          </div>
          <div className="space-y-3">
            {['Content management', 'Media manager', 'Question bank', 'AI analytics'].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-2xl bg-[#f2f4f6] p-4 font-bold text-[#424656]">
                <span>{item}</span><ChevronRight size={18} />
              </div>
            ))}
          </div>
        </div>
      </GlassCard>
    </section>
  );
}

function MobileSection() {
  return (
    <section className="mx-auto max-w-7xl">
      <SectionHeader eyebrow="Mobile / Tablet / Desktop" title="One platform, three native-feeling layouts" copy="Desktop gets sidebar and dashboards, tablet gets stacked touch cards, and mobile gets bottom navigation, floating actions, and thumb-friendly controls." />
      <div className="grid gap-6 lg:grid-cols-5">
        {mobileScreens.map((screen, index) => (
          <div key={screen} className="rounded-[32px] border-8 border-[#081b33] bg-[#f7f9fb] p-4 shadow-2xl">
            <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-[#081b33]" />
            <div className="rounded-2xl bg-[#0066ff] p-4 text-white">
              <Smartphone />
              <p className="mt-6 text-xl font-black">{screen}</p>
            </div>
            <div className="mt-4 space-y-3">
              {[1, 2, 3].map((item) => <div key={item} className="h-14 rounded-2xl bg-[#eceef0]" />)}
            </div>
            <div className="mt-4 flex justify-around rounded-2xl bg-white p-3 text-[#667085]">
              <Home size={16} /><BookOpen size={16} /><MessageSquareText size={16} /><Trophy size={16} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DesignSystemSection() {
  const components = [
    ['Buttons', <button key="button" className="rounded-2xl bg-[#0066ff] px-5 py-3 font-bold text-white">Primary</button>],
    ['Inputs', <input key="input" className="w-full rounded-2xl border border-[#dfe5ee] px-4 py-3" placeholder="Student ID" />],
    ['Badges', <Pill key="pill" className="border-[#ff8c00]/20 bg-[#ff8c00]/10 text-[#a65b00]">Safety</Pill>],
    ['Alerts', <div key="alert" className="flex gap-2 rounded-2xl bg-[#ffdad6] p-3 text-sm font-bold text-[#93000a]"><CircleAlert size={18} />Isolate before inspection</div>],
    ['Tabs', <div key="tabs" className="flex rounded-2xl bg-[#f2f4f6] p-1"><span className="rounded-xl bg-white px-4 py-2 text-sm font-bold">Learn</span><span className="px-4 py-2 text-sm font-bold text-[#667085]">Practice</span></div>],
    ['Tables', <div key="table" className="rounded-2xl bg-[#f2f4f6] p-3 text-sm"><Table2 className="mb-2 text-[#0066ff]" />Question bank rows</div>],
  ];
  return (
    <section className="mx-auto max-w-7xl">
      <SectionHeader eyebrow="Design System" title="Reusable components for a scalable NRWA product" copy="Typography, buttons, inputs, dropdowns, cards, progress, badges, icons, charts, tables, modals, alerts, avatars, tabs, accordions, navigation, breadcrumbs, timelines, and learning cards." />
      <GlassCard className="p-6">
        <div className="grid gap-4 md:grid-cols-3">
          {components.map(([label, sample]) => (
            <div key={label as string} className="rounded-2xl bg-white p-4">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[#667085]">{label}</p>
              {sample}
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            ['Learning Cards', BookOpen],
            ['Quiz Cards', ClipboardCheck],
            ['Course Cards', Layers3],
            ['Achievement Cards', Trophy],
            ['Instructor Cards', Users],
            ['AI Chat Components', Cpu],
            ['Timelines', Activity],
            ['Downloads', Download],
          ].map(([label, Icon]) => {
            const IconComponent = Icon as typeof BookOpen;
            return (
              <div key={label as string} className="flex items-center gap-3 rounded-2xl bg-[#f2f4f6] p-4 font-bold text-[#424656]">
                <IconComponent className="text-[#0066ff]" size={18} /> {label as string}
              </div>
            );
          })}
        </div>
      </GlassCard>
    </section>
  );
}

function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 z-50 flex h-20 w-full items-center justify-around rounded-t-[24px] border-t border-white/70 bg-[#f7f9fb]/90 px-4 pb-2 shadow-[0_-12px_40px_rgba(8,27,51,0.12)] backdrop-blur-xl lg:hidden">
      {[
        ['Home', Home],
        ['Learn', BookOpen],
        ['Tutor', MessageSquareText],
        ['Exam', FileCheck2],
      ].map(([label, Icon], index) => {
        const IconComponent = Icon as typeof Home;
        return (
          <a key={label as string} href={index === 0 ? '#overview' : `#${String(label).toLowerCase()}`} className={cx('flex flex-col items-center gap-1 rounded-full px-4 py-2 text-xs font-bold', index === 0 ? 'bg-[#0066ff] text-white' : 'text-[#667085]')}>
            <IconComponent size={18} /> {label as string}
          </a>
        );
      })}
    </nav>
  );
}
