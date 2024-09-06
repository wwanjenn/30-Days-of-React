const countries = require("../Exercise 2/countries");

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages);
ages.sort();
console.log(ages);
const min = ages[0];
const max = ages[ages.length-1];
console.log(min, max);


middleIndex = Math.floor(ages.length / 2);
ages.length % 2 ==0 ? console.log((ages[middleIndex] + ages[middleIndex-1])/2 )
                    : console.log(ages[Math.floor(ages.length / 2)]);

let sumage = 0;
for(let i = 0; i < ages.length-1; i++){
    sumage += ages[i];
};
let avgage = sumage/(ages.length);
console.log(avgage);

console.log(max-min);

console.log(Math.abs(min-avgage));
console.log(Math.abs(max-avgage));

countries.slice(0,10);
console.log(countries);

countries.length%2 == 0 ? console.log(countries[Math.floor((countries.length)/2)], countries[Math.floor((countries.length)/2)+1])
                        : console.log(countries[Math.floor((countries.length)/2)])


const firstHalf = countries.slice(0, Math.ceil(countries.length / 2));
const secondHalf = countries.slice(Math.ceil(countries.length / 2));

console.log(firstHalf);
console.log(secondHalf);
console.log(countries);
