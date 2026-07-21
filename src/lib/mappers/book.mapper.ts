import type { Book } from "@/lib/types/book";
import type { OpenLibraryBook } from "@/lib/schemas/open-library";
import type { BookDetails } from "@/lib/types/book-details";
import type { OpenLibraryBookDetails } from "@/lib/schemas/open-library";

export function mapOpenLibraryBook(
  book: OpenLibraryBook
): Book {
  return {
    id: book.key.replace("/works/", ""),
    title: book.title,
    author: book.author_name?.[0] ?? "Unknown",
    coverUrl: book.cover_i? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : "/placeholder.png",
    firstPublished: book.first_publish_year,
  };
}

export function mapOpenLibraryBookDetails(
  book: OpenLibraryBookDetails
): BookDetails {
  return {
    id: book.key.replace("/works/", ""),

    title: book.title,

    description:
      typeof book.description === "string"
        ? book.description
        : book.description?.value,

    coverUrl: book.covers?.length
      ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`
      : undefined,

    subjects: book.subjects ?? [],

    firstPublished: book.first_publish_date,
  };
}