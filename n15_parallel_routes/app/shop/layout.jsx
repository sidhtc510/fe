export default function layout({ products, filters, recommendations }) {
    return (
        <div className="grid grid-cols-4 gap-4 p-4">
            {/* Фильтры слева */}
            <aside className="col-span-1 bg-gray-900">{filters}</aside>

            {/* Основной контент */}
            <main className="col-span-2 bg-gray-900">{products}</main>

            {/* Рекомендации справа */}
            <aside className="col-span-1 bg-gray-900">{recommendations}</aside>
        </div>
    );
}