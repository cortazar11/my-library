"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SearchForm() {
  return (
    <form
  action="/search"
  className="mx-auto mt-8 flex w-full max-w-2xl items-center gap-3"
    >
        <Input
            name="q"
            placeholder="Search books, authors or subjects..."
            autoComplete="off"
            required
            className="h-12 rounded-xl text-base shadow-sm"
        />

        <Button 
          type="submit"
          size="lg"
          className="h-12 rounded-xl px-6"
        >
            <Search className="size-5" />
        </Button>
    </form>
  );
}