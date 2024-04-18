"use client";

export default function Page({ params }: { params: { type: string } }) {
  return <div>My Post: {params.type}</div>;
}
