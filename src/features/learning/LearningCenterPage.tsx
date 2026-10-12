"use client";

import { useState } from "react";
import { BookOpen, Award, Clock, CheckCircle, Lock, ChevronRight, Play } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const HR_STAFF_MODULES = [
  { id: 1, name: "Mengelola HRM & HCM", lessons: 2, completed: 2, locked: false, color: "blue" },
  { id: 2, name: "Menyusun Uraian Jabatan", lessons: 3, completed: 3, locked: false, color: "indigo" },
  { id: 3, name: "Administrasi Jaminan Sosial", lessons: 3, completed: 2, locked: false, color: "teal" },
  { id: 4, name: "Administrasi Pengupahan", lessons: 4, completed: 0, locked: false, color: "purple" },
  { id: 5, name: "Administrasi Kebijakan SDM", lessons: 3, completed: 0, locked: false, color: "pink" },
  { id: 6, name: "Persiapan Uji BNSP HR Staff", lessons: 2, completed: 0, locked: false, color: "rose" },
];

const CHCO_MODULES = [
  { id: 1, name: "Mengelola HRM & HCM Strategis", lessons: 2, completed: 2, locked: false, color: "teal" },
  { id: 2, name: "Menyusun SOP MSDM", lessons: 3, completed: 3, locked: false, color: "cyan" },
  { id: 3, name: "Melaksanakan Rekrutmen & Onboarding", lessons: 3, completed: 1, locked: false, color: "blue" },
  { id: 4, name: "Pembelajaran & Pengembangan (T&D)", lessons: 3, completed: 0, locked: false, color: "indigo" },
  { id: 5, name: "Strategic HC & Balanced Scorecard", lessons: 2, completed: 0, locked: false, color: "violet" },
  { id: 6, name: "Persiapan Uji BNSP CHCO", lessons: 2, completed: 0, locked: false, color: "amber" },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700", indigo: "bg-indigo-100 text-indigo-700",
  violet: "bg-violet-100 text-violet-700", purple: "bg-purple-100 text-purple-700",
  pink: "bg-pink-100 text-pink-700", rose: "bg-rose-100 text-rose-700",
  red: "bg-red-100 text-red-700", teal: "bg-teal-100 text-teal-700",
  cyan: "bg-cyan-100 text-cyan-700", sky: "bg-sky-100 text-sky-700",
  orange: "bg-orange-100 text-orange-700", amber: "bg-amber-100 text-amber-700",
};

type Tab = "hr-staff" | "chco";

function ModuleCard({ mod, program }: { mod: typeof HR_STAFF_MODULES[0]; program: string }) {
  const pct = mod.lessons > 0 ? Math.round((mod.completed / mod.lessons) * 100) : 0;
  const status = mod.locked ? "locked" : pct === 100 ? "completed" : pct > 0 ? "in_progress" : "not_started";

  return (
    <div className={cn(
      "card-premium transition-all duration-200",
      mod.locked ? "opacity-60" : "hover:shadow-md hover:-translate-y-0.5"
    )}>
      <div className="flex items-start gap-4">
        <div className={cn("stat-icon text-sm font-bold flex-shrink-0", colorMap[mod.color] || "bg-gray-100 text-gray-700")}>
          {mod.id}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-[#0B1F3A] text-sm">{mod.name}</h3>
            {mod.locked
              ? <Lock className="w-4 h-4 text-[#CBD5E0] flex-shrink-0" />
              : status === "completed"
              ? <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              : null
            }
          </div>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex items-center gap-1 text-xs text-[#718096]">
              <Clock className="w-3 h-3" /> {mod.lessons} Pelajaran
            </span>
            <span className={cn(
              "badge text-xs",
              status === "completed" ? "badge-success" :
              status === "in_progress" ? "badge-warning" :
              status === "locked" ? "bg-gray-100 text-gray-500" :
              "badge-navy"
            )}>
              {status === "completed" ? "✅ Selesai" :
               status === "in_progress" ? `🔄 ${pct}%` :
               status === "locked" ? "🔒 Terkunci" : "⬜ Belum Mulai"}
            </span>
          </div>
          <div className="progress-bar mb-3">
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
          {!mod.locked && (
            <Link
              href={`/learning/${program}/${mod.id}`}
              className={cn(
                "inline-flex items-center gap-1 text-xs font-semibold transition-colors",
                status === "not_started" ? "text-[#0B1F3A] hover:text-[#D4A017]" : "text-[#D4A017] hover:text-[#b8891a]"
              )}
            >
              <Play className="w-3 h-3" />
              {status === "not_started" ? "Mulai Belajar" : status === "completed" ? "Ulangi" : "Lanjutkan"}
              <ChevronRight className="w-3 h-3" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default function LearningCenterPage() {
  const [activeTab, setActiveTab] = useState<Tab>("hr-staff");

  const modules = activeTab === "hr-staff" ? HR_STAFF_MODULES : CHCO_MODULES;
  const totalCompleted = modules.reduce((sum, m) => sum + m.completed, 0);
  const totalLessons = modules.reduce((sum, m) => sum + m.lessons, 0);
  const overallPct = Math.round((totalCompleted / totalLessons) * 100);

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Header */}
      <div className="page-header">
        <h1 className="page-title">Learning Center</h1>
        <p className="page-subtitle">Kurikulum terstruktur untuk sertifikasi HR Anda</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-white rounded-2xl p-1 border border-[#E2E8F0] w-fit">
        <button
          onClick={() => setActiveTab("hr-staff")}
          className={cn(
            "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200",
            activeTab === "hr-staff"
              ? "bg-[#0B1F3A] text-white shadow-sm"
              : "text-[#718096] hover:text-[#0B1F3A]"
          )}
        >
          <BookOpen className="w-4 h-4" /> HR Staff
        </button>
        <button
          onClick={() => setActiveTab("chco")}
          className={cn(
            "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200",
            activeTab === "chco"
              ? "bg-[#0B1F3A] text-white shadow-sm"
              : "text-[#718096] hover:text-[#0B1F3A]"
          )}
        >
          <Award className="w-4 h-4" /> CHCO
        </button>
      </div>

      {/* Progress summary */}
      <div className="card-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute right-8 top-8 w-32 h-32 rounded-full border-[20px] border-white" />
        </div>
        <div className="relative flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <h2 className="text-lg font-bold text-white mb-1">
              {activeTab === "hr-staff" ? "HR Staff Certification" : "CHCO Certification"}
            </h2>
            <p className="text-white/70 text-sm">
              {modules.length} modul • {totalLessons} pelajaran
            </p>
          </div>
          <div className="text-right">
            <p className="text-4xl font-bold text-[#D4A017]">{overallPct}%</p>
            <p className="text-white/60 text-xs">{totalCompleted}/{totalLessons} pelajaran selesai</p>
          </div>
        </div>
        <div className="mt-4 progress-bar" style={{ height: "6px" }}>
          <div className="progress-fill-gold h-full rounded-full" style={{ width: `${overallPct}%` }} />
        </div>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {modules.map((mod) => (
          <ModuleCard key={mod.id} mod={mod} program={activeTab === "hr-staff" ? "hr-staff" : "chco"} />
        ))}
      </div>
    </div>
  );
}
