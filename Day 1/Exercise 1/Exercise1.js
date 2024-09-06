const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

    // 1
const emptyarray = Array();
console.log(emptyarray);
    // 2
const emptyarray5 = Array(1,2,3,4,5);
console.log(emptyarray5);
    // 3
const arraylen = emptyarray5.length;
console.log(arraylen);
    //4
const arrayfirst = emptyarray5[0];
console.log(arrayfirst);

const mid = arraylen/2;
const arraymiddle = emptyarray5[mid];
console.log(arraymiddle);

const arraylast = emptyarray5[arraylen-1];
console.log(arraylast);

    //5
const mixedDataTypes = ["Mixed", 0 , "Data", 1, "Types", 2];
const mixedlen = mixedDataTypes.length;
console.log(mixedDataTypes);
console.log(mixedlen);

    //6
var itCompanies = Array("Faceboo", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon");

    //7
console.log(itCompanies);

    //8
console.log(itCompanies.length);

    //9
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length/2)]);
console.log(itCompanies[itCompanies.length-1]);

    //10
for(let i = 0; i < itCompanies.length-1; i++){
    console.log(itCompanies[i]);
};

    //11
for(let i = 0; i < itCompanies.length-1; i++){
    const itComp = itCompanies[i].toUpperCase();
    console.log(itComp);
};

    //12

console.log(itCompanies.slice(0, itCompanies.length-1).join(", ") + " and " + itCompanies[itCompanies.length-1] + " are big IT companies.");

    //13
const company1 = "Dell";
const company2 = "Google";

itCompanies.includes(company1) ? console.log(company1): console.log("Company is not found");
itCompanies.includes(company2) ? console.log(company2): console.log("Company is not found");

    //14

    //15
    var itCompanies = Array("Faceboo", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon");
console.log(itCompanies.sort());

    //16
    var itCompanies = Array("Faceboo", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon");
console.log(itCompanies.reverse());

    //17
    var itCompanies = Array("Faceboo", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon");
console.log(itCompanies.slice(0,3));

    //18
    var itCompanies = Array("Faceboo", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon");
console.log(itCompanies.slice(itCompanies.length-4,itCompanies.length-1));
    
    //19
    var itCompanies = Array("Faceboo", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon");
    console.log(
        itCompanies.length % 2 == 0 
        ? itCompanies.slice(itCompanies.length / 2 - 1, itCompanies.length / 2 + 1) 
        : itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2) + 1) 
    );

    //20
    var itCompanies = Array("Faceboo", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon");
console.log(itCompanies.shift());

    //21
    var itCompanies = Array("Faceboo", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon");
    console.log(
        itCompanies.length % 2 == 0 
        ? itCompanies.slice(itCompanies.length / 2 - 1, itCompanies.length / 2 + 1) 
        : itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2) + 1)
    );

    //22
    var itCompanies = Array("Faceboo", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon");
    console.log(itCompanies.pop());

    //23
    var itCompanies = Array("Faceboo", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon");

    for(let i = itCompanies.length; i>0;i--){
        console.log(itCompanies.pop());
    }
    console.log(itCompanies);


