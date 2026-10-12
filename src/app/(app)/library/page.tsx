import type { Metadata } from "next";
import LibraryPage from "@/features/documents/LibraryPage";
export const metadata: Metadata = { title: "Perpustakaan Dokumen" };
export default function Library() { return <LibraryPage />; }
