import type { Metadata } from "next";
import LearningCenterPage from "@/features/learning/LearningCenterPage";

export const metadata: Metadata = { title: "Learning Center" };

export default function LearningCenter() {
  return <LearningCenterPage />;
}
