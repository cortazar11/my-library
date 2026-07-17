import { Book } from "./book";
export type SearchResult = {
  books: Book[];
  total: number;
  page: number;
};