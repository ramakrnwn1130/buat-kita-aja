import type { Metadata } from "next";
import ToolsPage from "@/features/tools/ToolsPage";

export const metadata: Metadata = { title: "HR Toolkit" };

export default function Tools() {
  return <ToolsPage />;
}
