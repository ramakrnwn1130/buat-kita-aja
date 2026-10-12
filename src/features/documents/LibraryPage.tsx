"use client";

import { useState } from "react";
import { 
  Library, FileText, Download, Eye, Search, Filter, 
  Upload, CheckCircle, Clock, BookOpen, ShieldCheck, 
  Tag, ExternalLink, ArrowDownToLine 
} from "lucide-react";
import { cn } from "@/lib/utils";

type DocItem = {
  id: string;
  title: string;
  category: "REGULASI" | "TEMPLATE" | "SKKNI" | "STUDI_KASUS";
  fileType: "PDF" | "DOCX" | "XLSX";
  fileSize: string;
  source: string;
  description: string;
  downloadUrl: string;
  isRAGIndexed: boolean;
};

const LIBRARY_DOCS: DocItem[] = [
  {
    id: "doc-1",
    title: "Undang-Undang Republik Indonesia Nomor 6 Tahun 2023 (Penetapan Perppu Cipta Kerja)",
    category: "REGULASI",
    fileType: "PDF",
    fileSize: "4.8 MB",
    source: "Kementerian Hukum dan HAM RI",
    description: "Landasan hukum primer ketenagakerjaan terkini yang mengatur ketentuan PKWT, alih daya (outsourcing), waktu kerja, dan pesangon PHK.",
    downloadUrl: "#",
    isRAGIndexed: true,
  },
  {
    id: "doc-2",
    title: "Peraturan Pemerintah Republik Indonesia No. 35 Tahun 2021",
    category: "REGULASI",
    fileType: "PDF",
    fileSize: "2.1 MB",
    source: "Sekretariat Negara RI",
    description: "Peraturan pelaksana teknis mengenai Perjanjian Kerja Waktu Tertentu (PKWT), Alih Daya, Waktu Kerja dan Istirahat, serta Pemutusan Hubungan Kerja.",
    downloadUrl: "#",
    isRAGIndexed: true,
  },
  {
    id: "doc-3",
    title: "Permenaker No. 1 Tahun 2017 tentang Struktur dan Skala Upah",
    category: "REGULASI",
    fileType: "PDF",
    fileSize: "1.4 MB",
    source: "Kementerian Ketenagakerjaan RI",
    description: "Pedoman formal penyusunan matriks skala upah proporsional berbasis kompetensi, golongan jabatan, dan kemampuan perusahaan.",
    downloadUrl: "#",
    isRAGIndexed: true,
  },
  {
    id: "doc-4",
    title: "Standar Kompetensi Kerja Nasional Indonesia (SKKNI) Bidang Manajemen SDM",
    category: "SKKNI",
    fileType: "PDF",
    fileSize: "6.2 MB",
    source: "Kepmenaker No. 149 Tahun 2020",
    description: "Kamus unit kompetensi resmi BNSP untuk skema sertifikasi HR Staff, HR Supervisor, HR Manager, hingga Chief Human Capital Officer.",
    downloadUrl: "#",
    isRAGIndexed: true,
  },
  {
    id: "doc-5",
    title: "Template Draft Surat Perjanjian Kerja Waktu Tertentu (PKWT) Pasca UU 6/2023",
    category: "TEMPLATE",
    fileType: "DOCX",
    fileSize: "185 KB",
    source: "HR Master Academy Legal Team",
    description: "Format kontrak kerja PKWT siap pakai lengkap dengan klausul kerahasiaan, hak kompensasi, evaluasi kinerja, dan klausul non-disclosure.",
    downloadUrl: "#",
    isRAGIndexed: false,
  },
  {
    id: "doc-6",
    title: "Kalkulator Payroll & Rekonsiliasi Iuran BPJS Ketenagakerjaan/Kesehatan (TER PPh 21)",
    category: "TEMPLATE",
    fileType: "XLSX",
    fileSize: "520 KB",
    source: "HR Master Academy Toolkit",
    description: "Spreadsheet terotomasi rumus lembur Depnaker 1/173, premi JKK/JKM/JHT/JP, batas upah BPJS Kesehatan, dan formula tarif efektif rata-rata.",
    downloadUrl: "#",
    isRAGIndexed: false,
  },
  {
    id: "doc-7",
    title: "Format Formulir Penilaian Kinerja Karyawan & Cascading KPI",
    category: "TEMPLATE",
    fileType: "DOCX",
    fileSize: "210 KB",
    source: "HR Master Academy Executive",
    description: "Formulir review performa berbasis kompetensi perilaku dan target numerik kuartalan untuk level staf hingga manajerial.",
    downloadUrl: "#",
    isRAGIndexed: false,
  },
  {
    id: "doc-8",
    title: "Studi Kasus: Transformasi Human Capital Menghadapi Restrukturisasi Organisasi",
    category: "STUDI_KASUS",
    fileType: "PDF",
    fileSize: "3.2 MB",
    source: "Executive Research Case Series",
    description: "Analisis komprehensif penataan ulang 1.200 karyawan menggunakan 9-Box Matrix dan manajemen perubahan model Kotter.",
    downloadUrl: "#",
    isRAGIndexed: true,
  }
];

