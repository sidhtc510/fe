import React from "react";
import { useDispatch } from "react-redux";
import { fetchAddNewProduct } from "../../store/asyncActions/productList";

export default function Form() {
const dispatch = useDispatch()

    const formHandler = (e) => {
        e.preventDefault()
        // FromData формирует специальный объекта в виде экземпляра
        let data = new FormData(e.target)
        // Object.fromEntries позволяет получить в виде обычного объекта данные input полей
        let obj = Object.fromEntries(data)
        console.log(obj);
        obj.images = ['https://bipbap.ru/wp-content/uploads/2018/06/3c980dd2e9c909ada7377cc89885231b.jpg']
        dispatch(fetchAddNewProduct(obj))
    }
  return (
    <div style={{margin:"50px"}}>
      <form onSubmit={formHandler}>
        <input name="title" placeholder="title" type="text" />
        <input name="price" placeholder="price" type="text" />
        <input name="description" placeholder="description" type="text" />
        <input name="categoryId" placeholder="categoryId" type="text" />
        <input type="submit" />
      </form>
    </div>
  );
}
