import React from "react";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>My Page</h1>
      <div>My Post: {params.slug}</div>
    </div>
  );
}
