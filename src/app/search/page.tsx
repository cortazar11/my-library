
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

  

  return (
    
     <>
    <SearchForm />

    <Suspense fallback={<p>Loading books...</p>}>
      <SearchResults query={q} currentPage={currentPage} />
    </Suspense>
  </>
  );
}