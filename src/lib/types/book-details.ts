export type BookDetails = {
  id: string;
  title: string;
  description?: string;
  firstPublished?: string;
  coverUrl?: string;
  subjects: string[];
};