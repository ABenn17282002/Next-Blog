import React from "react";
import { Suspense } from "react";
import Loading from "./loading";
// PostFeed,Weatherコンポーネントの導入
import PostFeed from "../components/PostFeed";
import Weather from "../components/Weather";

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
