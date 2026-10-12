import type { Metadata } from "next";
import ExamPrepPage from "@/features/assessment/ExamPrepPage";
export const metadata: Metadata = { title: "Persiapan Ujian" };
export default function ExamPrep() { return <ExamPrepPage />; }
