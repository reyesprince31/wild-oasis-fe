"use client";

import { MouseEventHandler } from "react";

interface ErrorProps {
  error: Error;
  reset: MouseEventHandler<HTMLButtonElement>;
}

export default function Error({ error, reset }: ErrorProps): JSX.Element {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <button
        className="inline-block bg-accent text-primary px-6 py-3 text-lg"
        onClick={reset}>
        Try again
      </button>
    </main>
  );
}
