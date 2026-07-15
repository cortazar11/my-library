import { OpenLibrarySearchSchema } from "@/lib/schemas/open-library";
import { mapOpenLibraryBook } from "@/lib/mappers/book.mapper";
import type { Book } from "@/lib/types/book";

const BASE_URL = "https://openlibrary.org";

export async function searchBooks(query: string): Promise<Book[]> {
  const response = await fetch(
    `${BASE_URL}/search.json?q=${encodeURIComponent(query)}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch books.");
  }

  const json = await response.json();

  // 1. Validate
  const data = OpenLibrarySearchSchema.parse(json);

  // 2. Transform
  return data.docs.map(mapOpenLibraryBook);
}