/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Write a function that handles whether a product is viewed or not. If the product is viewed once or more, the function returns true. If the view count is zero, the function returns false. The function is invoked only with either the number of times the product was viewed or the boolean true value. 
*/
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

function isViewed(viewCount: number | boolean): boolean {
    if (typeof viewCount === 'number') {
        return viewCount > 0;
    }
    return viewCount;
}

/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
Create a function that returns the first item of an array. The function must accept either a generic array or a single item irrespective of type. If a single item has been passed, then the function simply returns the item.
*/
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------


function firstItem<T>(items: T | T[]): T {
    if (Array.isArray(items)) {
        return items[0];
    }
    return items;
}


/* *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
Create a function that accepts a single employee object with only one property of name (created with an object type) or an array of employee objects created with the same object type. If an object is passed, it returns the value of the name property, if an array is passed, it returns the array length
*/
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

type Employee = {
    name: string;
};

function myFunc(employeeOrEmployees: Employee | Employee[]): number | string {
    if (Array.isArray(employeeOrEmployees)) {
        return employeeOrEmployees.length;
    }
    return employeeOrEmployees.name;
}