"use client"; // クライアントコンポーネントでなければならないエラーコンポーネント
import { useEffect } from "react";

// エラー表示用のコンポーネントの定義
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // エラーの表示
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>問題が発生しました!</h2>
      <button onClick={() => reset()}>再試行</button>
    </div>
  );
}
