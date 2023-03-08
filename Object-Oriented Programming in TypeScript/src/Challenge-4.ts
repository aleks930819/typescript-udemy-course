/* *-*-*-*-*-*-*-*-*-*-* Challenge 4 ------------------
Create a function that accepts either a number or undefined. If a number is passed then it returns the number otherwise it returns 1
*/

function getNumber(num: number | undefined): number {
    if (num) {
        return num;
    }
    return 1;
}

// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------
