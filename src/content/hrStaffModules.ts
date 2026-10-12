export type LessonContent = {
  id: number;
  title: string;
  duration: string;
  concept: string;
  framework: string[];
  caseStudy: string;
  examHighlight: string;
  quiz: {
    question: string;
    options: string[];
    correct: number;
    explanation: string;
  };
};

export type ModuleCurriculum = {
  id: number;
  code: string;
  name: string;
  skkniCode: string;
  description: string;
  lessons: LessonContent[];
};

export const HR_STAFF_CURRICULUM: Record<number, ModuleCurriculum> = {
  1: {
    id: 1,
    code: "HRS-M1",
    name: "Mengelola HRM dan Human Capital Management",
    skkniCode: "M.70SDM01.001.2.HRA01",
    description: "Memahami perbedaan mendasar HRM vs HCM, prinsip integrasi SPK ke PSR, 5 siklus inti HR, dan dampaknya terhadap produktivitas bisnis.",
    lessons: [
      {
        id: 1,
        title: "Perbedaan Mendasar HRM vs HCM: Fondasi SPK ke PSR",
        duration: "15 Menit",
        concept: `### 1. Hakikat HRM vs HCM
- **HRM (Human Resources Management)**: Pendekatan administratif dan prosedural untuk mengelola SDM melalui penyusunan **SPK (Sistim, Proses, dan Kebijakan)**. Berfokus pada keteraturan, operasional harian, dan kepatuhan hukum ketenagakerjaan.
- **HCM (Human Capital Management)**: Pendekatan strategis yang memandang manusia sebagai aset investasi bernilai tinggi melalui **PSR (People, Skill, dan Role)**. Berfokus pada pengembangan kapabilitas, retensi talenta, dan memaksimalkan **Return on Investment (ROI)** modal insani.

### 2. Prinsip Integrasi Emas
> *"HRM adalah fondasi keteraturan, sedangkan HCM adalah pengungkit keunggulan bisnis. Organisasi tidak dapat melompat ke HCM tanpa menata sistem HRM terlebih dahulu."*

| Dimensi | Human Resource Management (HRM) | Human Capital Management (HCM) |
| :--- | :--- | :--- |
| **Fokus Utama** | Sistem, Proses & Kebijakan (SPK) | People, Skill & Role (PSR) |
| **Peran Utama** | Menjaga kepatuhan & keteraturan | Menciptakan keunggulan & laba |
| **Sudut Pandang SDM** | Faktor produksi / Pos biaya operasional | Aset bernilai ekonomis / Investasi masa depan |
| **Contoh Praktik** | Menjalankan payroll & absensi tepat waktu | Merancang skema retensi talenta kunci & suksesi |`,
        framework: [
          "Membangun fondasi SPK: susun SOP rekrutmen, kebijakan upah, dan peraturan kerja.",
          "Mengintegrasikan ke PSR: petakan kompetensi karyawan (Skill) pada posisi strategis (Role).",
          "Menerapkan sinergi: rekrutmen berbasis kompetensi masa depan, penilaian kinerja dikaitkan dengan jalur karir.",
          "Mengevaluasi hasil: pantau peningkatan produktivitas kerja dan kepuasan karyawan."
        ],
        caseStudy: `PT Surya Mandiri memiliki sistem absensi dan penggajian manual yang sering telat, namun manajemen terburu-buru ingin membuat program 'Talent Academy' yang mahal. Akibatnya, karyawan protes karena gaji salah hitung sementara program pelatihan diabaikan. HR Staff menyarankan untuk memperbaiki dulu SOP penggajian dan sistem absensi digital (HRM). Setelah administrasi dasar tertib dan akurat, program pengembangan karir (HCM) baru diluncurkan dan disambut positif oleh seluruh karyawan.`,
        examHighlight: `Asesor BNSP akan menguji: "Mengapa perusahaan tidak boleh langsung menerapkan HCM tanpa membenahi HRM terlebih dahulu?" 
Kunci Jawaban: HRM adalah fondasi sistem, proses, dan kepatuhan (SPK). Tanpa sistem administrasi yang tertib, program HCM (people & skill) hanya akan menjadi wacana dan rentan memicu ketidakpuasan dasar karyawan.`,
        quiz: {
          question: "Pernyataan yang paling tepat mengenai hubungan antara HRM dan HCM adalah:",
          options: [
            "HCM menggantikan seluruh fungsi HRM sehingga administrasi tidak lagi diperlukan",
            "HRM adalah fondasi keteraturan sistem & kepatuhan (SPK), sedangkan HCM adalah pengungkit nilai strategis manusia (PSR)",
            "HRM hanya berlaku untuk perusahaan manufaktur, sedangkan HCM untuk perusahaan teknologi",
            "HRM berfokus pada investasi manusia, sedangkan HCM berfokus pada pemotongan biaya personalia"
          ],
          correct: 1,
          explanation: "HRM bertindak sebagai fondasi (Sistim, Proses, Kebijakan) untuk keteraturan, sedangkan HCM mengungkit nilai kompetensi manusia (People, Skill, Role) untuk pertumbuhan bisnis."
        }
      },
      {
        id: 2,
        title: "5 Siklus Inti HR & Dampak Nyata pada Kinerja Bisnis",
        duration: "20 Menit",
        concept: `### 1. 5 Siklus Inti HR (Core HR Cycle)
Seluruh aktivitas divisi HR berputar pada 5 siklus berkesinambungan:
1. **Recruitment, Selection & Retention**: Menarik pelamar yang tepat, memilih kandidat terbaik, dan mempertahankan pekerja berkinerja tinggi.
2. **Talent Management**: Mengidentifikasi bakat, potensi kepemimpinan, dan mengelola talent pool.
3. **Performance Management**: Menetapkan sasaran kerja, evaluasi berkala, dan umpan balik pembinaan objektif.
4. **Career Management**: Perencanaan jenjang karir, mutasi, promosi, dan suksesi posisi kunci.
5. **Reward Management**: Pemberian kompensasi adil, insentif, tunjangan, dan apresiasi non-finansial.

### 2. Dampak HR pada Kinerja Bisnis
- **Employee Productivity**: Standar kerja yang jelas meningkatkan output per pekerja.
- **Organizational Culture**: Menumbuhkan lingkungan kerja yang positif, kolaboratif, dan transparan.
- **Workforce Agility**: Tenaga kerja cepat beradaptasi terhadap perubahan target bisnis dan teknologi.
- **Business Result**: Menurunkan angka turnover karyawan dan menghemat biaya rekrutmen ulang.`,
        framework: [
          "Petakan target bisnis perusahaan (misal: target penjualan naik 20%).",
          "Tentukan kebutuhan SDM pada 5 pilar siklus HR pendukung target tersebut.",
          "Laksanakan pemenuhan SDM dan pantau indikator kinerja (KPI/target bulanan).",
          "Lakukan evaluasi triwulan: tinjau kepuasan kerja dan perbaikan proses HR."
        ],
        caseStudy: `Di sebuah perusahaan retail, pergantian kasir dan pramuniaga mencapai 40% per tahun. Manajemen HR menata ulang 5 siklus HR: memperbaiki kriteria seleksi (Recruitment), memberikan pelatihan pelayanan ramah (Talent), menetapkan bonus kehadiran bulanan (Reward), dan membuka jalur promosi menjadi Supervisor Toko (Career). Dalam kurun waktu 6 bulan, turnover turun drastis ke 12% dan omzet toko naik 15%.`,
        examHighlight: `Asesor BNSP sering menanyakan: "Sebutkan 5 fungsi inti dalam HR Management Cycle dan bagaimana siklus tersebut terhubung dengan strategi perusahaan!" 
Kunci Jawaban: 1) Recruitment & Retention, 2) Talent Management, 3) Performance Management, 4) Career Management, 5) Reward Management. Seluruhnya berawal dari Visi-Misi & Strategi Bisnis untuk menghasilkan Business Results.`,
        quiz: {
          question: "Tahapan dalam siklus Human Capital Strategy yang berfokus pada menjaga motivasi dan keterikatan kerja karyawan adalah:",
          options: [
            "Attracting",
            "Planning",
            "Engaging & Motivating",
            "Sourcing"
          ],
          correct: 2,
          explanation: "Siklus Engaging & Motivating bertujuan memastikan karyawan tetap memiliki motivasi tinggi, komitmen kerja, dan keterikatan (engagement) kuat terhadap perusahaan."
        }
      }
    ]
  },

  2: {
    id: 2,
    code: "HRS-M2",
    name: "Menyusun Analisa & Uraian Jabatan",
    skkniCode: "M.70SDM01.010.2",
    description: "Pengumpulan data jabatan metode 5W+2H, teknik menulis Job Description dan Job Specification, verifikasi SK Direksi, dan penanganan masalah jabatan.",
    lessons: [
      {
        id: 1,
        title: "Metodologi Pengumpulan Data Jabatan & Rumus 5W + 2H",
        duration: "20 Menit",
        concept: `### 1. Hakikat Analisis Jabatan
Analisis Jabatan adalah proses sistematis untuk mengumpulkan, mempelajari, dan menetapkan informasi mengenai tugas, tanggung jawab, wewenang, dan syarat kualifikasi suatu posisi.

### 2. Rumus Pertanyaan 5W + 2H Analisis Jabatan
Untuk menggali seluruh informasi jabatan tanpa ada bagian yang terlewat, gunakan panduan praktis berikut:
- **What (Apa)**: Apa nama jabatannya? Apa tugas pokok, tanggung jawab, dan alat kerja yang dipakai?
- **Why (Mengapa)**: Mengapa pekerjaan ini harus dilakukan bagi unit kerja atau organisasi?
- **Where (Di mana)**: Di mana letak posisi dalam struktur organisasi? Di mana lokasi fisik pekerjaannya?
- **When (Kapan)**: Kapan tugas dikerjakan? Harian, mingguan, bulanan, atau insidentil?
- **Who (Siapa)**: Siapa yang melapor ke jabatan ini? Kepada siapa pemegang jabatan melapor? Kualifikasi siapa yang dibutuhkan?
- **How (Bagaimana)**: Bagaimana tata cara, metode, atau SOP dalam menyelesaikan tugas tersebut?
- **How Much / Long (Berapa Banyak/Lama)**: Berapa target output dan standar waktu penyelesaiannya?

### 3. 6 Metode Pengumpulan Data Jabatan
1. **Wawancara Langsung**: Bertanya kepada pemegang jabatan dan atasan langsung.
2. **Kuesioner Terstruktur**: Mengisi daftar formulir pertanyaan jabatan.
3. **Observasi Langsung**: Mengamati langsung pekerja saat bertugas di lapangan/meja kerja.
4. **Catatan Harian (Employee Log)**: Karyawan mencatat seluruh aktivitas kerja setiap hari selama 1-2 minggu.
5. **Diskusi Panel Ahli**: Mengundang pakar fungsional untuk merumuskan posisi baru.
6. **Kombinasi**: Menggabungkan kuesioner dan wawancara konfirmasi (paling direkomendasikan).`,
        framework: [
          "Siapkan kuesioner atau pedoman wawancara berbasis 5W+2H.",
          "Pilih metode pengumpulan data yang paling efektif sesuai jenis pekerjaan.",
          "Jadwalkan sesi wawancara/pengisian data bersama pemegang jabatan dan atasan.",
          "Verifikasi kesesuaian data hasil wawancara dengan struktur organisasi terkini."
        ],
        caseStudy: `Sebuah pabrik makanan membuka posisi baru 'Petugas Kontrol Sanitasi'. HR Staff melakukan wawancara langsung pada atasan produksi dan membuat formulir kuesioner 5W+2H untuk operator kebersihan. Hasil analisis mengungkap bahwa posisi ini bertugas menguji bakteri setiap pagi sebelum mesin berjalan (When & What), menggunakan kit uji lab (How), agar produk steril dan lolos audit BPOM (Why).`,
        examHighlight: `Asesor BNSP akan bertanya: "Bagaimana cara Anda mengumpulkan data jabatan jika posisi tersebut merupakan posisi yang benar-benar baru di perusahaan?"
Kunci Jawaban: Gunakan metode diskusi panel ahli/atasan unit kerja terkait dikombinasikan dengan benchmarking uraian tugas posisi sejenis di industri yang sama berbasis panduan 5W+2H.`,
        quiz: {
          question: "Dalam prinsip 5W + 2H analisis jabatan, pertanyaan yang menggali tujuan keberadaan tugas dan hasil yang ingin dicapai adalah:",
          options: [
            "What",
            "Why",
            "Where",
            "How"
          ],
          correct: 1,
          explanation: "Pertanyaan 'Why' bertujuan menggali alasan fundamental mengapa tugas tersebut harus ada dan apa dampak hasil yang diharapkan bagi perusahaan."
        }
      },
      {
        id: 2,
        title: "Teknik Penulisan Uraian Jabatan (Jobdesc) & Spesifikasi (Jobspec)",
        duration: "25 Menit",
        concept: `### 1. Output Utama Analisis Jabatan
Analisis Jabatan menghasilkan 2 dokumen kunci:
1. **Uraian Jabatan (Job Description)**: Berfokus pada **PEKERJAAN** (tugas, fungsi, tanggung jawab, wewenang, dan KPI). Digunakan agar pemegang jabatan paham cara kerja dan dasar penilaian kinerja.
2. **Spesifikasi Jabatan (Job Specification)**: Berfokus pada **ORANG** (syarat pendidikan, pengalaman kerja, keahlian teknis, soft skills, dan kondisi fisik). Digunakan sebagai dasar seleksi rekrutmen dan promosi.

### 2. Rumus Standar Menulis Uraian Tugas
Setiap butir uraian tugas wajib disusun dengan rumus:
\`\`\`
[KATA KERJA AKTIF 'ME-'] + [OBJEK KERJA / WHAT] + [CARA / PEDOMAN / HOW] + [TUJUAN / HASIL / WHY]
\`\`\`
- **Contoh Benar**: *"Memverifikasi form klaim rawat jalan (What) berdasarkan SOP Asuransi (How) guna memastikan keakuratan pembayaran manfaat (Why)."*
- **Contoh Salah**: *"Urusan klaim asuransi karyawan"* (tidak jelas tindakan, cara, dan tujuannya).

### 3. Komponen Dokumen Analisis Jabatan
- **Identitas Jabatan**: Nama jabatan, kode jabatan, departemen/unit kerja, atasan langsung, bawahan langsung.
- **Ikhtisar Jabatan**: Ringkasan singkat 2-3 kalimat mengenai tujuan utama posisi.
- **Uraian Tugas Pokok**: Rincian kegiatan kerja berurutan dari hulu ke hilir.
- **Tanggung Jawab & Wewenang**: Batasan otorisasi pengeluaran dana, persetujuan dokumen, dan kerahasiaan data.
- **Spesifikasi Jabatan**: Pendidikan min, jurusan, sertifikasi, tahun pengalaman, alat bantu kerja, dan kondisi lingkungan kerja.`,
        framework: [
          "Tuliskan identitas jabatan dan buat ikhtisar jabatan dalam 1 paragraf padat.",
          "Rumuskan 5-8 tugas pokok menggunakan pola: Kata Kerja Aktif + Objek + Cara + Tujuan.",
          "Tentukan batasan wewenang (misal: otorisasi pengeluaran anggaran s.d. Rp 5 Juta).",
          "Tetapkan spesifikasi minimal pelamar (pendidikan, pengalaman, hard/soft competency)."
        ],
        caseStudy: `HR Staff menulis uraian tugas untuk Admin Gudang: 'Mencatat mutasi barang keluar-masuk pada sistem ERP Gudang setiap akhir shift kerja sesuai SOP Logistik agar data stok fisik dan sistem selalu akurat 100%'. Karena uraian tugas sangat jelas dan terukur, saat evaluasi kinerja akhir tahun tidak terjadi perdebatan antara karyawan dan atasan.`,
        examHighlight: `Asesor BNSP akan meminta Anda membedakan Job Description vs Job Specification dan meminta Anda menulis 1 butir uraian tugas yang benar di lembar kerja uji kompetensi.
Kunci Jawaban: Tulis dengan awalan kata kerja aktif berawalan "me-", cantumkan objek kerja, cara/alat kerja, dan akhiri dengan tujuan hasil akhir.`,
        quiz: {
          question: "Penulisan butir uraian tugas yang memenuhi kaidah baku SKKNI MSDM adalah:",
          options: [
            "Bertanggung jawab terhadap kelancaran administrasi kantor",
            "Merekapitulasi absensi harian karyawan menggunakan sistem HRIS sesuai SOP untuk keperluan perhitungan lembur bulanan",
            "Melakukan hal-hal yang diperintahkan oleh atasan langsung",
            "Mengurusi pengarsipan berkas personalia"
          ],
          correct: 1,
          explanation: "Pilihan tersebut menggunakan kata kerja aktif terukur ('Merekapitulasi'), objek ('absensi harian'), cara/alat ('sistem HRIS sesuai SOP'), dan tujuan ('keperluan perhitungan lembur')."
        }
      },
      {
        id: 3,
        title: "Penetapan SK Direksi, Audit Jabatan & Penyelesaian Masalah",
        duration: "20 Menit",
        concept: `### 1. Prosedur Penetapan Uraian Jabatan
Dokumen uraian jabatan baru memiliki kekuatan hukum dan operasional apabila telah disahkan secara resmi:
1. **Dibuat Oleh**: Tim Analis Jabatan / HR Staff yang menyusun draf.
2. **Diperiksa Oleh**: Manajer Unit Kerja terkait (memastikan akurasi teknis tugas).
3. **Disetujui & Disahkan**: Direktur HR atau Direktur Utama (dalam bentuk Surat Keputusan / SK Direksi).
4. **Atribut Dokumen**: Memiliki Nomor Dokumen, Tanggal Berlaku, Status Revisi, dan Halaman.

### 2. Temuan & Masalah Umum Analis Jabatan
Saat melakukan audit jabatan berkala, HR Staff sering menemukan anomali:
- **Floating Tasks (Tugas Tanpa Pemilik)**: Tugas penting yang tidak tercantum di jobdesc posisi mana pun sehingga sering terbengkalai.
- **Duplikasi Tugas**: Dua posisi berbeda mengerjakan input data yang sama persis sehingga boros waktu.
- **Tugas Tidak Relevan**: Karyawan diberi tugas pribadi atasan yang menyimpang dari misi jabatan.
- **Uraian Jabatan Kedaluwarsa**: Jobdesc tidak diperbarui padahal teknologi/sistem kerja sudah beralih ke digital.`,
        framework: [
          "Lakukan audit berkala uraian jabatan minimal 1 tahun sekali atau saat ada restrukturisasi.",
          "Identifikasi adanya duplikasi tugas atau floating task antar unit kerja.",
          "Revisi draf dokumen uraian jabatan dan minta paraf verifikasi pimpinan unit.",
          "Ajukan pengesahan SK resmi kepada Direksi dan distribusikan kepada pemegang jabatan."
        ],
        caseStudy: `Dalam audit tahunan di PT Berkat Logistik, ditemukan bahwa proses pengecekan faktur vendor dilakukan ganda oleh Admin Purchasing dan Staf Accounting. Akibatnya terjadi pemborosan 15 jam kerja per minggu. Tim HR merevisi uraian jabatan Admin Purchasing untuk fokus pada penerimaan barang dan menyerahkan verifikasi faktur sepenuhnya ke Accounting, disahkan melalui SK Direksi revisi jobdesc.`,
        examHighlight: `Asesor BNSP akan menanyakan: "Siapa pihak yang berwenang mengesahkan dokumen uraian jabatan agar berlaku mengikat di perusahaan?"
Kunci Jawaban: Dokumen uraian jabatan diperiksa oleh Manajer Departemen pengguna, diverifikasi oleh Manajer HR, dan disahkan oleh Anggota Direksi / Direktur HR / Direktur Utama melalui Surat Keputusan (SK).`,
        quiz: {
          question: "Kondisi di mana terdapat tugas operasional penting perusahaan yang tidak tercantum dalam uraian jabatan posisi mana pun disebut:",
          options: [
            "Duplikasi tugas",
            "Floating tasks (tugas menggantung/tanpa pemilik)",
            "Delayering jabatan",
            "Job enrichment"
          ],
          correct: 1,
          explanation: "Floating tasks adalah tugas yang tidak masuk dalam jobdesc siapa pun sehingga berisiko tidak dikerjakan atau saling melempar tanggung jawab."
        }
      }
    ]
  },

  3: {
    id: 3,
    code: "HRS-M3",
    name: "Melakukan Administrasi Jaminan Sosial",
    skkniCode: "M.70SDM01.058.2",
    description: "Pengelolaan BPJS Kesehatan & BPJS Ketenagakerjaan (5 program), perhitungan persentase iuran, portal SIPP & New e-DABU, dan prosedur klaim.",
    lessons: [
      {
        id: 1,
        title: "Regulasi Jaminan Sosial & Administrasi BPJS Kesehatan",
        duration: "20 Menit",
        concept: `### 1. Landasan Hukum & Kewajiban Perusahaan
- **Regulasi**: UUD 1945 Pasal 28H(3), UU No 40/2004 (SJSN), UU No 24/2011 (BPJS), dan UU Cipta Kerja.
- **Kewajiban**: Setiap perusahaan yang mempekerjakan **10 orang atau lebih**, atau membayarkan total upah minimal **Rp 1 Juta/bulan**, WAJIB mendaftarkan seluruh pekerjanya ke program jaminan sosial.
- **Sanksi Ketidakpatuhan**: Teguran tertulis, denda administratif, hingga sanksi tidak mendapatkan pelayanan publik tertentu (izin usaha, tender proyek, IMB, dan izin TKA).

### 2. Ketentuan Iuran BPJS Kesehatan (Pekerja Penerima Upah / PPU)
- **Total Iuran**: **5% dari Upah Bulanan**.
  * **4%** ditanggung oleh Perusahaan (sebagai tunjangan BPJS).
  * **1%** dipotong dari Gaji Pekerja.
- **Batas Upah Perhitungan**:
  * Batas Terendah: Upah Minimum Kabupaten/Kota (UMK).
  * Batas Tertinggi (Plafon): **Rp 12.000.000,-** per bulan.
- **Cakupan Kepesertaan**: Menanggung **5 orang** (pekerja, istri/suami sah, dan 3 orang anak). Anak ke-4 dst dapat didaftarkan dengan tambahan iuran 1% per orang dipotong dari gaji karyawan.
- **Hak Kelas Kamar Rawat Inap**:
  * Upah s.d. Rp 4.000.000,- = Hak Ruang Perawatan **Kelas II**.
  * Upah di atas Rp 4.000.000,- = Hak Ruang Perawatan **Kelas I**.

### 3. Alur Pelayanan Medis Berjenjang & Hak Pekerja PHK
- Alur: Pasien wajib berobat ke **FKTP (Fasilitas Kesehatan Tingkat Pertama)** seperti Puskesmas/Klinik Pratama/Dokter Keluarga. Jika perlu tindakan spesialis, FKTP menerbitkan rujukan ke **FKRTL (Rumah Sakit)**. 
- *Pengecualian*: Kondisi gawat darurat (Emergency) dapat langsung ditangani di IGD Rumah Sakit mana pun tanpa rujukan.
- *Manfaat PHK*: Pekerja yang terkena PHK tetap berhak atas jaminan kesehatan Kelas III selama **maksimal 6 bulan** tanpa membayar iuran.`,
        framework: [
          "Daftarkan Badan Usaha secara online melalui portal resmi BPJS Kesehatan.",
          "Input data karyawan dan keluarga (KK, KTP, Faskes 1) melalui aplikasi New e-DABU.",
          "Cek tagihan iuran bulanan dan lakukan pembayaran via Virtual Account Bank sebelum tanggal 10.",
          "Cetak kartu e-ID peserta secara mandiri untuk didistribusikan kepada karyawan."
        ],
        caseStudy: `Karyawan PT Nusantara memiliki gaji pokok Rp 15.000.000,-. HR Staff menghitung potongan BPJS Kesehatan: karena batas maksimal perhitungan adalah Rp 12.000.000,-, maka potongan gaji karyawan adalah 1% x Rp 12.000.000 = Rp 120.000,- (bukan 1% x 15 jt). Perusahaan menanggung 4% x Rp 12.000.000 = Rp 480.000,-. Hak kamar rawat karyawan tersebut adalah Kelas I.`,
        examHighlight: `Asesor BNSP sering menguji perhitungan: "Berapa batas upah tertinggi perhitungan BPJS Kesehatan dan berapa persentase potongan pekerja?"
Kunci Jawaban: Batas upah tertinggi adalah Rp 12.000.000,- per bulan. Potongan pekerja adalah 1%, dan tanggungan perusahaan adalah 4% (total 5%).`,
        quiz: {
          question: "Seorang karyawan memiliki gaji Rp 8.000.000 per bulan dan memiliki istri serta 2 anak. Berapakah potongan iuran BPJS Kesehatan dari gaji karyawan tersebut?",
          options: [
            "Rp 400.000",
            "Rp 320.000",
            "Rp 80.000",
            "Rp 120.000"
          ],
          correct: 2,
          explanation: "Potongan pekerja adalah 1% dari upah: 1% x Rp 8.000.000 = Rp 80.000,-. Perlindungan ini sudah otomatis menanggung pekerja, pasangan, dan 2 anak (total 4 orang, di bawah plafon 5 orang)."
        }
      },
      {
        id: 2,
        title: "5 Program BPJS Ketenagakerjaan: Iuran & Manfaat Perlindungan",
        duration: "25 Menit",
        concept: `### 1. Ringkasan 5 Program BPJS Ketenagakerjaan

| Program | Beban Perusahaan | Beban Pekerja | Total Iuran | Manfaat Utama |
| :--- | :--- | :--- | :--- | :--- |
| **JKK** (Kecelakaan Kerja) | **0.24% - 1.74%** | **0%** | Sesuai Tingkat Risiko | Pengobatan tanpa batas plafon, STMB 100% (th 1), santunan cacat/meninggal kecelakaan kerja (48x upah), beasiswa 2 anak s.d. Rp 174 Jt |
| **JKM** (Kematian Biasa) | **0.30%** | **0%** | **0.30%** | Santunan total Rp 42 Juta bagi ahli waris pekerja yang meninggal bukan karena kecelakaan kerja, beasiswa 2 anak s.d. Rp 174 Jt (masa iur min 3 th) |
| **JHT** (Hari Tua) | **3.70%** | **2.00%** | **5.70%** | Tabungan hari tua + hasil pengembangan dana, dicairkan saat usia 55 th, cacat tetap, meninggal dunia, resign, atau PHK |
| **JP** (Pensiun) | **2.00%** | **1.00%** | **3.00%** | Uang tunai bulanan berkala saat memasuki usia pensiun untuk mempertahankan derajat hidup layak |
| **JKP** (Kehilangan Kerja) | *Rekomposisi APBN & Iuran* | **0%** | *Tanpa iuran baru* | Uang tunai bulanan (45% upah 3 bln pertama, 25% upah 3 bln kedua), akses info loker, & pelatihan kerja |

### 2. Klasifikasi Risiko JKK (Evaluasi Min 2 Tahun Sekali)
- Sangat Rendah: **0.24%** (kantor, perbankan)
- Rendah: **0.54%** (toko retail, restoran)
- Sedang: **0.89%** (industri makanan, tekstil)
- Tinggi: **1.27%** (industri kimia, semen)
- Sangat Tinggi: **1.74%** (pertambangan, konstruksi berat)

### 3. Total Beban Iuran Rutin
- **Total Ditanggung Perusahaan**: Min **10.00% + %JKK**
- **Total Dipotong dari Gaji Pekerja**: **4.00%** (2% JHT + 1% JP + 1% BPJS Kes).`,
        framework: [
          "Identifikasi kelompok risiko bisnis perusahaan untuk menentukan tarif iuran JKK.",
          "Hitung komponen upah (Gaji Pokok + Tunjangan Tetap) sebagai dasar pengali persentase.",
          "Kalkulasikan potongan gaji pekerja: 2% (JHT) + 1% (JP) = 3% naker + 1% kesehatan = total 4%.",
          "Kalkulasikan tanggungan perusahaan: JKK + JKM (0.3%) + JHT (3.7%) + JP (2%) + Kes (4%)."
        ],
        caseStudy: `Staf HR di perusahaan pergudangan (risiko JKK sedang = 0.89%) menghitung iuran karyawan bergaji Rp 5.000.000,-. Potongan gaji pekerja: JHT 2% (100rb) + JP 1% (50rb) + BPJS Kes 1% (50rb) = total Rp 200.000,-. Perusahaan membayarkan tanggungan: JKK 0.89% (44.500) + JKM 0.3% (15.000) + JHT 3.7% (185.000) + JP 2% (100.000) + BPJS Kes 4% (200.000) = total Rp 544.500,-.`,
        examHighlight: `Asesor BNSP akan menanyakan: "Program jaminan sosial apa saja yang iurannya 100% dibayarkan oleh perusahaan tanpa memotong gaji karyawan?"
Kunci Jawaban: JKK (Jaminan Kecelakaan Kerja) dan JKM (Jaminan Kematian). Pekerja sama sekali tidak dipungut iuran untuk kedua program ini.`,
        quiz: {
          question: "Iuran program BPJS Ketenagakerjaan yang dipotong dari gaji karyawan setiap bulan adalah:",
          options: [
            "JKK sebesar 0,24% dan JKM sebesar 0,3%",
            "JHT sebesar 2% dan JP sebesar 1%",
            "JHT sebesar 3,7% dan JP sebesar 2%",
            "JKP sebesar 1% dan JKM sebesar 0,5%"
          ],
          correct: 1,
          explanation: "Dari sisi BPJS Ketenagakerjaan, potongan yang dibebankan kepada pekerja adalah JHT (2%) dan JP (1%). Sisanya (JKK dan JKM) ditanggung penuh oleh perusahaan."
        }
      },
      {
        id: 3,
        title: "Operasional SIPP Ketenagakerjaan & Prosedur Klaim Santunan",
        duration: "20 Menit",
        concept: `### 1. Siklus Administrasi Bulanan via Portal SIPP
HR Staff mengelola administrasi ketenagakerjaan melalui portal **SIPP (Sistem Informasi Pelaporan Peserta)**:
1. **Tambah Tenaga Kerja (TK)**: Mengunggah data karyawan baru via formulir excel SIPP.
2. **Mutasi Data / Non-Aktif**: Melaporkan karyawan resign/PHK agar tidak lagi tertagih iuran pada bulan berikutnya.
3. **Update Upah**: Memperbarui nominal upah jika ada kenaikan gaji berkala.
4. **Finalisasi Hitung**: Menghitung total tagihan bulanan dan mencetak Kode Iuran / Virtual Account (VA).
5. **Pembayaran**: Dilakukan paling lambat tanggal 15 setiap bulannya. Keterlambatan dikenakan denda 2% per bulan.

### 2. Prosedur Klaim Jaminan Kematian (JKM)
- Ahli waris berhak menerima santunan JKM sebesar **Rp 42.000.000,-**.
- Urutan ahli waris sah: Janda/Duda/Anak sah -> jika tidak ada: Orang tua kandung -> Saudara kandung -> Mertua -> Wasiat tertulis.
- Dokumen Persyaratan Klaim:
  1. Formulir Klaim Jamsostek 4 yang ditandatangani perusahaan dan ahli waris.
  2. Kartu Peserta BPJS Ketenagakerjaan asli.
  3. Fotokopi KTP tenaga kerja dan KTP ahli waris.
  4. Surat Keterangan Kematian dari RS / Kelurahan.
  5. Surat Keterangan Ahli Waris dari Kelurahan / Kecamatan.
  6. Fotokopi Kartu Keluarga (KK) dan Buku Tabungan ahli waris.`,
        framework: [
          "Buka portal SIPP Ketenagakerjaan dan login dengan akun resmi perusahaan.",
          "Masuk menu 'Mutasi Data' untuk menambah atau menonaktifkan tenaga kerja.",
          "Klik 'Finalisasi' untuk memperoleh rekapitulasi nominal iuran dan kode bayar Virtual Account.",
          "Simpan bukti setor bank dan lakukan pengarsipan digital berkas pelaporan."
        ],
        caseStudy: `Seorang staf pabrik meninggal dunia karena sakit di rumah. HR Staff segera mendampingi istri almarhum mengurus pencairan JKM: mengisi Form 4, melampirkan surat kematian kelurahan, KK, KTP, dan surat ahli waris. Berkas diserahkan ke kantor cabang BPJS Ketenagakerjaan terdekat. Dalam waktu 3 hari kerja, santunan tunai Rp 42 Juta langsung cair ke rekening tabungan istri almarhum.`,
        examHighlight: `Asesor BNSP akan meminta Anda menjelaskan: "Bagaimana tahapan HR Staff saat memproses penonaktifan karyawan yang telah resign pada portal SIPP?"
Kunci Jawaban: Login ke portal SIPP -> Masuk menu Mutasi Data -> Pilih Tenaga Kerja -> Klik Non-aktifkan -> Masukkan tanggal efektif keluar dan alasan pengunduran diri -> Lakukan Finalisasi sebelum tanggal cut-off agar tagihan iuran bulan depan tidak mencakup karyawan tersebut.`,
        quiz: {
          question: "Dokumen yang TIDAK diperlukan saat ahli waris mengajukan klaim Jaminan Kematian (JKM) ke kantor BPJS Ketenagakerjaan adalah:",
          options: [
            "Surat Keterangan Kematian dari Kelurahan / Rumah Sakit",
            "Kartu Keluarga dan KTP ahli waris",
            "Surat Izin Mengemudi (SIM) atasan langsung almarhum",
            "Formulir klaim resmi yang diketahui oleh pihak perusahaan"
          ],
          correct: 2,
          explanation: "SIM atasan langsung tidak memiliki kaitan yuridis dalam administrasi klaim santunan jaminan sosial tenaga kerja."
        }
      }
    ]
  },

  4: {
    id: 4,
    code: "HRS-M4",
    name: "Melakukan Administrasi Pengupahan",
    skkniCode: "M.70SDM01.057.2",
    description: "Komposisi upah (pokok min 75%), perhitungan lembur (1/173), administrasi PPh 21, segregation of duties, dan penyusunan SOP Penggajian.",
    lessons: [
      {
        id: 1,
        title: "Komposisi Upah, Batasan Tunjangan & Perlindungan No Work No Pay",
        duration: "20 Menit",
        concept: `### 1. Landasan Hukum Pengupahan
Diatur dalam UU No 13/2003, UU No 6/2023 (UU Cipta Kerja), serta PP No 36/2021 jo PP No 51/2023.

### 2. Komposisi Upah Berdasarkan UU Ketenagakerjaan (Pasal 94)
Dalam hal upah terdiri atas Upah Pokok dan Tunjangan Tetap:
- **Upah Pokok**: **Minimal 75%** dari total upah (Pokok + Tunjangan Tetap).
- **Tunjangan Tetap**: **Maksimal 25%** dari total upah.
  * *Tunjangan Tetap*: Tunjangan yang dibayarkan teratur tanpa dikaitkan dengan kehadiran (contoh: tunjangan jabatan, tunjangan keluarga/istri/anak, tunjangan keahlian).
  * *Tunjangan Tidak Tetap*: Tunjangan yang dipengaruhi faktor kehadiran karyawan (contoh: uang transport harian, uang makan per hari hadir).

### 3. Asas "No Work No Pay" & Pengecualiannya
Pasal 40 PP 36/2021: Upah tidak dibayar apabila pekerja tidak masuk bekerja.
**Namun, UPAT TETAP WAJIB DIBAYAR PENUH pada kondisi tertentu:**
1. Pekerja sakit dengan surat keterangan dokter resmi.
2. Pekerja menikah (dibayar penuh **3 hari**).
3. Menikahkan anaknya (dibayar penuh **2 hari**).
4. Mengkhitankan / membaptiskan anaknya (dibayar penuh **2 hari**).
5. Istri melahirkan atau keguguran kandungan (dibayar penuh **2 hari**).
6. Suami/istri, orang tua/mertua, atau anak/menantu meninggal dunia (dibayar penuh **2 hari**).
7. Anggota keluarga dalam satu rumah meninggal dunia (dibayar penuh **1 hari**).
8. Menjalankan kewajiban ibadah keagamaan yang diperintahkan agamanya.
9. Menjalankan kewajiban negara (misal saksi di pengadilan, pemilu).`,
        framework: [
          "Periksa struktur paket upah: pastikan Upah Pokok mencapai minimal 75% dari total upah tetap.",
          "Kelompokkan tunjangan menjadi Tunjangan Tetap (tidak terkait absensi) dan Tidak Tetap (terkait absensi).",
          "Cek data presensi bulanan: potong tunjangan tidak tetap jika pekerja mangkir tanpa izin.",
          "Pastikan upah pokok tetap dibayarkan penuh jika pekerja izin resmi sesuai ketentuan perundang-undangan."
        ],
        caseStudy: `PT Sejahtera menawarkan paket gaji Rp 6.000.000,- dengan rincian: Gaji Pokok Rp 3.500.000,- dan Tunjangan Tetap Jabatan Rp 2.500.000,-. HR Staff mengingatkan manajemen bahwa komposisi ini melanggar UU Cipta Kerja (karena pokok hanya 58%). HR Staff merestrukturisasi menjadi: Gaji Pokok Rp 4.500.000,- (75%) dan Tunjangan Tetap Rp 1.500.000,- (25%) sehingga aman dari sanksi Disnaker.`,
        examHighlight: `Asesor BNSP akan menguji: "Jika seorang karyawan bergaji Rp 4 Juta per bulan izin menikah selama 3 hari, apakah upahnya boleh dipotong?"
Kunci Jawaban: Tidak boleh dipotong sama sekali. Berdasarkan UU Ketenagakerjaan, pekerja yang menikah berhak atas izin berbayar (paid leave) selama 3 hari dan upah wajib dibayar penuh.`,
        quiz: {
          question: "Ketentuan proporsi minimal Upah Pokok dalam struktur gaji yang terdiri atas upah pokok dan tunjangan tetap menurut UU Cipta Kerja adalah:",
          options: [
            "Minimal 50%",
            "Minimal 60%",
            "Minimal 75%",
            "Minimal 85%"
          ],
          correct: 2,
          explanation: "Pasal 94 UU Ketenagakerjaan menetapkan bahwa besarnya Upah Pokok minimal adalah 75% dari jumlah upah pokok dan tunjangan tetap."
        }
      },
      {
        id: 2,
        title: "Perhitungan Upah Lembur Baku (Rumus 1/173 & Simulasi)",
        duration: "25 Menit",
        concept: `### 1. Landasan Hukum Waktu & Upah Lembur
Diatur dalam PP No 35 Tahun 2021 (PKWT, Alih Daya, Waktu Kerja dan Waktu Istirahat, dan PHK).
- Batas maksimal lembur: **4 jam dalam sehari** dan **18 jam dalam seminggu** (tidak termasuk lembur pada hari libur resmi).
- Perusahaan wajib menerbitkan **Surat Perintah Lembur (SPL)** tertulis yang disetujui pekerja.

### 2. Rumus Upah Lembur Per Jam (Angka 1/173)
\`\`\`
Upah Lembur Per Jam = 1 / 173 x Upah Sebulan (Upah Pokok + Tunjangan Tetap)
\`\`\`
*Asal Angka 173*:
- Dalam 1 tahun terdapat 52 minggu.
- Jumlah minggu rata-rata per bulan = 52 minggu / 12 bulan = **4,33 minggu**.
- Jam kerja normal seminggu = **40 jam**.
- Total jam kerja bulanan = 40 jam x 4,33 minggu = **173,33 jam** (dibulatkan menjadi **173 jam**).

### 3. Tarif Pengali Lembur Hari Kerja Biasa
- **Jam Pertama**: Dikalikan **1,5x Upah Per Jam**.
- **Jam Kedua dan seterusnya**: Dikalikan **2x Upah Per Jam**.

### 4. Tarif Lembur Hari Libur Resmi / Istirahat Mingguan (6 Hari Kerja)
- Jam ke-1 s.d. jam ke-7: **2x Upah Per Jam**.
- Jam ke-8: **3x Upah Per Jam**.
- Jam ke-9 s.d. jam ke-11: **4x Upah Per Jam**.`,
        framework: [
          "Verifikasi Surat Perintah Lembur (SPL) yang ditandatangani atasan dan pekerja.",
          "Hitung rate upah per jam: Upah Sebulan (Pokok + Tunjangan Tetap) dibagi 173.",
          "Tentukan total jam lembur dan kalikan dengan tarif pengali (jam ke-1 = 1.5x, jam ke-2 dst = 2x).",
          "Jumlahkan total nominal upah lembur ke dalam rekapitulasi payroll bulanan."
        ],
        caseStudy: `Budi bergaji pokok Rp 5.000.000,- dan tunjangan tetap Rp 1.000.000,- (total upah sebulan Rp 6.000.000,-). Budi lembur selama 3 jam pada hari kerja biasa.
1. Upah per jam = Rp 6.000.000 / 173 = **Rp 34.682,-**.
2. Pengali lembur: Jam ke-1 (1.5x) + Jam ke-2 (2x) + Jam ke-3 (2x) = **5.5x**.
3. Total uang lembur Budi = 5.5 x Rp 34.682,- = **Rp 190.751,-**.`,
        examHighlight: `Asesor BNSP sering menguji: "Dari manakah asal usul angka pembagi 173 dalam rumus perhitungan upah lembur?"
Kunci Jawaban: Angka 173 berasal dari perhitungan jam kerja tahunan: 52 minggu dibagi 12 bulan menghasilkan 4,33 minggu per bulan, dikalikan dengan 40 jam kerja normal per minggu = 173,33 jam (dibulatkan 173 jam).`,
        quiz: {
          question: "Seorang karyawan dengan total gaji Rp 5.190.000 per bulan melakukan lembur selama 2 jam pada hari kerja biasa. Berapakah upah lembur yang ia terima?",
          options: [
            "Rp 60.000",
            "Rp 105.000",
            "Rp 90.000",
            "Rp 120.000"
          ],
          correct: 1,
          explanation: "Upah per jam = 5.190.000 / 173 = Rp 30.000,-. Pengali lembur 2 jam hari biasa = (1,5x) + (2x) = 3,5x. Total lembur = 3,5 x Rp 30.000 = Rp 105.000,-."
        }
      },
      {
        id: 3,
        title: "Perpajakan PPh 21 Karyawan (Metode Hitung & Tarif Progresif)",
        duration: "20 Menit",
        concept: `### 1. Metode Pemotongan PPh 21
1. **Metode Gross**: Pajak ditanggung sepenuhnya oleh karyawan sendiri (dipotong langsung dari take home pay).
2. **Metode Nett**: Pajak ditanggung sepenuhnya oleh perusahaan (karyawan menerima gaji bersih utuh).
3. **Metode Gross-Up**: Perusahaan memberikan tunjangan pajak yang nilainya sama dengan jumlah pajak yang dipotong.

### 2. Penghasilan Tidak Kena Pajak (PTKP) Tahunan (PMK 101/2016)
- **TK/0 (Lajang tanpa tanggungan)**: **Rp 54.000.000,- / tahun** (atau Rp 4.500.000,- / bulan).
  * *Catatan*: Karyawan dengan penghasilan neto di bawah Rp 4.500.000/bulan TIDAK DIKENAKAN PPh 21 (Pajak Nihil).
- Tambahan untuk status Kawin (K/0): +Rp 4.500.000,- (menjadi Rp 58.500.000,-).
- Tambahan per tanggungan anak/orang tua (maks 3 orang): +Rp 4.500.000,- per orang.

### 3. Lapisan Tarif Progresif PPh 21 (UU Harmonisasi Peraturan Perpajakan / HPP)
- Lapisan 1 (s.d. Rp 60 Juta): **5%**
- Lapisan 2 (> Rp 60 Juta s.d. Rp 250 Juta): **15%**
- Lapisan 3 (> Rp 250 Juta s.d. Rp 500 Juta): **25%**
- Lapisan 4 (> Rp 500 Juta s.d. Rp 5 Miliar): **30%**
- Lapisan 5 (> Rp 5 Miliar): **35%**`,
        framework: [
          "Hitung Penghasilan Bruto (Gaji Pokok + Tunjangan + Lembur + BPJS tanggungan persh).",
          "Kurangi Biaya Jabatan (5% maks 500rb/bln) dan iuran pensiun/JHT pekerja untuk dapat Penghasilan Neto.",
          "Setahunkan penghasilan neto lalu kurangkan dengan nilai PTKP sesuai status keluarga.",
          "Kalikan Penghasilan Kena Pajak (PKP) dengan tarif progresif PPh 21.",
          "Bagi dengan 12 bulan untuk memperoleh potongan PPh 21 bulanan."
        ],
        caseStudy: `Rian (status TK/0) memiliki Penghasilan Kena Pajak (PKP) setahun sebesar Rp 90.000.000,-. Perhitungan PPh 21 terutang:
- Lapisan 1: 5% x Rp 60.000.000 = Rp 3.000.000,-
- Lapisan 2: 15% x (Rp 90.000.000 - Rp 60.000.000) = 15% x Rp 30.000.000 = Rp 4.500.000,-
- Total PPh 21 setahun = Rp 3.000.000 + Rp 4.500.000 = **Rp 7.500.000,-**.
- Potongan PPh 21 per bulan = Rp 7.500.000 / 12 = **Rp 625.000,-**.`,
        examHighlight: `Asesor BNSP akan menanyakan: "Berapa batas penghasilan bulanan di mana seorang karyawan lajang (TK/0) tidak dipotong pajak penghasilan PPh 21?"
Kunci Jawaban: Rp 4.500.000,- per bulan (sesuai PTKP TK/0 setahun sebesar Rp 54.000.000,-). Di bawah angka tersebut, PPh 21 berstatus Nihil.`,
        quiz: {
          question: "Berdasarkan UU HPP, tarif pajak PPh 21 untuk lapisan penghasilan kena pajak pertama (sampai dengan Rp 60 juta) adalah sebesar:",
          options: [
            "2,5%",
            "5%",
            "10%",
            "15%"
          ],
          correct: 1,
          explanation: "Lapisan pertama PKP sampai dengan Rp 60.000.000 dikenakan tarif PPh 21 progresif sebesar 5%."
        }
      },
      {
        id: 4,
        title: "SOP Penggajian, Segregation of Duties & Format Slip Gaji",
        duration: "25 Menit",
        concept: `### 1. Prinsip Pengendalian Internal: Segregation of Duties
Dalam audit operasional dan BNSP, proses payroll WAJIB menerapkan pemisahan tugas ketat untuk mencegah kecurangan (fraud) atau salah transfer:
- **Pihak yang Menghitung (HR Payroll)**: Merekap absensi, lembur, potongan pinjaman, dan menghitung nominal gaji.
- **Pihak yang Memverifikasi & Menyetujui (HR Manager & Finance Manager)**: Melakukan cross-check akurasi data dan menyetujui laporan payroll.
- **Pihak yang Membayar / Transfer (Finance Cashier / Bank)**: Terpisah dari pembuat daftar gaji, bertugas mengeksekusi transfer bank atas dasar perintah resmi direksi.

### 2. 5 Tahap Proses Bisnis Penggajian
1. **Verifikasi Data**: Validasi data absensi, SPK karyawan baru/keluar, dan formulir lembur (SPL).
2. **Kalkulasi Payroll**: Menghitung gaji kotor, lembur, potongan BPJS, PPh 21, dan potongan kehadiran.
3. **Approval Bertingkat**: Pengajuan berkas rekap gaji ke Manajer HR, Manajer Keuangan, dan Direksi.
4. **Pembayaran & Distribusi**: Proses transfer bank (payroll corporate) dan pencetakan slip gaji.
5. **Pelaporan & Konsolidasi**: Pelaporan SPT Masa PPh 21 ke DJP dan pelaporan iuran via SIPP BPJS.

### 3. Komponen Wajib Slip Gaji Resmi
Slip gaji adalah bukti otentik pembayaran hak pekerja, wajib memuat:
- Logo & Nama Resmi Perusahaan.
- Identitas Karyawan: Nama, NIK/ID, Jabatan, Status PTKP.
- Kolom Penerimaan: Gaji Pokok, Tunjangan Tetap, Lembur, Tunjangan Makan/Transport.
- Kolom Potongan: BPJS Ketenagakerjaan, BPJS Kesehatan, PPh 21, Absensi/Keterlambatan.
- Take Home Pay (THP) / Total Penerimaan Bersih.
- Kolom Tanda Tangan / Tanda Terima Pembayaran.`,
        framework: [
          "Lakukan cut-off absensi dan verifikasi surat sakit/izin resmi setiap tanggal 20.",
          "Hitung seluruh komponen penambah (lembur/tunjangan) dan pengurang (BPJS/pajak).",
          "Cetak draf rekapitulasi penggajian untuk ditandatangani Manajer HR dan Manajer Keuangan.",
          "Kirim file instruksi transfer ke bank mitra payroll.",
          "Distribusikan slip gaji rahasia (password terenkripsi) ke email masing-masing pekerja."
        ],
        caseStudy: `Di PT Cahaya Makmur, Staf HR yang menghitung gaji juga memegang token transfer bank perusahaan. Hal ini menjadi temuan auditor eksternal karena berisiko manipulasi rekening fiktif. Manajemen segera merevisi SOP Penggajian: Staf HR hanya berwenang menghitung draf, Manajer HR memvalidasi, dan otorisasi pembayaran bank dipindahkan sepenuhnya ke Manajer Keuangan.`,
        examHighlight: `Asesor BNSP akan menguji: "Mengapa petugas yang menghitung daftar gaji tidak boleh merangkap sebagai eksekutor pembayaran transfer gaji di bank?"
Kunci Jawaban: Untuk menerapkan prinsip Segregation of Duties (pemisahan tugas fungsi kontrol) guna mencegah potensi kecurangan (fraud), manipulasi data rekening penerima fiktif, serta kesalahan transfer yang merugikan keuangan perusahaan.`,
        quiz: {
          question: "Komponen yang termasuk dalam bagian potongan (deduction) pada slip gaji karyawan adalah:",
          options: [
            "Tunjangan transportasi dan uang makan",
            "Iuran JHT 2%, JP 1%, dan PPh 21",
            "Gaji pokok dan upah lembur",
            "Bonus tahunan dan THR keagamaan"
          ],
          correct: 1,
          explanation: "Iuran JHT (2%), JP (1%), BPJS Kesehatan (1%), dan potongan pajak PPh 21 merupakan komponen pengurang resmi dari total penghasilan kotor karyawan."
        }
      }
    ]
  },

  5: {
    id: 5,
    code: "HRS-M5",
    name: "Melakukan Administrasi Penerapan Kebijakan SDM",
    skkniCode: "M.70SDM01.059.2",
    description: "9 fungsi MSDM yang dikelola kebijakan, hierarki dokumen regulasi, siklus penerapan kebijakan SDM, dan formulir pendukung operasional.",
    lessons: [
      {
        id: 1,
        title: "9 Fungsi MSDM & Hierarki Dokumen Regulasi Ketenagakerjaan",
        duration: "20 Menit",
        concept: `### 1. 9 Fungsi MSDM yang Dikelola sebagai Kebijakan
Untuk menjamin keteraturan operasional, HR Staff harus memahami 9 pilar fungsi manajemen SDM:
1. **Recruitment & Seleksi**: Standar penerimaan dan kualifikasi calon pekerja.
2. **Pelatihan & Pengembangan**: Peningkatan kompetensi dan evaluasi program belajar.
3. **Manajemen Talenta**: Identifikasi bakat dan kesiapan suksesi posisi kunci.
4. **Reward & Recognition**: Skema kompensasi, penghargaan, dan apresiasi kinerja.
5. **Manajemen Kinerja**: Penetapan target KPI, evaluasi berkala, dan evaluasi akhir.
6. **Perencanaan Karir**: Jalur mutasi, promosi, dan Individual Development Plan (IDP).
7. **Hubungan Karyawan (Employee Relations)**: Membina keharmonisan dan penanganan keluhan kerja.
8. **HR Regulatory, Policy & Compliance**: Menjamin kepatuhan terhadap regulasi ketenagakerjaan.
9. **HRIS & Administrasi**: Database personalia, absensi, cuti, dan pengarsipan berkas kerja.

### 2. Hierarki Dokumen Kebijakan SDM
Dokumen aturan kerja harus selaras dan tidak boleh bertentangan dengan hukum yang lebih tinggi:
\`\`\`
1. UU Ketenagakerjaan & UU Cipta Kerja (Regulasi Tertinggi)
   ↓
2. Peraturan Pemerintah (PP) & Peraturan Menteri (Permenaker)
   ↓
3. Peraturan Perusahaan (PP) / Perjanjian Kerja Bersama (PKB)
   ↓
4. Surat Keputusan Direksi / Kebijakan SDM (HR Policy)
   ↓
5. Standar Operasional Prosedur (SOP) MSDM
   ↓
6. Instruksi Kerja (IK) & Formulir Mutu Kerja
\`\`\``,
        framework: [
          "Pelajari UU Ketenagakerjaan dan Peraturan Perusahaan (PP) yang berlaku di tempat kerja.",
          "Identifikasi proses kerja harian pada salah satu dari 9 fungsi MSDM yang membutuhkan panduan.",
          "Pastikan draf kebijakan tidak memuat ketentuan yang lebih rendah dari hak normatif undang-undang.",
          "Dokumentasikan nomor dokumen dan edisi penerbitan pada master list kebijakan SDM."
        ],
        caseStudy: `Manajemen sebuah pabrik membuat kebijakan internal bahwa cuti tahunan yang tidak diambil dalam 6 bulan akan hangus tanpa kompensasi. HR Staff memberikan saran hukum bahwa UU Ketenagakerjaan menjamin hak cuti tahunan dan penghapusan sepihak melanggar hierarki regulasi. Manajemen merevisi aturan dengan memberikan perpanjangan masa berlaku cuti dan opsi pembayaran kompensasi bila diperlukan.`,
        examHighlight: `Asesor BNSP akan bertanya: "Bagaimana posisi SOP MSDM dalam hierarki regulasi perusahaan dan apakah isi SOP boleh bertentangan dengan Peraturan Perusahaan (PP)?"
Kunci Jawaban: SOP berkedudukan di bawah Peraturan Perusahaan (PP). Isi SOP bertindak sebagai panduan teknis langkah kerja dan sama sekali tidak boleh bertentangan dengan ketentuan normatif yang telah diatur dalam PP atau undang-undang.`,
        quiz: {
          question: "Urutan hierarki dokumen ketenagakerjaan dari tingkatan yang paling tinggi ke yang paling operasional adalah:",
          options: [
            "SOP -> Instruksi Kerja -> UU Ketenagakerjaan -> Peraturan Perusahaan",
            "UU Ketenagakerjaan -> Peraturan Perusahaan/PKB -> Kebijakan SDM/SOP -> Instruksi Kerja",
            "Instruksi Kerja -> SOP -> Peraturan Perusahaan -> UU Ketenagakerjaan",
            "Kebijakan SDM -> UU Ketenagakerjaan -> Peraturan Perusahaan -> SOP"
          ],
          correct: 1,
          explanation: "Hierarki tertinggi adalah UU Ketenagakerjaan, diikuti Peraturan Perusahaan/PKB, lalu Kebijakan SDM & SOP, dan tingkatan paling rinci adalah Instruksi Kerja (IK)."
        }
      },
      {
        id: 2,
        title: "5 Siklus Penerapan Kebijakan SDM & Formulir Pendukung",
        duration: "25 Menit",
        concept: `### 1. 5 Langkah Siklus Penerapan Kebijakan SDM
Agar kebijakan tidak hanya menjadi dokumen pasif di lemari arsip, ikuti 5 tahapan terstruktur:
1. **Pemahaman Kebijakan**: Memahami regulasi yang mendasari, menganalisis proses bisnis, dan merumuskan draf aturan secara detail.
2. **Dokumentasi**: Menuangkan aturan ke dalam format resmi (SOP & Instruksi Kerja) dan menyiapkan formulir rekam jejak kerja.
3. **Sosialisasi**: Menyampaikan kebijakan ke seluruh pekerja melalui briefing tatap muka, email memo, atau buku pedoman karyawan (employee handbook).
4. **Pelaksanaan**: Menerapkan kebijakan secara konsisten dalam rutinitas kerja harian.
5. **Monitoring & Evaluasi**: Memantau kepatuhan secara berkala, mencatat kendala lapangan, dan merumuskan perbaikan bila ada perubahan aturan.

### 2. Formulir Mutu Pendukung Wajib
Penerapan kebijakan harus dibuktikan dengan formulir kerja otentik:
- **Form Perencanaan Program SDM**: Dokumen usulan jadwal, biaya, dan sasaran inisiatif SDM.
- **Form Assessment Kompetensi**: Mengukur tingkat kemahiran pekerja (Skala 1 = Basic, 2 = Intermediate, 3 = Advance, 4 = Expert).
- **Form Individual Development Plan (IDP)**: Rencana aksi pengembangan kompetensi karyawan (area perbaikan, metode, target waktu, dan pendamping/mentor).
- **Form Evaluasi & Review**: Mengukur kepuasan dan ketercapaian target program.`,
        framework: [
          "Susun draf kebijakan bersama pimpinan unit kerja pengguna.",
          "Siapkan formulir pendukung (misal Form Penilaian Kompetensi & Form IDP).",
          "Adakan sesi sosialisasi kepada seluruh staf dan sediakan lembar absensi kehadiran sosialisasi.",
          "Pantau implementasi form dalam operasional harian dan rekap keluhan yang muncul.",
          "Lakukan evaluasi triwulan untuk meninjau efektivitas kebijakan."
        ],
        caseStudy: `HR Staff meluncurkan kebijakan baru 'Penilaian Masa Percobaan 3 Bulan'. Agar berjalan mulus, HR Staff membuat Form Penilaian Kinerja Probation yang memuat aspek teknis (bobot 60%) dan disiplin kehadiran (bobot 40%). Form disosialisasikan kepada seluruh manajer divisi. Hasilnya, keputusan pengangkatan karyawan tetap menjadi sangat objektif dan tidak lagi berdasarkan rasa suka atau tidak suka personal.`,
        examHighlight: `Asesor BNSP akan meminta Anda memperlihatkan contoh dokumen formulir pendukung kebijakan SDM yang pernah Anda buat atau kelola.
Kunci Jawaban: Tunjukkan dokumen konkret, seperti Formulir Evaluasi Masa Percobaan, Form Penilaian Kompetensi Karyawan, Form Permohonan Cuti, atau Form Rencana Pengembangan Karyawan (IDP).`,
        quiz: {
          question: "Tahapan dalam siklus penerapan kebijakan SDM yang bertujuan memastikan seluruh karyawan memahami hak, kewajiban, dan sanksi aturan baru adalah:",
          options: [
            "Dokumentasi",
            "Sosialisasi",
            "Evaluasi Akhir",
            "Formulasi Draf"
          ],
          correct: 1,
          explanation: "Tahap sosialisasi bertujuan mengomunikasikan kebijakan secara transparan kepada seluruh jajaran pekerja agar memahami isi dan konsekuensi aturan tersebut."
        }
      },
      {
        id: 3,
        title: "Audit Kepatuhan & Indikator Keberhasilan Kebijakan SDM",
        duration: "20 Menit",
        concept: `### 1. Audit Kepatuhan Administrasi SDM
Audit SDM dilakukan untuk memastikan operasional harian selaras dengan standar hukum dan SOP internal:
- **Audit Arsip Kontrak Kerja**: Memeriksa kelengkapan tanda tangan PKWT/PKWTT dan bukti pendaftaran ke Kemenaker.
- **Audit Data Pribadi (Kepatuhan UU PDP No 27/2022)**: Menjamin data gaji dan riwayat medis karyawan tersimpan aman dan tidak bocor ke pihak tidak berwenang.
- **Audit Presensi & Lembur**: Memastikan lembur didukung form SPL sah dan tidak melebihi batas 18 jam per minggu.

### 2. Indikator Keberhasilan Penerapan Kebijakan SDM
Kebijakan SDM dikatakan berhasil dan efektif jika memenuhi 5 indikator kunci:
1. **Penurunan Konflik & Keluhan**: Perselisihan antara karyawan dan manajemen berkurang karena aturan main transparan.
2. **Dokumen Selalu Terbarukan (Up-to-Date)**: Seluruh SOP rutin diperbarui mengikuti dinamika regulasi pemerintah.
3. **Tingkat Kepatuhan Karyawan Tinggi**: Disiplin kerja, absensi tepat waktu, dan kepatuhan prosedur meningkat.
4. **Keputusan SDM Objektif & Adil**: Tidak ada unsur nepotisme dalam pemberian sanksi, promosi, atau penilaian kinerja.
5. **Hasil Audit Eksternal Bersih**: Tidak ada temuan pelanggaran norma kerja dari pengawas ketenagakerjaan (Disnaker).`,
        framework: [
          "Bentuk checklist audit kepatuhan dokumen personalia triwulanan.",
          "Lakukan audit sampling pada 10% berkas karyawan aktif.",
          "Catat temuan ketidaksesuaian (minor / major finding) pada lembar kerja audit.",
          "Laporkan hasil temuan kepada Manajer HR beserta rekomendasi tindakan perbaikan (Corrective Action)."
        ],
        caseStudy: `Dalam audit kepatuhan tahunan, HR Staff menemukan 15 orang pekerja kontrak yang belum menandatangani perpanjangan PKWT padahal kontrak lama sudah habis 2 minggu lalu. Jika dibiarkan, status pekerja berisiko berubah menjadi karyawan tetap (PKWTT) demi hukum. HR Staff segera menyiapkan draf amandemen kontrak resmi dan memperketat sistem alarm notifikasi masa habis kontrak 30 hari sebelum jatuh tempo.`,
        examHighlight: `Asesor BNSP akan menanyakan: "Apa saja indikator yang menunjukkan bahwa administrasi kebijakan SDM di tempat kerja Anda telah berjalan dengan efektif?"
Kunci Jawaban: Penurunan angka keluhan karyawan, konsistensi penerapan sanksi dan penghargaan yang adil, dokumen arsip personalia lengkap dan aman, serta nihilnya surat teguran atau sanksi dari dinas ketenagakerjaan.`,
        quiz: {
          question: "Salah satu indikator utama keberhasilan penerapan kebijakan administrasi SDM di lingkungan perusahaan adalah:",
          options: [
            "Meningkatnya jumlah perselisihan hubungan industrial di pengadilan PHI",
            "Seluruh arsip personalia tersimpan rapi, data selalu terbarukan, dan angka keluhan karyawan menurun",
            "Membatasi karyawan untuk membaca dokumen Peraturan Perusahaan",
            "Menghapus formulir evaluasi kinerja untuk mempercepat proses promosi"
          ],
          correct: 1,
          explanation: "Kebijakan SDM yang berhasil tercermin dari keteraturan arsip data, pembaruan prosedur berkala, dan berkurangnya konflik atau keluhan di lingkungan kerja."
        }
      }
    ]
  },

  6: {
    id: 6,
    code: "HRS-M6",
    name: "Persiapan Uji Kompetensi & Asesmen Portofolio BNSP",
    skkniCode: "ASSESS-HRS-FINAL",
    description: "Panduan pemenuhan dokumen bukti portofolio (VATM), simulasi uji lisan/wawancara asesor BNSP, dan strategi kelulusan sertifikasi HR Staff.",
    lessons: [
      {
        id: 1,
        title: "Panduan Pemenuhan Portofolio Bukti Kerja Wajib (Prinsip VATM)",
        duration: "20 Menit",
        concept: `### 1. Prinsip Otentisitas Bukti Portofolio (VATM)
Asesor BNSP memverifikasi berkas portofolio Anda menggunakan 4 kriteria mutlak:
- **Valid (V)**: Bukti relevan langsung dengan elemen kompetensi dalam skema HR Staff.
- **Asli (A)**: Dokumen merupakan hasil pekerjaan mandiri peserta, dibuktikan dengan kop surat perusahaan, cap stempel resmi, tanda tangan, atau form verifikasi atasan.
- **Terkini (T)**: Dokumen diterbitkan atau digunakan dalam kurun waktu **3 tahun terakhir**.
- **Memadai (M)**: Dokumen lengkap mencakup seluruh siklus kerja, bukan hanya lembaran terpotong.

### 2. Berkas Portofolio Wajib Uji Kompetensi HR Staff
1. **Bukti Unit Analisis Jabatan**: 
   - 1 berkas Uraian Jabatan & Spesifikasi Jabatan resmi yang ada tanda tangan pengesahan Direksi / Manajer.
   - Form kuesioner / catatan wawancara 5W+2H pengumpulan data jabatan.
2. **Bukti Unit Jaminan Sosial**:
   - Bukti tangkapan layar (screenshot) portal SIPP Ketenagakerjaan (daftar mutasi/tambah TK).
   - Bukti pembayaran iuran BPJS Kesehatan / tangkapan layar New e-DABU.
3. **Bukti Unit Pengupahan**:
   - Rekapitulasi draf perhitungan payroll bulanan (minimal 3-5 karyawan disamarkan).
   - Formulir Surat Perintah Lembur (SPL) dan bukti slip gaji resmi.
4. **Bukti Unit Kebijakan SDM**:
   - 1 berkas dokumen SOP MSDM resmi.
   - Formulir implementasi kebijakan (Form Penilaian Kinerja, Form Evaluasi Masa Percobaan, atau Form IDP).`,
        framework: [
          "Kumpulkan seluruh berkas portofolio asli dari tempat kerja.",
          "Lakukan penyamaran (masking) data sensitif (seperti nomor rekening asli atau nama lengkap jika bersifat rahasia perusahaan).",
          "Susun dokumen ke dalam map binder terpisah sesuai nomor unit kompetensi.",
          "Lengkapi formulir FR.APL-01 (Data Pribadi) dan FR.APL-02 (Asesmen Mandiri)."
        ],
        caseStudy: `Seorang asesi membawa portofolio slip gaji tanpa tanda tangan dan SOP tanpa stempel perusahaan. Asesor menolak dokumen tersebut karena tidak memenuhi aspek 'Asli' dan 'Valid'. Asesi meminta surat keterangan verifikasi portofolio dari Manajer HR perusahaannya yang menyatakan berkas tersebut benar-benar hasil kerja operasional asesi. Pada uji verifikasi ulang, asesor menyatakan asesi KOMPETEN.`,
        examHighlight: `Asesor BNSP akan memeriksa: "Apakah dokumen portofolio yang Anda lampirkan ini benar-benar buatan Anda sendiri di tempat kerja?"
Kunci Jawaban: Jawab dengan tegas dan tunjukkan surat verifikasi portofolio resmi bermaterai/berstempel dari perusahaan serta jelaskan proses langkah demi langkah saat Anda menyusun dokumen tersebut.`,
        quiz: {
          question: "Kriteria bukti portofolio dalam asesmen BNSP yang menuntut bahwa dokumen harus diterbitkan dalam kurun waktu 3 tahun terakhir disebut prinsip:",
          options: [
            "Valid",
            "Asli",
            "Terkini",
            "Memadai"
          ],
          correct: 2,
          explanation: "Prinsip Terkini (Current) mewajibkan bahwa bukti kerja yang diserahkan asesi mencerminkan kompetensi aktif yang dihasilkan dalam rentang waktu paling lama 3 tahun terakhir."
        }
      },
      {
        id: 2,
        title: "Simulasi Uji Lisan, Wawancara Asesor & Tips Kelulusan",
        duration: "25 Menit",
        concept: `### 1. Metode Asesmen BNSP
Asesmen BNSP untuk skema HR Staff umumnya terdiri dari:
1. **Verifikasi Portofolio**: Asesor memeriksa kesesuaian dokumen dengan standar SKKNI.
2. **Uji Tulis**: Soal pilihan ganda atau esai kasus singkat.
3. **Uji Wawancara / Lisan**: Asesor menggali pemahaman konsep, aturan hukum, dan studi kasus pemecahan masalah.

### 2. 5 Pertanyaan Wawancara Asesor Terpopuler & Jawaban Tepat
1. *Tanya*: "Bagaimana Anda memastikan uraian tugas yang Anda buat tidak tumpang tindih dengan jabatan lain?"
   - *Jawab*: "Melalui pemetaan struktur organisasi, verifikasi alur kerja lintas fungsi, dan konfirmasi bersama manajer departemen pengguna."
2. *Tanya*: "Apa tindakan Anda jika perusahaan menunda pembayaran iuran BPJS Ketenagakerjaan melebihi tanggal 15?"
   - *Jawab*: "Mengingatkan bagian keuangan akan sanksi denda 2% per bulan dan risiko penolakan klaim jaminan oleh BPJS jika terjadi kecelakaan kerja."
3. *Tanya*: "Bagaimana cara Anda menghitung uang lembur karyawan yang bergaji Rp 6 Juta jika lembur 2 jam di hari kerja biasa?"
   - *Jawab*: "Upah per jam = 6 jt / 173 = Rp 34.682,-. Lembur 2 jam = (1.5 + 2) x Rp 34.682 = Rp 121.387,-."
4. *Tanya*: "Apa dasar hukum pemotongan upah jika karyawan tidak masuk kerja?"
   - *Jawab*: "Pasal 40 PP No 36/2021 tentang prinsip No Work No Pay, dengan tetap mengecualikan kondisi izin resmi yang dilindungi undang-undang."
5. *Tanya*: "Bagaimana Anda mensosialisasikan SOP baru kepada karyawan lapangan yang tidak memiliki email?"
   - *Jawab*: "Melalui briefing harian (toolbox meeting), penempelan salinan SOP di papan pengumuman kerja, dan pendistribusian ringkasan buku saku."`,
        framework: [
          "Pelajari kembali ringkasan konsep, angka persentase BPJS, dan rumus lembur 1/173.",
          "Jawab pertanyaan asesor dengan sopan, percaya diri, dan berbasis data/hukum.",
          "Tunjukkan dokumen portofolio fisik setiap kali asesor menanyakan prosedur teknis.",
          "Kaitkan jawaban teoritis dengan pengalaman nyata yang Anda lakukan di perusahaan."
        ],
        caseStudy: `Saat wawancara uji kompetensi, asesor bertanya: 'Jika atasan meminta Anda tidak mendaftarkan karyawan kontrak ke BPJS Ketenagakerjaan untuk berhemat, apa respon Anda?' Asesi menjawab tenang: 'Saya akan memberikan edukasi risiko hukum kepada atasan bahwa UU No 24/2011 mewajibkan kepesertaan seluruh pekerja tanpa membedakan status PKWT atau PKWTT, serta risiko denda dan tuntutan ganti rugi jika terjadi kecelakaan kerja'. Asesor memberikan rekomendasi 'KOMPETEN'.`,
        examHighlight: `Sikap Kerja (Attitude) saat Asesmen: Jangan berdebat secara emosional dengan asesor. Jika terdapat kekurangan dokumen bukti fisik, jelaskan secara profesional bagaimana Anda biasanya menjalankan SOP tersebut di tempat kerja sehari-hari.`,
        quiz: {
          question: "Ketika asesor BNSP menanyakan langkah praktis menyelesaikan kasus perselisihan lembur antara pekerja dan supervisor, cara menjawab yang paling tepat adalah:",
          options: [
            "Menyerahkan masalah sepenuhnya kepada dinas tenaga kerja",
            "Menjelaskan verifikasi Surat Perintah Lembur (SPL), data kartu hadir mesin absensi, dan perhitungan baku PP No 35/2021",
            "Menyuruh pekerja mengalah demi menjaga nama baik perusahaan",
            "Menolak menjawab karena bukan wewenang staf HR"
          ],
          correct: 1,
          explanation: "Jawaban profesional seorang HR Staff berbasis pada bukti dokumen sah (SPL & absensi) dan ketentuan normatif perundang-undangan (PP 35/2021)."
        }
      }
    ]
  }
};
