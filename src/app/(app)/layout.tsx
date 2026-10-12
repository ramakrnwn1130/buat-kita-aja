import { Suspense } from "react";
import Sidebar from "@/components/layout/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | HR Master Academy AI",
    default: "HR Master Academy AI",
  },
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#F5F7FA]">
      <Suspense fallback={<aside className="sidebar" />}>
        <Sidebar />
      </Suspense>
      <main className="main-content flex-1 flex flex-col justify-between">
        <div className="p-6 lg:p-8 max-w-7xl mx-auto w-full flex-1">
          {children}

          {/* Global Creator Watermark Footer */}
          <footer className="mt-14 pt-6 pb-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-slate-700">HR Master Academy AI</span>
              <span className="text-slate-300">•</span>
              <span>Platform Pembelajaran & Sertifikasi BNSP HR</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
              <span className="text-slate-400 text-[11px]">Dibuat & Dikembangkan oleh:</span>
              <span className="font-bold text-[#0B1F3A] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
                Rama Kurniawan
              </span>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
