import { SearchForm } from "@/components/search/SearchForm";

export default function HomePage() {
  return (
    <section className="mx-auto flex min-h-[75vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <span className="text-6xl">📚</span>

      <h1 className="mt-6 text-5xl font-bold tracking-tight">
        My Library
      </h1>

      <p className="mt-4 max-w-xl text-lg text-slate-600">
        Search millions of books and authors from the Open Library catalog.
      </p>

      <div className="mt-10 w-full">
        <SearchForm />
      </div>
    </section>
  );
}
