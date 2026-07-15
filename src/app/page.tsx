import { SearchForm } from "@/components/search/SearchForm";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl py-24 text-center">
      <h1 className="text-5xl font-bold">
        MyLibrary
      </h1>

      <p className="mt-4 text-muted-foreground">
        Discover your next favorite book.
      </p>

      <div className="mt-10">
        <SearchForm />
      </div>
    </main>
  );
}
