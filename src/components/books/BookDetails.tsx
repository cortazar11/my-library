import Image from "next/image";

import type { BookDetails as BookDetailsType } from "@/lib/types/book-details";

type BookDetailsProps = {
  book: BookDetailsType;
};

export function BookDetails({ book }: BookDetailsProps) {
  return (
    <section className="mx-auto max-w-5xl">
      <div className="grid gap-8 md:grid-cols-[250px_1fr]">
        {/* Cover */}
        <div>
          <Image
            src={book.coverUrl ?? "/placeholder.jpg"}
            alt={book.title}
            width={250}
            height={375}
            className="rounded-lg border"
          />
        </div>

        {/* Information */}
        <div>
          <h1 className="text-4xl font-bold">{book.title}</h1>

          {book.firstPublished && (
            <p className="mt-3 text-muted-foreground">
              First published: {book.firstPublished}
            </p>
          )}

          {book.subjects.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {book.subjects.map((subject) => (
                <span
                  key={subject}
                  className="rounded-full border px-3 py-1 text-sm"
                >
                  {subject}
                </span>
              ))}
            </div>
          )}

          {book.description && (
            <div className="mt-8">
              <h2 className="mb-3 text-xl font-semibold">
                Description
              </h2>

              <p className="leading-7 text-muted-foreground">
                {book.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}