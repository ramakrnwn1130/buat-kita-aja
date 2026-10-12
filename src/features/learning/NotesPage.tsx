"use client";

import { useState } from "react";
import { 
  FileText, Plus, Search, Trash2, Edit3, Tag, Calendar, 
  Bookmark, CheckCircle, Save, X, Sparkles, BookOpen 
} from "lucide-react";
import { cn } from "@/lib/utils";

type NoteItem = {
  id: string;
  title: string;
  category: "HR_STAFF" | "CHCO" | "REGULASI" | "UMUM";
  moduleName: string;
  content: string;
  updatedAt: string;
  isPinned?: boolean;
};

const INITIAL_NOTES: NoteItem[] = [
  {
    id: "note-1",
    title: "Ketentuan Esensial PKWT Pasca UU Cipta Kerja (PP 35/2021)",
    category: "REGULASI",
    moduleName: "Administrasi Karyawan & Kontrak Kerja",
    content: "1. Jangka waktu PKWT maksimal 5 tahun (termasuk perpanjangan).\n2. Wajib memberikan Uang Kompensasi PKWT jika masa kerja minimal 1 bulan terus-menerus.\n3. Rumus Kompensasi: (Masa Kerja dalam Bulan / 12) x 1 Bulan Upah Pokok + Tunjangan Tetap.\n4. PKWT tidak boleh mensyaratkan masa percobaan (probation). Jika ada klausul probation, batal demi hukum.",
    updatedAt: "12 Okt 2026, 09:30",
    isPinned: true,
  },
  {
    id: "note-2",
    title: "Matriks Kalibrasi 9-Box Grid untuk Top Talent C-Level",
    category: "CHCO",
    moduleName: "Talent Management & Succession Planning",
    content: "Sumbu X: Performance (Low, Medium, High)\nSumbu Y: Potential (Low, Medium, High)\n\nBox 9 (High-High) = 'Superstar / Future C-Level'. Strategi: Fast-track promotion, executive mentoring, golden handcuffs.\nBox 8 (Medium Perf, High Pot) = 'High Potential'. Strategi: Berikan challenging stretch assignments.\nBox 6 (High Perf, Low Pot) = 'Expert / Solid Professional'. Strategi: Apresiasi, spesialisasi, reward loyalitas.",
    updatedAt: "11 Okt 2026, 16:15",
    isPinned: true,
  },
  {
    id: "note-3",
    title: "Rumus Baku Lembur Karyawan (Depnaker)",
    category: "HR_STAFF",
    moduleName: "Compensation & Benefit, Payroll Dasar",
    content: "Upah Sejam = 1/173 x Upah Sebulan (Upah Pokok + Tunjangan Tetap).\n\nUntuk Hari Kerja Biasa:\n- Jam ke-1: 1.5 x Upah Sejam\n- Jam ke-2 dst: 2.0 x Upah Sejam\n\nUntuk Hari Libur Resmi:\n- 7 jam pertama: 2 x Upah Sejam\n- Jam ke-8: 3 x Upah Sejam\n- Jam ke-9 & 10: 4 x Upah Sejam",
    updatedAt: "10 Okt 2026, 14:00",
  },
  {
    id: "note-4",
    title: "Metrik Human Capital ROI & Revenue Per Employee",
    category: "CHCO",
    moduleName: "People Analytics & Strategic HR Dashboarding",
    content: "HC ROI = [Revenue - (Operating Expense - Total Human Capital Cost)] / Total Human Capital Cost\n\nTarget benchmark industri teknologi: > 1.8x\nTarget benchmark manufaktur: > 1.4x\n\nMetrik ini sangat krusial saat mempresentasikan efisiensi biaya SDM kepada Dewan Komisaris.",
    updatedAt: "08 Okt 2026, 11:20",
  }
];

