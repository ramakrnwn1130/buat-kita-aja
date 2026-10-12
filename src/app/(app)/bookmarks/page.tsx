import type { Metadata } from "next";
import BookmarksPage from "@/features/learning/BookmarksPage";
export const metadata: Metadata = { title: "Bookmark" };
export default function Bookmarks() { return <BookmarksPage />; }
