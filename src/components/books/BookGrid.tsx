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
        gap-4
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        xl:grid-cols-6
        2xl:grid-cols-7
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