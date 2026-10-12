import { LessonContent, ModuleCurriculum } from "./hrStaffModules";

export const CHCO_CURRICULUM: Record<number, ModuleCurriculum> = {
  1: {
    id: 1,
    code: "CHCO-M1",
    name: "Mengelola Human Resource & Human Capital Management",
    skkniCode: "M.70SDM01.001.2.HRA01",
    description: "Transformasi dari HRM administratif menuju Strategic Human Capital, prinsip SPK ke PSR, arsitektur HC Strategy, dan pengukuran nilai bisnis (HC ROI & HCVA).",
    lessons: [
      {
        id: 1,
        title: "Transformasi Paradigma: Dari HRM Fondasi (SPK) Menuju HCM Pengungkit (PSR)",
        duration: "20 Menit",
        concept: `### 1. Perbedaan Mendasar HRM vs HCM
Pada level manajerial dan Chief Human Capital Officer (CHCO), pimpinan modal insani harus memahami batasan dan sinergi antara HRM dan HCM:
- **HRM (Human Resources Management)**: Mengelola sistem operasional, proses kerja, dan kebijakan organisasi (**SPK: Sistim, Proses, Kebijakan**). HRM menciptakan **keteraturan, standardisasi, dan kepatuhan hukum**.
- **HCM (Human Capital Management)**: Mengelola manusia sebagai aset bernilai strategis melalui kapabilitas, keahlian, dan peran kunci (**PSR: People, Skill, Role**). HCM menciptakan **keunggulan kompetitif, inovasi, dan pertumbuhan nilai bisnis**.

### 2. Prinsip Integrasi & Jembatan Strategi (The HCM Bridge)
> *"Organisasi tidak bisa melompat ke Human Capital Management tanpa terlebih dahulu menata fondasi Human Resource Management. Tanpa HRM yang kuat, HCM hanya menjadi konsep kosong."*

- **HRM = Fondasi**: Rekrutmen administratif, kepatuhan undang-undang, pengelolaan absensi, dan payroll tepat waktu.
- **HCM = Jembatan Strategis (Bridge)**: Menghubungkan fungsi HRM harian dengan Corporate Strategy dan target profitabilitas (EBITDA / Market Share).
- **Contoh Integrasi Nyata**:
  * Rekrutmen (HRM) -> ditransformasikan menjadi pencarian talenta berbasis kompetensi masa depan (HCM).
  * Penilaian Kinerja (HRM) -> dikaitkan langsung dengan akselerasi suksesi kepemimpinan (HCM).
  * Payroll & Tunjangan (HRM) -> dirancang untuk retensi talenta terbaik dan peningkatan keterikatan kerja (HCM).`,
        framework: [
          "Identifikasi fondasi sistemik (SPK): pastikan SOP personalia dan kepatuhan hukum telah tertata rapi.",
          "Transformasikan ke kapabilitas talenta (PSR): petakan gap kompetensi kunci penggerak bisnis.",
          "Bangun jembatan strategis: selaraskan program pelatihan dan retensi dengan sasaran pendapatan korporat.",
          "Evaluasi dampak bisnis: ukur peningkatan produktivitas, inovasi, dan retensi talenta berkinerja tinggi."
        ],
        caseStudy: `Sebuah bank konvensional ingin bertransformasi menjadi bank digital. Awalnya mereka langsung meluncurkan program talent incubator (HCM), namun gagal karena sistem KPI dan grading jabatan (HRM) masih kaku dan birokratis. CHCO membenahi dulu sistem evaluasi jabatan dan skema insentif kerja agile (fondasi HRM), baru kemudian menyaring talenta digital internal. Hasilnya: aplikasi mobile banking baru sukses diluncurkan tepat waktu dengan keterlibatan tim 92%.`,
        examHighlight: `Asesor BNSP tingkat CHCO akan menguji: "Jelaskan konsep integrasi 'SPK ke PSR' dan bagaimana peran CHCO sebagai jembatan antara operasional HR dengan strategi korporasi!"
Kunci Jawaban: HRM menyediakan keteraturan melalui SPK (Sistim, Proses, Kebijakan), sedangkan HCM mengungkit potensi PSR (People, Skill, Role). CHCO menghubungkan keduanya agar setiap kebijakan personalia berdampak langsung pada pencapaian target strategis bisnis (EBITDA, kepuasan pelanggan, dan ketahanan organisasi).`,
        quiz: {
          question: "Mengapa sistem Human Resource Management (HRM) disebut sebagai fondasi mutlak sebelum sebuah korporasi menerapkan Human Capital Management (HCM)?",
          options: [
            "Karena HCM tidak memerlukan aturan hukum ketenagakerjaan",
            "Karena tanpa sistem, proses, dan kebijakan (SPK) yang tertib, program pengembangan modal manusia (PSR) tidak memiliki pijakan operasional yang kokoh",
            "Karena biaya penerapan HRM jauh lebih mahal daripada HCM",
            "Karena HRM dikelola oleh dewan komisaris sedangkan HCM oleh manajer lini"
          ],
          correct: 1,
          explanation: "HRM adalah fondasi keteraturan dan kepatuhan (SPK). Tanpa SOP dan administrasi yang tertata, inisiatif HCM tidak akan dapat dieksekusi secara efektif di lapangan."
        }
      },
      {
        id: 2,
        title: "Arsitektur Human Capital Strategy & Pengukuran HC ROI / HCVA",
        duration: "25 Menit",
        concept: `### 1. Siklus Human Capital Strategy
Perjalanan strategi modal insani korporat bergerak dalam siklus 5 tahap:
1. **Planning (Perencanaan)**: Meramalkan kebutuhan kapabilitas masa depan selaras target ekspansi bisnis.
2. **Attracting (Penarikan Talenta)**: Membangun employer brand yang kuat untuk menarik profesional terbaik.
3. **Developing (Pengembangan)**: Membangun kompetensi melalui program terstruktur (ADDIE & 70:20:10).
4. **Engaging & Motivating (Keterikatan & Motivasi)**: Menciptakan budaya kerja yang inspiratif dan sistem reward meritokratis.
5. **Retaining (Retensi Talenta Kunci)**: Mempertahankan pemegang peran misi kritis (mission-critical roles).

### 2. Metrik Finansial Modal Insani untuk C-Level
Sebagai pemimpin HC, Anda harus mampu berbicara dalam 'bahasa finansial' di depan Dewan Direksi (BoD):
- **Human Capital Return on Investment (HC ROI)**: Mengukur imbal hasil laba yang dihasilkan untuk setiap Rp 1 biaya tenaga kerja yang dikeluarkan.
  $$\\text{HC ROI} = \\frac{\\text{Pendapatan} - (\\text{Beban Operasional} - \\text{Total Biaya Tenaga Kerja})}{\\text{Total Biaya Tenaga Kerja}}$$
- **Human Capital Value Added (HCVA)**: Mengukur rata-rata nilai tambah laba yang disumbangkan oleh setiap karyawan penuh waktu (Full-Time Equivalent / FTE).
  $$\\text{HCVA} = \\frac{\\text{Pendapatan} - (\\text{Beban Operasional} - \\text{Biaya Tenaga Kerja})}{\\text{Total FTE}}$$
- **Revenue per FTE**: Total pendapatan perusahaan dibagi jumlah total karyawan.`,
        framework: [
          "Dapatkan data laporan laba rugi (P&L) dari direktur keuangan (CFO).",
          "Kalkulasikan Total Cost of Workforce (gaji, tunjangan, asuransi, fasilitas, dan anggaran pelatihan).",
          "Hitung rasio HC ROI dan HCVA tahun berjalan sebagai baseline kinerja modal insani.",
          "Gunakan proyeksi kenaikan HC ROI saat mengajukan anggaran program strategis tahun depan di rapat RKAP."
        ],
        caseStudy: `CHCO perusahaan logistik mengajukan anggaran pelatihan automasi gudang senilai Rp 5 Miliar. Untuk meyakinkan Direktur Keuangan, CHCO menunjukkan analisis HC ROI: pelatihan ini akan memangkas kesalahan sortir 70%, menaikkan kapasitas kirim 30%, dan meningkatkan HC ROI perusahaan dari 1,4x menjadi 1,9x dalam tempo 12 bulan. Proposal langsung disetujui bulat oleh dewan direksi.`,
        examHighlight: `Asesor BNSP CHCO akan bertanya: "Bagaimana cara Anda membuktikan kepada Direksi bahwa divisi Human Capital bukan sekadar cost center (pos beban pengeluaran) melainkan value center?"
Kunci Jawaban: Tunjukkan metrik Human Capital Value Added (HCVA) dan HC ROI, korelasi penurunan turnover talenta kunci terhadap efisiensi biaya penggantian (replacement cost), serta kontribusi program pengembangan kompetensi terhadap kenaikan EBITDA perusahaan.`,
        quiz: {
          question: "Metrik human capital yang mengukur profitabilitas laba bersih yang dihasilkan untuk setiap rupiah yang diinvestasikan pada biaya tenaga kerja disebut:",
          options: [
            "Time to Fill",
            "Human Capital Return on Investment (HC ROI)",
            "Cost per Hire",
            "Absence Rate Ratio"
          ],
          correct: 1,
          explanation: "HC ROI mengukur rasio pengembalian finansial atas seluruh total biaya tenaga kerja yang dikeluarkan oleh korporasi."
        }
      }
    ]
  },

  2: {
    id: 2,
    code: "CHCO-M2",
    name: "Menyusun Standar Operasional Prosedur (SOP) MSDM",
    skkniCode: "M.70SDM01.013.2",
    description: "Prinsip ICH & Permen PAN-RB 35/2012, klasifikasi SOP teknis/administratif dan makro/mikro, anatomi format baku SOP, serta standarisasi simbol flowchart.",
    lessons: [
      {
        id: 1,
        title: "Esensi, Klasifikasi & 5 Tahap Penyusunan SOP MSDM",
        duration: "20 Menit",
        concept: `### 1. Definisi & Esensi SOP MSDM
Berdasarkan *International Conference on Harmonisation (ICH)* dan *Permen PAN-RB No. 35 Tahun 2012*:
> **Standar Operasional Prosedur (SOP)** adalah instruksi tertulis yang dibakukan mengenai berbagai proses penyelenggaraan kegiatan: **apa yang harus dilakukan, bagaimana, kapan, di mana, dan oleh siapa**.

**Manfaat Utama SOP**:
- Standarisasi cara kerja agar hasil konsisten walau dikerjakan oleh orang berbeda.
- Mengurangi kesalahan, kelalaian, dan variasi kerja.
- Menjamin kepastian hukum dan perlindungan hak pekerja/perusahaan.
- Dasar perbaikan proses berkesinambungan (continuous improvement).

### 2. Klasifikasi SOP MSDM
- **Berdasarkan Sifat**:
  * **SOP Teknis**: Prosedur sangat rinci yang dilaksanakan oleh satu pelaksana/jabatan (misal: SOP Entri Data Payroll, SOP Uji Cepat Psikotes).
  * **SOP Administratif**: Prosedur umum lintas fungsi yang melibatkan lebih dari satu jabatan/unit (misal: SOP Absensi Kerja, SOP Penanganan Keluhan Karyawan).
- **Berdasarkan Fungsi**:
  * **SOP Makro**: Mencakup gambaran umum proses bisnis HR utama dari hulu ke hilir (misal: SOP Rekrutmen Terpadu).
  * **SOP Mikro**: Bagian rinci dari SOP Makro (misal: SOP Wawancara Kandidat, SOP Pengajuan Man Power Planning).

### 3. 5 Tahap Siklus Penyusunan SOP
1. **Pemahaman Kebijakan**: Memahami regulasi ketenagakerjaan dan tujuan bisnis yang melandasi prosedur.
2. **Dokumentasi**: Mengumpulkan informasi detail alur kerja dan menyusun draf SOP beserta formulir pendukung.
3. **Sosialisasi**: Memperkenalkan SOP kepada seluruh pekerja terkait melalui pertemuan/memo.
4. **Pelaksanaan**: Menerapkan SOP dalam operasional harian dan memastikan kepatuhan administrasi.
5. **Monitoring & Evaluasi**: Mengukur efektivitas berkala dan merevisi SOP jika terjadi perubahan alur kerja.`,
        framework: [
          "Petakan proses bisnis unit HR dan tentukan apakah membutuhkan SOP Teknis atau Administratif.",
          "Bentuk tim penyusun bersama perwakilan staf pelaksana harian (user).",
          "Tuliskan draf alur kerja secara runut dari langkah awal hingga akhir.",
          "Lakukan simulasi (walkthrough test) untuk memastikan alur kerja realistis.",
          "Minta persetujuan pimpinan unit dan lakukan sosialisasi sebelum tanggal efektif berlaku."
        ],
        caseStudy: `Di sebuah rumah sakit swasta, proses rekrutmen dokter dan perawat memakan waktu 60 hari karena tidak ada kejelasan batas waktu verifikasi berkas STR. CHCO memimpin penyusunan SOP Rekrutmen Tenaga Medis: membagi menjadi SOP Makro Pengadaan Pegawai dan SOP Mikro Verifikasi Kredensial, menetapkan Service Level Agreement (SLA) verifikasi berkas maks 3 hari kerja. Waktu rekrutmen berhasil dipangkas menjadi 22 hari.`,
        examHighlight: `Asesor BNSP akan meminta Anda membedakan: "Apa perbedaan mendasar antara SOP Makro dan SOP Mikro dalam fungsi MSDM?"
Kunci Jawaban: SOP Makro menggambarkan proses bisnis utama secara menyeluruh dari awal hingga akhir (contoh: SOP Rekrutmen), sedangkan SOP Mikro merupakan prosedur turunan spesifik yang menjadi bagian dari SOP Makro (contoh: SOP Pelaksanaan Wawancara, SOP MCU).`,
        quiz: {
          question: "Prosedur operasional yang bersifat umum, mengatur alur kerja lintas fungsi, dan melibatkan lebih dari satu pelaksana atau departemen disebut:",
          options: [
            "SOP Teknis",
            "Instruksi Kerja Mandiri",
            "SOP Administratif",
            "Catatan Mutu"
          ],
          correct: 2,
          explanation: "SOP Administratif adalah standar prosedur kerja yang melibatkan koordinasi antardepartemen atau lebih dari satu jabatan pelaksana."
        }
      },
      {
        id: 2,
        title: "Anatomi Format Baku SOP: Elemen Atribut & Elemen Utama",
        duration: "25 Menit",
        concept: `### 1. Struktur Standar Dokumen SOP
Dokumen SOP yang memenuhi standar ISO 9001 dan SKKNI BNSP terdiri dari 2 elemen pokok:

### Bagian 1: Elemen Atribut (Header & Metadata Dokumen)
- **Judul SOP**: Penamaan yang jelas mencerminkan aktivitas (misal: *SOP Rekrutmen Karyawan Baru*).
- **Nomor Dokumen**: Kodefikasi unik (misal: *SOP/HRD/REC/001*).
- **Status Revisi**: Edisi penerbitan (misal: *Rev. 00* atau *Rev. 01*).
- **Waktu Berlaku**: Tanggal pembuatan dan tanggal mulai efektif berlaku.
- **Nomor Halaman**: Format *Halaman X dari Y* (misal: *Hal 1 dari 4*).
- **Identitas Perusahaan**: Logo resmi dan nama legal perusahaan.
- **Lembar Pengesahan (Sign-off)**:
  * *Dibuat Oleh*: Staf HR / Tim Penyusun
  * *Diperiksa Oleh*: Manajer HR / Kepala Divisi
  * *Disetujui Oleh*: Direktur HR / Chief Human Capital Officer (CHCO)

### Bagian 2: Elemen Utama (Isi Batang Tubuh SOP)
1. **Tujuan**: Menjelaskan sasaran spesifik dibuatnya prosedur kerja.
2. **Ruang Lingkup**: Cakupan departemen, wilayah kerja, atau jenis karyawan yang terikat SOP.
3. **Definisi / Istilah**: Penjelasan pengertian istilah teknis/singkatan yang digunakan.
4. **Referensi**: Landasan hukum (UU Ketenagakerjaan, PP, PKB, Kebijakan Mutu).
5. **Penanggung Jawab Prosedur**: Jabatan yang bertanggung jawab mengendalikan proses.
6. **Prosedur / Rincian Langkah Kerja**: Narasi langkah demi langkah beserta dokumen yang digunakan.
7. **Keadaan Khusus**: Prosedur kontinjensi jika terjadi situasi darurat di luar kondisi normal.
8. **Instruksi Kerja (IK)**: Panduan detail teknis cara mengoperasikan alat/sistem pendukung.
9. **Formulir / Catatan Mutu**: Form rekam jejak yang dihasilkan (contoh: Form Lamaran, Form Wawancara).
10. **Diagram Alir (Flowchart)**: Visualisasi tahapan prosedur kerja.`,
        framework: [
          "Gunakan template baku dokumen yang sudah memuat elemen atribut (header & lembar pengesahan).",
          "Tuliskan tujuan dan ruang lingkup secara ringkas dan tegas pada 1-2 paragraf.",
          "Cantumkan landasan referensi yuridis dan peraturan perusahaan terkait.",
          "Susun tabel matriks prosedur kerja: No | Aktivitas | Pelaksana | Dokumen Terkait.",
          "Lampirkan seluruh blanko formulir resmi yang disebutkan dalam prosedur."
        ],
        caseStudy: `Sebuah draf SOP Pelatihan ditolak oleh Asesor Audit Eksternal karena tidak memiliki kolom lembar pengesahan direksi dan tidak mencantumkan daftar formulir catatan mutu. Tim HR melengkapi dokumen dengan atribut pengesahan Direktur HR, menambahkan nomor revisi, serta melampirkan formulir Evaluasi Pelatihan Level 1 (Reaction Form). Pada audit tindak lanjut, SOP tersebut dinyatakan lulus standar.`,
        examHighlight: `Asesor BNSP akan memeriksa fisik dokumen SOP portofolio Anda: "Tunjukkan elemen atribut dan elemen utama pada berkas SOP yang Anda bawa!"
Kunci Jawaban: Tunjukkan pada header: Nomor Dokumen, Revisi, Lembar Pengesahan Direksi. Lalu buka halaman isi dan tunjukkan: Tujuan, Ruang Lingkup, Definisi, Prosedur Matriks, Form Catatan Mutu, dan Diagram Alir (Flowchart).`,
        quiz: {
          question: "Komponen yang WAJIB ada pada bagian atribut dokumen SOP untuk membuktikan keabsahan legal berlakunya prosedur adalah:",
          options: [
            "Foto profil seluruh karyawan di departemen terkait",
            "Lembar Pengesahan yang memuat tanda tangan pembuat, pemeriksa, dan pejabat yang menyetujui",
            "Daftar gaji seluruh dewan direksi",
            "Bukti transfer rekening bank perusahaan"
          ],
          correct: 1,
          explanation: "Lembar pengesahan (dibuat, diperiksa, disetujui) adalah atribut wajib untuk membuktikan bahwa SOP telah disahkan secara resmi oleh pimpinan berwenang."
        }
      },
      {
        id: 3,
        title: "Standarisasi Simbol Diagram Alir (Flowchart) Proses Bisnis HR",
        duration: "20 Menit",
        concept: `### 1. Peran Flowchart dalam SOP
Flowchart adalah representasi grafis langkah kerja dari bentuk narasi menjadi bagan alir simbolis. Tujuannya adalah mempermudah pelaksana memahami urutan, titik keputusan, dan penanggung jawab proses.

### 2. Standar Simbol Diagram Alir Baku (ANSI / ISO)
HR Leader wajib menggunakan simbol flowchart yang benar:
- **Terminator (Kapsul Oval / Persegi Tumpul)**: Menandakan titik **Mulai (Start)** atau **Selesai (End)** suatu prosedur.
- **Process (Persegi Panjang)**: Menggambarkan langkah tindakan kerja fisik atau pemrosesan administrasi.
- **Decision (Belah Ketupat / Diamond)**: Menandakan titik **Pengambilan Keputusan (Ya / Tidak)**. Wajib memiliki minimal 2 garis keluar (misal: 'Jika Lolos -> Lanjut', 'Jika Gagal -> Selesai/Gugur').
- **Document (Persegi Panjang bergelombang di bawah)**: Menandakan bahwa langkah kerja tersebut menghasilkan atau menggunakan satu berkas dokumen (contoh: Form Lamaran).
- **Multi-Document (Bertumpuk berkas bergelombang)**: Menandakan pemrosesan kumpulan berkas atau banyak dokumen sekaligus.
- **Manual Input (Segiempat dengan garis atas miring)**: Penginputan data secara manual ke sistem komputer.
- **On-Page Connector (Lingkaran)**: Penghubung alur prosedur di dalam **satu halaman yang sama**.
- **Off-Page Connector (Segilima / Pentagon)**: Penghubung alur prosedur menuju **halaman lain yang berbeda**.
- **Garis Alir Berpanah**: Arah urutan prosedur langkah kerja.
- **Garis Sejajar Tanpa Panah**: Menggambarkan hubungan koordinasi atau monitoring.`,
        framework: [
          "Awali diagram alir dengan simbol Terminator bertuliskan 'MULAI'.",
          "Gunakan persegi panjang untuk setiap aksi/kegiatan operasional staf.",
          "Gunakan belah ketupat untuk setiap tahapan seleksi/evaluasi dengan opsi panah Ya/Tidak yang jelas.",
          "Hubungkan dokumen terkait (simbol berkas bergelombang) pada setiap aktivitas yang relevan.",
          "Gunakan simbol konektor jika diagram alir melebihi satu halaman dokumen.",
          "Akhiri diagram alir dengan simbol Terminator bertuliskan 'SELESAI'."
        ],
        caseStudy: `Dalam penyusunan SOP Rekrutmen, staf HR menggambar tahapan 'Wawancara User' menggunakan simbol persegi panjang, namun memberi tanda panah bercabang 'Lulus' dan 'Gagal'. Hal ini keliru menurut standar flowchart. CHCO mengoreksi: tahapan wawancara digambar dengan Decision (belah ketupat) bertuliskan 'Kandidat Memenuhi Syarat?'. Jika 'Ya' panah mengarah ke MCU, jika 'Tidak' panah mengarah ke arsip penolakan.`,
        examHighlight: `Asesor BNSP sering menguji dengan memperlihatkan gambar diagram alir: "Sebutkan nama dan fungsi dari simbol belah ketupat (diamond) serta simbol kapsul oval dalam diagram alir SOP!"
Kunci Jawaban: Simbol belah ketupat adalah Decision (titik pengambilan keputusan bercabang Ya/Tidak), sedangkan simbol kapsul oval adalah Terminator (penanda titik awal mulai atau akhir selesai suatu prosedur).`,
        quiz: {
          question: "Simbol flowchart yang digunakan untuk menghubungkan alur prosedur kerja yang terputus karena berpindah ke halaman lain adalah:",
          options: [
            "Lingkaran (On-page connector)",
            "Segilima / Pentagon (Off-page connector)",
            "Persegi panjang (Process)",
            "Belah ketupat (Decision)"
          ],
          correct: 1,
          explanation: "Segilima (Off-page connector) digunakan khusus untuk menyambung aliran diagram yang berpindah ke halaman dokumen berikutnya."
        }
      }
    ]
  },

  3: {
    id: 3,
    code: "CHCO-M3",
    name: "Melaksanakan Proses Rekrutmen, Seleksi & Onboarding",
    skkniCode: "M.70SDM01.017.2",
    description: "Proses bisnis rekrutmen Mondy (2008), alternatif selain rekrutmen, teknik wawancara BEI berbasis STAR, eliminasi bias pewawancara, offering letter, dan metrik rekrutmen.",
    lessons: [
      {
        id: 1,
        title: "Proses Bisnis Rekrutmen (Mondy 2008) & Alternatif Rekrutmen",
        duration: "20 Menit",
        concept: `### 1. Definisi & Urgensi Mobilitas Internal
- **Definisi Rekrutmen (Werther & Davis, 1996)**: Proses pemenuhan kebutuhan SDM yang dimulai dari pencarian pelamar, penyaringan, hingga sekumpulan kandidat siap diseleksi.
- **Prinsip Utama**: Sistem MSDM modern selalu mendahulukan **Mobilitas Internal (Internal Sourcing)** sebelum memutuskan membuka lowongan ke pihak luar.
- **Keunggulan Rekrutmen Internal**:
  * Produktivitas naik **+40%** karena kandidat sudah paham ritme dan budaya kerja.
  * Menghemat biaya dan waktu rekrutmen **>50%** dibanding mencari pelamar eksternal.
  * Meningkatkan keterikatan (employee engagement) dan retensi karyawan berprestasi.

### 2. 4 Alternatif Tindakan Selain Rekrutmen Eksternal
Sebelum membuka lowongan baru yang menambah beban biaya tetap perusahaan, pertimbangkan 4 opsi:
1. **Alih Daya (Outsourcing)**: Menggunakan jasa penyedia eksternal untuk pekerjaan penunjang (cleaning, security, kurir).
2. **Karyawan Tidak Tetap (Contingent Workers)**: Merekrut tenaga magang, pekerja paruh waktu, atau kontraktor proyek musiman.
3. **PEO (Professional Employer Organization)**: Perusahaan menyewa jasa pekerja profesional dari mitra penyedia tenaga kerja.
4. **Kerja Lembur (Overtime)**: Mengoptimalkan tenaga kerja yang ada dengan lembur jika lonjakan beban kerja hanya bersifat sementara.

### 3. Alur Proses Bisnis Rekrutmen End-to-End (Mondy, 2008)
\`\`\`
Man Power Planning (MPP) -> Analisis Jabatan -> Analisis Beban Kerja (WLA) -> Approval Budget Direksi
                                    ↓
            ┌───────────────────────┴───────────────────────┐
      [Jalur Internal]                                [Jalur Eksternal]
      - Talent Search Internal                       - Job Posting & Iklan
      - Assessment Kompetensi                        - Screening CV Dokumen
      - Wawancara Internal                           - Pre-Employment Test
      - SK Pengangkatan/Mutasi                       - Wawancara (HR & User)
      - Onboarding Penempatan                        - Medical Check-Up (MCU)
                                                     - Job Offering Letter
                                                     - Onboarding Karyawan Baru
\`\`\``,
        framework: [
          "Validasi kebutuhan tenaga kerja baru: cek apakah ada penggantian atau ekspansi bisnis.",
          "Evaluasi opsi alternatif: apakah beban kerja dapat diatasi dengan lembur atau outsourcing?",
          "Cek data Talent Pool internal sebelum mempublikasikan lowongan ke media sosial/job portal.",
          "Pastikan anggaran biaya rekrutmen dan gaji posisi telah disetujui oleh Direksi."
        ],
        caseStudy: `Sebuah pabrik garmen menghadapi lonjakan pesanan ekspor selama 2 bulan menjelang hari raya. Manajer Produksi meminta HR merekrut 30 orang operator jahit tetap baru. CHCO menolak usulan rekrutmen tetap karena pesanan hanya bersifat musiman. CHCO memilih solusi alternatif: kombinasi kerja lembur terukur bagi operator lama dan mempekerjakan 15 pekerja kontrak harian musiman. Hasilnya: target pesanan tuntas tanpa membebani biaya gaji tetap di bulan-bulan berikutnya.`,
        examHighlight: `Asesor BNSP akan menanyakan: "Apa saja langkah analisis yang harus dilakukan HR sebelum memutuskan untuk merekrut karyawan baru dari pasar eksternal?"
Kunci Jawaban: 1) Analisis Beban Kerja (WLA) untuk memastikan urgensi kebutuhan, 2) Evaluasi opsi alternatif non-rekrutmen (lembur/outsourcing), 3) Pengecekan ketersediaan suksesor pada Talent Pool internal perusahaan, 4) Konfirmasi ketersediaan anggaran pada Rencana Kerja dan Anggaran Perusahaan (RKAP).`,
        quiz: {
          question: "Berikut ini yang BUKAN merupakan alternatif tindakan yang dapat diambil manajemen selain melakukan rekrutmen karyawan baru adalah:",
          options: [
            "Pemberian kerja lembur (overtime) terukur bagi staf yang ada",
            "Penggunaan tenaga kerja alih daya (outsourcing) untuk fungsi pendukung",
            "Pemotongan gaji karyawan secara sepihak tanpa kesepakatan",
            "Pemanfaatan tenaga kerja magang atau pekerja lepas sementara (contingent workers)"
          ],
          correct: 2,
          explanation: "Pemotongan gaji sepihak merupakan pelanggaran hukum ketenagakerjaan dan bukan merupakan strategi alternatif pengadaan kapasitas tenaga kerja."
        }
      },
      {
        id: 2,
        title: "Wawancara Perilaku Berbasis STAR (BEI), Skoring & Eliminasi Bias",
        duration: "25 Menit",
        concept: `### 1. Metode Behavioral Event Interview (BEI)
Prinsip dasar wawancara perilaku modern:
> *"Perilaku dan performa masa lalu kandidat dalam situasi nyata adalah prediktor terbaik atas kinerjanya di masa depan."*

### 2. Framework STAR dalam Menggali Jawaban
- **Situation (Situasi)**: Konteks latar belakang situasi spesifik atau tantangan yang dihadapi kandidat di masa lalu.
- **Task (Tugas)**: Peran, target, atau tanggung jawab spesifik kandidat dalam situasi tersebut.
- **Action (Tindakan)**: Langkah-langkah konkret yang **diambil oleh kandidat sendiri** untuk memecahkan masalah.
- **Result (Hasil)**: Dampak nyata terukur dari tindakan tersebut (angka kuantitatif, penghematan, apresiasi).

### 3. Mengeliminasi Bias Pewawancara
Pewawancara profesional wajib menghindari jebakan bias psikologis:
- **Halo Effect**: Terpukau pada satu kelebihan fisik/latar belakang almamater sehingga mengabaikan kelemahan fatal lainnya.
- **Similarity / Affinity Bias**: Memberikan nilai tinggi hanya karena kandidat memiliki hobi, asal daerah, atau watak yang mirip pewawancara.
- **First Impression Bias**: Menilai kompetensi kandidat hanya dari kesan 5 menit pertama saat masuk ruangan.
- **Confirmation Bias**: Pewawancara hanya mencari informasi yang membenarkan asumsi pribadinya sejak awal.
- *Solusi Eliminasi*: Gunakan **Sistem Skoring Tertimbang (Weighted Scoring Sheet)** dengan panel interviewer jamak (HR + User).

### 4. Mengenali Tanda Bahaya (Red Flags) Kandidat
- Memberikan jawaban mengambang, klise, atau hanya berbicara teoritis tanpa contoh kasus konkret.
- Kerap menyalahkan mantan rekan kerja atau mantan atasan saat ditanya mengenai kegagalan proyek.
- Inkonsistensi data tanggal kerja dan jabatan antara riwayat CV dengan cerita saat wawancara.`,
        framework: [
          "Siapkan panduan pertanyaan wawancara terstruktur berbasis kamus kompetensi.",
          "Gali jawaban kandidat dengan probing STAR: 'Ceritakan situasi nyatanya...', 'Apa tindakan spesifik Anda...'",
          "Berikan penilaian pada form rubrik skoring (skala 1-5) segera setelah wawancara usai.",
          "Lakukan cross-check dengan catatan riwayat kerja dan background check referensi."
        ],
        caseStudy: `Seorang kandidat Manajer Pemasaran mengklaim di CV bahwa ia berhasil melipatgandakan omset perusahaan lama. Pewawancara menguji dengan teknik STAR: 'Ceritakan situasi saat omset melonjak, apa peran spesifik Anda, dan tindakan inovatif apa yang Anda ambil?' Kandidat tampak gugup dan hanya bisa menjelaskan tren pasar umum tanpa mampu menyebutkan tindakan pribadinya. Pewawancara mencatat hal ini sebagai red flag dan merekomendasikan kandidat lain yang memiliki portofolio aksi nyata.`,
        examHighlight: `Asesor BNSP akan meminta Anda mempraktikkan: "Susunlah 1 contoh pertanyaan wawancara perilaku (BEI) berbasis STAR untuk menguji kompetensi 'Penyelesaian Konflik' (Conflict Resolution)!"
Kunci Jawaban: 'Ceritakan satu peristiwa nyata di tempat kerja sebelumnya saat Anda mengalami perselisihan tajam dengan rekan kerja satu tim mengenai prioritas proyek. Apa peran dan tanggung jawab Anda saat itu? Tindakan apa yang Anda lakukan untuk menuntaskan konflik tersebut, dan bagaimana hasil akhirnya terhadap hubungan kerja Anda dan hasil proyek?'`,
        quiz: {
          question: "Kecenderungan pewawancara memberikan nilai tinggi kepada kandidat hanya karena memiliki almamater kampus yang sama disebut bias:",
          options: [
            "Halo Effect",
            "Similarity / Affinity Bias",
            "Stereotyping",
            "Horn Effect"
          ],
          correct: 1,
          explanation: "Similarity / Affinity Bias adalah kecenderungan bawah sadar untuk menyukai kandidat yang memiliki kesamaan latar belakang, hobi, atau almamater dengan pewawancara."
        }
      },
      {
        id: 3,
        title: "Offering Letter, Onboarding 30-60-90 & Metrik Kinerja Rekrutmen",
        duration: "25 Menit",
        concept: `### 1. Anatomi Surat Penawaran Kerja (Job Offering Letter)
Surat penawaran resmi yang mengikat kedua belah pihak wajib memuat:
- Identitas Lengkap Pelamar & Nama Perusahaan.
- Rincian Posisi: Nama Jabatan, Departemen, Status (PKWT/PKWTT), Atasan Langsung (Report Line).
- Paket Remunerasi: Gaji Pokok, Tunjangan Tetap, Tunjangan Makan/Transport, BPJS, Hak Cuti, dan Bonus/Insentif.
- Jadwal & Lokasi Kerja: Jam kerja reguler, lokasi kantor penempatan, dan tanggal efektif mulai bekerja.
- Batas Waktu Konfirmasi Tanda Tangan Penerimaan Penawaran.

### 2. Framework Onboarding 30-60-90 Hari
Proses onboarding modern tidak berhenti di hari pertama orientasi, melainkan terbagi dalam siklus:
- **Pre-boarding**: Komunikasi hangat sebelum hari pertama (dokumen administrasi, peralatan laptop, sambutan tim).
- **Hari 1 - 30 (Orientasi)**: Pengenalan budaya perusahaan, nilai inti (core values), tur kantor, dan pemahaman SOP divisi.
- **Hari 31 - 60 (Integrasi)**: Mulai terlibat aktif dalam penugasan proyek nyata dan kolaborasi lintas fungsi.
- **Hari 61 - 90 (Akselerasi)**: Kemandirian kerja penuh, unjuk kompetensi mandiri, dan pencapaian target kinerja awal.
- **Hari 91+ (Evaluasi)**: Peninjauan akhir masa percobaan (probation review) 2 arah dan pengesahan status karyawan tetap.
- *Dampak Nyata*: Onboarding terstruktur meningkatkan **retensi karyawan hingga 82%** dan mempercepat produktivitas **70% lebih cepat**.

### 3. Metrik Evaluasi Kinerja Rekrutmen (Recruitment Metrics)
- **Time to Hire**: Rata-rata durasi dari lowongan dibuka hingga kandidat menerima tawaran kerja (**Target industri: < 36 hari**).
- **Cost per Hire**: Total biaya rekrutmen dibagi jumlah kandidat yang diterima (**Target: < 1x gaji bulanan posisi terkait**).
- **Offer Acceptance Rate**: Persentase kandidat yang menerima offering letter (**Target: > 80%**).
- **90-Day Retention Rate**: Persentase karyawan baru yang bertahan melewati masa percobaan 90 hari (**Target: > 90%**).`,
        framework: [
          "Siapkan draf Offering Letter resmi dan berikan batas waktu konfirmasi (misal 3-5 hari kerja).",
          "Bentuk checklist pre-boarding bersama tim IT dan General Affair (laptop, email, ID card).",
          "Tugaskan 'Buddy' (rekan kerja pendamping) untuk memandu karyawan baru selama bulan pertama.",
          "Lakukan evaluasi berkala di hari ke-30, ke-60, dan penilaian akhir di hari ke-90.",
          "Hitung metrik rekrutmen triwulanan (Time to Hire, Cost per Hire, dan Retention Rate)."
        ],
        caseStudy: `PT Digital Kreasi memiliki masalah turnover karyawan baru mencapai 30% di bawah 3 bulan. Setelah diaudit, ternyata karyawan baru langsung dilepas mengerjakan target tanpa ada bimbingan. CHCO merancang program Onboarding 30-60-90: hari ke-30 evaluasi orientasi bersama mentor, hari ke-60 evaluasi proyek tim, dan hari ke-90 penilaian akhir. Hasilnya: tingkat retensi 90 hari melonjak menjadi 95% dan kepuasan karyawan baru mencapai skor 4,8/5.`,
        examHighlight: `Asesor BNSP akan menanyakan: "Sebutkan 3 metrik utama yang digunakan seorang Human Capital Officer untuk mengevaluasi efektivitas dan efisiensi proses rekrutmen!"
Kunci Jawaban: 1) Time to Hire (kecepatan pemenuhan tenaga kerja, target <36 hari), 2) Cost per Hire (efisiensi biaya pengadaan tenaga kerja), dan 3) 90-Day Retention Rate (kualitas seleksi dan keberhasilan proses onboarding karyawan baru).`,
        quiz: {
          question: "Durasi waktu rata-rata yang dihitung sejak lowongan pekerjaan dipublikasikan hingga kandidat menandatangani penawaran kerja disebut metrik:",
          options: [
            "Cost per Hire",
            "Time to Hire",
            "Offer Acceptance Rate",
            "Quality of Hire"
          ],
          correct: 1,
          explanation: "Time to Hire mengukur durasi total proses pengadaan tenaga kerja dari awal pembukaan lowongan hingga penerimaan tawaran kerja."
        }
      }
    ]
  },

  4: {
    id: 4,
    code: "CHCO-M4",
    name: "Melaksanakan Kegiatan Pembelajaran & Pengembangan",
    skkniCode: "M.70SDM01.033.2",
    description: "Perbedaan Training vs Development, model ADDIE, analisis kebutuhan pelatihan (TNA 3 tingkat), kerangka 70:20:10, desain silabus, dan evaluasi 4 level Kirkpatrick.",
    lessons: [
      {
        id: 1,
        title: "Perbedaan Training vs Development & Siklus Model ADDIE",
        duration: "20 Menit",
        concept: `### 1. Training vs Development
Dalam ekosistem pengembangan modal insani, kedua istilah ini memiliki fokus berbeda:
- **Pelatihan (Training)**: Proses pembelajaran **jangka pendek** yang sistematis untuk meningkatkan pengetahuan dan keterampilan teknis spesifik (**KSBA: Knowledge, Skill, Behavior, Ability**) guna memenuhi tuntutan pekerjaan saat ini.
- **Pengembangan (Development)**: Proses pembelajaran **jangka panjang** yang terorganisir untuk memperoleh keahlian konseptual, kepemimpinan, dan kematangan sikap guna meraih sukses dalam peran strategis masa depan.

### 2. Siklus Model ADDIE dalam Pembelajaran Korporat
Dirumuskan oleh Florida State University (Robert Branson & Gary Rayner), ADDIE adalah standar emas desain pembelajaran:
1. **Analysis (Analisis)**: Melakukan identifikasi kesenjangan kinerja melalui *Training Need Analysis (TNA)*.
2. **Design (Desain)**: Merumuskan tujuan pembelajaran spesifik (SMART), menyusun peta silabus, alokasi waktu, dan metode belajar.
3. **Development (Pengembangan)**: Membangun modul pelatihan, materi presentasi, lembar kerja kasus (handout), dan instrumen penilaian.
4. **Implementation (Implementasi)**: Mengeksekusi jadwal pelatihan, mengelola interaksi peserta, log kehadiran, dan fasilitator.
5. **Evaluation (Evaluasi)**: Mengukur keberhasilan program pelatihan sebelum, sesaat, dan setelah pelatihan selesai.`,
        framework: [
          "Mulai dari fase Analysis: identifikasi gap kompetensi nyata di tempat kerja.",
          "Masuk fase Design: susun sasaran hasil belajar dan kerangka silabus.",
          "Lanjutkan fase Development: buat materi slide, studi kasus, dan pre/post-test.",
          "Jalankan fase Implementation: fasilitasi sesi pelatihan dan dokumentasikan kehadiran.",
          "Tutup dengan fase Evaluation: ukur kepuasan peserta dan perubahan perilaku kerja."
        ],
        caseStudy: `Departemen Layanan Pelanggan menerima lonjakan komplain keluhan nada bicara staf yang judes. CHCO menerapkan ADDIE: Analisis membuktikan staf kurang menguasai teknik komunikasi asertif. Desain: disusun kursus 2 hari 'Komunikasi Asertif'. Development: dibuat video simulasi dan skenario role-play komplain marah. Implementasi: pelatihan dijalankan bertahap untuk 50 staf. Evaluasi: komplain pelanggan turun 85% dalam 1 bulan pasca pelatihan.`,
        examHighlight: `Asesor BNSP akan menanyakan: "Sebutkan 5 tahapan dalam model ADDIE dan jelaskan output utama yang dihasilkan pada fase Development!"
Kunci Jawaban: Analysis, Design, Development, Implementation, Evaluation. Output dari fase Development adalah modul pelatihan, materi slide presentasi, panduan instruktur (trainer guide), lembar latihan studi kasus, dan instrumen soal ujian (pre-test/post-test).`,
        quiz: {
          question: "Tahapan dalam model ADDIE yang berfokus pada penyusunan modul, materi presentasi, dan instrumen evaluasi pembelajaran adalah:",
          options: [
            "Analysis",
            "Design",
            "Development",
            "Implementation"
          ],
          correct: 2,
          explanation: "Fase Development adalah tahap memproduksi seluruh materi pembelajaran, media presentasi, buku panduan, dan instrumen tes yang telah dirancang pada fase Design."
        }
      },
      {
        id: 2,
        title: "Training Needs Analysis (TNA 3 Tingkat) & Framework 70:20:10",
        duration: "25 Menit",
        concept: `### 1. 3 Tingkatan Analisis Kebutuhan Pelatihan (TNA)
Agar anggaran pelatihan tidak terbuang sia-sia untuk kursus yang tidak relevan, TNA wajib dilakukan pada 3 tingkatan:
1. **Organizational Analysis (Analisis Organisasi)**: Menyelaraskan program pelatihan dengan sasaran strategi korporasi serta memastikan ketersediaan anggaran dan dukungan manajerial.
2. **Task Analysis (Analisis Tugas / Pekerjaan)**: Mengidentifikasi tugas pokok dan kompetensi KSBA yang dibutuhkan oleh suatu jabatan berdasarkan Job Description; mengukur kesenjangan antara standar standar jabatan dengan realita.
3. **Person Analysis (Analisis Individu)**: Menentukan siapa karyawan spesifik yang membutuhkan pelatihan, apa tingkat kemahiran awalnya, dan bagaimana motivasi belajarnya.

### 2. Metode Pembelajaran Campuran: Model 70:20:10 (Cherrington)
Pengembangan modal insani paling efektif bukanlah melulu duduk di ruang kelas:
- **70% Experiential Learning (Pengalaman Kerja Nyata)**: On-the-job training, rotasi kerja, penugasan proyek baru, dan penyelesaian masalah di lapangan.
- **20% Social Learning (Interaksi Sosial)**: Coaching langsung dari atasan, mentoring oleh pakar senior, observasi rekan kerja, dan umpan balik berkala.
- **10% Formal Learning (Edukasi Formal)**: Workshop kelas, seminar, sertifikasi profesional, dan kursus e-learning mandiri.`,
        framework: [
          "Bongkar target korporat: kapabilitas bisnis baru apa yang ingin dibangun tahun ini? (Org Analysis).",
          "Bandingkan standar kompetensi jabatan dengan hasil evaluasi kinerja tahunan (Task Analysis).",
          "Petakan nama-nama karyawan yang memiliki gap nilai kompetensi di bawah standar (Person Analysis).",
          "Kombinasikan solusi pengembangan menggunakan proporsi 70% praktik kerja, 20% mentoring, dan 10% pelatihan kelas."
        ],
        caseStudy: `Di sebuah perusahaan distribusi, manajer penjualan meminta seluruh tim sales dikirim ke pelatihan motivasi luar kota senilai ratusan juta rupiah. CHCO melakukan TNA 3 tingkat: ternyata masalah anjloknya omset bukan karena kurang motivasi (Person), melainkan staf tidak paham cara menggunakan aplikasi CRM seluler yang baru (Task). CHCO membatalkan kursus motivasi dan menggantinya dengan simulasi aplikasi CRM 1 hari (10%) didampingi mentoring supervisor selama 2 minggu (20%). Penjualan langsung kembali normal dengan biaya hemat 90%.`,
        examHighlight: `Asesor BNSP akan meminta Anda memaparkan: "Bagaimana cara Anda melakukan Training Needs Analysis (TNA) di perusahaan tempat Anda bekerja?"
Kunci Jawaban: Paparkan 3 tingkatan TNA: 1) Analisis Organisasi (keselarasan strategi bisnis), 2) Analisis Tugas (gap kompetensi pada job description), dan 3) Analisis Individu (menganalisis hasil evaluasi kinerja dan penilaian kompetensi pekerja).`,
        quiz: {
          question: "Dalam prinsip pengembangan talenta 70:20:10, porsi terbesar (70%) pembelajaran kompetensi diperoleh melalui:",
          options: [
            "Membaca buku teks dan modul di perpustakaan",
            "Pengalaman kerja nyata di lapangan, penugasan proyek, dan on-the-job training",
            "Mengikuti seminar internasional secara daring",
            "Sesi coaching tatap muka bersama konsultan luar"
          ],
          correct: 1,
          explanation: "Model 70:20:10 menetapkan bahwa 70% kematangan keahlian praktis diperoleh melalui pengalaman nyata saat menyelesaikan pekerjaan di tempat kerja (learning by doing)."
        }
      },
      {
        id: 3,
        title: "Desain Silabus, Modul Pelatihan & Evaluasi 4 Level Kirkpatrick",
        duration: "25 Menit",
        concept: `### 1. Komponen Baku Silabus & Modul Pelatihan
Dokumen silabus pelatihan yang siap diaudit asesor BNSP wajib memuat:
- **Standar Kompetensi & Kode Unit**: Acuan SKKNI yang dirujuk.
- **Tujuan Pelatihan Spesifik**: Target kemampuan yang dikuasai peserta setelah lulus.
- **Materi Pokok & Sub-Topik**: Rincian bab isi materi yang sistematis dan kontekstual.
- **Metode Pembelajaran**: Ceramah interaktif, studi kasus, role-play, simulasi.
- **Alat & Media Belajar**: Proyektor, laptop, lembar kerja, video panduan.
- **Alokasi Waktu**: Jam pelajaran (JP) atau menit per sesi.
- **Instrumen Evaluasi**: Kriteria ketercapaian (indikator kelulusan).

### 2. Struktur Modul Pelatihan Minimal
1. Judul Modul & Kode Unit
2. Indikator Keberhasilan Pembelajaran
3. Paparan Isi Materi Teoritis & Konseptual
4. Latihan Terbimbing & Studi Kasus Kerja
5. Tugas Mandiri / Langkah Kerja Praktik
6. Lembar Penilaian / Kuis Evaluasi

### 3. Evaluasi Pelatihan 4 Level Kirkpatrick
1. **Level 1 - Reaction (Reaksi)**: Mengukur kepuasan peserta terhadap materi, instruktur, dan fasilitas kelas (via kuesioner kaji ulang di akhir kelas).
2. **Level 2 - Learning (Pembelajaran)**: Mengukur peningkatan pengetahuan dan keahlian peserta (dibuktikan dengan selisih skor *Pre-Test* vs *Post-Test*).
3. **Level 3 - Behavior (Perilaku Kerja)**: Mengukur apakah peserta menerapkan materi pelatihan dalam perilaku kerja harian (dievaluasi 3 bulan kemudian bersama atasan langsung).
4. **Level 4 - Results (Hasil Bisnis)**: Mengukur dampak pelatihan terhadap kinerja bisnis korporasi (peningkatan penjualan, penurunan komplain, penghematan biaya).`,
        framework: [
          "Susun draf silabus pelatihan mencakup tujuan, materi, metode, waktu, dan alat bantu.",
          "Kembangkan modul pelatihan lengkap dengan skenario latihan studi kasus.",
          "Bagikan kuesioner evaluasi Level 1 (Reaction) pada 15 menit sebelum kelas berakhir.",
          "Lakukan evaluasi Level 2 (Learning) menggunakan pre-test dan post-test.",
          "Kirim form evaluasi Level 3 (Behavior) kepada atasan peserta setelah 60-90 hari pasca pelatihan."
        ],
        caseStudy: `Tim HR mengadakan pelatihan 'Negosiasi Penjualan' untuk 20 orang staf sales. Hasil Level 1: Peserta sangat puas (skor 4,9/5). Hasil Level 2: Nilai post-test naik rata-rata 35 poin dibanding pre-test. Hasil Level 3 (evaluasi 90 hari): 18 dari 20 staf sales terbukti konsisten mempraktikkan teknik negosiasi baru saat bertemu klien. Hasil Level 4: Konversi penjualan divisi naik 24% senilai Rp 3,2 Miliar.`,
        examHighlight: `Asesor BNSP akan menguji: "Jelaskan 4 level evaluasi pelatihan model Kirkpatrick dan bagaimana cara Anda membuktikan evaluasi Level 3 (Behavior) di tempat kerja!"
Kunci Jawaban: Level 1 (Reaction), Level 2 (Learning), Level 3 (Behavior), Level 4 (Results). Evaluasi Level 3 dibuktikan dengan menyebarkan kuesioner pemantauan perilaku kerja kepada atasan langsung dan rekan kerja peserta 2-3 bulan setelah pelatihan untuk menilai apakah kompetensi baru benar-benar diterapkan dalam pekerjaan sehari-hari.`,
        quiz: {
          question: "Tingkatan evaluasi pelatihan model Kirkpatrick yang mengukur dampak kenaikan penjualan atau penurunan biaya operasional bagi perusahaan adalah:",
          options: [
            "Level 1: Reaction",
            "Level 2: Learning",
            "Level 3: Behavior",
            "Level 4: Results"
          ],
          correct: 3,
          explanation: "Level 4 (Results) mengukur dampak langsung program pelatihan terhadap pencapaian indikator kinerja kunci bisnis (Bottom-line Business Results)."
        }
      }
    ]
  },

  5: {
    id: 5,
    code: "CHCO-M5",
    name: "Strategic HC Alignment, Balanced Scorecard & Governance",
    skkniCode: "M.70SDM01.035.1",
    description: "Penyelarasan HC Strategy dengan corporate objective, perumusan HC Balanced Scorecard 4 perspektif, dan pengelolaan Human Capital Risk Register.",
    lessons: [
      {
        id: 1,
        title: "Cascading HC Strategy Map & Balanced Scorecard 4 Perspektif",
        duration: "25 Menit",
        concept: `### 1. Framework Balanced Scorecard (Kaplan & Norton)
Pimpinan HC bertugas menerjemahkan visi korporat ke dalam 4 perspektif keterkaitan sebab-akibat (Cause-and-Effect):
1. **Financial Perspective (Perspektif Keuangan)**:
   - Metrik: Human Capital ROI, Total Cost of Workforce (TCOW), Revenue per FTE, Profit per FTE.
2. **Customer / Stakeholder Perspective (Perspektif Pelanggan & Pemangku Kepentingan)**:
   - Metrik: Kepuasan dewan direksi, indeks keterikatan karyawan (eNPS), Employer Brand Attractiveness.
3. **Internal Process Perspective (Perspektif Proses Internal)**:
   - Metrik: Time-to-fill posisi strategis, akurasi pipeline suksesi kepemimpinan, otomatisasi layanan HRIS.
4. **Learning & Growth Perspective (Perspektif Pembelajaran & Pertumbuhan)**:
   - Metrik: Kesiapan kompetensi digital, retensi talenta terbaik (Top 10% Talent), rata-rata jam pelatihan per pekerja.

### 2. Logika Sebab-Akibat Peta Strategi (HC Strategy Map)
\`\`\`
[Financial]: Meningkatkan Laba EBITDA & Mengendalikan Rasio Biaya Gaji
     ↑ didorong oleh
[Customer]: Meningkatkan Kualitas Layanan & Net Promoter Score Pelanggan
     ↑ didorong oleh
[Internal Process]: Mempercepat Waktu Peluncuran Produk & SOP Tanpa Cacat
     ↑ didorong oleh
[Learning & Growth]: Meningkatkan Kapabilitas Digital & Mempertahankan Talenta Kunci
\`\`\``,
        framework: [
          "Bongkar target jangka panjang korporasi (3-5 tahun) dari rapat RUPS / BoD.",
          "Tarik garis sebab-akibat dari baris terbawah (Learning) menuju baris teratas (Financial).",
          "Tetapkan Leading Indicators (prediktor masa depan) dan Lagging Indicators (hasil masa lampau).",
          "Petakan inisiatif strategis terobosan (Strategic Initiatives) untuk menutup gap kapabilitas."
        ],
        caseStudy: `Sebuah grup retail menyusun HC Strategy Map. Hubungan sebab-akibat yang dirancang: 'Pelatihan Service Excellence kasir (Learning) -> Mempercepat antrean pembayaran kasir (Process) -> Meningkatkan kepuasan belanja konsumen (Customer) -> Menaikkan Average Basket Size 18% dan laba bersih (Financial)'. Seluruh dewan direksi memuji kejelasan peta strategi ini.`,
        examHighlight: `Asesor BNSP CHCO akan meminta Anda menjelaskan: "Bagaimana Anda menggambarkan Strategy Map Human Capital di perusahaan Anda sendiri?"
Kunci Jawaban: Gambarkan 4 perspektif Balanced Scorecard secara berjenjang dari bawah ke atas (Learning & Growth -> Internal Process -> Customer -> Financial) dan tunjukkan panah hubungan sebab-akibat yang membuktikan program pengembangan kompetensi berujung pada profitabilitas perusahaan.`,
        quiz: {
          question: "Dalam Human Capital Balanced Scorecard, indikator 'Kesiapan Pipeline Suksesi Kepemimpinan' tergolong ke dalam perspektif:",
          options: [
            "Financial Perspective",
            "Customer Perspective",
            "Internal Process / Learning & Growth Perspective",
            "Community Perspective"
          ],
          correct: 2,
          explanation: "Kesiapan talenta dan suksesi kepemimpinan merupakan fondasi utama penggerak pembelajaran dan proses internal dalam arsitektur Balanced Scorecard."
        }
      },
      {
        id: 2,
        title: "Human Capital Risk Register & Mitigasi Risiko Kritis C-Level",
        duration: "25 Menit",
        concept: `### 1. Manajemen Risiko Modal Insani (HC Risk Management)
CHCO bertanggung jawab mengidentifikasi, menilai, dan memitigasi risiko bisnis yang bersumber dari faktor ketenagakerjaan sebelum merugikan kelangsungan hidup perusahaan.

### 2. 5 Kategori Risiko Human Capital Kritis
1. **Succession Risk (Risiko Suksesi)**: Ketiadaan calon penerus siap pakai saat pejabat C-Level atau pemegang peran kunci (mission-critical) mendadak berhalangan tetap atau dibajak pesaing.
2. **Compliance & Legal Risk (Risiko Kepatuhan Hukum)**: Tuntutan pidana/perdata akibat pelanggaran norma K3 berat, sengketa upah lembur, atau pelanggaran UU Pelindungan Data Pribadi (UU PDP).
3. **Talent Scarcity Risk (Risiko Kelangkaan Bakat)**: Ketidakmampuan merekrut spesialis teknologi langka yang melumpuhkan inovasi produk baru.
4. **Reputational Risk (Risiko Reputasi)**: Skandal pelecehan di tempat kerja, kebocoran rahasia perusahaan oleh karyawan, atau ulasan buruk yang viral di media sosial.
5. **Labor Unrest Risk (Risiko Gejolak Perburuhan)**: Mogok kerja massal yang melumpuhkan operasional akibat kebuntuan perundingan PKB.

### 3. Matriks Penilaian Risiko (Risk Score)
$$\\text{Risk Score} = \\text{Likelihood (Kemungkinan: 1-5)} \\times \\text{Impact (Dampak: 1-5)}$$
- Skor 1 - 6: Risiko Rendah (Low / Hijau)
- Skor 8 - 12: Risiko Sedang (Medium / Kuning)
- Skor 15 - 25: Risiko Ekstrem (High / Merah) -> WAJIB memiliki rencana mitigasi tertulis dan diawasi berkala di Komite Audit Dewan Komisaris.`,
        framework: [
          "Lakukan inventarisasi risiko modal insani bersama seluruh kepala divisi.",
          "Tentukan skor Likelihood (1-5) dan Impact (1-5) untuk setiap potensi risiko.",
          "Tetapkan Risk Owner (penanggung jawab) dan susun langkah mitigasi pencegahan.",
          "Sajikan dokumen Human Capital Risk Register secara triwulan di hadapan Dewan Komisaris."
        ],
        caseStudy: `CHCO perusahaan farmasi menemukan bahwa seluruh formula obat paten hanya dikuasai oleh 1 orang Chief Scientist senior berusia 62 tahun tanpa ada wakil. Risiko suksesi ini dinilai berbobot ekstrem (Likelihood 4 x Impact 5 = 20). CHCO segera merancang mitigasi darurat: membentuk tim peneliti pendamping (shadowing), mendokumentasikan protokol formula ke dalam arsip rahasia berenkripsi, dan mengikat sang ilmuwan dengan kontrak retensi mentoring 3 tahun.`,
        examHighlight: `Asesor BNSP CHCO akan bertanya: "Bagaimana Anda merespon risiko jika salah satu posisi mission-critical di perusahaan Anda tidak memiliki suksesor sama sekali?"
Kunci Jawaban: Masukkan ke dalam Risk Register kategori High Risk, segera lakukan talent mapping untuk mengidentifikasi kandidat berpotensi terdekat, susun Accelerated Development Plan (pendampingan intensif & rotasi), serta siapkan opsi kontinjensi executive search jika talenta internal belum siap.`,
        quiz: {
          question: "Risiko operasional dan strategis yang muncul akibat tidak adanya kandidat pengganti saat pejabat eksekutif kunci mengundurkan diri secara mendadak disebut:",
          options: [
            "Market Risk",
            "Succession Risk (Risiko Suksesi)",
            "Credit Risk",
            "Liquidity Risk"
          ],
          correct: 1,
          explanation: "Succession Risk adalah risiko kelumpuhan operasional atau kepemimpinan akibat tidak tersedianya pipeline suksesor siap pakai untuk posisi kunci."
        }
      }
    ]
  },

  6: {
    id: 6,
    code: "CHCO-M6",
    name: "Persiapan Uji Kompetensi & Asesmen Portofolio BNSP CHCO",
    skkniCode: "ASSESS-CHCO-FINAL",
    description: "Verifikasi dokumen portofolio wajib CHCO (SOP MSDM, Berkas Rekrutmen & BEI, TNA/Modul Pelatihan, HCM Strategy), simulasi wawancara dewan asesor, dan tips kelulusan.",
    lessons: [
      {
        id: 1,
        title: "Verifikasi Portofolio Wajib CHCO Berdasarkan Standar VATM",
        duration: "20 Menit",
        concept: `### 1. Prinsip Pembuktian Portofolio Asesor BNSP
Asesor BNSP menggunakan acuan VATM untuk memastikan Anda layak direkomendasikan KOMPETEN:
- **Valid**: Dokumen membuktikan kompetensi manajerial level 7 KKNI (CHCO).
- **Asli**: Dokumen disahkan dengan kop surat resmi, stempel perusahaan, dan tanda tangan sah.
- **Terkini**: Bukti kinerja dalam kurun waktu **3 tahun terakhir**.
- **Memadai**: Menunjukkan keseluruhan siklus kepemimpinan dari analisis, perencanaan, eksekusi, hingga evaluasi.

### 2. Dokumen Bukti Portofolio Wajib Skema CHCO
1. **Unit HRA01 (Pengelolaan HRM & HCM)**: Dokumen Human Capital Strategy / Roadmap Pengembangan Organisasi yang selaras dengan rencana bisnis perusahaan.
2. **Unit 013 (SOP MSDM)**: Minimal 1 Berkas Dokumen SOP MSDM lengkap yang memuat elemen atribut (pengesahan Direksi), elemen utama, form catatan mutu, dan flowchart standar.
3. **Unit 017 (Melaksanakan Rekrutmen)**: Berkas lengkap proses rekrutmen: Dokumen Man Power Planning (MPP), Iklan Lowongan, Panduan Form Wawancara BEI Berbasis STAR, Lembar Skoring Tertimbang, dan Surat Penawaran Kerja (Offering Letter).
4. **Unit 033 (Pembelajaran & Pengembangan)**: Dokumen Analisis Kebutuhan Pelatihan (TNA), Silabus Pelatihan Resmi, Draf Modul Pelatihan, dan Laporan Hasil Evaluasi Pelatihan (minimal Level 1 & Level 2).`,
        framework: [
          "Kumpulkan seluruh berkas portofolio asli dari implementasi nyata di tempat kerja.",
          "Periksa kelengkapan tanda tangan pengesahan dan cap stempel legal perusahaan.",
          "Samarkan data rahasia/sensitif finansial pribadi dengan tetap mempertahankan struktur dokumen.",
          "Susun rapi ke dalam folder asesmen sesuai urutan nomor unit kompetensi SKKNI."
        ],
        caseStudy: `Seorang kandidat CHCO membawa dokumen presentasi strategi yang sangat bagus, namun asesor meminta bukti implementasi fisik di lapangan. Kandidat menunjukkan dokumen SOP Rekrutmen yang bertanda tangan basah Direktur Utama, formulir BEI yang pernah ia gunakan saat mewawancarai calon General Manager, dan laporan TNA tahunan. Dewan Asesor langsung mengonfirmasi validitas bukti dan menyatakan berkas portofolio MEMADAI.`,
        examHighlight: `Asesor BNSP akan memeriksa: "Apakah Anda sendiri yang merancang dokumen SOP dan instrumen wawancara BEI ini, ataukah dibuat oleh konsultan eksternal?"
Kunci Jawaban: Tegaskan bahwa Anda memimpin langsung tim perumus internal di perusahaan, jelaskan latar belakang mengapa SOP tersebut disusun, dan paparkan bagaimana Anda mengawal penerapannya hingga disahkan oleh Direksi.`,
        quiz: {
          question: "Salah satu bukti portofolio wajib untuk unit kompetensi Melaksanakan Rekrutmen (SKKNI M.70SDM01.017.2) pada tingkat CHCO adalah:",
          options: [
            "Kuitansi pembelian makan siang pelamar kerja",
            "Instrumen formulir wawancara perilaku (BEI) berbasis STAR dan lembar penilaian skoring tertimbang",
            "Tiket pesawat perjalanan dinas pribadi",
            "Daftar nomor kontak seluruh pelamar yang ditolak"
          ],
          correct: 1,
          explanation: "Formulir panduan wawancara BEI berbasis STAR dan matriks skoring tertimbang adalah bukti otentik penguasaan metode seleksi objektif berstandar SKKNI."
        }
      },
      {
        id: 2,
        title: "Simulasi Presentasi Strategis & Wawancara Dewan Asesor BNSP",
        duration: "25 Menit",
        concept: `### 1. Pola Wawancara Uji Kompetensi CHCO
Pada tingkatan Chief Human Capital Officer, asesor tidak hanya menanyakan 'apa definisinya', melainkan menguji **kapabilitas pengambilan keputusan strategis (Strategic Decision Making)**:
- Bagaimana Anda meyakinkan Dewan Direksi (BoD)?
- Bagaimana Anda menyelesaikan benturan kepentingan antara efisiensi biaya dan kesejahteraan pekerja?
- Bagaimana kepemimpinan Anda saat menghadapi krisis ketenagakerjaan?

### 2. Pertanyaan Uji Lisan Dewan Asesor Terpopuler & Jawaban Tepat
1. *Tanya*: "Bagaimana cara Anda menyelaraskan strategi modal insani dengan target EBITDA korporasi?"
   - *Jawab*: "Melalui perumusan HC Strategy Map berbasis Balanced Scorecard: menghubungkan program re-skilling karyawan dan retensi talenta kunci dengan percepatan proses bisnis dan kenaikan laba operasional."
2. *Tanya*: "Jika perusahaan mengalami penurunan laba tajam, program HC apa yang akan Anda pertahankan dan apa yang Anda pangkas?"
   - *Jawab*: "Saya akan menunda inisiatif seremonial non-esensial, namun tetap mempertahankan program pelatihan kompetensi inti dan skema retensi talenta kunci pemegang peran kritis agar perusahaan tidak kehilangan kapabilitas bersaing."
3. *Tanya*: "Bagaimana Anda memastikan prosedur kerja dalam SOP MSDM benar-benar dipatuhi dan tidak dilanggar oleh manajer divisi lain?"
   - *Jawab*: "Melalui sosialisasi intensif, integrasi SOP ke dalam penilaian kinerja KPI manajer, serta audit kepatuhan personalia berkala."
4. *Tanya*: "Bagaimana Anda membuktikan keberhasilan program pelatihan kepada dewan komisaris?"
   - *Jawab*: "Menggunakan evaluasi Level 3 (perubahan perilaku kerja terukur) dan Level 4 Kirkpatrick (dampak langsung terhadap produktivitas dan metrik bisnis), dilengkapi kalkulasi efisiensi biaya."`,
        framework: [
          "Buka sesi asesmen dengan memperkenalkan profil singkat peran manajerial Anda.",
          "Jawab pertanyaan asesor secara terstruktur menggunakan alur: Konsep -> Regulasi/Standar -> Praktik Nyata di Tempat Kerja.",
          "Tunjukkan dokumen portofolio pendukung tepat saat asesor menanyakan topik terkait.",
          "Pertahankan sikap tenang, lugas, percaya diri, dan solutif layaknya seorang eksekutif C-Level."
        ],
        caseStudy: `Saat wawancara, dewan asesor memberikan studi kasus hipotetis: 'Perusahaan Anda berencana mengakuisisi kompetitor, apa langkah awal CHCO dalam 30 hari pertama?' Asesi menjawab: 'Melakukan Talent & Capability Audit pada perusahaan target, memetakan duplikasi posisi struktural, menyusun strategi komunikasi budaya kerja untuk mencegah eksodus talenta kunci, dan merancang mitigasi risiko legal pesangon'. Dewan Asesor merekomendasikan asesi lulus dengan predikat 'Sangat Memuaskan'.`,
        examHighlight: `Kunci Kelulusan Uji BNSP CHCO: Bicaralah sebagai Strategic Partner bisnis, bukan sekadar pelaksana administrasi. Gunakan terminologi profesional seperti EBITDA, HC ROI, Capability Gap, 9-Box Matrix, ADDIE Model, dan Good Governance.`,
        quiz: {
          question: "Saat dewan asesor BNSP menguji kemampuan Anda dalam mengelola risiko kekurangan talenta kritis bagi ekspansi perusahaan di masa depan, pendekatan terbaik yang harus disampaikan adalah:",
          options: [
            "Pasrah menunggu pelamar melamar secara sukarela saat lowongan dibuka nanti",
            "Membangun arsitektur Strategic Workforce Planning (SWP), pipeline suksesi terencana, dan program percepatan pengembangan talenta internal (IDP)",
            "Menutup rencana ekspansi agar tidak perlu menambah karyawan",
            "Menyerahkan seluruh tanggung jawab rekrutmen kepada staf junior"
          ],
          correct: 1,
          explanation: "Strategic Workforce Planning dan program suksesi internal terencana merupakan bukti kompetensi tertinggi seorang CHCO dalam menjamin keberlanjutan talenta organisasi."
        }
      }
    ]
  }
};
