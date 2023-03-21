class Car {
  constructor(company, model, country, volume, color) {
    this.company = company;
    this.model = model;
    this.country = country;
    this.volume = volume;
    this.color = color;
  }

  getInfo() {
    console.log(
      `Model: ${this.model} (${this.company}), Country: ${this.country}, Color: ${this.color}, Volume: ${this.volume}`
    );
  }

  incr_value() {
    this.volume++;
  }

  decr_value() {
    this.volume--;
  }
  incr_volume_value(int) {
    this.volume += int;
  }
  decr_volume_value(int) {
    this.volume -= int;
  }
}

const car1 = new Car("Toyota", "Prius", "Japan", 1.4, "white");
const car2 = new Car("Audi", "Q7", "Germany", 1.8, "red");
car1.incr_value();
car2.decr_value();
car2.incr_volume_value(6);
car2.decr_volume_value(4);

car1.getInfo();
car2.getInfo();

const all_cars = [];

const addCar = (company, model, country, volume, color) => {
  const car = new Car(company, model, country, volume, color);
  all_cars.push(car);
};

addCar("Audi1", "Q71", "1Germany", 11.8, "1red");
addCar("Audi1", "Q71", "1Germany", 11.8, "1red");
console.log(all_cars);

const multtwo = (num1, num2) => {
  if (num1 + num2 >= 10) {
    console.log("more then 10");
  } else {
    console.log("less then 10");
  }
};

const multtwo_1 = (num1, num2) => num1 + num2 >= 10 ? "more then 10" : "less then 10";

multtwo(6, 3);
console.log(multtwo_1(6, 3));


// Реализуйте класс Language (Язык), который будет иметь следующие свойства: 
// name (имя), alphabet, (латинский, кирилица и т.д.), country (страна, в которой говорят на этом языке)
//Создайте экземпляр этого класса
//Выведете в консоль все свойства созданного экземпляра класса
// Реализйуте метод get_info (выводит в консоль строку 'Язык: <name>, Алфавит: <alphabet>, Страна, в которой говорят на этом языке <country>)

class Language{
  constructor(name, alphabet, country){
    this.name = name;
    this.alphabet = alphabet;
    this.country = country;
  }

  getLnagInfo(){
    return `'Язык: ${this.name}, Алфавит: ${this.alphabet}, Страна: ${this.country},`
  }
}

const lang = new Language('english', 'cyrillic', 'England');
console.log(lang.getLnagInfo());
