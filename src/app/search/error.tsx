"use client";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">
        Something went wrong
      </h2>

      <p>{error.message}</p>

      <button onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}