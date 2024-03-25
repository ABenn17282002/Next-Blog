import { Suspense } from "react";
// PostFeed,Weatherコンポーネントの導入
import PostFeed from "../components/PostFeed";
import Weather from "../components/Weather";

export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </Suspense>
    </section>
  );
}
