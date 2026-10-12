"use client";

import { useState } from "react";
import { 
  ClipboardList, Award, CheckCircle, Clock, AlertTriangle, 
  HelpCircle, Play, FileCheck, ShieldCheck, Sparkles, UserCheck, 
  ChevronRight, ArrowRight, BookOpen, Target 
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ExamMode = {
  id: string;
  title: string;
  certification: "HR_STAFF" | "CHCO";
  type: "FULL_SIMULATION" | "MINI_TRYOUT" | "PORTFOLIO_REVIEW";
  questionsCount: number;
  durationMinutes: number;
  passingScore: number;
  description: string;
  color: string;
};

const EXAM_PACKAGES: ExamMode[] = [
  {
    id: "sim-hrs-full",
    title: "Simulasi Penuh Uji Kompetensi HR Staff (BNSP)",
    certification: "HR_STAFF",
    type: "FULL_SIMULATION",
    questionsCount: 100,
    durationMinutes: 90,
    passingScore: 80,
    description: "Ujian simulasi komprehensif mencakup 7 unit kompetensi SKKNI. Dilengkapi timer realistis, penilaian otomatis, dan telaah jawaban pasca ujian.",
    color: "blue",
  },
  {
    id: "sim-hrs-quick",
    title: "Quick Diagnostic Assessment: HR Staff",
    certification: "HR_STAFF",
    type: "MINI_TRYOUT",
    questionsCount: 25,
    durationMinutes: 25,
    passingScore: 75,
    description: "Evaluasi kilat untuk memetakan kelemahan materi unit kompetensi sebelum mengambil simulasi penuh 100 soal.",
    color: "indigo",
  },
  {
    id: "sim-chco-full",
    title: "Executive Boardroom Defense & CHCO Exam",
    certification: "CHCO",
    type: "FULL_SIMULATION",
    questionsCount: 80,
    durationMinutes: 120,
    passingScore: 85,
    description: "Simulasi studi kasus dewan direksi, analisa keuangan modal insani, kalkulasi HC ROI, dan uji kebijakan strategis HC.",
    color: "amber",
  },
  {
    id: "sim-chco-quick",
    title: "C-Level Strategy Diagnostic Tryout",
    certification: "CHCO",
    type: "MINI_TRYOUT",
    questionsCount: 30,
    durationMinutes: 35,
    passingScore: 80,
    description: "Tryout uji analisa taktis kepemimpinan, restrukturisasi bisnis, dan mitigasi risiko industrial.",
    color: "orange",
  }
];

const PORTFOLIO_CHECKLIST_HRS = [
  { id: "p1", code: "FR.APL.01", title: "Formulir Permohonan Sertifikasi Kompetensi", ready: true },
  { id: "p2", code: "FR.APL.02", title: "Formulir Asesmen Mandiri (Self-Assessment)", ready: true },
  { id: "p3", code: "BUKTI-01", title: "Dokumen Job Description & Analisis Jabatan Riil", ready: true },
  { id: "p4", code: "BUKTI-02", title: "Draft Perjanjian Kerja Waktu Tertentu (PKWT) sesuai PP 35/2021", ready: true },
  { id: "p5", code: "BUKTI-03", title: "Slip Gaji & Rekonsiliasi Perhitungan Iuran BPJS / PPh 21", ready: false },
  { id: "p6", code: "BUKTI-04", title: "Panduan / SOP Seleksi Rekrutmen & Form Penilaian BEI", ready: false },
];

const ASESOR_INTERVIEW_TIPS = [
  {
    q: "Bagaimana Anda membuktikan bahwa sebuah PKWT telah sah secara hukum ketenagakerjaan?",
    tip: "Jelaskan 4 pilar PP 35/2021: Batas maksimal 5 tahun, wajib pencatatan daring Disnaker dalam 7 hari kerja, larangan masa percobaan (probation), dan kewajiban kompensasi PKWT saat berakhir.",
  },
  {
    q: "Jika terjadi perselisihan hak terkait pemotongan upah atau lembur, apa langkah operasional Anda?",
    tip: "Gunakan pendekatan Bipartit terlebih dahulu (Pasal 3 UU No. 2/2004), buat risalah perundingan resmi dalam 30 hari, sebelum melangkah ke Mediasi Disnaker.",
  },
  {
    q: "Jelaskan metode 9-Box Grid dan bagaimana Anda menggunakannya untuk suksesi eksekutif?",
    tip: "Terangkan matriks performa vs potensi, kategorisasi Box 9 (High-High), dan strategi penugasan khusus (stretch assignment) untuk mempertahankan suksesor kritis.",
  }
];

export default function ExamPrepPage() {
  const [activeTab, setActiveTab] = useState<"SIMULATION" | "PORTFOLIO" | "INTERVIEW">("SIMULATION");
  const [portfolio, setPortfolio] = useState(PORTFOLIO_CHECKLIST_HRS);

  const togglePortfolio = (id: string) => {
    setPortfolio(prev => prev.map(item => item.id === id ? { ...item, ready: !item.ready } : item));
  };

  const readyCount = portfolio.filter(p => p.ready).length;
  const portfolioProgress = Math.round((readyCount / portfolio.length) * 100);

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Hero Header */}
      <div className="card-navy relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4A017]" />
            Pusat Kesiapan Asesmen Resmi BNSP
          </div>
          <h1 className="text-3xl font-extrabold text-white mb-2">
            Persiapan Ujian & Sertifikasi HR
          </h1>
          <p className="text-white/80 text-sm leading-relaxed mb-6">
            Pusat simulasi ujian tryout terstandarisasi, verifikasi kelengkapan berkas portofolio (FR.APL.01 & 02), dan panduan menghadapi uji wawancara langsung asesor kompetensi.
          </p>

          <div className="grid grid-cols-3 gap-4 bg-white/10 rounded-xl p-4 backdrop-blur-md">
            <div>
              <p className="text-white/60 text-xs font-medium">Paket Tryout</p>
              <p className="text-xl font-bold text-white">4 Paket</p>
            </div>
            <div>
              <p className="text-white/60 text-xs font-medium">Portofolio Bukti</p>
              <p className="text-xl font-bold text-[#D4A017]">{readyCount} / {portfolio.length}</p>
            </div>
            <div>
              <p className="text-white/60 text-xs font-medium">Passing Grade Rata-rata</p>
              <p className="text-xl font-bold text-emerald-400">80%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center border-b border-slate-200">
        <button
          onClick={() => setActiveTab("SIMULATION")}
          className={cn(
            "px-5 py-3 font-bold text-sm border-b-2 transition-all flex items-center gap-2",
            activeTab === "SIMULATION"
              ? "border-[#0B1F3A] text-[#0B1F3A]"
              : "border-transparent text-slate-500 hover:text-slate-800"
          )}
        >
          <ClipboardList className="w-4 h-4" /> Paket Simulasi Tryout
        </button>
        <button
          onClick={() => setActiveTab("PORTFOLIO")}
          className={cn(
            "px-5 py-3 font-bold text-sm border-b-2 transition-all flex items-center gap-2",
            activeTab === "PORTFOLIO"
              ? "border-[#0B1F3A] text-[#0B1F3A]"
              : "border-transparent text-slate-500 hover:text-slate-800"
          )}
        >
          <FileCheck className="w-4 h-4" /> Kelengkapan Portofolio Asesor
        </button>
        <button
          onClick={() => setActiveTab("INTERVIEW")}
          className={cn(
            "px-5 py-3 font-bold text-sm border-b-2 transition-all flex items-center gap-2",
            activeTab === "INTERVIEW"
              ? "border-[#0B1F3A] text-[#0B1F3A]"
              : "border-transparent text-slate-500 hover:text-slate-800"
          )}
        >
          <UserCheck className="w-4 h-4" /> Tanya Jawab Asesor & STAR
        </button>
      </div>

      {/* TAB 1: SIMULATION PACKAGES */}
      {activeTab === "SIMULATION" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EXAM_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="card-premium flex flex-col justify-between hover:border-[#D4A017]/40 transition-all shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={cn(
                    "badge text-xs font-semibold",
                    pkg.certification === "CHCO" ? "badge-gold" : "badge-navy"
                  )}>
                    {pkg.certification === "CHCO" ? "CHCO Eksekutif" : "HR Staff Standar"}
                  </span>

                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {pkg.durationMinutes} Menit
                  </span>
                </div>

                <h3 className="font-bold text-lg text-[#0B1F3A] mb-2">
                  {pkg.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {pkg.description}
                </p>

                <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 mb-6 text-xs">
                  <div>
                    <span className="text-slate-400">Jumlah Soal:</span>
                    <p className="font-bold text-[#0B1F3A]">{pkg.questionsCount} Soal Pilihan Ganda</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Passing Grade:</span>
                    <p className="font-bold text-emerald-600">{pkg.passingScore}% Skor Minimal</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Model Penilaian Resmi BNSP
                </span>
                <Link
                  href="/questions"
                  className={cn(
                    "inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl transition-all",
                    pkg.certification === "CHCO" ? "btn-gold" : "btn-primary"
                  )}
                >
                  <Play className="w-3.5 h-3.5" /> Mulai Simulasi Ujian
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: PORTFOLIO CHECKLIST */}
      {activeTab === "PORTFOLIO" && (
        <div className="space-y-6">
          <div className="card-premium flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-base text-[#0B1F3A]">Status Kesiapan Portofolio Bukti Kerja</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Pastikan Anda mengunggah dan memverifikasi dokumen riil sebelum hari asesmen uji kompetensi.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="badge badge-success text-xs">
                {readyCount} dari {portfolio.length} Terpenuhi ({portfolioProgress}%)
              </span>
              <div className="w-24 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full transition-all" style={{ width: `${portfolioProgress}%` }} />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {portfolio.map((item) => (
              <div
                key={item.id}
                onClick={() => togglePortfolio(item.id)}
                className={cn(
                  "p-4 rounded-xl border flex items-center justify-between gap-4 cursor-pointer transition-all",
                  item.ready ? "bg-emerald-50/50 border-emerald-200" : "bg-white border-slate-200 hover:bg-slate-50"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-6 h-6 rounded-md flex items-center justify-center transition-colors",
                    item.ready ? "bg-emerald-500 text-white" : "border-2 border-slate-300"
                  )}>
                    {item.ready && <CheckCircle className="w-4 h-4" />}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 font-semibold">{item.code}</span>
                    <h4 className={cn("text-sm font-bold text-[#0B1F3A]", item.ready && "text-slate-700")}>
                      {item.title}
                    </h4>
                  </div>
                </div>

                <span className={cn(
                  "badge text-xs",
                  item.ready ? "badge-success" : "badge-warning"
                )}>
                  {item.ready ? "Sudah Siap" : "Belum Dilengkapi"}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: ASESOR INTERVIEW */}
      {activeTab === "INTERVIEW" && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-900 mb-0.5">Tips Wawancara Asesor Kompetensi (Model STAR)</p>
              <p>
                Saat menjawab asesor, selalu gunakan struktur: <strong>Situation</strong> (latar belakang masalah), <strong>Task</strong> (tanggung jawab Anda), <strong>Action</strong> (langkah konkret & dasar hukum yang Anda ambil), dan <strong>Result</strong> (hasil terukur bagi perusahaan).
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {ASESOR_INTERVIEW_TIPS.map((item, idx) => (
              <div key={idx} className="card-premium space-y-2 border-slate-200">
                <div className="flex items-start gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#0B1F3A] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </span>
                  <h4 className="font-bold text-sm text-[#0B1F3A] pt-0.5">
                    {item.q}
                  </h4>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700 ml-8 leading-relaxed">
                  <span className="font-semibold text-emerald-700">💡 Rekomendasi Jawaban Ideal: </span>
                  {item.tip}
                </div>
              </div>
            ))}
          </div>

          {/* AI Coach Assistant Link */}
          <div className="card-navy flex items-center justify-between p-6">
            <div>
              <h4 className="font-bold text-white text-base">Ingin Latihan Simulasi Wawancara Langsung?</h4>
              <p className="text-xs text-white/80 mt-1">
                Gunakan AI HR Coach sebagai simulator Asesor BNSP yang akan menguji jawaban Anda secara interaktif.
              </p>
            </div>
            <Link href="/ai-coach" className="btn-gold text-xs py-2 px-4 flex-shrink-0">
              Mulai Simulasi AI Coach <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
