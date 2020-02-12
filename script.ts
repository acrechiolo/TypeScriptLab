interface Mountain {
  name: string;
  height: number;
}
let mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 }
];

let findNameOfTallestMountain = (arrayOfMountains: Mountain[]): string => {
  let tallestMountainHeight: number = 0;
  let nameOfTallestMountain: string = "";
  arrayOfMountains.forEach(mountain => {
    if (mountain.height > tallestMountainHeight) {
      tallestMountainHeight = mountain.height;
      nameOfTallestMountain = mountain.name;
    }
  });
  return nameOfTallestMountain;
};
console.log(findNameOfTallestMountain(mountains));

interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  { name: "Louis Vuitton Skateboard", price: 8250 },
  { name: "Tesla", price: 60000 },
  { name: "Crystal Ergoripado Vacuum", price: 18993 }
];
let calcAverageProductPrice = (arrayOfProducts: Product[]): number => {
  let totalPrice = 0;
  arrayOfProducts.forEach(product => {
    totalPrice += product.price;
  });
  return totalPrice / products.length;
};
console.log(calcAverageProductPrice(products));

interface InventoryItem {
  product: Product;
  quantity: number;
}
let inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
{ product: { name: "sensor", price: 12.5 }, quantity: 4 },
{ product: { name: "LED", price: 1.0 }, quantity: 20 };

let calcInventoryValue = (arrayOfInventoryItems: InventoryItem[]): number => {
  let inventoryValue = 0;
  arrayOfInventoryItems.forEach(item => {
    inventoryValue += item.product.price * item.quantity;
  });
  return inventoryValue;
};
console.log(calcInventoryValue(inventory));