export default function NotesPage() {
  const [notes, setNotes] = useState<NoteItem[]>(INITIAL_NOTES);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedNote, setSelectedNote] = useState<NoteItem | null>(notes[0]);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editCategory, setEditCategory] = useState<NoteItem["category"]>("HR_STAFF");
  const [editModuleName, setEditModuleName] = useState("");

  const filteredNotes = notes.filter((n) => {
    const matchesSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.moduleName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "ALL" || n.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleStartNewNote = () => {
    const newNote: NoteItem = {
      id: `note-${Date.now()}`,
      title: "Catatan Baru",
      category: "HR_STAFF",
      moduleName: "Modul Belajar",
      content: "",
      updatedAt: "Baru saja",
    };
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote);
    setEditTitle(newNote.title);
    setEditContent(newNote.content);
    setEditCategory(newNote.category);
    setEditModuleName(newNote.moduleName);
    setIsEditing(true);
  };

  const handleSaveNote = () => {
    if (!selectedNote) return;
    const updated = notes.map((n) =>
      n.id === selectedNote.id
        ? {
            ...n,
            title: editTitle.trim() || "Catatan Tanpa Judul",
            content: editContent,
            category: editCategory,
            moduleName: editModuleName.trim() || "Umum",
            updatedAt: "Baru saja disimpan",
          }
        : n
    );
    setNotes(updated);
    const curr = updated.find((n) => n.id === selectedNote.id) || null;
    setSelectedNote(curr);
    setIsEditing(false);
  };

  const handleDeleteNote = (id: string) => {
    const remaining = notes.filter((n) => n.id !== id);
    setNotes(remaining);
    if (selectedNote?.id === id) {
      setSelectedNote(remaining[0] || null);
      setIsEditing(false);
    }
  };

  const startEditCurrent = () => {
    if (!selectedNote) return;
    setEditTitle(selectedNote.title);
    setEditContent(selectedNote.content);
    setEditCategory(selectedNote.category);
    setEditModuleName(selectedNote.moduleName);
    setIsEditing(true);
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0B1F3A]">Catatan Belajar Saya</h1>
          <p className="text-sm text-slate-500">
            Rangkuman rumus, klausul hukum ketenagakerjaan, dan wawasan strategis persiapan sertifikasi
          </p>
        </div>
        <button
          onClick={handleStartNewNote}
          className="btn-primary self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          Buat Catatan Baru
        </button>
      </div>

      {/* Main Container: Split view */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[620px]">
        {/* Left Column: List of notes (5 cols) */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          {/* Search & Filter */}
          <div className="space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari dalam catatan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-9 text-xs"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              {["ALL", "HR_STAFF", "CHCO", "REGULASI", "UMUM"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-2.5 py-1 rounded-lg font-medium transition-colors whitespace-nowrap",
                    activeCategory === cat
                      ? "bg-[#0B1F3A] text-white"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                  )}
                >
                  {cat === "ALL" ? "Semua" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Notes scroll list */}
          <div className="flex-1 space-y-2.5 overflow-y-auto max-h-[520px] pr-1">
            {filteredNotes.length === 0 ? (
              <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-xl">
                <FileText className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <p className="text-xs text-slate-500">Tidak ada catatan ditemukan</p>
              </div>
            ) : (
              filteredNotes.map((note) => {
                const isSelected = selectedNote?.id === note.id;
                return (
                  <div
                    key={note.id}
                    onClick={() => {
                      setSelectedNote(note);
                      setIsEditing(false);
                    }}
                    className={cn(
                      "p-3.5 rounded-xl border transition-all cursor-pointer text-left",
                      isSelected
                        ? "bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-md"
                        : "bg-white hover:bg-slate-50 border-slate-200 text-slate-800"
                    )}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className={cn("font-bold text-sm line-clamp-1", isSelected ? "text-white" : "text-[#0B1F3A]")}>
                        {note.title}
                      </h4>
                      {note.isPinned && (
                        <Bookmark className={cn("w-3.5 h-3.5 flex-shrink-0", isSelected ? "text-[#D4A017]" : "text-amber-500")} />
                      )}
                    </div>
                    <p className={cn("text-xs line-clamp-2 mb-2 leading-relaxed", isSelected ? "text-slate-200" : "text-slate-500")}>
                      {note.content || "Belum ada konten..."}
                    </p>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className={cn(
                        "px-2 py-0.5 rounded font-semibold",
                        isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                      )}>
                        {note.category}
                      </span>
                      <span className={isSelected ? "text-slate-300" : "text-slate-400"}>
                        {note.updatedAt}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right Column: Note Reader / Editor (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm">
          {selectedNote ? (
            isEditing ? (
              // Edit Mode
              <div className="space-y-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between border-b pb-3 border-slate-100">
                  <span className="text-xs font-semibold text-[#D4A017] uppercase tracking-wider flex items-center gap-1.5">
                    <Edit3 className="w-3.5 h-3.5" /> Mengedit Catatan
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 text-xs hover:bg-slate-50"
                    >
                      Batal
                    </button>
                    <button
                      onClick={handleSaveNote}
                      className="btn-primary text-xs py-1.5 px-3"
                    >
                      <Save className="w-3.5 h-3.5" /> Simpan
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 uppercase">Kategori</label>
                    <select
                      value={editCategory}
                      onChange={(e) => setEditCategory(e.target.value as any)}
                      className="input-field text-xs py-2 mt-1"
                    >
                      <option value="HR_STAFF">HR_STAFF</option>
                      <option value="CHCO">CHCO</option>
                      <option value="REGULASI">REGULASI</option>
                      <option value="UMUM">UMUM</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 uppercase">Modul Terkait</label>
                    <input
                      type="text"
                      value={editModuleName}
                      onChange={(e) => setEditModuleName(e.target.value)}
                      placeholder="e.g. Payroll Dasar"
                      className="input-field text-xs py-2 mt-1"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-500 uppercase">Judul Catatan</label>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="input-field text-sm font-semibold mt-1"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <label className="text-[11px] font-semibold text-slate-500 uppercase mb-1">Isi Rangkuman</label>
                  <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    rows={14}
                    placeholder="Tuliskan catatan, rumus, atau poin penting di sini..."
                    className="input-field font-mono text-xs leading-relaxed flex-1 resize-none"
                  />
                </div>
              </div>
            ) : (
              // View Mode
              <div className="space-y-4 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-4 border-b pb-4 border-slate-100">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="badge badge-navy text-[11px]">
                        {selectedNote.category}
                      </span>
                      <span className="text-xs text-slate-400">•</span>
                      <span className="text-xs text-slate-500 font-medium">
                        {selectedNote.moduleName}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-[#0B1F3A]">
                      {selectedNote.title}
                    </h2>
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> Terakhir diperbarui: {selectedNote.updatedAt}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={startEditCurrent}
                      className="btn-outline text-xs py-1.5 px-3"
                    >
                      <Edit3 className="w-3.5 h-3.5" /> Edit
                    </button>
                    <button
                      onClick={() => handleDeleteNote(selectedNote.id)}
                      className="p-2 rounded-lg text-rose-500 hover:bg-rose-50 transition-colors"
                      title="Hapus Catatan"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content body */}
                <div className="flex-1 overflow-y-auto pr-2">
                  <div className="prose prose-slate max-w-none text-sm text-slate-700 whitespace-pre-line leading-relaxed font-sans bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                    {selectedNote.content}
                  </div>
                </div>
              </div>
            )
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center py-20">
              <FileText className="w-12 h-12 text-slate-300 mb-3" />
              <p className="text-sm font-semibold text-slate-600">Pilih catatan untuk membaca</p>
              <p className="text-xs text-slate-400 mt-1">Atau klik 'Buat Catatan Baru' untuk menambahkan</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
