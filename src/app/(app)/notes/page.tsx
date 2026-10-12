import type { Metadata } from "next";
import NotesPage from "@/features/learning/NotesPage";
export const metadata: Metadata = { title: "Catatan Saya" };
export default function Notes() { return <NotesPage />; }
