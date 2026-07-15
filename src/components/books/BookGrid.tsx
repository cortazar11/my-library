import type { Book } from "@/lib/types/book";
import { BookCard } from "./BookCard";

type BookGridProps = {
  books: Book[];
};

export function BookGrid({ books }: BookGridProps) {
  if (books.length === 0) {
    return (
      <p className="text-muted-foreground">
        No books found.
      </p>
    );
  }

  return (
    <section
      className="
        grid
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
        />
      ))}
    </section>
  );
}