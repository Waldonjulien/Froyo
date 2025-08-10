const userInput = prompt(
  "Hello, what flavor would you like? We have Vanilla, Strawberry , and Coffee."
);
const order = "vanilla,vanilla,vanilla,strawberry,coffee,coffee";
const orderedFlavors = order.split(",");

console.log(orderedFlavors);

const orderCount = orderedFlavors.reduce(
  ((orderedFlavors) => {
    orderedFlavors = (orderedFlavors || 0) + 1;

    return orderCount;
  },
  {})
);
