/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Create a generic object type for an air conditioner with 2 properties that can only accept one specific type
*/
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

type AirConditioner<T> = {
    winter: T;
    summer: T;
};


/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
Create a generic object type for a smartphone with 3 properties that can accept any type of value. Finally, store the object property values in an array
*/
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------



type SmartPhone<T1, T2, T3> = {

    brand: T1;
    model: T2;
    price: T3;
}

const myPhone: SmartPhone<string, string, number> = {
    brand: "Samsung",
    model: "J6+",
    price: 3.5,
};


const phoneSpecs: (string | number | boolean)[] = [
    myPhone.brand,
    myPhone.model,
    myPhone.price,
];
