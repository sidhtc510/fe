export default function layout({ products, filters, recommendations }) {
    return (
        <div className="flex gap-4 p-4">
            {/* Фильтры слева */}
            <aside>{filters}</aside>

            {/* Основной контент */}
            <main>{products}</main>

            {/* Рекомендации справа */}
            <aside>{recommendations}</aside>
        </div>
    );
}