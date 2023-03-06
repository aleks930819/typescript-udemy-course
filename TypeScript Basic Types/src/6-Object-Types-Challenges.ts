/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Create an object type that has 3 properties (name, age, job) and create an object from this type
*/

type Person = {
    name: string;
    age: number;
    job: string;
}

let person: Person = {
    name: 'John',
    age: 30,
    job: 'Developer'
}

// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
Access the published property from the following object using the bracket notation and the dot notation
*/

// type OnlineCourse = {
//   name: string;
//   platform: string;
//   features: string[];
//   "meta-data": {
//     published: boolean;
//   };
// };

// let myCourse: OnlineCourse = {
//   name: "TS Bootcamp",
//   platform: "Udemy",
//   features: ["Practical", "Exercise Oriented", "Modern TS Concepts"],
//   "meta-data": {
//     published: true,
//   },
// };


// myCourse["meta-data"].published;

// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
Fix the error in the following code by modifying the type Product. Do not make changes to the product1 or product2 objects
*/

// type Product = {
//   name: string;
//   publishedStatus?: boolean;
// };

// const product1: Product = { name: "TS Bootcamp" };
// const product2: Product = { name: "TS Bootcamp", publishedStatus: true };

// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 4 ------------------
What will the product object log?
*/

// const onlineCourse = { name: "TS Bootcamp", price: 10.99 };
// const product = { ...onlineCourse, released: true };
// console.log(product);

// { name: 'TS Bootcamp', price: 10.99, released: true }

// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 5 ------------------
Create a product type and add a holidaySales method that return a string “Sale is On”. Finish by creating an object from the type and logging the string on the console
*/

type Product = {
    name: string;
    price: number;
    holidaySales(): string;
}

let product: Product = {
    name: 'TS Bootcamp',
    price: 10.99,
    holidaySales() {
        return 'Sale is On'
    }
}


// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------
