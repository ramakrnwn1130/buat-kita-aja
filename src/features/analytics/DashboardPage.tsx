"use client";

import {
  BookOpen, Target, Brain, TrendingUp, CheckCircle2, Circle,
  Award, BarChart2, Zap, CalendarDays, ChevronRight, Star
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ======= MOCK DATA (akan diganti data Supabase) =======
const mockData = {
  userName: "Rama Kurniawan",
  targetCertification: "CHCO",
  examDate: "Maret 2027",
  hrStaffProgress: 42,
  chcoProgress: 18,
  readiness: {
    learningCompletion: 42,
    quizPerformance: 55,
    simulationExam: 30,
    learningConsistency: 70,
    total: 47,
  },
  aiRecommendation: {
    weakArea: "HR Analytics",
    action: "Review Modul Predictive Analytics",
    href: "/chco",
  },
  dailyMissions: [
    { id: 1, text: "Baca Talent Management Bab 3", done: false },
    { id: 2, text: "Jawab 10 soal latihan", done: true },
    { id: 3, text: "Review flashcard Strategic HR", done: false },
  ],
  recentActivity: [
    { label: "Human Capital Management", type: "HR Staff", score: null, time: "2 jam lalu" },
    { label: "Simulasi Ujian CHCO", type: "Simulasi", score: 72, time: "Kemarin" },
    { label: "Compensation & Payroll", type: "HR Staff", score: null, time: "2 hari lalu" },
  ],
  competencies: [
    { name: "Strategic HR", score: 72 },
    { name: "Talent Management", score: 55 },
    { name: "Leadership", score: 63 },
    { name: "Change Management", score: 40 },
    { name: "HR Analytics", score: 28 },
  ],
};

function ReadinessMeter({ score }: { score: number }) {
  const r = 54;
  const circumference = 2 * Math.PI * r;
  const dashOffset = circumference - (score / 100) * circumference;
  const color = score >= 70 ? "#10B981" : score >= 50 ? "#D4A017" : "#EF4444";

  return (
    <div className="relative w-36 h-36 mx-auto">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={r} fill="none" stroke="#E2E8F0" strokeWidth="10" />
        <circle
          cx="60" cy="60" r={r} fill="none"
          stroke={color} strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1s ease" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-[#0B1F3A]">{score}%</span>
        <span className="text-xs text-[#718096] font-medium">Readiness</span>
      </div>
    </div>
  );
}

function ProgressBar({ value, color = "navy" }: { value: number; color?: "navy" | "gold" }) {
  return (
    <div className="progress-bar">
      <div
        className={color === "gold" ? "progress-fill-gold" : "progress-fill"}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export default function DashboardPage() {
  const d = mockData;
  const completedMissions = d.dailyMissions.filter(m => m.done).length;

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* ===== WELCOME ===== */}
      <div className="card-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
          <div className="w-full h-full rounded-full border-[40px] border-white animate-spin-slow" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="badge-gold text-xs">🎯 {d.targetCertification} Track</span>
            </div>
            <h1 className="text-2xl font-bold text-white mb-1">
              Selamat Datang Kembali, {d.userName}! 👋
            </h1>
            <p className="text-white/70 text-sm">
              Perjalanan sertifikasi HR Anda terus berkembang. Target ujian:{" "}
              <span className="text-[#D4A017] font-semibold">{d.examDate}</span>
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/ai-coach" className="btn-gold text-sm">
              <Brain className="w-4 h-4" /> Tanya AI Coach
            </Link>
            <Link href="/questions" className="btn-outline border-white/30 text-white hover:bg-white hover:text-[#0B1F3A] text-sm">
              <HelpCircle className="w-4 h-4" /> Latihan Soal
            </Link>
          </div>
        </div>
      </div>

      {/* ===== STATS GRID ===== */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={<BookOpen className="w-5 h-5 text-blue-600" />} iconBg="bg-blue-100"
          value={`${d.hrStaffProgress}%`} label="HR Staff Progress" trend="+5%" />
        <StatCard icon={<Award className="w-5 h-5 text-purple-600" />} iconBg="bg-purple-100"
          value={`${d.chcoProgress}%`} label="CHCO Progress" trend="+3%" />
        <StatCard icon={<BarChart2 className="w-5 h-5 text-emerald-600" />} iconBg="bg-emerald-100"
          value="72%" label="Quiz Terbaik" trend="+8%" />
        <StatCard icon={<CalendarDays className="w-5 h-5 text-amber-600" />} iconBg="bg-amber-100"
          value="5 hari" label="Streak Belajar" trend="🔥" />
      </div>

      {/* ===== READINESS + PROGRESS ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Readiness Score */}
        <div className="card-premium flex flex-col items-center text-center">
          <h3 className="section-title mb-1">Skor Kesiapan</h3>
          <p className="text-xs text-[#718096] mb-5">Estimasi kesiapan ujian Anda</p>
          <ReadinessMeter score={d.readiness.total} />
          <div className="w-full mt-5 space-y-2.5">
            {[
              { label: "Penyelesaian Materi", value: d.readiness.learningCompletion, w: "30%" },
              { label: "Performa Kuis", value: d.readiness.quizPerformance, w: "30%" },
              { label: "Simulasi Ujian", value: d.readiness.simulationExam, w: "25%" },
              { label: "Konsistensi", value: d.readiness.learningConsistency, w: "15%" },
            ].map(item => (
              <div key={item.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[#718096]">{item.label} <span className="text-[#0B1F3A] font-medium">({item.w})</span></span>
                  <span className="font-semibold text-[#0B1F3A]">{item.value}%</span>
                </div>
                <ProgressBar value={item.value} />
              </div>
            ))}
          </div>
        </div>

        {/* Program Progress */}
        <div className="card-premium lg:col-span-2 space-y-5">
          <h3 className="section-title">Progress Program</h3>
          <ProgramCard
            icon={<BookOpen className="w-5 h-5 text-blue-600" />}
            iconBg="bg-blue-100"
            title="HR Staff Certification"
            progress={d.hrStaffProgress}
            modules={7}
            completed={3}
            href="/hr-staff"
            color="navy"
          />
          <ProgramCard
            icon={<Award className="w-5 h-5 text-purple-600" />}
            iconBg="bg-purple-100"
            title="CHCO Certification"
            progress={d.chcoProgress}
            modules={11}
            completed={2}
            href="/chco"
            color="gold"
          />

          {/* Competency radar simple */}
          <div>
            <h4 className="text-sm font-semibold text-[#0B1F3A] mb-3">Kompetensi CHCO</h4>
            <div className="space-y-2">
              {d.competencies.map(c => (
                <div key={c.name} className="flex items-center gap-3">
                  <span className="text-xs text-[#718096] w-36 flex-shrink-0">{c.name}</span>
                  <div className="flex-1 progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${c.score}%` }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-[#0B1F3A] w-8 text-right">{c.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== AI RECOMMENDATION + DAILY MISSION ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Recommendation */}
        <div className="card-premium border-l-4 border-l-[#D4A017]">
          <div className="flex items-start gap-3 mb-4">
            <div className="stat-icon bg-amber-100">
              <Zap className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h3 className="font-bold text-[#0B1F3A]">Rekomendasi AI Coach</h3>
              <p className="text-xs text-[#718096]">Berdasarkan analisis performa Anda</p>
            </div>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 mb-4">
            <p className="text-xs text-amber-700 font-semibold mb-1">⚠ Area Lemah Terdeteksi</p>
            <p className="text-[#0B1F3A] font-bold text-lg">{d.aiRecommendation.weakArea}</p>
          </div>
          <div className="bg-[#F5F7FA] rounded-xl p-4 mb-4">
            <p className="text-xs text-[#718096] font-medium mb-1">💡 Rekomendasi</p>
            <p className="text-sm text-[#0B1F3A] font-semibold">{d.aiRecommendation.action}</p>
          </div>
          <div className="flex gap-2">
            <Link href={d.aiRecommendation.href} className="btn-primary text-xs flex-1 justify-center">
              Pelajari Sekarang <ChevronRight className="w-3 h-3" />
            </Link>
            <Link href="/ai-coach" className="btn-outline text-xs px-4">
              <Brain className="w-3 h-3" /> Tanya AI
            </Link>
          </div>
        </div>

        {/* Daily Mission */}
        <div className="card-premium">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="stat-icon bg-green-100">
                <Target className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-[#0B1F3A]">Misi Belajar Hari Ini</h3>
                <p className="text-xs text-[#718096]">{completedMissions}/{d.dailyMissions.length} selesai</p>
              </div>
            </div>
            <span className={cn("badge", completedMissions === d.dailyMissions.length ? "badge-success" : "badge-warning")}>
              {completedMissions === d.dailyMissions.length ? "✅ Selesai!" : "🔄 Berlangsung"}
            </span>
          </div>
          <div className="space-y-3">
            {d.dailyMissions.map(mission => (
              <label key={mission.id} className="flex items-start gap-3 cursor-pointer group">
                {mission.done
                  ? <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  : <Circle className="w-5 h-5 text-[#CBD5E0] flex-shrink-0 mt-0.5 group-hover:text-[#0B1F3A] transition-colors" />
                }
                <span className={cn(
                  "text-sm",
                  mission.done ? "line-through text-[#718096]" : "text-[#0B1F3A]"
                )}>
                  {mission.text}
                </span>
              </label>
            ))}
          </div>
          <div className="mt-4">
            <ProgressBar value={(completedMissions / d.dailyMissions.length) * 100} color="gold" />
          </div>
        </div>
      </div>

      {/* ===== RECENT ACTIVITY ===== */}
      <div className="card-premium">
        <div className="section-header">
          <h3 className="section-title">Aktivitas Terbaru</h3>
          <Link href="/learning" className="text-xs text-[#0B1F3A] font-semibold hover:text-[#D4A017] transition-colors flex items-center gap-1">
            Lihat Semua <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="divide-y divide-[#F5F7FA]">
          {d.recentActivity.map((item, i) => (
            <div key={i} className="flex items-center gap-4 py-3">
              <div className="w-9 h-9 rounded-lg bg-[#F5F7FA] flex items-center justify-center flex-shrink-0">
                {item.score !== null
                  ? <Star className="w-4 h-4 text-amber-500" />
                  : <BookOpen className="w-4 h-4 text-blue-500" />
                }
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#0B1F3A] truncate">{item.label}</p>
                <p className="text-xs text-[#718096]">{item.type}</p>
              </div>
              {item.score !== null && (
                <span className={cn("badge text-xs", item.score >= 70 ? "badge-success" : "badge-warning")}>
                  {item.score}%
                </span>
              )}
              <span className="text-xs text-[#A0AEC0] flex-shrink-0">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== SUB COMPONENTS =====
function StatCard({ icon, iconBg, value, label, trend }: {
  icon: React.ReactNode;
  iconBg: string;
  value: string;
  label: string;
  trend: string;
}) {
  return (
    <div className="card-premium animate-fade-in-up">
      <div className="flex items-start justify-between mb-3">
        <div className={cn("stat-icon", iconBg)}>{icon}</div>
        <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">{trend}</span>
      </div>
      <p className="text-2xl font-bold text-[#0B1F3A]">{value}</p>
      <p className="text-xs text-[#718096] mt-0.5">{label}</p>
    </div>
  );
}

function ProgramCard({ icon, iconBg, title, progress, modules, completed, href, color }: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  progress: number;
  modules: number;
  completed: number;
  href: string;
  color: "navy" | "gold";
}) {
  return (
    <div className="bg-[#F5F7FA] rounded-xl p-4">
      <div className="flex items-center gap-3 mb-3">
        <div className={cn("w-9 h-9 rounded-lg flex items-center justify-center", iconBg)}>{icon}</div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-[#0B1F3A] text-sm">{title}</p>
          <p className="text-xs text-[#718096]">{completed}/{modules} modul selesai</p>
        </div>
        <span className="text-sm font-bold text-[#0B1F3A]">{progress}%</span>
      </div>
      <ProgressBar value={progress} color={color} />
      <div className="mt-2 flex justify-end">
        <Link href={href} className="text-xs text-[#0B1F3A] hover:text-[#D4A017] font-semibold transition-colors flex items-center gap-1">
          Lanjutkan <ChevronRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}

// Import missing icon
function HelpCircle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}
