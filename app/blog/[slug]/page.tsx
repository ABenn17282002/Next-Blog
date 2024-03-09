"use client";

import React, { useEffect, useState } from "react";
import { useParams } from 'next/navigation';

// IntarfacPost(投稿型の定義)
interface Post {
  id: string;
  slug: string;
  content: string;
}

// BlogCompnent
export default function BlogComponent() {
  // 投稿の配列を管理するための状態変数
  const [post, setPost] = useState<Post | null>(null);
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    //非同期関数fetchPostの定義
    async function fetchPost() {
      try {
        const response = await fetch(`http://localhost:3001/posts/${slug}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const postData: Post = await response.json();
        setPost(postData);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    }

    // 関数の読み出し(1度のみ)
    fetchPost();
    // 空の依存配列を渡すことで、このuseEffectは初回のみ実行
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>PostID:{post.id}</h1>
      <p>
        {post.slug}: {post.content}
      </p>
    </div>
  );
}
