const buttonShowModal = document.querySelector(".buttonShowModal");
const modal = document.querySelector(".modalBackground");
const buttonCloseModal = document.querySelector("#closeModal");
const goods_wrapper = document.querySelector(".goods_wrapper");
const removeAllGoods = document.querySelector(".removeAllGoods");
const orderByAsc = document.querySelector(".asc");
const orderByDesc = document.querySelector(".desc");

// modal window
buttonShowModal.addEventListener("click", function () {
  modal.style.visibility = "visible";
  modal.style.opacity = 1;
});
buttonCloseModal.addEventListener("click", clear);

function clear() {
  modalTitle.value = "";
  modalPrice.value = "";
  modal.style.visibility = "hidden";
  modal.style.opacity = 0;
}
// modal window

let goods = [
  {
    id: 1,
    product: "iPhone 14",
    price: 1500,
    in_stock: true,
    image: "pr1.webp",
  },
  {
    id: 2,
    product: "Samsung A53",
    price: 1000,
    in_stock: true,
    image: "pr2.webp",
  },
  {
    id: 3,
    product: "Huawei 11",
    price: 900,
    in_stock: true,
    image: "pr3.webp",
  },
  {
    id: 4,
    product: "Nokia N4",
    price: 500,
    in_stock: false,
    image: "pr4.webp",
  },
  {
    id: 5,
    product: "iPhone 12",
    price: 1100,
    in_stock: false,
    image: "pr5.webp",
  },
  {
    id: 6,
    product: "iPhone xs",
    price: 1700,
    in_stock: false,
    image: "pr6.webp",
  },
  {
    id: 7,
    product: "iPhone xs",
    price: 1700,
    in_stock: true,
    image: false,
  },
  {
    id: 8,
    product: "iPhone xs max",
    price: 1800,
    in_stock: true,
    image: false,
  },
  {
    id: 9,
    product: "iPhone 18 max",
    price: 1200,
    in_stock: false,
    image: false,
  },
];

if (localStorage.getItem("products") === null) {
  localStorage.setItem("products", JSON.stringify(goods));
} else {
  goods = JSON.parse(localStorage.getItem("products"));
}

function showProducts() {
  const product = goods.map(function ({
    id,
    product,
    price,
    in_stock,
    image,
  }) {
    goods_wrapper.innerHTML = ""; //перед запуском фунцкции, очищаем goods_wrapper. т.е. удаляем все карточки товара который был ранее отрисован в html

    const productCard = document.createElement("div"); // Создает главный div карточки товара
    const productImage = document.createElement("img"); // Создает Image товара
    const removeProductBtn = document.createElement("button");
    const imageFileName = image === false ? "noImage.webp" : image; //присвоит переменной значение названия файла картинки. если картинка в объекте false то устовит картинку по умолчанию
    const divForTitleAndPrice = document.createElement("div"); // создаст оборачивающий див для тайтл и прайс
    const pTitle = document.createElement("p"); //создаст p для title
    const pPrice = document.createElement("p"); //создаст p для price
    const divForAvailAndBtn = document.createElement("div"); // создаст оборачивающий див для in_stock и button
    const pAvailable = document.createElement("p"); //создаст p для in_stock
    const button = document.createElement("button"); //создаст кнопку addToCart

    productCard.classList.add("product"); // добавит класс карточке товара
    removeProductBtn.classList.add("closeBtn");
    pTitle.classList.add("title"); // добавит класс для p title
    pPrice.classList.add("price_actual"); // добавит класс для p price
    pAvailable.classList.add("available"); // добавит класс для in_stock

    productImage.setAttribute("src", "./images/" + imageFileName); // пропишет атрибут src с путем к файлу
    removeProductBtn.setAttribute("id", "removeProduct");
    removeProductBtn.setAttribute("name", id);
    button.setAttribute("value", id);

    removeProductBtn.innerText = "X";
    button.innerText = "Add to cart"; // напишет текст на кнопке
    pTitle.innerText = product; // напишет название товара в title
    pPrice.innerText = price + "$"; //напишет цену товара

    const inStock = in_stock ? "in stock" : "not available"; // присвоение текстового значения в зависимости от того true или false
    if (in_stock === false) {
      // если in_stoke false, от сделаем надпись красной и дизаблим кнопку
      pAvailable.style.color = "red";
      button.disabled = true;
    }
    pAvailable.innerText = inStock; // напишет текст "in stock" или "not available"

    divForTitleAndPrice.append(pTitle, pPrice);
    divForAvailAndBtn.append(pAvailable, button);
    productCard.append(
      removeProductBtn,
      productImage,
      divForTitleAndPrice,
      divForAvailAndBtn
    ); // собираем все в кучу

    removeProductBtn.addEventListener("click", function () {
      goods = goods.filter(function (item) {
        return item.id !== id;
      });
      localStorage.setItem("products", JSON.stringify(goods));
      
      showProducts();
    });

    return productCard;
  });

  goods_wrapper.append(...product);
}

showProducts();

// console.log(
//   "---------------------------------add---------------------------------"
// );

const modalForm = document.querySelector("#modalForm");
const modalTitle = document.querySelector("#title");
const modalPrice = document.querySelector("#price");

modalForm.addEventListener("submit", addProduct);

function addProduct(event) {
  event.preventDefault();

  const newProduct = {
    id: Date.now(),
    product: title.value,
    price: +price.value,
    in_stock: available.checked,
    image: false,
  };

  goods.unshift(newProduct);

  localStorage.setItem("products", JSON.stringify(goods));
  //   console.log(goods);

  clear();
  showNotification();
  showProducts();
}

// console.log(
//   "---------------------------------filter---------------------------------"
// );
// const filter = document.querySelector("#filterBtn");
const filterForm = document.querySelector("#filterForm");
const minDigit = document.querySelector("#minDigit");
const maxDigit = document.querySelector("#maxDigit");

const prices = goods.map(function (product) {
  return product.price;
});
const minPrice = Math.min(...prices);
const maxPrice = Math.max(...prices);
minDigit.setAttribute("value", minPrice);
maxDigit.setAttribute("value", maxPrice);


filterForm.addEventListener("submit", function (event) {
  event.preventDefault();

  goods = JSON.parse(localStorage.getItem("products")).filter(function (el) {
    return el.price <= maxDigit.value && el.price >= minDigit.value;
  })
  showProducts()
});

// console.log(
//   "---------------------------------notification---------------------------------"
// );

function showNotification() {
  const notification = document.querySelector(".notification");
  notification.style.opacity = "1";
  setTimeout(function () {
    notification.style.opacity = "0";
  }, 3500);
}

// console.log(
//   "---------------------------------remove All Goods---------------------------------"
// );

removeAllGoods.addEventListener("click", function () {
  goods_wrapper.innerText = "";
  localStorage.clear();
});

// console.log(
//   "---------------------------------sort---------------------------------"
// );

orderByAsc.addEventListener("click", function (event) {
  event.preventDefault();
  goods.sort(function (x, y) {
    return x.price - y.price;
  });
  showProducts();
});

orderByDesc.addEventListener("click", function (event) {
  event.preventDefault();
  goods.sort(function (x, y) {
    return y.price - x.price;
  });
  showProducts();
});
