"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>問題が発生しました!</h2>
        <button onClick={() => reset()}>再試行</button>
      </body>
    </html>
  );
}
