import { Link } from "react-router-dom"
import { useGetAllCategoriesQuery } from "../../redux/apiSlice"

function Categories() {  
    const {data, isLoading} = useGetAllCategoriesQuery()
  return (
    <>
        {isLoading ? <h2>Loading...</h2> : data?.map((el, index)=> <p key={index}><Link to={`/category/${el}`}>{el}</Link></p>)}
    </>
  )
}

export default Categories