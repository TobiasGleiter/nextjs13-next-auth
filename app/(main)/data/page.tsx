export default async function DataPage() {
  const data = await fetch('http://localhost:3000/api/data');

  return <div>DataPage</div>;
}
