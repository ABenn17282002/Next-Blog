"use client";

// "ai/react"からuseChatフックをインポート
import { useChat } from "ai/react";

// チャットコンポーネントのデフォルトエクスポートを定義
export default function Chat() {
  // useChatフックからmessages, input, handleInputChange, handleSubmitを取得
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto">
      <div className="fixed bottom-0 w-full max-w-md p-2 mb-8">
        <div className="mb-2 text-sm font-semibold text-gray-700">
          Please enter your question:
        </div>
        {/* ユーザーの入力を取るテキストボックス */}
        <form onSubmit={handleSubmit} className="flex">
          <input
            className="flex-1 p-2 border border-gray-300 rounded-l shadow-xl"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
            spellCheck="false" // ← spellCheck=falseにしないとレンダリングエラーが起こる
          />
        </form>
      </div>
      <div className="overflow-auto mb-4">
        {/* ユーザーとAIのロールに基づいて、発言者を表示*/}
        {messages.map((m) => (
          <div key={m.id} className="whitespace-pre-wrap">
            {m.role === "user" ? "User: " : "AI: "}
            {m.content}
          </div>
        ))}
      </div>
    </div>
  );
}
