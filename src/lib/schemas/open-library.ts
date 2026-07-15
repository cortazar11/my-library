import { z } from "zod";

export const OpenLibraryBookSchema = z.object({
  key: z.string(),
  title: z.string(),
  author_name: z.array(z.string()).optional(),
  cover_i: z.number().optional(),
  first_publish_year: z.number().optional(),
});

export const OpenLibrarySearchSchema = z.object({
  numFound: z.number(),
  docs: z.array(OpenLibraryBookSchema),
});

export type OpenLibraryBook =
  z.infer<typeof OpenLibraryBookSchema>;