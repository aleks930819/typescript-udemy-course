/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Create a group of five constants for five products of your choice and initialize the enum with 1
*/

enum Products {
    "TS Bootcamp" = 1,
    "JS Bootcamp",
    "Python Bootcamp",
    "CSS Layous Masterclass",
    "Flexbox, Grid Course",
}


// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
Perform an exhaustiveness checking for the previous enum and return their prices
*/

function setCoursePrice(course: Products) {
    switch (course) {
        case Products["TS Bootcamp"]:
            return "$10.99";
        case Products["JS Bootcamp"]:
            return "$9.99";
        case Products["Python Bootcamp"]:
            return "$11.99";
        case Products["CSS Layous Masterclass"]:
            return "$12.99";
        case Products["Flexbox, Grid Course"]:
            return "$9.99";
        default:
            courseWarning(course);
    }
}

function courseWarning(course: never): never {
    throw new Error(`Course ${course} has not been priced`);
}

// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------
