"use client";

import React, { useEffect, useState } from "react";

// IntarfacPost(投稿型の定義)
interface Post {
  slug: string;
  content: string;
}

// BlogCompnent
export default function BlogComponent() {
  // 投稿の配列を管理するための状態変数
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    //非同期関数fetchPostsの定義
    async function fetchPosts() {
      const posts: Post[] = await fetch("http://localhost:3001/posts").then(
        (res) => res.json()
      );

      setPosts(posts);
    }

    // 関数の読み出し(1度のみ)
    fetchPosts();
    // 空の依存配列を渡すことで、このuseEffectは初回のみ実行
  }, []);

  return (
    <div>
      <h1>Posts:</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <p>
              {post.slug}:{post.content}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
