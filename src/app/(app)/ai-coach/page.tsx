import type { Metadata } from "next";
import AICoachPage from "@/features/ai/AICoachPage";

export const metadata: Metadata = { title: "AI HR Coach" };

export default function AICoach() {
  return <AICoachPage />;
}
