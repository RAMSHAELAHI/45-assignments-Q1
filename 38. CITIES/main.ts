function describe_city(nameOfCity: string, country: string = "South africa" ){
    return `${nameOfCity} is in ${country}`;
};  // country set according to city

let city1 = describe_city("South Africa , Capetown");
let city2 = describe_city("India , Delhi");
let city3 = describe_city("Pakistan , Hyderabad");
let city4 = describe_city("Dubai , UAE");

console.log(city1);
console.log(city2)
console.log(city3);
console.log(city4);

