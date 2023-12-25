import { Link, useParams } from "react-router-dom"
import { useGetProductsByCategoryQuery } from "../../redux/apiSlice"


function Category() {  
  const {category} = useParams()
  const {data, isLoading} = useGetProductsByCategoryQuery(category)

  return (
    <>
      {isLoading ? <h2>Loading...</h2> : data?.map((el)=><p key={el.id}><Link to={`/product/${el.id}`}>{el.title}</Link></p>)}
    </>
  )
}

export default Category