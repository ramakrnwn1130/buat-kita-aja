# 🧑‍💼 HR Workspace — Personal HR Management Suite

Platform workspace HR pribadi yang dirancang untuk membantu pekerjaan HR sehari-hari.  
Dibangun sebagai **Single-Page Application (SPA)** murni menggunakan HTML, Tailwind CSS, dan Vanilla JavaScript — tanpa framework, tanpa build tool, langsung buka di browser.

---

## 🚀 Cara Menjalankan

Cukup buka file `index.html` langsung di browser.  
Tidak perlu `npm install`, tidak perlu server.

```bash
# Atau buka lewat VS Code Live Server
# Klik kanan index.html → Open with Live Server
```

---

## 📁 Struktur Project

```
hr-master-academy/
├── index.html              ← SPA utama (semua fitur ada di sini)
├── README.md
├── AGENTS.md
├── .git/
├── E-Materi CHCO/          ← File materi referensi CHCO
├── E-Materi HR STAFF/      ← File materi referensi HR Staff
└── buatkitaaja/
```

---

## ✅ Fitur yang Sudah Ada

### 🏠 Dashboard Home
- Welcome banner dengan animasi gradient & status active workspace
- Stat cards: Total Karyawan, Kandidat Aktif (tersinkronisasi dengan data ATS), Cuti Bulan Ini, Kontrak Segera Habis
- Quick Access shortcuts ke semua modul

### 👥 Modul Rekrutmen (ATS - Applicant Tracking System) — *Fase 2 (Selesai)*
- **Papan Kanban Board Modern** dengan 6 kolom tahapan:
  1. *Screening CV*
  2. *Interview HR*
  3. *Interview User*
  4. *Offering*
  5. *Hired*
  6. *Rejected*
- **Kartu Kandidat Komprehensif**:
  - Avatar inisial dengan warna gradient dinamis
  - Nama pelamar, posisi, email, dan tanggal masuk
  - Badge ekspektasi gaji & ringkasan hasil interview
  - Badge rekomendasi (*Strong Hire, Hire, Consider, Reject*)
  - Skor kualifikasi keseluruhan (skala 0 - 100)
- **Interaktivitas Pindah Status**:
  - Tombol cepat navigasi tahapan: panah mundur (‹) dan maju (›)
  - Dropdown pemindah status langsung pada kartu
  - Fitur **Drag-and-Drop** native HTML5 antar kolom tahapan
- **Fitur Tambah Kandidat (Modal Formulir)**:
  - Input Nama, Posisi (dengan opsi rekomendasi), Email, WhatsApp/Telp, Tahapan awal, Ekspektasi gaji, Pengalaman, dan Catatan awal
- **Catatan Penilaian Wawancara (Interview Evaluation Modal)**:
  - Slider skor kualifikasi (0 - 100) dengan indikator warna dinamis
  - Rating bintang interaktif untuk *Kompetensi Teknis* (1 - 5) dan *Cultural Fit* (1 - 5)
  - Dropdown rekomendasi keputusan HR
  - Input nama pewawancara (*Interviewer*) dan tanggal wawancara
  - Textarea terperinci untuk *Catatan Penilaian Wawancara (Interview Notes)*
  - Tombol hapus kandidat dengan konfirmasi aman
- **Penyimpanan Lokal (localStorage)**: Semua data, catatan wawancara, dan perubahan status tersimpan otomatis di browser
- **Filter & Live Search**: Pencarian instan berdasarkan nama/posisi dan filter dropdown berdasarkan posisi
- **Toast Notifications**: Notifikasi popup elegan setiap perpindahan status, penambahan, penyimpanan catatan, dan penghapusan kandidat.

### 📁 Direktori Karyawan & Database — *Fase 3 (Selesai)*
- **Tabel Karyawan Komprehensif & Responsif**:
  - Kolom lengkap: *Nama Karyawan (avatar inisial + email), Departemen, Jabatan/Posisi, Status Kepegawaian, Tanggal Bergabung, Berakhir Kontrak, dan Aksi*.
  - Badge status berkode warna:
    - 🟢 **Karyawan Tetap** (Hijau emerald)
    - 🟡 **PKWT / Kontrak** (Kuning amber)
    - 🔵 **Magang / Intern** (Biru sky)
