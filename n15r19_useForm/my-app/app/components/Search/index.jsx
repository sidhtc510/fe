
import Form from 'next/form'

export default async function Search() {

    return (
        <Form action="/search" className='m-2 flex gap-2'>
            <input name="id"  className='border-2 rounded p-2'/>
            <input name="title"  className='border-2 rounded p-2'/>
            <button type="submit" className='rounded bg-blue-700 text-white p-2 cursor-pointer'>Search</button>
        </Form>
    )
}