import { OpenLibrarySearchSchema } from "@/lib/schemas/open-library";
import { mapOpenLibraryBook } from "@/lib/mappers/book.mapper";
import type { Book } from "@/lib/types/book";
import { cache } from "react";
import { SearchResult } from "../types/search-result";

const BASE_URL = "https://openlibrary.org";

export const searchBooks = cache(async (query: string, page: number = 1): Promise<SearchResult > => {
  const response = await fetch(
    `${BASE_URL}/search.json?q=${encodeURIComponent(query)}&page=${page}`,
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
  const books=data.docs.map(mapOpenLibraryBook);
  return {
    books,
    total: data.numFound,
    page
  }

})