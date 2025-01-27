
export default async function test({ params, searchParams }) {
    const param = await params
    const sparam = await searchParams
    console.log(param);
    console.log(sparam);

    return (
        <div>
            test
        </div>
    )
}
