/* -------------------------------------------------------------------------- */
/*                              REGULER VARIABLE                              */
/* -------------------------------------------------------------------------- */
const carBrand = "Toyota";
const carModel = "Avanza";
const carPrice = 350_000_000;
const carColor = "Black";
const showCarDetail = () => {
  return `This car brand is ${carBrand} and the model is ${carModel} and the price is ${carPrice}`;
};

console.log(carBrand);
console.log(showCarDetail());

/* -------------------------------------------------------------------------- */
/*                                   OBJECT                                   */
/* -------------------------------------------------------------------------- */
/* ------------------------------ CREATE OBJECT ----------------------------- */
/*
const [OBJECT_NAME] = {
  [KEY1]: [VALUE1 (string)], // property1 (reguler property)
  [KEY2]: [VALUE2 (number)] // property2 (reguler property)
  [KEY3]: [VALUE3 (() => {})] // property3 (method)
}
*/
const car = {
  brand: "Honda",
  model: "HRV",
  price: {
    new: 550_000_000,
    used: {
      2012: 250_000_000,
      2020: 350_000_000,
    },
  },
  color: "White",
  showCarDetail: function () {
    return `This car brand is ${car.brand} and the model is ${this.model} and the price is ${this.price.new}`;
  },
};

/* --------------------------- ACCESS OBJECT VALUE -------------------------- */
// 1. Dot Notation - .
console.log(car);
console.log(car.brand);
console.log(car.model);
console.log(car.price.used);
console.log(car.showCarDetail());

// 2. Square Bracket Notation - []
console.log(car["brand"]);
console.log(car["model"]);
console.log(car["price"]["used"]);
console.log(car["price"].used);
console.log(car["showCarDetail"]());

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
console.log(globalThis.Math.PI);
/*
const globalThis = {
  Math: {
    PI: 3.148989
  }
}
*/

// [] - Square Bracket
// () - Reguler Bracket
// {} - Curly Bracket
// <> - Angle Bracket
