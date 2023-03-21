class Dog {
  constructor(name, weight) {
    this.name = name; //ссылка на объект из которого мы вызываем метод
    this.weight = weight;
  }

  bark() {
    console.log("barkk");
  }
}

const dog_1 = new Dog("Sharik", 225);

const dog_2 = new Dog("Bobik", 115);

console.log(dog_1);
console.log(dog_2);

class User {
  constructor(name, username, age = 20) {
    this.name = name;
    this.username = username;
    this.age = age;
  }
  bDay() {
    this.age++;
  }

  changeUserName(userName) {
    this.username = userName;
  }
}

const user1 = new User("tolik", "user_tolik", 38);
const user2 = new User("tol", "user_tol", 28);
user1.bDay();
user1.bDay();

user1.changeUserName("last name");
console.log(user1, user2);

class Product {
  static all = [];

  static totalSale = 0

  static totalSum(){
    return this.all.reduce(function (acc, item) {
        return acc + item.price;
      }, 0);
  }
  constructor(title, price, count) {
    this.title = title;
    this.price = price;
    this.count = count;
    Product.all.push(this);
  }

  changePrice(price) {
    if (price > 0) {
      this.price = price;
    } else {
      console.log("price can`t be negative");
    }
  }

  sale() {
    if (this.count === 0) {
      console.log("not available");
    } else {
      this.count--;
      Product.totalSale += this.price;
    }
  }
}

const product1 = new Product("velik", 4500, 12);
// product1.changePrice(10);

// product1.sale();
// product1.sale()
// product1.sale()
// product1.sale()
// product1.sale()
// product1.sale()
// product1.sale()
// product1.sale()
// product1.sale()
// product1.sale()
// product1.sale()
// product1.sale()
// product1.sale()
// product1.sale()
// product1.sale()
// product1.sale()
// product1.sale()
// product1.sale()


console.log(product1);

const array = [];

// array.push(new Product("velik0", 4300, 16));
// array.push(new Product("velik1", 4200, 14));
// array.push(new Product("velik2", 4500, 12));
// array.push(new Product("velik3", 4100, 11));
// array.push(new Product("velik4", 4600, 10));
new Product("velik0", 4300, 16);
new Product("velik1", 4200, 14);
new Product("velik2", 4500, 12);
new Product("velik3", 4100, 11);
new Product("velik4", 4600, 10);
console.log(Product.all);


Product.all[4].sale()
Product.all[0].sale()

console.log(Product.totalSum());
console.log(Product.totalSale);
