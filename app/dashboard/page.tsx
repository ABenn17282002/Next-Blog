import React from "react";
import { Suspense } from "react";
import { PostFeed, Weather } from "./Components";
import Loading from "./loading";

export default function Posts() {
  return (
    <section>
      <Suspense fallback={<Loading />}>
        <PostFeed />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Weather />
      </Suspense>
    </section>
  );
}
