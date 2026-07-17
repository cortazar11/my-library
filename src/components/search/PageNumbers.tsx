import { getPaginationItems } from "@/lib/utils/pagination";
import Link from "next/link";
import { BOOKS_PER_PAGE } from "@/lib/constants";

type PageNumbersProps = {
    query: string;
  currentPage: number;
  total: number;
};



export function PageNumbers({ query, currentPage, total }: PageNumbersProps) {
  const totalPages = Math.ceil(total / BOOKS_PER_PAGE);
  const items = getPaginationItems(currentPage, totalPages);

  return (
  <div className="flex items-center gap-2">
    {items.map((item, index) =>
      item === "..." ? (
        <span key={index}>...</span>
      ) : (
        <Link
          key={item}
          href={`/search?q=${encodeURIComponent(query)}&page=${item}`}
          className={
            item === currentPage
              ? "rounded bg-primary px-3 py-2 text-white"
              : "rounded border px-3 py-2"
          }
        >
          {item}
        </Link>
      )
    )}
  </div>
    );
  
}