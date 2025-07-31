import Item from '@/app/components/Item'

export default async function ItemPage({params}) {
const itemId = (await params).id;

    return (
        <div>
            <Item id={itemId} />
        </div>
    )
}
