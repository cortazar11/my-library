import Link from "next/link";

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight hover:text-slate-700 transition-colors"
        >
          📚 My Library
        </Link>
      </div>
    </header>
  );
}