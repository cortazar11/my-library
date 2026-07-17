import Link from "next/link";
import { PageNumbers } from "./PageNumbers";

type PaginationProps = {
  query: string;
  currentPage: number;
  total: number;
};

export function Pagination({
  query,
  currentPage,
  total,
}: PaginationProps) {
    const totalPages = Math.ceil(total / 100); // Assuming 100 results per page
    const hasPrevious = currentPage > 1;
    const hasNext = currentPage < totalPages;
  return (
    <div className="mt-8 flex justify-between">
      {hasPrevious && (
        <Link
          href={`/search?q=${query}&page=${currentPage - 1}`}
          className="rounded-md bg-primary px-4 py-2 text-white"
        >
          Previous
        </Link>
      )}
       <PageNumbers 
        query={query}
        currentPage={currentPage}
        total={totalPages * 100}
       />
      {hasNext && (
        <Link
          href={`/search?q=${query}&page=${currentPage + 1}`}
          className="rounded-md bg-primary px-4 py-2 text-white"
        >
          Next
        </Link>
      )}
    </div>
  );
}