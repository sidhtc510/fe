const products = [
  {
    id: 1,
    title: "Apple",
    price: 50,
    image:
      "https://www.applesfromny.com/wp-content/uploads/2020/06/SnapdragonNEW.png",
  },
  {
    id: 2,
    title: "Orange",
    price: 20,
    image:
      "https://w7.pngwing.com/pngs/187/615/png-transparent-orange-fruit-orange-tangerine-orange-natural-foods-food-citrus.png",
  },
  {
    id: 3,
    title: "Lime",
    price: 50,
    image:
      "https://w7.pngwing.com/pngs/116/773/png-transparent-green-limes-cocktail-sweet-lemon-key-lime-pie-persian-lime-lime-food-citrus-lime-juice-thumbnail.png",
  },
  {
    id: 4,
    title: "Kiwi",
    price: 50,
    image: "https://e7.pngegg.com/pngimages/166/911/png-clipart-kiwi-kiwi.png",
  },
];

const productsContainer = document.querySelector(".products_container");

products.forEach(function ({title, price, image}) {
  const cardWrap = document.createElement("div");
  const productImage = document.createElement("div");
  const productTitle = document.createElement("p");
  const productPrice = document.createElement("p");

  cardWrap.classList.add('product_card')

  productTitle.innerText = title;
  productPrice.innerText = price;
  productImage.style.backgroundImage = `url(${image})`;


  cardWrap.append(productImage, productTitle, productPrice);
  productsContainer.append(cardWrap);
});
