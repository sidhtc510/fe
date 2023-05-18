import React from 'react'

export default function ModalAddProduct() {
  return (
    <div className="modalBackground "  >
    <div className="modalWrap">
        <button className="closeBtn" id="closeModal">X</button>
        <h3>Add product</h3>
        <form action="" id="modalForm">
            <label htmlFor="title">Product title</label>
            <input type="text" id="title" required=""/>

            <label htmlFor="price">Product price</label>
            <input type="number" id="price" required=""/>

            <label htmlFor="available">Available</label>
            <input type="checkbox" id="available" defaultChecked=""/> <br/><br/>

            <input type="submit" value="Add product"/>
        </form>
    </div>
</div>
  )
}



