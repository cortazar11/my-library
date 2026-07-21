import type { Book } from "@/lib/types/book";
import Image from "next/image";
import Link from "next/link";

type BookCardProps = {
  book: Book;
};

export function BookCard({ book }: BookCardProps) {
  return (
  <Link href={`/book/${book.id}`} className="mx-auto block w-full ">
    <article
      className="
        flex h-full flex-col
        overflow-hidden
        rounded-xl
        border
        bg-white
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <Image
        src={book.coverUrl || "/placeholder.png"}
        alt={book.title}
        width={300}
        height={450}
        className="rounded-xl border shadow-md"
      />
      

      <div className="flex flex-1 flex-col p-3">
        <h2 className="text-base font-semibold">
          {book.title}
        </h2>

        <p className="mt-1 text-sm text-slate-600">
          {book.author}
        </p>

        {book.firstPublished && (
          <p className="mt-auto pt-3 text-xs text-slate-500">
            First published: {book.firstPublished}
          </p>
        )}
      </div>
    </article>
  </Link>
);
}