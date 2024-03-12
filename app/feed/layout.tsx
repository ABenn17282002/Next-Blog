import "../globals.css";

export const metadata = {
  title: "NextGram",
  description:
    "A sample Next.js app showing dynamic routing with modals as a route.",
  metadataBase: new URL("https://nextgram.vercel.app"),
};

// feedページ全体のコンポーネント
export default function RootLayout(props: {
  //コンポーネント変数
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <section>
      {/* 子コンポーネントとモーダルレンダリング */}
      {props.children}
      {props.modal}
      {/* モーダルコンポーネントをマウントするためのプレースホルダー */}
      <div id="modal-root" />
    </section>
  );
}
