"use client";

import { useState } from "react";
import { 
  Award, BookOpen, Clock, CheckCircle, Lock, ChevronRight, Play, 
  Search, Filter, TrendingUp, ShieldCheck, Check, Briefcase, Zap
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const CHCO_MODULES_DETAIL = [
  {
    id: 1,
    code: "CHCO-M1",
    name: "Mengelola Human Resource & Human Capital Management",
    skkniCode: "M.70SDM01.001.2.HRA01",
    description: "Transformasi dari HRM administratif menuju Strategic Human Capital, prinsip SPK ke PSR, arsitektur HC Strategy, dan pengukuran nilai bisnis (HC ROI & HCVA).",
    lessonsCount: 2,
    durationHours: 3,
    completedLessons: 2,
    status: "completed" as const,
    topics: [
      "Transformasi HRM ke HCM: Menghubungkan People dengan Nilai Bisnis",
      "Prinsip Integrasi: Fondasi SPK Menuju Pengungkit PSR",
      "Arsitektur Human Capital Strategy 5 Tahap",
      "Kalkulasi Finansial untuk C-Level: HC ROI, HCVA & Revenue per FTE"
    ]
  },
  {
    id: 2,
    code: "CHCO-M2",
    name: "Menyusun Standar Operasional Prosedur (SOP) MSDM",
    skkniCode: "M.70SDM01.013.2",
    description: "Prinsip ICH & Permen PAN-RB 35/2012, klasifikasi SOP teknis/administratif dan makro/mikro, anatomi format baku SOP, serta standarisasi simbol flowchart.",
    lessonsCount: 3,
    durationHours: 3,
    completedLessons: 3,
    status: "completed" as const,
    topics: [
      "Esensi & 5 Tahap Siklus Penyusunan SOP MSDM",
      "Klasifikasi SOP: Teknis vs Administratif & Makro vs Mikro",
      "Format Baku Dokumen SOP: Elemen Atribut & Elemen Utama",
      "Standarisasi Simbol Diagram Alir (Flowchart) Proses Bisnis HR"
    ]
  },
  {
    id: 3,
    code: "CHCO-M3",
    name: "Melaksanakan Proses Rekrutmen, Seleksi & Onboarding",
    skkniCode: "M.70SDM01.017.2",
    description: "Proses bisnis rekrutmen Mondy (2008), alternatif selain rekrutmen, teknik wawancara BEI berbasis STAR, eliminasi bias, offering letter, dan metrik rekrutmen.",
    lessonsCount: 3,
    durationHours: 4,
    completedLessons: 1,
    status: "in_progress" as const,
    topics: [
      "Proses Bisnis Rekrutmen End-to-End & Alternatif Rekrutmen",
      "Teknik Wawancara Perilaku Berbasis STAR (BEI)",
      "Eliminasi Bias Pewawancara (Halo Effect, Similarity, dll)",
      "Offering Letter, Onboarding 30-60-90 & Metrik Rekrutmen"
    ]
  },
  {
    id: 4,
    code: "CHCO-M4",
    name: "Melaksanakan Kegiatan Pembelajaran & Pengembangan",
    skkniCode: "M.70SDM01.033.2",
    description: "Perbedaan Training vs Development, model ADDIE, analisis kebutuhan pelatihan (TNA 3 tingkat), kerangka 70:20:10, desain silabus, dan evaluasi Kirkpatrick.",
    lessonsCount: 3,
    durationHours: 4,
    completedLessons: 0,
    status: "not_started" as const,
    topics: [
      "Perbedaan Training vs Development & Siklus Model ADDIE",
      "Training Need Analysis (TNA 3 Tingkat: Org, Task, Person)",
      "Model Pembelajaran Campuran 70:20:10 (Cherrington)",
      "Desain Silabus, Modul Pelatihan & Evaluasi 4 Level Kirkpatrick"
    ]
  },
  {
    id: 5,
    code: "CHCO-M5",
    name: "Strategic HC Alignment, Balanced Scorecard & Governance",
    skkniCode: "M.70SDM01.035.1",
    description: "Penyelarasan HC Strategy dengan corporate objective, perumusan HC Balanced Scorecard 4 perspektif, dan pengelolaan Human Capital Risk Register.",
    lessonsCount: 2,
    durationHours: 3,
    completedLessons: 0,
    status: "not_started" as const,
    topics: [
      "Cascading HC Strategy Map & Balanced Scorecard 4 Perspektif",
      "Hubungan Sebab-Akibat dari Learning ke Financial Outcomes",
      "Human Capital Risk Register & Matriks Risiko Likelihood x Impact",
      "Mitigasi Risiko Suksesi Posisi Misi Kritis Dewan Direksi"
    ]
  },
  {
    id: 6,
    code: "CHCO-M6",
    name: "Persiapan Uji Kompetensi & Asesmen Portofolio BNSP CHCO",
    skkniCode: "ASSESS-CHCO-FINAL",
    description: "Verifikasi dokumen portofolio wajib CHCO (SOP MSDM, Berkas Rekrutmen & BEI, TNA/Modul Pelatihan, HCM Strategy), simulasi wawancara dewan asesor, dan tips kelulusan.",
    lessonsCount: 2,
    durationHours: 3,
    completedLessons: 0,
    status: "not_started" as const,
    topics: [
      "Verifikasi Portofolio Standar VATM Level Manajerial",
      "4 Berkas Portofolio Wajib Unit Kompetensi CHCO",
      "Simulasi Wawancara Dewan Asesor & Strategic Decision Making",
      "Tips Kelulusan Asesmen CHCO & Rekomendasi Asesor"
    ]
  }
];

export default function CHCOPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const totalLessons = CHCO_MODULES_DETAIL.reduce((acc, m) => acc + m.lessonsCount, 0);
  const completedLessons = CHCO_MODULES_DETAIL.reduce((acc, m) => acc + m.completedLessons, 0);
  const overallProgress = Math.round((completedLessons / totalLessons) * 100);

  const filteredModules = CHCO_MODULES_DETAIL.filter((mod) => {
    const matchesSearch = mod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.skkniCode.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || mod.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Executive Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden p-8 text-white bg-gradient-to-br from-[#0B1F3A] via-[#102a4e] to-[#1a3e6f] border border-[#D4A017]/30 shadow-xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A017]/20 border border-[#D4A017]/40 text-[#D4A017] text-xs font-semibold mb-4 backdrop-blur-sm">
            <Award className="w-3.5 h-3.5" />
            Executive Level Program • BNSP / SKKNI Level 7-8
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-white mb-3 tracking-tight">
            Chief Human Capital Officer (CHCO)
          </h1>
          <p className="text-slate-200 text-sm leading-relaxed mb-6">
            Kurikulum tingkat eksekutif bagi para pimpinan Human Capital untuk menguasai strategi bisnis, desain organisasi, suksesi talenta C-Level, total rewards, dan boardroom leadership.
          </p>

          {/* Executive Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white/10 rounded-xl p-4 backdrop-blur-md border border-white/10">
            <div>
              <p className="text-white/60 text-xs font-medium">Total Modul</p>
              <p className="text-xl font-bold text-white">11 Modul</p>
            </div>
            <div>
              <p className="text-white/60 text-xs font-medium">Total Pelajaran</p>
              <p className="text-xl font-bold text-white">{totalLessons} Materi</p>
            </div>
            <div>
              <p className="text-white/60 text-xs font-medium">Selesai</p>
              <p className="text-xl font-bold text-[#D4A017]">{completedLessons} / {totalLessons}</p>
            </div>
            <div>
              <p className="text-white/60 text-xs font-medium">Kesiapan Sertifikasi</p>
              <p className="text-xl font-bold text-emerald-400">{overallProgress}%</p>
            </div>
          </div>
        </div>

        {/* Ambient gold glow */}
        <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-gradient-to-b from-[#D4A017]/30 to-transparent blur-3xl pointer-events-none" />
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari modul CHCO atau kode SKKNI..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field pl-10"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setStatusFilter("all")}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors",
              statusFilter === "all" ? "bg-[#0B1F3A] text-white" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            )}
          >
            Semua Modul (11)
          </button>
          <button
            onClick={() => setStatusFilter("in_progress")}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors",
              statusFilter === "in_progress" ? "bg-amber-500 text-white" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            )}
          >
            Sedang Berjalan
          </button>
          <button
            onClick={() => setStatusFilter("completed")}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors",
              statusFilter === "completed" ? "bg-emerald-600 text-white" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            )}
          >
            Selesai
          </button>
        </div>
      </div>

      {/* Modules List */}
      <div className="space-y-4">
        {filteredModules.map((mod) => {
          const pct = Math.round((mod.completedLessons / mod.lessonsCount) * 100);
          const isLocked = (mod.status as string) === "locked";

          return (
            <div
              key={mod.id}
              className={cn(
                "card-premium transition-all duration-200",
                isLocked ? "opacity-60 bg-slate-50/50" : "hover:border-[#D4A017]/40 hover:shadow-lg"
              )}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex items-start gap-4 flex-1">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center font-bold text-base flex-shrink-0",
                    mod.status === "completed" ? "bg-emerald-100 text-emerald-700" :
                    mod.status === "in_progress" ? "bg-[#0B1F3A] text-[#D4A017]" :
                    isLocked ? "bg-slate-100 text-slate-400" : "bg-[#D4A017]/10 text-[#0B1F3A]"
                  )}>
                    {mod.id}
                  </div>

                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold text-[#D4A017] tracking-wider uppercase">
                        {mod.code}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                        SKKNI: {mod.skkniCode}
                      </span>
                      <span className={cn(
                        "badge text-[11px]",
                        mod.status === "completed" ? "badge-success" :
                        mod.status === "in_progress" ? "badge-warning" :
                        isLocked ? "bg-slate-100 text-slate-400" : "badge-navy"
                      )}>
                        {mod.status === "completed" ? "Selesai" :
                         mod.status === "in_progress" ? `${pct}% Selesai` :
                         isLocked ? "Terkunci" : "Belum Mulai"}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0B1F3A]">
                      {mod.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                      {mod.description}
                    </p>

                    {/* Topics bullet list */}
                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {mod.topics.map((topic, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                          <span className="truncate">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Action & Stats */}
                <div className="flex lg:flex-col items-center lg:items-end justify-between gap-4 lg:w-48 flex-shrink-0 border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-100">
                  <div className="text-left lg:text-right">
                    <p className="text-xs font-medium text-slate-500">
                      {mod.completedLessons} dari {mod.lessonsCount} Selesai
                    </p>
                    <div className="w-32 bg-slate-100 h-2 rounded-full overflow-hidden mt-1.5">
                      <div
                        className="bg-gradient-to-r from-[#D4A017] to-amber-500 h-full rounded-full transition-all duration-300"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>

                  {isLocked ? (
                    <button disabled className="btn-outline opacity-50 cursor-not-allowed text-xs py-2 px-3">
                      <Lock className="w-3.5 h-3.5" />
                      Terkunci
                    </button>
                  ) : (
                    <Link
                      href={`/learning/chco/${mod.id}`}
                      className="btn-gold text-xs py-2 px-4 shadow-sm hover:shadow"
                    >
                      <Play className="w-3.5 h-3.5" />
                      {mod.status === "completed" ? "Kaji Ulang" : mod.status === "in_progress" ? "Lanjutkan" : "Mulai Eksekutif"}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
