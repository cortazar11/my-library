import type { Book } from "@/lib/types/book";
import Image from "next/image";

type BookCardProps = {
  book: Book;
};

export function BookCard({ book }: BookCardProps) {
  return (
    <article className="rounded-lg border p-4 shadow-sm">
      <Image
        src={book.coverUrl}
        alt={book.title}
        width={128}
        height={192}
        className="mt-4 rounded"
      />
      <h2 className="font-semibold">{book.title}</h2>

      <p className="text-sm text-muted-foreground">
        {book.author}
      </p>

      {book.firstPublished && (
        <p className="mt-2 text-xs">
          First published: {book.firstPublished}
        </p>
      )}
      
    </article>
  );
}