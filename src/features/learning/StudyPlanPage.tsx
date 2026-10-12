"use client";

import { useState } from "react";
import { 
  Calendar, CheckCircle, Clock, Target, Flag, Sparkles, 
  ChevronRight, ArrowRight, Award, Plus, CalendarCheck, Flame 
} from "lucide-react";
import { cn } from "@/lib/utils";

type PlanPhase = {
  phase: number;
  title: string;
  durationWeeks: string;
  goal: string;
  tasks: { id: string; text: string; done: boolean; tag: string }[];
};

const HR_STAFF_PLAN: PlanPhase[] = [
  {
    phase: 1,
    title: "Bulan 1: HR Fundamental & Job Analysis",
    durationWeeks: "Minggu 1 - 4",
    goal: "Menguasai dasar etika profesi, regulasi ketenagakerjaan utama, dan teknik menyusun Job Description standar industri.",
    tasks: [
      { id: "t1", text: "Pelajari UU Cipta Kerja (UU No 6/2023) & PP Turunan 35/2021", done: true, tag: "Hukum" },
      { id: "t2", text: "Kuasai Kode Etik HR & Standar Kompetensi Kerja Nasional (SKKNI)", done: true, tag: "Teori" },
      { id: "t3", text: "Latihan membuat 3 Job Description fungsional (Finance, Sales, Ops)", done: true, tag: "Praktik" },
      { id: "t4", text: "Kerjakan Kuis Modul 1 & 2 dengan nilai minimal 85%", done: false, tag: "Evaluasi" },
    ]
  },
  {
    phase: 2,
    title: "Bulan 2: Recruitment, Sourcing & Onboarding",
    durationWeeks: "Minggu 5 - 8",
    goal: "Mampu menyusun strategi sourcing, screening CV secara objektif, dan melakukan simulasi wawancara metode STAR.",
    tasks: [
      { id: "t5", text: "Pelajari teknik wawancara Behavioral Event Interview (BEI)", done: true, tag: "Wawancara" },
      { id: "t6", text: "Simulasi menyusun formulir Offering Letter & Perjanjian Kerja PKWT", done: false, tag: "Administrasi" },
      { id: "t7", text: "Rancang program New Hire Onboarding 90 hari pertama", done: false, tag: "Strategi" },
      { id: "t8", text: "Latihan 30 soal studi kasus seleksi kandidat", done: false, tag: "Tryout" },
    ]
  },
  {
    phase: 3,
    title: "Bulan 3: Payroll, BPJS & Perpajakan PPh 21",
    durationWeeks: "Minggu 9 - 12",
    goal: "Menguasai perhitungan kompensasi, formula lembur Depnaker, iuran 5 program BPJS, dan kalkulasi PPh 21 TER.",
    tasks: [
      { id: "t9", text: "Kuasai perhitungan upah lembur hari kerja & hari libur", done: false, tag: "Payroll" },
      { id: "t10", text: "Simulasi pelaporan BPJS Ketenagakerjaan (SIPP) & BPJS Kesehatan (Edabu)", done: false, tag: "BPJS" },
      { id: "t11", text: "Kalkulasi TER PPh 21 Bulanan sesuai PP 58/2023", done: false, tag: "Pajak" },
      { id: "t12", text: "Buat portofolio bukti kerja slip gaji & rekonsiliasi payroll", done: false, tag: "Portofolio" },
    ]
  },
  {
    phase: 4,
    title: "Bulan 4: Tryout Simulasi BNSP & Wawancara Asesor",
    durationWeeks: "Minggu 13 - 16",
    goal: "Mematangkan kesiapan mental dan uji kelayakan portofolio menjelang ujian sertifikasi resmi.",
    tasks: [
      { id: "t13", text: "Selesaikan 3 paket Tryout Lengkap BNSP (100 Soal, passing grade 80)", done: false, tag: "Tryout" },
      { id: "t14", text: "Verifikasi kelengkapan berkas portofolio bukti kompetensi (FR.APL.01 & 02)", done: false, tag: "Berkas" },
      { id: "t15", text: "Simulasi tanya jawab langsung dengan AI HR Coach Asesor", done: false, tag: "Wawancara" },
    ]
  }
];

