
import { Routes, Route } from "react-router-dom"; 
import Categories from "../Categories";
import Category from "../Category";
import Product from "../Product";
import Header from "../Header";
import Cart from "../Cart";
import PostForm from "../PostForm";

function App() {


  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Categories/>} />
      <Route path='/category/:category' element={<Category/>} />
      <Route path='/product/:id' element={<Product/>} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
    <hr />
    <PostForm />
    </>
  )
}

export default App