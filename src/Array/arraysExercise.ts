// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

const age: number[] = [];

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard: string[][] = [];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
type Product = {
  name: string;
  price: number;
};

const products: Product[] = [
  { name: "coffee mug", price: 11.5 },
  { name: "coffee espresso", price: 11.5 },
  { name: "coffee Latte", price: 11.5 },
  { name: "coffee Mocha", price: 11.5 },
];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
const getTotal = (products: Array<Product>): number => {
  let results: number = 0;
  products.map((product) => (results += product.price));
  return results;
};

console.log(getTotal(products));
