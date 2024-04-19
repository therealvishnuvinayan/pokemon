export default function Page({
  params,
}: {
  params: { item: string; itemCategory: string };
}) {
  return (
    <div>
      My Post: {params.item} {params.itemCategory}
    </div>
  );
}
