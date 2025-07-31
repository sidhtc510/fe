import Item from '@/app/components/Item';
import ItemModal from '@/app/components/ItemModal';
import React from 'react'

export default async function ItemInterceptedPage({ params }) {
    const itemId = (await params).id;
    return (
        <div>
            <ItemModal>

                ItemPage intercepted <Item id={itemId} />
            </ItemModal>
        </div>
    )
}