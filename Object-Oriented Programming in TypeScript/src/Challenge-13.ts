/* *-*-*-*-*-*-*-*-*-*-* Challenge 13 ------------------
Create a Product class with a name property and a holidaySales method that return true. Then create an interface called ProductInfo that extends the class that includes a price property of type number. Finally create an object from the interface and log the object
*/


class Product2 {
    name: string;

    constructor(name: string) {
        this.name = name;
    };

    holidaySales(): boolean {
        return true
    }

}

interface ProductInfo extends Product2 {

    price: number;
};

let productInfo: ProductInfo = {
    name: "TS Bootcamp",
    price: 100,
    holidaySales: () => true
};



// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------
