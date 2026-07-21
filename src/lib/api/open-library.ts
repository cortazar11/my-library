import { OpenLibrarySearchSchema } from "@/lib/schemas/open-library";
import { mapOpenLibraryBook } from "@/lib/mappers/book.mapper";
import type { Book } from "@/lib/types/book";
import { cache } from "react";
import { SearchResult } from "../types/search-result";
import { OpenLibraryBookDetailsSchema } from "@/lib/schemas/open-library";
import { mapOpenLibraryBookDetails } from "@/lib/mappers/book.mapper";
import type { BookDetails } from "@/lib/types/book-details";

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

export const getBookDetails = cache(
  async (id: string): Promise<BookDetails> => {
    const response = await fetch(
      `${BASE_URL}/works/${id}.json`,
      {
        cache: "force-cache",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch book details.");
    }

    const json = await response.json();

    const data = OpenLibraryBookDetailsSchema.parse(json);

    return mapOpenLibraryBookDetails(data);
  }
);