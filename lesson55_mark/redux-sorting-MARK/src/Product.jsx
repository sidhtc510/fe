import productClasses from "./Product.module.css";

function Product({ title, description, thumbnail, price }) {
  return (
    <div className={productClasses.card}>
      <img src={thumbnail} />
      <h5>
        {title} - {price}$
      </h5>
      <p>{description}</p>
    </div>
  );
}

export function ProductGrid({ products }) {
  return (
    <div className={productClasses.grid}>
      {products.map((data) => (
        <Product {...data} key={data.id} />
      ))}
    </div>
  );
}
