interface IProduct {
  name: string;
  price: number;
}

interface ICart {
  product: IProduct;
  quantity: number;
}

class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  products: ICart[];
  total: number;

  constructor() {
    this.products = [];
    this.total = 0;
  }

  addToCart(product: IProduct, quantity: number) {
    this.products.push({ product, quantity });
    return `${quantity} x ${product.name} added to cart`;
  }

  showTotal() {
    this.total = 0;
    this.total = this.products.reduce((acc, curr) => {
      return curr.product.price * curr.quantity + acc;
    }, 0);
    return `Total price is: Rp. ${this.total}`;
  }
}

const apple = new Product("Apple", 30_000);
const banana = new Product("Banana", 15_000);
const chocolate = new Product("Chocolate", 20_000);
console.log(apple);
console.log(banana);
console.log(chocolate);

const transaction1 = new Transaction();
transaction1.addToCart(chocolate, 2);
transaction1.addToCart(apple, 20);
transaction1.addToCart(banana, 1);
transaction1.addToCart(apple, 10);
console.log(transaction1.showTotal());

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// Reduce simple
const scores = [5, 4, 3];
const totalScores = scores.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(totalScores);

// LOOP 1
// acc = 0
// curr = 5 (index 0)
// return acc + curr => 0 + 5 = 5

// LOOP 2
// acc = 5
// curr = 4 (index 1)
// return acc + curr => 5 + 4 = 9

// LOOP 3
// acc = 9
// curr = 3 (index 2)
// return acc + curr => 9 + 3 = 12

// Reduce complex
const products = [
  { product: { name: "chocolate", price: 10 }, quantity: 5 },
  { product: { name: "banana", price: 50 }, quantity: 1 },
  { product: { name: "apple", price: 25 }, quantity: 10 },
];
const total = products.reduce((acc, curr) => {
  return curr.product.price * curr.quantity + acc;
}, 0);

console.log(total);

