"use client";

import { Suspense, useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, CheckCircle, Clock, BookOpen, Bookmark, 
  ChevronRight, ChevronLeft, HelpCircle, Sparkles, 
  ShieldCheck, FileText, Check, Award, ArrowRight 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { HR_STAFF_CURRICULUM, LessonContent } from "@/content/hrStaffModules";
import { CHCO_CURRICULUM } from "@/content/chcoModules";

function ModuleDetailContent() {
  const params = useParams();
  const router = useRouter();

  const program = (params?.program as string) || "hr-staff"; // 'hr-staff' | 'chco'
  const moduleId = parseInt(params?.moduleId as string, 10) || 1;

  const curriculumMap = program === "chco" ? CHCO_CURRICULUM : HR_STAFF_CURRICULUM;
  const currentModule = curriculumMap[moduleId] || curriculumMap[1];
  const lessons: LessonContent[] = currentModule?.lessons || [];

  const maxModules = Object.keys(curriculumMap).length;
  const prevModuleId = moduleId > 1 ? moduleId - 1 : null;
  const nextModuleId = moduleId < maxModules ? moduleId + 1 : null;

  const [activeLessonIdx, setActiveLessonIdx] = useState(0);
  const [completedLessonIds, setCompletedLessonIds] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState<"KONSEP" | "FRAMEWORK" | "KASUS" | "UJIAN">("KONSEP");
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<number | null>(null);
  const [showQuizExplanation, setShowQuizExplanation] = useState(false);

  // Reset lesson index and quiz state when moduleId changes
  useEffect(() => {
    setActiveLessonIdx(0);
    setSelectedQuizAnswer(null);
    setShowQuizExplanation(false);
    setActiveTab("KONSEP");
  }, [moduleId, program]);

  const currentLesson = lessons[activeLessonIdx] || lessons[0];
  const isLessonCompleted = completedLessonIds.includes(currentLesson?.id);

  const handleToggleComplete = () => {
    if (!currentLesson) return;
    if (isLessonCompleted) {
      setCompletedLessonIds(completedLessonIds.filter((id) => id !== currentLesson.id));
    } else {
      setCompletedLessonIds([...completedLessonIds, currentLesson.id]);
    }
  };

  const handleQuizSelect = (idx: number) => {
    setSelectedQuizAnswer(idx);
    setShowQuizExplanation(true);
  };

  if (!currentLesson) {
    return (
      <div className="p-12 text-center text-slate-500">
        <p>Materi tidak ditemukan.</p>
        <Link href={program === "chco" ? "/chco" : "/hr-staff"} className="btn-primary mt-4 inline-flex">
          Kembali ke Kurikulum
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in-up pb-12">
      {/* Navigation Top Bar */}
      <div className="flex items-center justify-between">
        <Link
          href={program === "chco" ? "/chco" : "/hr-staff"}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#0B1F3A] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Modul {program === "chco" ? "CHCO" : "HR Staff"}
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/ai-coach"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B1F3A]/5 hover:bg-[#0B1F3A]/10 text-[#0B1F3A] text-xs font-semibold transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" /> Tanya AI Coach Modul Ini
          </Link>
          <Link
            href="/notes"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
          >
            <FileText className="w-3.5 h-3.5" /> Buka Catatan
          </Link>
        </div>
      </div>

      {/* Module Header Banner */}
      <div className="card-navy p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={cn(
                "badge text-[10px] font-bold",
                program === "chco" ? "badge-gold" : "badge-navy bg-white/20 text-white"
              )}>
                {program === "chco" ? "CHCO Eksekutif (Level 7-8)" : "HR Staff Standar (Level 3-4)"}
              </span>
              <span className="text-white/40">•</span>
              <span className="text-xs text-white/80 font-mono">
                {currentModule.code} • SKKNI: {currentModule.skkniCode}
              </span>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              {currentModule.name}
            </h1>
            <p className="text-xs text-white/80 max-w-2xl leading-relaxed">
              {currentModule.description}
            </p>
          </div>

          {/* Module Switcher Buttons (Prev/Next) */}
          <div className="flex items-center gap-2 self-start sm:self-auto bg-white/10 p-2 rounded-xl border border-white/10 backdrop-blur-md">
            {prevModuleId ? (
              <Link
                href={`/learning/${program}/${prevModuleId}`}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors flex items-center gap-1"
                title={`Modul ${prevModuleId}`}
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Modul {prevModuleId}
              </Link>
            ) : (
              <span className="px-2 py-1 text-white/40 text-xs">Awal</span>
            )}
            <span className="text-white/40 text-xs">|</span>
            <span className="text-[#D4A017] text-xs font-bold px-1">
              Modul {moduleId} / {maxModules}
            </span>
            <span className="text-white/40 text-xs">|</span>
            {nextModuleId ? (
              <Link
                href={`/learning/${program}/${nextModuleId}`}
                className="px-3 py-1.5 rounded-lg bg-[#D4A017] hover:bg-[#b8891a] text-[#0B1F3A] text-xs font-bold transition-colors flex items-center gap-1"
                title={`Modul ${nextModuleId}`}
              >
                Modul {nextModuleId} <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            ) : (
              <span className="px-2 py-1 text-white/40 text-xs">Akhir</span>
            )}
          </div>
        </div>
      </div>

      {/* Main Grid: Left Lesson Sidebar + Right Content Reader */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[600px]">
        {/* Left Column: Lesson Index (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="card-premium p-4">
            <h3 className="font-bold text-sm text-[#0B1F3A] mb-3 flex items-center justify-between">
              <span>Daftar Materi Modul {moduleId}</span>
              <span className="text-xs text-slate-400 font-normal">
                {completedLessonIds.length} / {lessons.length} Selesai
              </span>
            </h3>

            <div className="space-y-2">
              {lessons.map((ls, idx) => {
                const isActive = idx === activeLessonIdx;
                const isDone = completedLessonIds.includes(ls.id);

                return (
                  <button
                    key={ls.id}
                    onClick={() => {
                      setActiveLessonIdx(idx);
                      setSelectedQuizAnswer(null);
                      setShowQuizExplanation(false);
                    }}
                    className={cn(
                      "w-full text-left p-3 rounded-xl border transition-all flex items-start gap-3",
                      isActive
                        ? "bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-md"
                        : "bg-white text-slate-800 border-slate-200 hover:bg-slate-50"
                    )}
                  >
                    <div className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5",
                      isDone
                        ? isActive ? "bg-[#D4A017] text-[#0B1F3A]" : "bg-emerald-500 text-white"
                        : isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                    )}>
                      {isDone ? <Check className="w-3 h-3" /> : idx + 1}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className={cn("text-xs font-bold line-clamp-2", isActive ? "text-white" : "text-[#0B1F3A]")}>
                        {ls.title}
                      </p>
                      <p className={cn("text-[11px] mt-1", isActive ? "text-white/70" : "text-slate-400")}>
                        <Clock className="w-3 h-3 inline mr-1" />
                        {ls.duration}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Exam Tips Box */}
          <div className="card-premium p-4 bg-amber-50/50 border-amber-200">
            <div className="flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-xs text-amber-900">Tips Uji Kompetensi BNSP</p>
                <p className="text-[11px] text-amber-800 mt-1 leading-relaxed">
                  Asesor menguji bukti portofolio kerja riil dan dasar hukum. Pastikan Anda membaca tab <strong>Highlight Asesor BNSP</strong> untuk mengantisipasi pertanyaan krusial.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Active Lesson Reader (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm space-y-6">
          <div>
            {/* Header Lesson */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                  <span>Pelajaran {activeLessonIdx + 1} dari {lessons.length}</span>
                  <span>•</span>
                  <span>{currentLesson.duration}</span>
                </div>
                <h2 className="text-xl font-bold text-[#0B1F3A]">
                  {currentLesson.title}
                </h2>
              </div>

              <button
                onClick={handleToggleComplete}
                className={cn(
                  "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all self-start sm:self-auto",
                  isLessonCompleted
                    ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                    : "btn-primary"
                )}
              >
                <CheckCircle className="w-4 h-4" />
                {isLessonCompleted ? "Selesai Dipelajari" : "Tandai Selesai"}
              </button>
            </div>

            {/* Content Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-200 pt-4 pb-2 overflow-x-auto">
              {[
                { key: "KONSEP", label: "Konsep & Teori" },
                { key: "FRAMEWORK", label: "Framework & SOP" },
                { key: "KASUS", label: "Studi Kasus Bisnis" },
                { key: "UJIAN", label: "Highlight Asesor BNSP" }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap",
                    activeTab === tab.key
                      ? "bg-[#0B1F3A] text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Body */}
            <div className="pt-4 leading-relaxed text-sm text-slate-700 min-h-[260px]">
              {activeTab === "KONSEP" && (
                <div className="bg-slate-50/50 p-5 rounded-xl border border-slate-200/80 font-sans leading-relaxed">
                  <FormattedContent content={currentLesson.concept} />
                </div>
              )}

              {activeTab === "FRAMEWORK" && (
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Tahapan Operasional & Best Practice:
                  </p>
                  <div className="space-y-2">
                    {currentLesson.framework.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors">
                        <span className="w-6 h-6 rounded-lg bg-[#0B1F3A] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-xs text-slate-700 leading-relaxed font-medium">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "KASUS" && (
                <div className="p-5 rounded-xl bg-blue-50/60 border border-blue-200 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-900 border-b border-blue-200/60 pb-2">
                    <BookOpen className="w-4 h-4 text-blue-600" /> Contoh Kasus Implementasi Riil di Tempat Kerja:
                  </div>
                  <div className="text-xs text-slate-700 leading-relaxed">
                    <FormattedContent content={currentLesson.caseStudy} />
                  </div>
                </div>
              )}

              {activeTab === "UJIAN" && (
                <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-900 border-b border-amber-200/60 pb-2">
                    <ShieldCheck className="w-4 h-4 text-[#D4A017]" /> Fokus Pertanyaan Asesor & Kunci Kelulusan BNSP:
                  </div>
                  <div className="text-xs text-slate-800 leading-relaxed font-medium">
                    <FormattedContent content={currentLesson.examHighlight} />
                  </div>
                </div>
              )}
            </div>

            {/* Mini Quiz Check */}
            <div className="mt-8 border-t border-slate-100 pt-6">
              <div className="card-premium bg-slate-50/70 border-slate-200 p-4 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B1F3A]">
                  <HelpCircle className="w-4 h-4 text-[#D4A017]" /> Kuis Cepat Pemahaman:
                </div>
                <p className="text-xs font-semibold text-slate-800">
                  {currentLesson.quiz.question}
                </p>

                <div className="space-y-1.5">
                  {currentLesson.quiz.options.map((opt, oIdx) => {
                    const isSelected = selectedQuizAnswer === oIdx;
                    const isCorrect = oIdx === currentLesson.quiz.correct;

                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleQuizSelect(oIdx)}
                        className={cn(
                          "w-full text-left p-2.5 rounded-lg text-xs font-medium border transition-all flex items-center justify-between",
                          showQuizExplanation
                            ? isCorrect
                              ? "bg-emerald-100 border-emerald-400 text-emerald-900 font-bold"
                              : isSelected
                              ? "bg-rose-100 border-rose-400 text-rose-900"
                              : "bg-white border-slate-200 text-slate-600"
                            : isSelected
                            ? "bg-[#0B1F3A] text-white border-[#0B1F3A]"
                            : "bg-white border-slate-200 hover:bg-slate-100 text-slate-700"
                        )}
                      >
                        <span>{String.fromCharCode(65 + oIdx)}. {opt}</span>
                        {showQuizExplanation && isCorrect && <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />}
                      </button>
                    );
                  })}
                </div>

                {showQuizExplanation && (
                  <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-600 leading-relaxed">
                    <span className="font-bold text-[#0B1F3A]">Pembahasan: </span>
                    {currentLesson.quiz.explanation}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Next/Prev Lesson Pagination */}
          <div className="flex items-center justify-between border-t border-slate-100 pt-4">
            <button
              disabled={activeLessonIdx === 0}
              onClick={() => {
                setActiveLessonIdx(activeLessonIdx - 1);
                setSelectedQuizAnswer(null);
                setShowQuizExplanation(false);
              }}
              className="btn-outline text-xs py-2 px-3 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-3.5 h-3.5" /> Pelajaran Sebelumnya
            </button>

            {activeLessonIdx < lessons.length - 1 ? (
              <button
                onClick={() => {
                  setActiveLessonIdx(activeLessonIdx + 1);
                  setSelectedQuizAnswer(null);
                  setShowQuizExplanation(false);
                }}
                className="btn-primary text-xs py-2 px-4"
              >
                Pelajaran Berikutnya <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : nextModuleId ? (
              <Link
                href={`/learning/${program}/${nextModuleId}`}
                className="btn-gold text-xs py-2 px-4"
              >
                Lanjut ke Modul {nextModuleId} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ) : (
              <Link
                href={program === "chco" ? "/chco" : "/hr-staff"}
                className="btn-primary text-xs py-2 px-4"
              >
                Selesai Semua Modul <CheckCircle className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FormattedContent({ content }: { content: string }) {
  if (!content) return null;
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let tableRows: string[] = [];
  let inCodeBlock = false;
  let codeLines: string[] = [];

  const formatInline = (text: string): React.ReactNode => {
    // Split by bold **text**
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-bold text-[#0B1F3A]">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const flushTable = (key: number) => {
    if (tableRows.length === 0) return null;
    const headerRow = tableRows[0];
    const dataRows = tableRows.slice(2); // Skip divider row e.g. |:---|:---|
    const parseCells = (row: string) =>
      row
        .split("|")
        .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1)
        .map((c) => c.trim());

    const headers = parseCells(headerRow);
    const rows = dataRows.map(parseCells);
    tableRows = [];

    return (
      <div key={`table-${key}`} className="my-3 overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
        <table className="w-full text-xs text-left border-collapse">
          <thead className="bg-[#0B1F3A] text-white">
            <tr>
              {headers.map((h, idx) => (
                <th key={idx} className="p-2.5 font-bold border-b border-slate-200">
                  {formatInline(h)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {rows.map((row, rIdx) => (
              <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-slate-50/70 hover:bg-slate-100/50"}>
                {row.map((cell, cIdx) => (
                  <td key={cIdx} className="p-2.5 text-slate-700">
                    {formatInline(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const flushCode = (key: number) => {
    if (codeLines.length === 0) return null;
    const code = codeLines.join("\n");
    codeLines = [];
    return (
      <pre
        key={`code-${key}`}
        className="my-2.5 p-3.5 rounded-xl bg-slate-900 text-amber-300 font-mono text-xs overflow-x-auto shadow-inner leading-relaxed"
      >
        {code}
      </pre>
    );
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.trim().startsWith("```")) {
      if (inCodeBlock) {
        elements.push(flushCode(i));
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
      tableRows.push(line.trim());
      continue;
    } else if (tableRows.length > 0) {
      elements.push(flushTable(i));
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          className="text-sm font-bold text-[#0B1F3A] mt-4 mb-2 flex items-center gap-2 border-b border-slate-200/80 pb-1.5"
        >
          <span className="w-1.5 h-4 bg-[#D4A017] rounded-full inline-block" />
          {formatInline(line.replace("### ", ""))}
        </h3>
      );
    } else if (line.startsWith("> ")) {
      elements.push(
        <div
          key={i}
          className="my-3 p-3.5 rounded-xl bg-amber-50/80 border-l-4 border-[#D4A017] text-xs text-amber-900 italic font-medium"
        >
          {formatInline(line.replace("> ", ""))}
        </div>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <div key={i} className="flex items-start gap-2 my-1.5 text-xs text-slate-700 pl-1.5">
          <span className="text-[#D4A017] font-bold text-sm leading-none mt-0.5">•</span>
          <span className="leading-relaxed">{formatInline(line.replace("- ", ""))}</span>
        </div>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={i} className="h-1.5" />);
    } else {
      elements.push(
        <p key={i} className="text-xs text-slate-700 leading-relaxed my-1">
          {formatInline(line)}
        </p>
      );
    }
  }

  if (tableRows.length > 0) {
    elements.push(flushTable(lines.length));
  }
  if (inCodeBlock) {
    elements.push(flushCode(lines.length));
  }

  return <div className="space-y-1">{elements}</div>;
}

export default function ModuleDetailPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500 text-xs">Memuat modul pelajaran...</div>}>
      <ModuleDetailContent />
    </Suspense>
  );
}
