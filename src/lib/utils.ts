import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function formatPercent(value: number): string {
  return `${Math.round(value)}%`;
}

export function calculateReadinessScore(params: {
  learningCompletion: number;
  quizPerformance: number;
  simulationExam: number;
  learningConsistency: number;
}): number {
  return (
    params.learningCompletion * 0.3 +
    params.quizPerformance * 0.3 +
    params.simulationExam * 0.25 +
    params.learningConsistency * 0.15
  );
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}
