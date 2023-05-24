////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
//each math operation is the CALLBACK function: add, subtract, multiply and divide 

//one line arrow function with implicit return 
const add = (num1, num2) => num1 + num2 

//one line arrow function 
const subtract = (num1, num2) => {
  return num1 - num2
} 

//Function expression 

const multiply = function(num1, num2) {
  return num1 * num2
}

//function declaration 
function divide(num1, num2) {
  return num1/num2
}

//// OUTER FUNCTIONS (higher order functions)

const  calculator = (num1, num2, callback) => {
    return callback(+num1, +num2)     //the + is converting a string to a number so if someome inputs `7` it'll take out 7 
  }

// console.log(calculator(2,3, add))
// console.log(calculator(4,5, multiply))
// console.log(calculator(20,5, divide))
// console.log(calculator(9, 8, subtract))

///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE
//CALLBACK FUNCTIONS
// console.log(catProducts[1].displayPrice)

const applyPercentDiscount = (product, discount) => {
  product.displayPrice = product.basePrice * (1-discount)   // if discount is 25% you input .25 which in this equation it will input 1-.25 =.75 
}

const applyFlatRateDiscount = (product, discount) => {
  product.displayPrice = product.basePrice - discount //if you have a $5 discount 10 - 5 === $5
}

//OUTER FUNCTIONS 
const applyDiscount = (arr, callback, discount) => {
  for(let i = 0; i <arr.length; i++) {
    callback(arr[i], discount)
  }
}

applyDiscount(dogProducts, applyPercentDiscount, .25)
applyDiscount(catProducts, applyFlatRateDiscount, 2)

console.log(dogProducts)
console.log(catProducts)


////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE
