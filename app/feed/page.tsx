import Link from "next/link";

export default function Page() {
  // 1～6までの数値を取得
  let photos = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section className="cards-container">
      {/* 数値の配列から一つずつ取得しIDとして渡す */}
      {photos.map((id) => (
        <Link className="card" key={id} href={`feed/photo/${id}`} passHref>
          {id}
        </Link>
      ))}
    </section>
  );
}
