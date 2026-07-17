import { searchBooks } from "@/lib/api/open-library";
import { BookGrid } from "@/components/books/BookGrid";
import { Search } from "lucide-react";
import { SearchForm } from "@/components/search/SearchForm";
import { Suspense } from "react";
import { SearchResults } from "@/components/search/SearchResults";

type Props = {
  searchParams: Promise<{
    q?: string;
    page?: string;
  }>;
};

export default async function SearchPage({
  searchParams,
}: Props) {
  const { q="",page="1" } = await searchParams;
  const currentPage=Number(page);

  if (!q) {
    return <p>No search query.</p>;
  }

  // const books = await searchBooks(q);

  return (
    // <main className="mx-auto max-w-6xl space-y-8 p-6">
    //   <h1 className="text-3xl font-bold">
    //     Search Results
    //   </h1>
    //   <SearchForm />
    //   <p className="text-muted-foreground">
    //     Found {books.length} books for &quot;{q}&quot;
    //   </p>

    //   <BookGrid books={books} />
    // </main>
     <>
    <SearchForm />

    <Suspense fallback={<p>Loading books...</p>}>
      <SearchResults query={q} currentPage={currentPage} />
    </Suspense>
  </>
  );
}