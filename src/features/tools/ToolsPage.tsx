"use client";

import { useState } from "react";
import { Calculator, DollarSign, TrendingDown, Users, Clock, Percent, BarChart2 } from "lucide-react";
import { cn } from "@/lib/utils";

const tools = [
  { id: "payroll", label: "Kalkulator Gaji", icon: DollarSign, color: "text-blue-600 bg-blue-100" },
  { id: "thp", label: "Take Home Pay", icon: Calculator, color: "text-purple-600 bg-purple-100" },
  { id: "pph21", label: "Kalkulator PPh 21", icon: Percent, color: "text-red-600 bg-red-100" },
  { id: "bpjs", label: "Kalkulator BPJS", icon: BarChart2, color: "text-green-600 bg-green-100" },
  { id: "overtime", label: "Upah Lembur", icon: Clock, color: "text-amber-600 bg-amber-100" },
  { id: "turnover", label: "Turnover Rate", icon: TrendingDown, color: "text-rose-600 bg-rose-100" },
  { id: "hcroi", label: "HCROI & HCVA", icon: Users, color: "text-teal-600 bg-teal-100" },
];

function fmt(n: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
  prefix,
  suffix,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  hint?: string;
}) {
  const numVal = Number(value);
  const formattedPreview =
    !isNaN(numVal) && numVal > 0 && prefix === "Rp"
      ? fmt(numVal)
      : null;

  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="block text-xs font-semibold text-slate-700">{label}</label>
        {formattedPreview && (
          <span className="text-[11px] font-semibold text-[#0B1F3A] bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
            {formattedPreview}
          </span>
        )}
      </div>
      <div className="relative flex items-center rounded-xl border border-slate-200 bg-white focus-within:border-[#0B1F3A] focus-within:ring-2 focus-within:ring-[#0B1F3A]/15 transition-all overflow-hidden shadow-xs">
        {prefix && (
          <div className="flex items-center justify-center bg-slate-100/90 border-r border-slate-200 px-3.5 py-2.5 text-xs font-bold text-slate-600 select-none flex-shrink-0">
            {prefix}
          </div>
        )}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder || "0"}
          className="w-full bg-transparent px-3.5 py-2.5 text-sm text-[#0B1F3A] font-semibold placeholder:text-slate-400 focus:outline-none"
        />
        {suffix && (
          <div className="flex items-center justify-center bg-slate-100/90 border-l border-slate-200 px-3 py-2.5 text-xs font-semibold text-slate-600 select-none flex-shrink-0">
            {suffix}
          </div>
        )}
      </div>
      {hint && <p className="text-[11px] text-slate-400 mt-1">{hint}</p>}
    </div>
  );
}

function ResultCard({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={cn("rounded-xl p-4 transition-all", highlight ? "card-gold" : "bg-slate-50 border border-slate-200/80")}>
      <p className={cn("text-xs font-medium mb-1", highlight ? "text-white/80" : "text-slate-500")}>{label}</p>
      <p className={cn("text-xl font-bold tracking-tight", highlight ? "text-white" : "text-[#0B1F3A]")}>{value}</p>
    </div>
  );
}

// === CALCULATORS ===
function PayrollCalc() {
  const [basic, setBasic] = useState("");
  const [allowance, setAllowance] = useState("");
  const [overtime, setOvertime] = useState("");
  const gross = (Number(basic) || 0) + (Number(allowance) || 0) + (Number(overtime) || 0);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-3">
        <InputField label="Gaji Pokok" value={basic} onChange={setBasic} prefix="Rp" />
        <InputField label="Tunjangan (Tetap & Tidak Tetap)" value={allowance} onChange={setAllowance} prefix="Rp" />
        <InputField label="Upah Lembur" value={overtime} onChange={setOvertime} prefix="Rp" />
      </div>
      <div className="border-t border-slate-200 pt-4">
        <p className="text-xs text-slate-500 mb-2">📐 Formula: Gaji Pokok + Tunjangan + Lembur</p>
        <ResultCard label="Total Gaji Kotor (Gross Salary)" value={fmt(gross)} highlight />
      </div>
    </div>
  );
}

