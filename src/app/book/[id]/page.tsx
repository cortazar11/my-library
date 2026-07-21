import {getBookDetails} from "@/lib/api/open-library";
import {BookDetails} from "@/components/books/BookDetails";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BookPage({ params }: Props) {
  const { id } = await params;

  const bookDetails = await getBookDetails(id);
  console.log("bookDetails", bookDetails);

  return (
    <main className="container mx-auto py-8">
      <BookDetails book={bookDetails} />
  </main>
  );
}

