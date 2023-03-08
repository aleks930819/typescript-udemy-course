/* *-*-*-*-*-*-*-*-*-*-* Challenge 7 ------------------
Create a product class with 2 properties, name and number of students. Add a method to this class that would return the string “Best Seller” if a course has equal to or more than 3000 students, otherwise, it should print “Not so much”
*/

class Product {
    name: string;
    numStudents: number;

    constructor(name: string, numStudents: number) {
        this.name = name;
        this.numStudents = numStudents;
    }

    getBestSeller(): string {
        if (this.numStudents >= 3000) {
            return "Best Seller";
        }
        return "Not so much";
    }

}

// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------