const CHCO_PLAN: PlanPhase[] = [
  {
    phase: 1,
    title: "Bulan 1: Strategic Human Capital & Business Alignment",
    durationWeeks: "Minggu 1 - 4",
    goal: "Membangun mindset C-Level, menyelaraskan modal insani dengan pertumbuhan revenue korporat.",
    tasks: [
      { id: "c1", text: "Rancang HC Balanced Scorecard & Strategy Map korporat", done: true, tag: "Strategic" },
      { id: "c2", text: "Analisis Workload & Span of Control struktur organisasi", done: true, tag: "Org Design" },
      { id: "c3", text: "Susun Human Capital Risk Register untuk mitigasi risiko bisnis", done: false, tag: "Risk" },
    ]
  },
  {
    phase: 2,
    title: "Bulan 2: Executive Talent Pipeline & Performance Cascade",
    durationWeeks: "Minggu 5 - 8",
    goal: "Menetapkan suksesi kepemimpinan, kalibrasi 9-box grid, dan cascading OKR/KPI ke seluruh divisi.",
    tasks: [
      { id: "c4", text: "Fasilitasi sesi kalibrasi 9-Box Grid untuk Top 5% Leaders", done: false, tag: "Talent" },
      { id: "c5", text: "Desain sistem succession planning untuk C-1 dan C-2 roles", done: false, tag: "Succession" },
      { id: "c6", text: "Cascading corporate strategic objectives ke OKR kuartalan", done: false, tag: "Performance" },
    ]
  },
  {
    phase: 3,
    title: "Bulan 3: Total Rewards, Culture & Strategic IR",
    durationWeeks: "Minggu 9 - 12",
    goal: "Arsitektur gaji eksekutif (ESOP/LTIP), transformasi budaya kerja, dan mitigasi risiko industrial.",
    tasks: [
      { id: "c7", text: "Desain proposal Long-Term Incentive Plan (LTIP) dewan direksi", done: false, tag: "Rewards" },
      { id: "c8", text: "Diagnosa budaya organisasi menggunakan model OCAI", done: false, tag: "Culture" },
      { id: "c9", text: "Strategi perundingan Perjanjian Kerja Bersama (PKB)", done: false, tag: "IR" },
    ]
  },
  {
    phase: 4,
    title: "Bulan 4: Executive Boardroom Defense & Final Certification",
    durationWeeks: "Minggu 13 - 16",
    goal: "Presentasi komprehensif studi kasus di depan Master Asesor BNSP tingkat CHCO.",
    tasks: [
      { id: "c10", text: "Finalisasi portofolio transformasi Human Capital korporat", done: false, tag: "Portofolio" },
      { id: "c11", text: "Simulasi presentasi 20 menit Boardroom Defense", done: false, tag: "Defense" },
      { id: "c12", text: "Kelulusan Asesmen Akhir & Penerbitan Sertifikat BNSP", done: false, tag: "Kelulusan" },
    ]
  }
];

