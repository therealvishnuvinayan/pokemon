export default function Page({ params }: { params: { item: string } }) {
    return <div>My Post: {params.item}</div>
  }