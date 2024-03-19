import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js",
};

export default function Home() {
  return (
    <main className="py-2 px-4">
      <h1 className="mb-4">Hello, Next.js!</h1>
      <Link
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        href="/dashboard"
      >
        Dashboard
      </Link>
    </main>
  );
}
