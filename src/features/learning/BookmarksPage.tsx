"use client";

import { useState } from "react";
import { 
  Bookmark, BookmarkCheck, Search, Trash2, ArrowUpRight, 
  BookOpen, HelpCircle, FileCheck, Award, ExternalLink 
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BookmarkItem = {
  id: string;
  type: "LESSON" | "QUESTION" | "REGULATION" | "TOOL";
  title: string;
  program: "HR_STAFF" | "CHCO" | "ALL";
  subtitle: string;
  summary: string;
  linkHref: string;
  savedDate: string;
};

const INITIAL_BOOKMARKS: BookmarkItem[] = [
  {
    id: "bm-1",
    type: "LESSON",
    title: "Teknik Behavioral Event Interview (BEI) & Model STAR",
    program: "HR_STAFF",
    subtitle: "Modul 3: Recruitment, Selection & Onboarding",
    summary: "Panduan menggali bukti perilaku lampau kandidat melalui Situation, Task, Action, Result untuk menguji kompetensi nyata.",
    linkHref: "/learning/hr-staff/3",
    savedDate: "12 Okt 2026",
  },
  {
    id: "bm-2",
    type: "QUESTION",
    title: "Simulasi Soal Kasus: Perhitungan Pesangon PHK Akibat Efisiensi",
    program: "HR_STAFF",
    subtitle: "Bank Soal • Kategori Regulasi Ketenagakerjaan",
    summary: "Soal pilihan ganda nomor 42 terkait perkalian PMTK berdasarkan Pasal 43 PP 35/2021 bagi perusahaan yang merugi.",
    linkHref: "/questions",
    savedDate: "11 Okt 2026",
  },
  {
    id: "bm-3",
    type: "LESSON",
    title: "Succession Planning & Pemetaan 9-Box Grid Kalibrasi",
    program: "CHCO",
    subtitle: "Modul 5: Talent Management & Succession Planning",
    summary: "Pedoman dewan direksi dalam menetapkan kriteria suksesor C-Level dan mitigasi single point of failure talenta kritis.",
    linkHref: "/learning/chco/5",
    savedDate: "10 Okt 2026",
  },
  {
    id: "bm-4",
    type: "TOOL",
    title: "Kalkulator BPJS Ketenagakerjaan & Kesehatan Lengkap",
    program: "HR_STAFF",
    subtitle: "HR Toolkit • Simulasi Payroll",
    summary: "Kalkulator interaktif otomatis menghitung JKK, JKM, JHT, JP, JKP, dan batas upah tertinggi BPJS Kesehatan 12 juta.",
    linkHref: "/tools",
    savedDate: "09 Okt 2026",
  },
  {
    id: "bm-5",
    type: "REGULATION",
    title: "Peraturan Menteri Ketenagakerjaan No 1 Tahun 2017",
    program: "ALL",
    subtitle: "Perpustakaan Regulasi • Struktur dan Skala Upah",
    summary: "Wajib lapor dan tahapan penyusunan struktur skala upah dengan metode poin faktor jabatan.",
    linkHref: "/library",
    savedDate: "08 Okt 2026",
  }
];

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>(INITIAL_BOOKMARKS);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("ALL");

  const filteredBookmarks = bookmarks.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === "ALL" || item.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const handleRemoveBookmark = (id: string) => {
    setBookmarks(bookmarks.filter((b) => b.id !== id));
  };

  const getIcon = (type: BookmarkItem["type"]) => {
    switch (type) {
      case "LESSON": return <BookOpen className="w-4 h-4 text-blue-600" />;
      case "QUESTION": return <HelpCircle className="w-4 h-4 text-purple-600" />;
      case "REGULATION": return <FileCheck className="w-4 h-4 text-emerald-600" />;
      case "TOOL": return <Award className="w-4 h-4 text-[#D4A017]" />;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0B1F3A]">Bookmark & Materi Tersimpan</h1>
          <p className="text-sm text-slate-500">
            Akses cepat materi penting, soal tryout favorit, dan rujukan hukum yang telah Anda tandai
          </p>
        </div>
        <div className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#0B1F3A]/5 text-[#0B1F3A] self-start sm:self-auto">
          {bookmarks.length} Item Tersimpan
        </div>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari bookmark tersimpan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field pl-10"
          />
        </div>

        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          {[
            { key: "ALL", label: "Semua" },
            { key: "LESSON", label: "Pelajaran" },
            { key: "QUESTION", label: "Bank Soal" },
            { key: "REGULATION", label: "Regulasi" },
            { key: "TOOL", label: "Tools" }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setTypeFilter(tab.key)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors",
                typeFilter === tab.key
                  ? "bg-[#0B1F3A] text-white"
                  : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bookmarks List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredBookmarks.length === 0 ? (
          <div className="col-span-full py-16 text-center border-2 border-dashed border-slate-200 rounded-2xl bg-white">
            <Bookmark className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-600">Belum ada item bookmark pada kategori ini</p>
            <p className="text-xs text-slate-400 mt-1">Tandai pelajaran atau soal latihan untuk menyimpannya di sini</p>
          </div>
        ) : (
          filteredBookmarks.map((item) => (
            <div
              key={item.id}
              className="card-premium flex flex-col justify-between hover:border-[#D4A017]/40 transition-all group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center">
                      {getIcon(item.type)}
                    </div>
                    <span className="badge badge-navy text-[10px]">
                      {item.type}
                    </span>
                    <span className="text-[11px] font-semibold text-[#D4A017]">
                      {item.program}
                    </span>
                  </div>

                  <button
                    onClick={() => handleRemoveBookmark(item.id)}
                    className="text-slate-300 hover:text-rose-500 p-1 transition-colors"
                    title="Hapus bookmark"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="font-bold text-[#0B1F3A] text-base group-hover:text-[#D4A017] transition-colors mb-1 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#718096] font-medium mb-2">
                  {item.subtitle}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                  {item.summary}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
                <span className="text-slate-400 text-[11px]">
                  Disimpan {item.savedDate}
                </span>
                <Link
                  href={item.linkHref}
                  className="inline-flex items-center gap-1 font-semibold text-[#0B1F3A] hover:text-[#D4A017] transition-colors"
                >
                  Buka Materi <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
