//1
const countries = require('./countries.js');
console.log(countries); 
const webTech = require('./web_tech.js');
console.log(webTech);
//2
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(" ");
console.log(words);
console.log(words.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift("Meat");
console.log(shoppingCart);
shoppingCart.pop("Sugar");
console.log(shoppingCart);

const indexR = shoppingCart.indexOf("Honey")
indexR !=-1 ? console.log(shoppingCart.splice(indexR,1))
            : console.log(shoppingCart);
const indexM = shoppingCart.indexOf("Tea");
shoppingCart[indexM] = "Green Tea";
console.log(shoppingCart);

countries.includes('Ethiopia') ? console.log("ETHIOPIA")
                                : countries.push("Ethiopia");

webTech.includes("Sass") ? console.log('Sass is a CSS preprocess')
                            : webTech.push("Sass"); console.log(webTech);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

fullStack = frontEnd.concat(backEnd);

console.log(fullStack)