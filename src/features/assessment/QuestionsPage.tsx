"use client";

import { useState } from "react";
import { CheckCircle, XCircle, ChevronRight, Timer, BarChart2, HelpCircle, Shuffle, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

const SAMPLE_QUESTIONS = [
  {
    id: "1", category: "Talent Management", topic: "Succession Planning",
    difficulty: "MEDIUM" as const, certification_type: "CHCO" as const,
    question: "Apa yang dimaksud dengan Succession Planning dalam konteks Human Capital Management?",
    option_a: "Proses perencanaan pengembangan karir pegawai secara individual",
    option_b: "Sistem identifikasi dan pengembangan kandidat untuk mengisi posisi kunci di masa depan",
    option_c: "Program orientasi karyawan baru yang terstruktur",
    option_d: "Kebijakan penggantian pegawai yang pensiun secara otomatis",
    answer: "B" as const,
    explanation: "Succession Planning adalah proses sistematis mengidentifikasi, menilai, dan mengembangkan talenta internal untuk mengisi posisi kepemimpinan dan kunci di masa depan. Fokusnya adalah keberlangsungan organisasi melalui pipeline pemimpin yang siap.",
  },
  {
    id: "2", category: "HR Analytics", topic: "HCROI",
    difficulty: "HARD" as const, certification_type: "CHCO" as const,
    question: "Sebuah perusahaan memiliki revenue Rp 10 Miliar, biaya non-SDM Rp 6 Miliar, dan total biaya SDM Rp 2 Miliar. Berapakah HCROI-nya?",
    option_a: "0.5", option_b: "1.0", option_c: "2.0", option_d: "1.5",
    answer: "B" as const,
    explanation: "HCROI = (Revenue - Non-HR Cost - HR Cost) / HR Cost = (10B - 6B - 2B) / 2B = 2B / 2B = 1.0. Artinya setiap Rp 1 investasi SDM menghasilkan Rp 1 return.",
  },
  {
    id: "3", category: "Compensation", topic: "PPh 21",
    difficulty: "EASY" as const, certification_type: "HR_STAFF" as const,
    question: "Penghasilan Tidak Kena Pajak (PTKP) untuk Wajib Pajak orang pribadi yang belum menikah pada tahun 2024 adalah:",
    option_a: "Rp 36.000.000 per tahun", option_b: "Rp 54.000.000 per tahun",
    option_c: "Rp 48.000.000 per tahun", option_d: "Rp 60.000.000 per tahun",
    answer: "B" as const,
    explanation: "PTKP untuk status TK/0 (belum menikah, tanpa tanggungan) adalah Rp 54.000.000 per tahun atau Rp 4.500.000 per bulan berdasarkan PMK Nomor 101/PMK.010/2016.",
  },
  {
    id: "4", category: "BPJS", topic: "Jaminan Hari Tua",
    difficulty: "EASY" as const, certification_type: "HR_STAFF" as const,
    question: "Berapa persentase iuran JHT (Jaminan Hari Tua) BPJS Ketenagakerjaan yang ditanggung perusahaan?",
    option_a: "2%", option_b: "3.7%", option_c: "5.7%", option_d: "1%",
    answer: "B" as const,
    explanation: "Iuran JHT = 5.7% dari upah: Perusahaan menanggung 3.7% dan karyawan 2%. Total 5.7% dihitung dari gaji pokok + tunjangan tetap.",
  },
  {
    id: "5", category: "Strategic HR", topic: "HR Business Partner",
    difficulty: "MEDIUM" as const, certification_type: "CHCO" as const,
    question: "Peran utama HR Business Partner (HRBP) dalam organisasi adalah:",
    option_a: "Mengurus administrasi kepegawaian sehari-hari",
    option_b: "Mengelola sistem penggajian dan kompensasi",
    option_c: "Bermitra dengan pemimpin bisnis untuk menyelaraskan strategi HR dengan tujuan bisnis",
    option_d: "Melaksanakan program pelatihan dan pengembangan karyawan",
    answer: "C" as const,
    explanation: "HRBP berfungsi sebagai mitra strategis bagi pemimpin bisnis, membantu menyelaraskan strategi HR dengan tujuan bisnis, memberikan solusi SDM yang berdampak pada kinerja bisnis, dan menjembatani kebutuhan unit bisnis dengan kapabilitas fungsi HR.",
  },
  {
    id: "6", category: "Ketenagakerjaan", topic: "Uang Kompensasi PKWT",
    difficulty: "MEDIUM" as const, certification_type: "HR_STAFF" as const,
    question: "Karyawan kontrak PKWT telah bekerja selama 6 bulan berturut-turut dengan upah Rp 6.000.000/bulan. Saat kontraknya berakhir, berapakah uang kompensasi yang wajib dibayarkan perusahaan sesuai PP 35/2021?",
    option_a: "Rp 6.000.000", option_b: "Rp 3.000.000", option_c: "Rp 1.500.000", option_d: "Tidak berhak karena kurang dari 1 tahun",
    answer: "B" as const,
    explanation: "Berdasarkan Pasal 16 ayat (1) PP 35/2021, rumus kompensasi PKWT = (Masa Kerja dalam Bulan / 12) x 1 Bulan Upah. Maka (6/12) x Rp 6.000.000 = Rp 3.000.000. Hak kompensasi timbul bagi pekerja yang memiliki masa kerja minimal 1 bulan terus-menerus.",
  },
  {
    id: "7", category: "Compensation", topic: "Upah Lembur",
    difficulty: "MEDIUM" as const, certification_type: "HR_STAFF" as const,
    question: "Berapa faktor pengali standar Depnaker untuk menghitung upah per jam lembur karyawan?",
    option_a: "1/160 x Upah Sebulan", option_b: "1/173 x Upah Sebulan", option_c: "1/180 x Upah Sebulan", option_d: "1/200 x Upah Sebulan",
    answer: "B" as const,
    explanation: "Upah per jam lembur adalah 1/173 dari upah sebulan (Upah Pokok + Tunjangan Tetap) sebagaimana diatur dalam Kepmenakertrans No. KEP.102/MEN/VI/2004 dan diperbarui dalam PP 35/2021.",
  },
  {
    id: "8", category: "Organization Design", topic: "Span of Control",
    difficulty: "HARD" as const, certification_type: "CHCO" as const,
    question: "Dalam penataan struktur organisasi, rasio Span of Control yang terlalu lebar (misal 1 manager membawahi 25 spesialis) berisiko menimbulkan:",
    option_a: "Biaya overhead manajerial yang membengkak",
    option_b: "Bottleneck pengambilan keputusan dan rendahnya kualitas coaching bawahan",
    option_c: "Birokrasi hierarki yang terlalu panjang",
    option_d: "Tingginya ketergantungan pada vendor outsourcing",
    answer: "B" as const,
    explanation: "Span of control yang terlalu lebar mengurangi waktu perhatian manajer untuk coaching, feedback, dan evaluasi kualitas, sehingga menimbulkan bottleneck keputusan operasional dan kelelahan manajerial.",
  },
  {
    id: "9", category: "Talent Acquisition", topic: "Metode STAR",
    difficulty: "EASY" as const, certification_type: "HR_STAFF" as const,
    question: "Dalam teknik wawancara berbasis perilaku (Behavioral Event Interview / BEI), akronim STAR merupakan singkatan dari:",
    option_a: "Strategy, Talent, Assessment, Result",
    option_b: "Situation, Task, Action, Result",
    option_c: "Skill, Timing, Attitude, Reliability",
    option_d: "Standard, Target, Activity, Review",
    answer: "B" as const,
    explanation: "STAR adalah metodologi penataan pertanyaan wawancara terstruktur: Situation (latar konteks), Task (tanggung jawab/tantangan), Action (tindakan nyata yang diambil kandidat), dan Result (dampak/hasil kuantitatif).",
  },
  {
    id: "10", category: "Strategic Compensation", topic: "3P Framework",
    difficulty: "HARD" as const, certification_type: "CHCO" as const,
    question: "Filosofi kompensasi total (Total Rewards) modern menggunakan konsep 3P yang terdiri dari:",
    option_a: "Profit, Productivity, People",
    option_b: "Pay, Promotion, Pension",
    option_c: "Person, Position, Performance",
    option_d: "Planning, Policy, Payroll",
    answer: "C" as const,
    explanation: "Konsep 3P dalam arsitektur kompensasi adalah: Pay for Position (nilai bobot jabatan melalui job grading), Pay for Person (kompetensi dan keahlian individu), dan Pay for Performance (insentif/bonus berdasarkan pencapaian target kerja).",
  },
];

type Mode = "select" | "practice" | "result";
type DiffFilter = "ALL" | "EASY" | "MEDIUM" | "HARD";
type CertFilter = "ALL" | "HR_STAFF" | "CHCO";

export default function QuestionsPage() {
  const [mode, setMode] = useState<Mode>("select");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<Array<{ questionId: string; selected: string; correct: boolean }>>([]);
  const [diffFilter, setDiffFilter] = useState<DiffFilter>("ALL");
  const [certFilter, setCertFilter] = useState<CertFilter>("ALL");

  const filteredQuestions = SAMPLE_QUESTIONS.filter(q => {
    if (diffFilter !== "ALL" && q.difficulty !== diffFilter) return false;
    if (certFilter !== "ALL" && (q.certification_type as string) !== certFilter && (q.certification_type as string) !== "BOTH") return false;
    return true;
  });

  const currentQ = filteredQuestions[currentIndex];
  const isAnswered = selectedAnswer !== null;
  const isCorrect = selectedAnswer === currentQ?.answer;

  const handleAnswer = (opt: string) => {
    if (isAnswered) return;
    setSelectedAnswer(opt);
    setShowExplanation(true);
    setAnswers(prev => [...prev, {
      questionId: currentQ.id,
      selected: opt,
      correct: opt === currentQ.answer,
    }]);
  };

  const nextQuestion = () => {
    if (currentIndex >= filteredQuestions.length - 1) {
      setMode("result");
    } else {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const restart = () => {
    setMode("select");
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setAnswers([]);
  };

  const score = answers.filter(a => a.correct).length;
  const totalAnswered = answers.length;

  if (mode === "result") {
    const pct = Math.round((score / totalAnswered) * 100);
    return (
      <div className="max-w-2xl mx-auto animate-fade-in-up space-y-6">
        <div className="card-navy text-center py-10">
          <Trophy className="w-16 h-16 text-[#D4A017] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Latihan Selesai!</h2>
          <p className="text-4xl font-bold text-[#D4A017]">{pct}%</p>
          <p className="text-white/60 text-sm mt-1">{score} benar dari {totalAnswered} soal</p>
        </div>
        <div className="card-premium grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-emerald-500">{score}</p>
            <p className="text-xs text-[#718096]">Benar</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-red-500">{totalAnswered - score}</p>
            <p className="text-xs text-[#718096]">Salah</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#0B1F3A]">{pct}%</p>
            <p className="text-xs text-[#718096]">Skor</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={restart} className="btn-primary flex-1 justify-center">
            Latihan Lagi
          </button>
          <button onClick={() => { setMode("select"); setAnswers([]); setCurrentIndex(0); }} className="btn-outline flex-1 justify-center">
            Ubah Filter
          </button>
        </div>
      </div>
    );
  }

  if (mode === "practice" && currentQ) {
    return (
      <div className="max-w-2xl mx-auto animate-fade-in-up space-y-4">
        {/* Progress */}
        <div className="flex items-center gap-3">
          <div className="flex-1 progress-bar">
            <div className="progress-fill" style={{ width: `${((currentIndex) / filteredQuestions.length) * 100}%` }} />
          </div>
          <span className="text-xs font-semibold text-[#718096] whitespace-nowrap">
            {currentIndex + 1} / {filteredQuestions.length}
          </span>
        </div>

        {/* Question Card */}
        <div className="card-premium">
          <div className="flex items-center gap-2 mb-4">
            <span className={cn("badge text-xs", {
              "badge-success": currentQ.difficulty === "EASY",
              "badge-warning": currentQ.difficulty === "MEDIUM",
              "badge-danger": currentQ.difficulty === "HARD",
            })}>
              {currentQ.difficulty}
            </span>
            <span className="badge-navy text-xs">{currentQ.category}</span>
            <span className="badge text-xs bg-[#0B1F3A]/5 text-[#0B1F3A]">{currentQ.certification_type}</span>
          </div>
          <h3 className="font-semibold text-[#0B1F3A] text-base leading-relaxed mb-5">{currentQ.question}</h3>

          {/* Options */}
          <div className="space-y-3">
            {(["A", "B", "C", "D"] as const).map(opt => {
              const text = currentQ[`option_${opt.toLowerCase()}` as keyof typeof currentQ] as string;
              const isSelected = selectedAnswer === opt;
              const isCorrectOpt = currentQ.answer === opt;

              return (
                <button
                  key={opt}
                  onClick={() => handleAnswer(opt)}
                  disabled={isAnswered}
                  className={cn(
                    "w-full text-left flex items-start gap-3 p-4 rounded-xl border-2 transition-all duration-200 text-sm",
                    !isAnswered && "hover:border-[#0B1F3A] hover:bg-[#F5F7FA] border-[#E2E8F0] bg-white",
                    isAnswered && isCorrectOpt && "border-emerald-500 bg-emerald-50",
                    isAnswered && isSelected && !isCorrectOpt && "border-red-400 bg-red-50",
                    isAnswered && !isSelected && !isCorrectOpt && "border-[#E2E8F0] bg-white opacity-60",
                  )}
                >
                  <span className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0",
                    !isAnswered && "bg-[#F5F7FA] text-[#718096]",
                    isAnswered && isCorrectOpt && "bg-emerald-500 text-white",
                    isAnswered && isSelected && !isCorrectOpt && "bg-red-400 text-white",
                    isAnswered && !isSelected && !isCorrectOpt && "bg-[#F5F7FA] text-[#CBD5E0]",
                  )}>
                    {opt}
                  </span>
                  <span className="flex-1 leading-relaxed">{text}</span>
                  {isAnswered && isCorrectOpt && <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />}
                  {isAnswered && isSelected && !isCorrectOpt && <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className={cn(
              "mt-4 p-4 rounded-xl border-l-4 text-sm",
              isCorrect ? "bg-emerald-50 border-emerald-500" : "bg-red-50 border-red-400"
            )}>
              <p className={cn("font-bold mb-2", isCorrect ? "text-emerald-700" : "text-red-700")}>
                {isCorrect ? "✅ Benar!" : `❌ Salah! Jawaban benar: ${currentQ.answer}`}
              </p>
              <p className={cn("leading-relaxed", isCorrect ? "text-emerald-800" : "text-red-800")}>
                {currentQ.explanation}
              </p>
            </div>
          )}
        </div>

        {isAnswered && (
          <button onClick={nextQuestion} className="btn-primary w-full justify-center">
            {currentIndex >= filteredQuestions.length - 1 ? "Lihat Hasil" : "Soal Berikutnya"}
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    );
  }

  // Select mode
  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="page-header">
        <h1 className="page-title">Bank Soal</h1>
        <p className="page-subtitle">Latihan soal sertifikasi HR Staff & CHCO</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="card-premium text-center">
          <p className="text-2xl font-bold text-[#0B1F3A]">{SAMPLE_QUESTIONS.length}</p>
          <p className="text-xs text-[#718096]">Total Soal</p>
        </div>
        <div className="card-premium text-center">
          <p className="text-2xl font-bold text-emerald-500">0</p>
          <p className="text-xs text-[#718096]">Sudah Dijawab</p>
        </div>
        <div className="card-premium text-center">
          <p className="text-2xl font-bold text-[#D4A017]">0%</p>
          <p className="text-xs text-[#718096]">Rata-rata Skor</p>
        </div>
      </div>

      {/* Filters */}
      <div className="card-premium space-y-4">
        <h3 className="font-bold text-[#0B1F3A]">Filter Soal</h3>
        <div>
          <p className="text-xs text-[#718096] mb-2 font-medium">Sertifikasi</p>
          <div className="flex gap-2 flex-wrap">
            {(["ALL", "HR_STAFF", "CHCO"] as CertFilter[]).map(f => (
              <button key={f} onClick={() => setCertFilter(f)}
                className={cn("px-4 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200",
                  certFilter === f ? "bg-[#0B1F3A] text-white border-[#0B1F3A]" : "border-[#E2E8F0] text-[#718096] hover:border-[#0B1F3A]"
                )}>
                {f === "ALL" ? "Semua" : f === "HR_STAFF" ? "HR Staff" : "CHCO"}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs text-[#718096] mb-2 font-medium">Tingkat Kesulitan</p>
          <div className="flex gap-2 flex-wrap">
            {(["ALL", "EASY", "MEDIUM", "HARD"] as DiffFilter[]).map(f => (
              <button key={f} onClick={() => setDiffFilter(f)}
                className={cn("px-4 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200",
                  diffFilter === f ? "bg-[#0B1F3A] text-white border-[#0B1F3A]" : "border-[#E2E8F0] text-[#718096] hover:border-[#0B1F3A]"
                )}>
                {f === "ALL" ? "Semua" : f === "EASY" ? "Mudah" : f === "MEDIUM" ? "Sedang" : "Sulit"}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between pt-2">
          <span className="text-sm text-[#718096]">{filteredQuestions.length} soal tersedia</span>
          <button
            onClick={() => setMode("practice")}
            disabled={filteredQuestions.length === 0}
            className="btn-primary"
          >
            <HelpCircle className="w-4 h-4" />
            Mulai Latihan
          </button>
        </div>
      </div>
    </div>
  );
}
