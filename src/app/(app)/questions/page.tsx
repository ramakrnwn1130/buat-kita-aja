import type { Metadata } from "next";
import QuestionsPage from "@/features/assessment/QuestionsPage";

export const metadata: Metadata = { title: "Bank Soal" };

export default function Questions() {
  return <QuestionsPage />;
}
