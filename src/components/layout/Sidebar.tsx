"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  Award,
  MessageSquare,
  HelpCircle,
  FileText,
  Bookmark,
  Wrench,
  Library,
  CalendarCheck,
  ClipboardList,
  LogOut,
  GraduationCap,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Learning Center", href: "/learning", icon: BookOpen },
  { title: "HR Staff Program", href: "/hr-staff", icon: Users },
  { title: "CHCO Program", href: "/chco", icon: Award },
  { title: "AI HR Coach", href: "/ai-coach", icon: MessageSquare },
  { title: "Bank Soal", href: "/questions", icon: HelpCircle },
  { title: "Catatan Saya", href: "/notes", icon: FileText },
  { title: "Bookmark", href: "/bookmarks", icon: Bookmark },
  { title: "HR Toolkit", href: "/tools", icon: Wrench },
  { title: "Perpustakaan", href: "/library", icon: Library },
  { title: "Study Planner", href: "/study-plan", icon: CalendarCheck },
  { title: "Persiapan Ujian", href: "/exam-preparation", icon: ClipboardList },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar flex flex-col overflow-y-auto">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-white/10">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4A017] to-[#b8891a] flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-tight">HR Master</p>
            <p className="text-[#D4A017] text-xs font-semibold">Academy AI</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "nav-item group",
                isActive && "active"
              )}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span className="flex-1 text-sm">{item.title}</span>
              {isActive && (
                <ChevronRight className="w-3 h-3 opacity-60" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* User Section & Creator Watermark */}
      <div className="px-3 py-4 border-t border-white/10 space-y-2.5">
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/5 border border-white/5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4A017] to-[#b8891a] flex items-center justify-center flex-shrink-0 text-white font-bold text-xs shadow-xs">
            RK
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-xs font-semibold truncate">Rama Kurniawan</p>
            <p className="text-[#D4A017] text-[10px] font-semibold truncate">HR Specialist & Creator</p>
          </div>
        </div>

        {/* Creator Watermark Badge */}
        <div className="px-3 py-2 rounded-xl bg-gradient-to-r from-white/[0.07] to-white/[0.03] border border-white/10 text-center shadow-xs">
          <p className="text-[10px] uppercase tracking-wider text-[#D4A017] font-bold flex items-center justify-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#D4A017]" /> Built By Creator
          </p>
          <p className="text-xs text-white font-bold mt-0.5 tracking-tight">Rama Kurniawan</p>
        </div>

        <button className="nav-item w-full text-red-400 hover:text-red-300 hover:bg-red-400/10">
          <LogOut className="w-4 h-4" />
          <span className="text-sm">Keluar</span>
        </button>
      </div>
    </aside>
  );
}
