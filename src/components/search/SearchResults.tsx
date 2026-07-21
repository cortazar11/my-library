import { searchBooks } from "@/lib/api/open-library";
import { BookGrid } from "@/components/books/BookGrid";
import { Pagination } from "./Pagination";

type SearchResultsProps = {
  query: string;
  currentPage: number;
};

export async function SearchResults({
  query,
  currentPage,
}: SearchResultsProps & { currentPage: number }) {
  const result = await searchBooks(query, currentPage);

  return (
    <div>
       <div className="mb-6 flex items-center justify-between text-sm text-muted-foreground">
          <h1 className="text-3xl font-bold">
            Results for &quot;{query}&quot;
        </h1>
          <p>{result.total.toLocaleString()} books found</p>
        </div>
      <BookGrid books={result.books} />
       <Pagination
          query={query}
          currentPage={result.page}
          total={result.total}
      />
    </div>
  )
}