export default function StudyPlanPage() {
  const [selectedProgram, setSelectedProgram] = useState<"HR_STAFF" | "CHCO">("HR_STAFF");
  const [planPhases, setPlanPhases] = useState<PlanPhase[]>(HR_STAFF_PLAN);

  const handleProgramSwitch = (prog: "HR_STAFF" | "CHCO") => {
    setSelectedProgram(prog);
    setPlanPhases(prog === "HR_STAFF" ? HR_STAFF_PLAN : CHCO_PLAN);
  };

  const toggleTask = (phaseIdx: number, taskId: string) => {
    setPlanPhases((prev) =>
      prev.map((ph, idx) =>
        idx === phaseIdx
          ? {
              ...ph,
              tasks: ph.tasks.map((t) => (t.id === taskId ? { ...t, done: !t.done } : t)),
            }
          : ph
      )
    );
  };

  const allTasks = planPhases.flatMap((p) => p.tasks);
  const completedTasks = allTasks.filter((t) => t.done).length;
  const progressPercent = Math.round((completedTasks / allTasks.length) * 100);

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Top Banner */}
      <div className="card-navy flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold mb-3">
            <CalendarCheck className="w-3.5 h-3.5 text-[#D4A017]" />
            Rencana Belajar Terstruktur 16 Minggu
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Personalized Study Planner
          </h1>
          <p className="text-white/80 text-sm max-w-xl">
            Ikuti rencana belajar modular 4 bulan untuk memastikan Anda menguasai seluruh unit kompetensi sertifikasi tepat waktu.
          </p>
        </div>

        {/* Streak & Countdown Card */}
        <div className="flex items-center gap-4 bg-white/10 rounded-2xl p-4 backdrop-blur-md border border-white/10 self-start md:self-auto">
          <div className="text-center px-2">
            <div className="flex items-center justify-center gap-1 text-amber-400 font-bold text-xl">
              <Flame className="w-5 h-5 fill-amber-400" /> 14
            </div>
            <p className="text-[11px] text-white/70 font-medium">Hari Beruntun</p>
          </div>
          <div className="w-[1px] h-10 bg-white/20" />
          <div className="text-center px-2">
            <div className="text-white font-bold text-xl">45</div>
            <p className="text-[11px] text-white/70 font-medium">Hari Menuju Ujian</p>
          </div>
        </div>
      </div>

      {/* Program Selector & Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Toggle Program */}
        <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200">
          <button
            onClick={() => handleProgramSwitch("HR_STAFF")}
            className={cn(
              "px-4 py-2 rounded-lg text-xs font-bold transition-all",
              selectedProgram === "HR_STAFF"
                ? "bg-white text-[#0B1F3A] shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            )}
          >
            Kurikulum HR Staff
          </button>
          <button
            onClick={() => handleProgramSwitch("CHCO")}
            className={cn(
              "px-4 py-2 rounded-lg text-xs font-bold transition-all",
              selectedProgram === "CHCO"
                ? "bg-[#0B1F3A] text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            )}
          >
            Kurikulum CHCO Eksekutif
          </button>
        </div>

        {/* Progress summary */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-xs text-slate-500 font-medium">Progress Target</p>
            <p className="text-sm font-bold text-[#0B1F3A]">{completedTasks} dari {allTasks.length} Tugas Selesai ({progressPercent}%)</p>
          </div>
          <div className="w-24 bg-slate-200 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-[#D4A017] h-full rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* 4 Phases Timeline */}
      <div className="space-y-6">
        {planPhases.map((phase, pIdx) => {
          const phaseCompleted = phase.tasks.filter((t) => t.done).length;
          const phasePct = Math.round((phaseCompleted / phase.tasks.length) * 100);

          return (
            <div
              key={phase.phase}
              className="card-premium border-slate-200 hover:border-slate-300 transition-all space-y-4"
            >
              {/* Phase Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0B1F3A]/5 text-[#0B1F3A] font-bold text-sm flex items-center justify-center">
                    F{phase.phase}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B1F3A] text-base">
                      {phase.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      Target Waktu: {phase.durationWeeks}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="badge badge-navy text-xs">
                    {phaseCompleted} / {phase.tasks.length} Selesai
                  </span>
                  <div className="w-20 bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${phasePct}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Goal Description */}
              <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="font-semibold text-slate-800">🎯 Target Capaian: </span>
                {phase.goal}
              </p>

              {/* Task Checklist */}
              <div className="space-y-2 pt-1">
                {phase.tasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleTask(pIdx, task.id)}
                    className={cn(
                      "flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all",
                      task.done
                        ? "bg-emerald-50/40 border-emerald-200 text-slate-700"
                        : "bg-white border-slate-200 hover:bg-slate-50 text-slate-800"
                    )}
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className={cn(
                        "w-5 h-5 rounded-md flex items-center justify-center transition-colors flex-shrink-0",
                        task.done ? "bg-emerald-500 text-white" : "border-2 border-slate-300"
                      )}>
                        {task.done && <CheckCircle className="w-3.5 h-3.5" />}
                      </div>
                      <span className={cn(
                        "text-xs font-medium leading-relaxed",
                        task.done && "line-through text-slate-400"
                      )}>
                        {task.text}
                      </span>
                    </div>

                    <span className="badge bg-slate-100 text-slate-600 text-[10px] ml-2 flex-shrink-0">
                      {task.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
