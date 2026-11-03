"use client";

export default function Error({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <section className="lg:pt-30 lg:pb-20 pt-20 pb-10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-4xl font-normal -tracking-[2.88px] mb-4 text-black">
            Something went wrong
          </h1>
          <p className="mb-8 text-gray-700 text-lg leading-7 -tracking-[0.2px] max-w-xl mx-auto">
            An unexpected error occurred while loading this page. Please try again.
          </p>
          <button onClick={reset} className="btn btn-primary uppercase">
            Try again
          </button>
        </div>
      </section>
    </main>
  );
}
