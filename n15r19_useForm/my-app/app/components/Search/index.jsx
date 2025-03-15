
import Form from 'next/form'

export default async function Search({ searchParams }) {
    const res = (await searchParams).title || '';
    console.log(res);

    return (
        <Form action="/">
            <input name="title" />
            <button type="submit">Search</button>
        </Form>
    )
}