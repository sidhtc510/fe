import Count from "../Count";

export default async function Filters() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return (
    <div className={'bg-gray-900 p-4'}>
      <h2 className="text-lg font-semibold">Фильтры</h2>
      <Count />
    </div>
  );
}