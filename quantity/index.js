let cartquantity = 0;
let reset = 0;
  
const showQuantity = () => {
  console.log(`quantity:  ${cartquantity}`);
}

const cart = () => {
  cartquantity += 1;
  console.log(`quantity:  ${cartquantity}`);
}

const addTwoCart = () => {
  cartquantity += 2;
  console.log(`quantity:  ${cartquantity}`);
}

const addThreeCart = () => {
  cartquantity += 2;
  console.log(`quantity:  ${cartquantity}`);
}

const resetCart = () => {
  cartquantity = reset;
  console.log(`quantity:  ${cartquantity}`);
}

