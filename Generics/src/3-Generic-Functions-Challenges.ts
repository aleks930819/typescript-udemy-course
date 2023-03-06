/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Write a generic function that simply returns its argument. Test with several types
*/
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

function identity<T>(arg: T): T {
    return arg;
}

/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
Write a generic function that returns the length of an array. Test with several types
*/
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

function returnLength<T>(arg: T[]): number {
    return arg.length;
}


/* *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
Write a generic function which accepts an array of strings returning the 5th item
*/
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

function returnFifth<T>(arg: T[]): T {
    return arg[4];
}

/* *-*-*-*-*-*-*-*-*-*-* Challenge 4 ------------------
Write a generic function that accepts a generic array returning the last item of the array
*/
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------


function returnLast<T>(arg: T[]): T {
    return arg[arg.length - 1];
}
