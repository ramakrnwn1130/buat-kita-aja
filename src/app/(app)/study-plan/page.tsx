import type { Metadata } from "next";
import StudyPlanPage from "@/features/learning/StudyPlanPage";
export const metadata: Metadata = { title: "Study Planner" };
export default function StudyPlan() { return <StudyPlanPage />; }