- **Indikator Peringatan Kontrak (Contract Expiry Alert)**:
  - Perhitungan mundur hari otomatis (*countdown days left*).
  - Tanda visual mencolok pada kontrak yang akan segera habis dalam waktu dekat (&lt; 30 hari): tag merah dengan ikon `alert-triangle`, badge berdenyut (*pulse*), dan penanda *border* merah di baris tabel.
  - Banner peringatan di atas tabel (*Alert Banner*) dengan tombol pintas *"Filter Karyawan Ini"* untuk memfilter karyawan yang kontraknya hampir habis.
- **Formulir Pendaftaran & Edit Karyawan (Modal Form)**:
  - Tombol "+ Tambah Karyawan" membuka formulir modal untuk mendaftarkan karyawan baru.
  - Form dinamis: jika memilih Karyawan Tetap, kolom tanggal kontrak otomatis dinonaktifkan; jika Kontrak/Magang, tanggal berakhir kontrak menjadi wajib.
  - Dukungan edit profil karyawan dan hapus data dengan konfirmasi keamanan.
- **Pencarian & Multi-Filter Realtime**:
  - Pencarian langsung (*live search*) berdasarkan nama, posisi, email, atau departemen.
  - Filter dropdown berdasarkan Departemen.
  - Filter dropdown berdasarkan Status Kepegawaian (*termasuk filter khusus Kontrak Segera Habis*).
- **Sinkronisasi Otomatis**:
  - Dashboard *"Total Karyawan"* dan *"Kontrak Segera Habis"* tersinkronisasi realtime dengan database.
  - Badge jumlah karyawan di Sidebar terupdate otomatis.
  - Data tersimpan persisten di `localStorage`.

### 🧮 Kalkulator HR (7 Kalkulator)
| Kalkulator | Keterangan |
|---|---|
| **Kalkulator Gaji** | Gross Salary = Gaji Pokok + Tunjangan + Lembur |
| **Take Home Pay** | THP = Gross - Total Potongan |
| **Kalkulator PPh 21** | Tarif progresif UU HPP, PTKP otomatis |
| **Kalkulator BPJS** | JHT, JKK, JKM, JP, Kesehatan (PP 44/2015) |
| **Upah Lembur** | Formula baku PP 35/2021, hari kerja & libur |
| **Turnover Rate** | Lengkap dengan status Normal/Perhatian/Kritis |
| **HCROI & HCVA** | Metrik Human Capital C-Level |

---

## 🗺️ Roadmap Fase Berikutnya

| Fase | Fitur | Status |
|---|---|---|
| **Fase 1** | 🧮 Fondasi, Sidebar & 7 Kalkulator HR | ✅ Selesai |
| **Fase 2** | 👥 ATS / Rekrutmen (Kanban, Form Kandidat, Evaluasi Interview) | ✅ Selesai |
| **Fase 3** | 📁 Direktori Karyawan & Monitoring Kontrak Habis | ✅ Selesai |
| **Fase 4** | 📅 Cuti & Kehadiran — Approval cuti, kalender absensi | ⏳ Fase Berikutnya |
| **Fase 5** | 📋 Onboarding & Offboarding — Checklist alur kerja | ⏳ Rencana |
| **Fase 6** | 📄 Generator Dokumen — Template PKWT, Surat Keterangan otomatis | ⏳ Rencana |

---

## 🎨 Tech Stack

- **HTML5** — Struktur SPA
- **Tailwind CSS** (via CDN) — Styling utility-first
- **Lucide Icons** (via CDN) — Icon set modern
- **Vanilla JavaScript** — Logic & interaktivitas
- **Google Fonts: Inter** — Typography

---

> Dibuat oleh **Rama** — HR Professional 🚀
