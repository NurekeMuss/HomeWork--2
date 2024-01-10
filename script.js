/* First Task */
let nurSauda = "nurSauda";
const createAt = 2012;
let employees = null;
let makePotolok = false; /* Potolok stemimiz ) */
let country;
console.log(country)


/* Second Task */
const vehicle = {
    brandName: "bmw",
    model:"x5"
}

/* Change Model */
vehicle.model = "x1"
console.log(vehicle)

/* Delete Model*/
delete vehicle.model
console.log(vehicle)

/* Thrid Task */
let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}

for(let key in salaries) {
    console.log(key, "=" , salaries[key])
}