function THPCalc() {
  const [gross, setGross] = useState("");
  const [deduction, setDeduction] = useState("");
  const thp = (Number(gross) || 0) - (Number(deduction) || 0);

  return (
    <div className="space-y-4">
      <InputField label="Gaji Kotor (Gross Salary)" value={gross} onChange={setGross} prefix="Rp" />
      <InputField label="Total Potongan (BPJS + PPh 21 + Lainnya)" value={deduction} onChange={setDeduction} prefix="Rp" />
      <div className="border-t border-slate-200 pt-4">
        <p className="text-xs text-slate-500 mb-2">📐 Formula: Gaji Kotor - Total Seluruh Potongan</p>
        <ResultCard label="Take Home Pay (THP Bersih)" value={fmt(thp)} highlight />
      </div>
    </div>
  );
}

function PPh21Calc() {
  const [gross, setGross] = useState("");
  const [ptkpCode, setPtkpCode] = useState("TK0");

  const ptkpMap: Record<string, { label: string; value: number }> = {
    TK0: { label: "TK/0 - Lajang, 0 Tanggungan", value: 54000000 },
    TK1: { label: "TK/1 - Lajang, 1 Tanggungan", value: 58500000 },
    TK2: { label: "TK/2 - Lajang, 2 Tanggungan", value: 63000000 },
    TK3: { label: "TK/3 - Lajang, 3 Tanggungan", value: 67500000 },
    K0: { label: "K/0 - Kawin, 0 Tanggungan", value: 58500000 },
    K1: { label: "K/1 - Kawin, 1 Tanggungan", value: 63000000 },
    K2: { label: "K/2 - Kawin, 2 Tanggungan", value: 67500000 },
    K3: { label: "K/3 - Kawin, 3 Tanggungan", value: 72000000 },
  };

  const g = Number(gross) || 0;
  const ptkp = ptkpMap[ptkpCode]?.value || 54000000;
  const annualGross = g * 12;
  const jabatan = Math.min(annualGross * 0.05, 6000000); // Biaya jabatan 5% maks 6jt/thn
  const netAnnual = Math.max(annualGross - jabatan, 0);
  const pkp = Math.max(netAnnual - ptkp, 0);

  // Tarif Progresif UU HPP
  let tax = 0;
  if (pkp <= 60000000) {
    tax = pkp * 0.05;
  } else if (pkp <= 250000000) {
    tax = 60000000 * 0.05 + (pkp - 60000000) * 0.15;
  } else if (pkp <= 500000000) {
    tax = 60000000 * 0.05 + 190000000 * 0.15 + (pkp - 250000000) * 0.25;
  } else if (pkp <= 5000000000) {
    tax = 60000000 * 0.05 + 190000000 * 0.15 + 250000000 * 0.25 + (pkp - 500000000) * 0.3;
  } else {
    tax = 60000000 * 0.05 + 190000000 * 0.15 + 250000000 * 0.25 + 4500000000 * 0.3 + (pkp - 5000000000) * 0.35;
  }
  const monthly = tax / 12;

  return (
    <div className="space-y-4">
      <InputField label="Penghasilan Bruto per Bulan" value={gross} onChange={setGross} prefix="Rp" />

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
          Status PTKP Karyawan
        </label>
        <select
          value={ptkpCode}
          onChange={(e) => setPtkpCode(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-medium text-slate-700 focus:outline-none focus:border-[#0B1F3A] focus:ring-2 focus:ring-[#0B1F3A]/15 transition-all"
        >
          {Object.entries(ptkpMap).map(([k, v]) => (
            <option key={k} value={k}>
              {v.label} (PTKP: Rp {(v.value / 1000000).toLocaleString("id-ID")} Jt/thn)
            </option>
          ))}
        </select>
      </div>

      <div className="border-t border-slate-200 pt-4 space-y-3">
        <p className="text-xs text-slate-500 font-bold mb-2">📋 Rincian Perhitungan Pajak UU HPP:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <ResultCard label="PTKP Tahunan" value={fmt(ptkp)} />
          <ResultCard label="Biaya Jabatan (5% maks 500rb/bln)" value={fmt(jabatan / 12) + "/bln"} />
          <ResultCard label="Penghasilan Kena Pajak (PKP/Tahun)" value={fmt(pkp)} />
          <ResultCard label="Total PPh 21 Setahun" value={fmt(tax)} />
        </div>
        <ResultCard label="Estimasi Potongan PPh 21 per Bulan" value={fmt(monthly)} highlight />
      </div>
    </div>
  );
}

function BPJSCalc() {
  const [salary, setSalary] = useState("");
  const [risk, setRisk] = useState("0.0024"); // 0.24% Sangat Rendah

  const s = Number(salary) || 0;
  // BPJS Kesehatan plafon 12.000.000
  const s_kes = Math.min(s, 12000000);
  const kes_emp = s_kes * 0.04;
  const kes_self = s_kes * 0.01;

  // BPJS Ketenagakerjaan JP plafon Rp 10.042.300 (per 2024), JHT/JKK/JKM tanpa plafon
  const s_jp = Math.min(s, 10042300);
  const jp_emp = s_jp * 0.02;
  const jp_self = s_jp * 0.01;

  const jht_emp = s * 0.037;
  const jht_self = s * 0.02;
  const jkk = s * Number(risk);
  const jkm = s * 0.003;

  const total_emp = jht_emp + jkk + jkm + jp_emp + kes_emp;
  const total_self = jht_self + jp_self + kes_self;

  return (
    <div className="space-y-4">
      <InputField label="Gaji Pokok + Tunjangan Tetap" value={salary} onChange={setSalary} prefix="Rp" />

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
          Tingkat Risiko JKK Usaha Perusahaan (PP 44/2015)
        </label>
        <select
          value={risk}
          onChange={(e) => setRisk(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-medium text-slate-700 focus:outline-none focus:border-[#0B1F3A] focus:ring-2 focus:ring-[#0B1F3A]/15 transition-all"
        >
          <option value="0.0024">Sangat Rendah (0,24%) - Kantor, Perbankan, IT</option>
          <option value="0.0054">Rendah (0,54%) - Retail, Restoran, Pergudangan Ringan</option>
          <option value="0.0089">Sedang (0,89%) - Pabrik Tekstil, Makanan & Minuman</option>
          <option value="0.0127">Tinggi (1,27%) - Pabrik Kimia, Baja, Manufaktur Berat</option>
          <option value="0.0174">Sangat Tinggi (1,74%) - Pertambangan, Konstruksi, Migas</option>
        </select>
      </div>

      {s > 12000000 && (
        <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs text-amber-800">
          ℹ️ Batas upah maksimal BPJS Kesehatan adalah <strong>Rp 12.000.000,-</strong> (Maksimal iuran persh: Rp 480.000, pekerja: Rp 120.000).
        </div>
      )}

      <div className="border-t border-slate-200 pt-4 space-y-3">
        <div>
          <p className="text-xs text-slate-500 font-bold mb-2">🏢 Ditanggung Perusahaan (Tunjangan BPJS):</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <ResultCard label="JHT (3,7%)" value={fmt(jht_emp)} />
            <ResultCard label={`JKK (${(Number(risk) * 100).toFixed(2)}%)`} value={fmt(jkk)} />
            <ResultCard label="JKM (0,3%)" value={fmt(jkm)} />
            <ResultCard label="JP (2%)" value={fmt(jp_emp)} />
            <ResultCard label="Kesehatan (4%)" value={fmt(kes_emp)} />
            <ResultCard label="Total Beban Persh" value={fmt(total_emp)} highlight />
          </div>
        </div>

        <div>
          <p className="text-xs text-slate-500 font-bold mb-2">👤 Ditanggung Karyawan (Potongan Gaji):</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <ResultCard label="JHT (2%)" value={fmt(jht_self)} />
            <ResultCard label="JP (1%)" value={fmt(jp_self)} />
            <ResultCard label="Kesehatan (1%)" value={fmt(kes_self)} />
          </div>
          <div className="mt-2">
            <ResultCard label="Total Potongan Gaji Karyawan (4%)" value={fmt(total_self)} highlight />
          </div>
        </div>
      </div>
    </div>
  );
}

function OvertimeCalc() {
  const [monthly, setMonthly] = useState("");
  const [hours, setHours] = useState("");
  const [dayType, setDayType] = useState<"workday" | "holiday">("workday");

  const m = Number(monthly) || 0;
  const h = Number(hours) || 0;
  const hourly = m / 173;

  let total = 0;
  let multiplierExplanation = "";

  if (dayType === "workday") {
    if (h <= 1) {
      total = h * 1.5 * hourly;
      multiplierExplanation = `${h} jam x 1,5x upah/jam`;
    } else {
      total = (1 * 1.5 + (h - 1) * 2) * hourly;
      multiplierExplanation = `(1 jam x 1,5x) + (${h - 1} jam x 2x)`;
    }
  } else {
    if (h <= 8) {
      total = h * 2 * hourly;
      multiplierExplanation = `${h} jam x 2x upah/jam`;
    } else if (h === 9) {
      total = (8 * 2 + 1 * 3) * hourly;
      multiplierExplanation = `(8 jam x 2x) + (1 jam x 3x)`;
    } else {
      total = (8 * 2 + 1 * 3 + (h - 9) * 4) * hourly;
      multiplierExplanation = `(8 jam x 2x) + (1 jam x 3x) + (${h - 9} jam x 4x)`;
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2 p-1 bg-slate-100 rounded-xl">
        <button
          onClick={() => setDayType("workday")}
          className={cn(
            "flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all",
            dayType === "workday"
              ? "bg-[#0B1F3A] text-white shadow-xs"
              : "text-slate-600 hover:text-[#0B1F3A]"
          )}
        >
          Hari Kerja Biasa (1,5x & 2x)
        </button>
        <button
          onClick={() => setDayType("holiday")}
          className={cn(
            "flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all",
            dayType === "holiday"
              ? "bg-[#0B1F3A] text-white shadow-xs"
              : "text-slate-600 hover:text-[#0B1F3A]"
          )}
        >
          Hari Libur Resmi / Istirahat
        </button>
      </div>

      <InputField label="Gaji Pokok + Tunjangan Tetap / Bulan" value={monthly} onChange={setMonthly} prefix="Rp" />
      <InputField label="Jumlah Jam Lembur" value={hours} onChange={setHours} placeholder="0" suffix="Jam" />

      <div className="border-t border-slate-200 pt-4 space-y-2">
        <p className="text-xs text-slate-500 mb-2">
          📐 Formula Baku PP 35/2021: (Upah Sebulan / 173) × Faktor Pengali
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <ResultCard label="Upah Lembur per Jam (1/173)" value={fmt(hourly)} />
          <ResultCard label="Faktor Pengali Lembur" value={h > 0 ? multiplierExplanation : "-"} />
        </div>
        <ResultCard label="Total Upah Lembur Yang Diterima" value={fmt(total)} highlight />
      </div>
    </div>
  );
}

function TurnoverCalc() {
  const [leaving, setLeaving] = useState("");
  const [avg, setAvg] = useState("");
  const rate = avg ? ((Number(leaving) || 0) / (Number(avg) || 1)) * 100 : 0;
  const status =
    rate <= 10
      ? { label: "Normal (Sehat) ✅", color: "text-emerald-700 bg-emerald-50 border-emerald-200" }
      : rate <= 20
      ? { label: "Perlu Perhatian ⚠️", color: "text-amber-700 bg-amber-50 border-amber-200" }
      : { label: "Tinggi / Kritis ❌", color: "text-rose-700 bg-rose-50 border-rose-200" };

  return (
    <div className="space-y-4">
      <InputField label="Jumlah Karyawan Keluar (Periode)" value={leaving} onChange={setLeaving} placeholder="0" suffix="Orang" />
      <InputField label="Rata-rata Total Karyawan Aktif" value={avg} onChange={setAvg} placeholder="0" suffix="Orang" />
      <div className="border-t border-slate-200 pt-4 space-y-2">
        <p className="text-xs text-slate-500 mb-2">📐 Formula: (Karyawan Keluar / Rata-rata Karyawan) × 100%</p>
        <ResultCard label="Turnover Rate" value={`${rate.toFixed(2)}%`} highlight />
        {avg && (
          <div className={cn("text-xs font-bold text-center py-2.5 rounded-xl border", status.color)}>
            Status: {status.label}
          </div>
        )}
      </div>
    </div>
  );
}

function HCROICalc() {
  const [revenue, setRevenue] = useState("");
  const [operatingCost, setOperatingCost] = useState("");
  const [hrCost, setHrCost] = useState("");
  const [fte, setFte] = useState("");

  const rev = Number(revenue) || 0;
  const opCost = Number(operatingCost) || 0;
  const hcCost = Number(hrCost) || 0;
  const fteNum = Number(fte) || 1;

  // HCVA = (Revenue - (Operating Cost - HR Cost)) / FTE
  // HC ROI = (Revenue - (Operating Cost - HR Cost)) / HR Cost
  const adjustedProfit = rev - (opCost - hcCost);
  const hcroi = hcCost > 0 ? adjustedProfit / hcCost : 0;
  const hcva = fteNum > 0 ? adjustedProfit / fteNum : 0;

  return (
    <div className="space-y-4">
      <InputField label="Total Pendapatan (Revenue)" value={revenue} onChange={setRevenue} prefix="Rp" />
      <InputField label="Total Biaya Operasional (Total Operating Expenses)" value={operatingCost} onChange={setOperatingCost} prefix="Rp" />
      <InputField label="Total Biaya Tenaga Kerja (Total Cost of Workforce)" value={hrCost} onChange={setHrCost} prefix="Rp" />
      <InputField label="Jumlah Karyawan Penuh Waktu (Total FTE)" value={fte} onChange={setFte} placeholder="1" suffix="FTE" />

      <div className="border-t border-slate-200 pt-4 space-y-3">
        <p className="text-xs text-slate-500 mb-2">📐 Metrik Finansial Human Capital C-Level:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <ResultCard label="HC ROI (Return on Investment)" value={`${hcroi.toFixed(2)}x`} highlight />
          <ResultCard label="HCVA (Value Added per FTE)" value={fmt(hcva)} highlight />
        </div>
        {hcCost > 0 && (
          <p className="text-xs text-slate-500 text-center bg-slate-50 p-2.5 rounded-xl border border-slate-200">
            Setiap <strong>Rp 1</strong> investasi biaya tenaga kerja menghasilkan <strong>Rp {hcroi.toFixed(2)}</strong> laba kotor disesuaikan bagi korporasi.
          </p>
        )}
      </div>
    </div>
  );
}

const calcMap: Record<string, React.ComponentType> = {
  payroll: PayrollCalc,
  thp: THPCalc,
  pph21: PPh21Calc,
  bpjs: BPJSCalc,
  overtime: OvertimeCalc,
  turnover: TurnoverCalc,
  hcroi: HCROICalc,
};

export default function ToolsPage() {
  const [active, setActive] = useState("payroll");
  const ActiveCalc = calcMap[active];
  const tool = tools.find((t) => t.id === active)!;

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="page-header">
        <h1 className="page-title">HR Toolkit</h1>
        <p className="page-subtitle">Kalkulator HR praktis berstandar regulasi UU Ketenagakerjaan & BNSP</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tool List */}
        <div className="card-premium p-3 h-fit space-y-1">
          {tools.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all duration-200 text-sm font-medium",
                  active === t.id
                    ? "bg-[#0B1F3A] text-white shadow-xs"
                    : "text-slate-600 hover:bg-slate-50 hover:text-[#0B1F3A]"
                )}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                    active === t.id ? "bg-white/10" : t.color
                  )}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Calculator */}
        <div className="lg:col-span-2 card-premium">
          <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-200">
            <div className={cn("stat-icon", tool.color)}>
              <tool.icon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-[#0B1F3A] text-base">{tool.label}</h2>
              <p className="text-xs text-slate-500">Masukkan angka untuk kalkulasi otomatis secara akurat</p>
            </div>
          </div>
          <ActiveCalc />
        </div>
      </div>
    </div>
  );
}
