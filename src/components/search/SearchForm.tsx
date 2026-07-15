"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SearchForm() {
  return (
    <form
  action="/search"
  className="mx-auto flex w-full max-w-xl gap-2"
    >
        <Input
            name="q"
            placeholder="Search by title, author, or subject..."
            autoComplete="off"
            required
        />

        <Button type="submit">
            <Search className="size-4" />
        </Button>
    </form>
  );
}