import type { Book } from "@/lib/types/book";
import type { OpenLibraryBook } from "@/lib/schemas/open-library";

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