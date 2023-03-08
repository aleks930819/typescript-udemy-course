/* *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
Create a function that returns the length of a string array or undefined if the argument is undefined
*/

function getLength(arr: string[] | undefined): number | undefined {
    if (arr) {

        return arr.length;
    }
    return undefined;
}

// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------
