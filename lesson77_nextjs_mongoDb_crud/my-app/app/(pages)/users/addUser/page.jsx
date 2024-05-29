'use client'
import Container from '@/app/components/Container'
import { useRouter } from 'next/navigation';
import React from 'react'

// {
//     name: String,
//     email: String,
//     phone: Number,
//     address: {
//         street: String,
//         zipCode: Number,
//         country: String
//     }
// }

export default function AddUser() {
    const router = useRouter();

    const props = {
        className: "border p-2 rounded",
        type: "text"
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let data = new FormData(e.target);
        let obj = Object.fromEntries(data);

        // Преобразуем телефон и почтовый индекс в числа
        // obj.phone = Number(obj.phone);
        // obj.zipcode = Number(obj.zipcode);

        // Создаем вложенный объект адреса
        const { street, zipcode, country, ...rest } = obj;
        const address = { street, zipcode, country };

        // Объединяем все в один объект
        const finalObj = {
            ...rest,
            address
        };


        try {
            const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL+'api/users', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(finalObj)
            })

            if (!res.ok) {
                throw new Error('no res ok')
            }
            router.refresh();
            router.push("/users");
            return res.json()

        } catch (error) {
            console.log('error AddUser', error);
        }
    }

    return (
        <Container>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2 rounded-lg bg-slate-100 p-4 m-2'>
                <p className='text-sm'>Common data:</p>
                <input {...props} name='name' placeholder='name' />
                <input {...props} name='email' placeholder='email' />
                <input {...props} name='phone' placeholder='phone' />
                <p className='text-sm'>address:</p>
                <input {...props} name='street' placeholder='street' />
                <input {...props} name='zipcode' placeholder='zipcode' />
                <input {...props} name='country' placeholder='country' />

                <input className='px-2 cursor-pointer py-1 rounded bg-blue-400 text-white hover:bg-blue-500 w-fit text-sm' type='submit' value='Send' />
            </form>
        </Container>
    )
}
