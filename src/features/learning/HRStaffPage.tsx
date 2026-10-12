"use client";

import { useState } from "react";
import { 
  Users, BookOpen, Clock, CheckCircle, Lock, ChevronRight, Play, 
  Search, Filter, Award, Sparkles, FileText, Check, ArrowRight 
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const HR_STAFF_MODULES_DETAIL = [
  {
    id: 1,
    code: "HRS-M1",
    name: "Mengelola HRM dan Human Capital Management",
    skkniCode: "M.70SDM01.001.2.HRA01",
    description: "Memahami perbedaan mendasar HRM vs HCM, prinsip integrasi SPK ke PSR, 5 siklus inti HR, dan dampaknya terhadap produktivitas bisnis.",
    lessonsCount: 2,
    durationHours: 2,
    completedLessons: 2,
    status: "completed" as const,
    topics: [
      "Perbedaan Mendasar HRM vs HCM (SPK vs PSR)",
      "Prinsip Integrasi: Fondasi Sistem & Pengungkit Keunggulan",
      "5 Siklus Inti HR (Core HR Cycle)",
      "Dampak Praktik HR terhadap Produktivitas & Bisnis"
    ]
  },
  {
    id: 2,
    code: "HRS-M2",
    name: "Menyusun Analisa & Uraian Jabatan",
    skkniCode: "M.70SDM01.010.2",
    description: "Pengumpulan data jabatan metode 5W+2H, teknik menulis Job Description dan Job Specification, verifikasi SK Direksi, dan audit jabatan.",
    lessonsCount: 3,
    durationHours: 3,
    completedLessons: 3,
    status: "completed" as const,
    topics: [
      "Metode Pengumpulan Data & Rumus 5W+2H Pekerjaan",
      "Format Baku Job Description vs Job Specification",
      "Rumus Penulisan Uraian Tugas Berawalan Kata Kerja 'Me-'",
      "Pengesahan SK Direksi & Solusi Floating Tasks"
    ]
  },
  {
    id: 3,
    code: "HRS-M3",
    name: "Melakukan Administrasi Jaminan Sosial",
    skkniCode: "M.70SDM01.058.2",
    description: "Pengelolaan BPJS Kesehatan & BPJS Ketenagakerjaan (5 program), persentase iuran, batas plafon upah, portal SIPP & New e-DABU, dan klaim santunan.",
    lessonsCount: 3,
    durationHours: 3,
    completedLessons: 2,
    status: "in_progress" as const,
    topics: [
      "Ketentuan Iuran BPJS Kesehatan (5%: 4% Persh + 1% Pekerja)",
      "5 Program BPJS Ketenagakerjaan (JKK, JKM, JHT, JP, JKP)",
      "Klasifikasi Tingkat Risiko JKK (0,24% - 1,74%)",
      "Operasional SIPP Ketenagakerjaan & Klaim Santunan Kematian"
    ]
  },
  {
    id: 4,
    code: "HRS-M4",
    name: "Melakukan Administrasi Pengupahan",
    skkniCode: "M.70SDM01.057.2",
    description: "Komposisi upah (pokok min 75%), perhitungan lembur baku (1/173), administrasi PPh 21 tarif progresif, segregation of duties, dan SOP Penggajian.",
    lessonsCount: 4,
    durationHours: 4,
    completedLessons: 0,
    status: "not_started" as const,
    topics: [
      "Komposisi Upah Pokok Min 75% & Tunjangan Tetap Max 25%",
      "Asas No Work No Pay & Pengecualian Izin Resmi Berbayar",
      "Rumus Upah Lembur Per Jam (1/173) & Pengali Hari Kerja/Libur",
      "Administrasi PPh 21, Segregation of Duties & Format Slip Gaji"
    ]
  },
  {
    id: 5,
    code: "HRS-M5",
    name: "Melakukan Administrasi Penerapan Kebijakan SDM",
    skkniCode: "M.70SDM01.059.2",
    description: "9 fungsi MSDM yang dikelola kebijakan, hierarki dokumen regulasi ketenagakerjaan, 5 siklus penerapan kebijakan, dan formulir pendukung mutu.",
    lessonsCount: 3,
    durationHours: 3,
    completedLessons: 0,
    status: "not_started" as const,
    topics: [
      "9 Fungsi MSDM & Hierarki Regulasi (UU, PP, PKB, SOP, IK)",
      "5 Langkah Siklus Penerapan Kebijakan SDM",
      "Formulir Pendukung Mutu (Assessment, IDP, Evaluasi)",
      "Audit Kepatuhan Personalia & Indikator Keberhasilan Kebijakan"
    ]
  },
  {
    id: 6,
    code: "HRS-M6",
    name: "Persiapan Uji Kompetensi & Asesmen Portofolio BNSP",
    skkniCode: "ASSESS-HRS-FINAL",
    description: "Panduan pemenuhan dokumen bukti portofolio (VATM), simulasi uji lisan/wawancara asesor BNSP, dan strategi kelulusan sertifikasi HR Staff.",
    lessonsCount: 2,
    durationHours: 3,
    completedLessons: 0,
    status: "not_started" as const,
    topics: [
      "Verifikasi Portofolio Standar VATM (Valid, Asli, Terkini, Memadai)",
      "Kelengkapan Dokumen Portofolio Wajib Setiap Unit Kompetensi",
      "Simulasi Tanya-Jawab & Wawancara Pengujian Asesor BNSP",
      "Sikap Kerja (Attitude) & Tips Kelulusan Asesmen Mandiri"
    ]
  }
];

export default function HRStaffPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const totalLessons = HR_STAFF_MODULES_DETAIL.reduce((acc, m) => acc + m.lessonsCount, 0);
  const completedLessons = HR_STAFF_MODULES_DETAIL.reduce((acc, m) => acc + m.completedLessons, 0);
  const overallProgress = Math.round((completedLessons / totalLessons) * 100);

  const filteredModules = HR_STAFF_MODULES_DETAIL.filter((mod) => {
    const matchesSearch = mod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.skkniCode.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || mod.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Hero Header */}
      <div className="card-navy relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold mb-4 backdrop-blur-sm">
            <Users className="w-3.5 h-3.5 text-[#D4A017]" />
            Program Sertifikasi BNSP / SKKNI Level 3-4
          </div>
          <h1 className="text-3xl font-extrabold text-white mb-3">
            HR Staff Certification Mastery
          </h1>
          <p className="text-white/80 text-sm leading-relaxed mb-6">
            Program persiapan komprehensif untuk calon staf Human Resources operasional. Menguasai fondasi administrasi ketenagakerjaan, rekrutmen, payroll, dan kepatuhan BPJS berstandar industri.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white/10 rounded-xl p-4 backdrop-blur-md">
            <div>
              <p className="text-white/60 text-xs font-medium">Total Modul</p>
              <p className="text-xl font-bold text-white">7 Modul</p>
            </div>
            <div>
              <p className="text-white/60 text-xs font-medium">Total Materi</p>
              <p className="text-xl font-bold text-white">{totalLessons} Pelajaran</p>
            </div>
            <div>
              <p className="text-white/60 text-xs font-medium">Selesai</p>
              <p className="text-xl font-bold text-[#D4A017]">{completedLessons} / {totalLessons}</p>
            </div>
            <div>
              <p className="text-white/60 text-xs font-medium">Kelulusan</p>
              <p className="text-xl font-bold text-emerald-400">{overallProgress}%</p>
            </div>
          </div>
        </div>

        {/* Decorative background circle */}
        <div className="absolute -right-12 -bottom-12 w-96 h-96 rounded-full bg-gradient-to-tr from-[#D4A017]/20 to-transparent blur-3xl pointer-events-none" />
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari modul, topik, atau kode SKKNI..."
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
            Semua Modul (7)
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

      {/* Module Cards Grid */}
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
                  {/* Module Badge Number */}
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center font-bold text-base flex-shrink-0",
                    mod.status === "completed" ? "bg-emerald-100 text-emerald-700" :
                    mod.status === "in_progress" ? "bg-[#0B1F3A] text-[#D4A017]" :
                    isLocked ? "bg-slate-100 text-slate-400" : "bg-slate-100 text-[#0B1F3A]"
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
                        className="bg-[#D4A017] h-full rounded-full transition-all duration-300"
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
                      href={`/learning/hr-staff/${mod.id}`}
                      className="btn-primary text-xs py-2 px-4 shadow-sm hover:shadow"
                    >
                      <Play className="w-3.5 h-3.5 text-[#D4A017]" />
                      {mod.status === "completed" ? "Pelajari Ulang" : mod.status === "in_progress" ? "Lanjutkan" : "Mulai Modul"}
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