export default function LibraryPage() {
  const [docs, setDocs] = useState<DocItem[]>(LIBRARY_DOCS);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [previewDoc, setPreviewDoc] = useState<DocItem | null>(null);

  const filteredDocs = docs.filter((d) => {
    const matchesSearch = d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.source.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "ALL" || d.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="card-navy flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold mb-3">
            <Library className="w-3.5 h-3.5 text-[#D4A017]" />
            Perpustakaan Regulasi & Dokumen Kerja
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Dokumen & Referensi Hukum HR
          </h1>
          <p className="text-white/80 text-sm max-w-xl">
            Kumpulan UU Ketenagakerjaan, Kepmenaker, standar SKKNI BNSP, serta template formulir operasional HR yang siap digunakan dan diintegrasikan ke AI Coach.
          </p>
        </div>

        {/* Upload Button */}
        <label className="btn-gold self-start md:self-auto cursor-pointer flex items-center gap-2">
          <Upload className="w-4 h-4" />
          <span>Upload Dokumen Baru</span>
          <input
            type="file"
            className="hidden"
            accept=".pdf,.docx,.xlsx"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                const file = e.target.files[0];
                const newDoc: DocItem = {
                  id: `user-doc-${Date.now()}`,
                  title: file.name,
                  category: "TEMPLATE",
                  fileType: file.name.endsWith(".xlsx") ? "XLSX" : file.name.endsWith(".docx") ? "DOCX" : "PDF",
                  fileSize: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
                  source: "Dokumen Pribadi",
                  description: "Dokumen yang diunggah pengguna untuk referensi belajar.",
                  downloadUrl: "#",
                  isRAGIndexed: true,
                };
                setDocs([newDoc, ...docs]);
              }
            }}
          />
        </label>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari regulasi, nomor PP, atau template..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field pl-10"
          />
        </div>

        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          {[
            { key: "ALL", label: "Semua Dokumen" },
            { key: "REGULASI", label: "Undang-Undang & PP" },
            { key: "TEMPLATE", label: "Template Dokumen" },
            { key: "SKKNI", label: "SKKNI BNSP" },
            { key: "STUDI_KASUS", label: "Studi Kasus" }
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors",
                activeCategory === cat.key
                  ? "bg-[#0B1F3A] text-white"
                  : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Document Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredDocs.map((doc) => (
          <div
            key={doc.id}
            className="card-premium flex flex-col justify-between hover:border-[#D4A017]/40 transition-all hover:shadow-md group"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase",
                    doc.fileType === "PDF" ? "bg-red-100 text-red-700" :
                    doc.fileType === "XLSX" ? "bg-emerald-100 text-emerald-700" :
                    "bg-blue-100 text-blue-700"
                  )}>
                    {doc.fileType}
                  </span>
                  <span className="badge badge-navy text-[10px]">
                    {doc.category}
                  </span>
                </div>

                {doc.isRAGIndexed && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200" title="Tersedia untuk AI HR Coach RAG Q&A">
                    <ShieldCheck className="w-3 h-3" /> AI Index
                  </span>
                )}
              </div>

              <h3 className="font-bold text-[#0B1F3A] text-sm group-hover:text-[#D4A017] transition-colors mb-1.5 line-clamp-2">
                {doc.title}
              </h3>
              <p className="text-[11px] text-slate-400 font-medium mb-2.5">
                Sumber: {doc.source} • {doc.fileSize}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                {doc.description}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-slate-100 pt-3 mt-2 text-xs">
              <button
                onClick={() => setPreviewDoc(doc)}
                className="inline-flex items-center gap-1.5 font-semibold text-slate-600 hover:text-[#0B1F3A] transition-colors"
              >
                <Eye className="w-3.5 h-3.5" /> Pratinjau
              </button>
              <a
                href={doc.downloadUrl}
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Mengunduh dokumen: ${doc.title} (${doc.fileSize})`);
                }}
                className="btn-primary text-xs py-1.5 px-3"
              >
                <ArrowDownToLine className="w-3.5 h-3.5 text-[#D4A017]" /> Unduh
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Document Preview Modal */}
      {previewDoc && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in-up">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-start justify-between gap-4 border-b pb-4 border-slate-100">
              <div>
                <span className="badge badge-navy text-xs mb-2">
                  {previewDoc.category} • {previewDoc.fileType}
                </span>
                <h3 className="text-lg font-bold text-[#0B1F3A]">
                  {previewDoc.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Sumber: {previewDoc.source} • Ukuran: {previewDoc.fileSize}
                </p>
              </div>
              <button
                onClick={() => setPreviewDoc(null)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                ✕
              </button>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-3 leading-relaxed">
              <p className="font-semibold text-slate-800">Ringkasan Dokumen:</p>
              <p>{previewDoc.description}</p>
              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <p className="font-medium text-[#0B1F3A] mb-1">Status AI Knowledge Indexing:</p>
                <p className="text-slate-500 text-[11px]">
                  {previewDoc.isRAGIndexed 
                    ? "✅ Dokumen ini telah terindeks ke dalam vector database HR Master Academy. Anda dapat langsung bertanya pada AI HR Coach terkait pasal, ayat, atau formula dari dokumen ini."
                    : "ℹ️ Dokumen template operasional (belum dimasukkan ke prompt context AI)."}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setPreviewDoc(null)}
                className="btn-outline text-xs py-2 px-4"
              >
                Tutup
              </button>
              <a
                href={previewDoc.downloadUrl}
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Mengunduh: ${previewDoc.title}`);
                }}
                className="btn-gold text-xs py-2 px-4"
              >
                <Download className="w-3.5 h-3.5" /> Download File Lengkap
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
