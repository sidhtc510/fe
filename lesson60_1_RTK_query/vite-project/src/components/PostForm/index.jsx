import { useAddProductMutation } from "../../redux/apiSlice"
function PostForm() {

const newObj =    {
    title: 'test product SID',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
}

const [addProduct] = useAddProductMutation()

const submitNewProduct = async () => {
const resp = await addProduct(newObj).unwrap()
console.log('Product added!', resp);
}

  return (
    <div >
        <button onClick={submitNewProduct}>Add new</button>
    </div>
  )
}

export default PostForm