/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Create a generic array of strings and pass some items
*/
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

const myArr: Array<string> = ["a", "b", "c"];

/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
Create a generic array of the two boolean values
*/
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

const myArr2: Array<boolean> = [true, false];

/* *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
Create a generic array that is an array of an array of strings
*/
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

const myArr3: Array<Array<string>> = [["a", "b"], ["c", "d"]];

/* *-*-*-*-*-*-*-*-*-*-* Challenge 4 ------------------
Create a function whose return type is a generic array of numbers. Add some values as well.
*/
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

function someArr(): Array<number> {
    const numArr = [];
    numArr.push(15);
    numArr.push(35);
    return numArr;
}


/* *-*-*-*-*-*-*-*-*-*-* Challenge 5 ------------------
Create a function whose return type is a generic array of array of numbers. Add some values as well.
*/
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

function someArr2(): Array<Array<number>> {
    const numArr = [];
    numArr.push([15, 35]);
    numArr.push([25, 45]);
    return numArr;
}


/* *-*-*-*-*-*-*-*-*-*-* Challenge 6 ------------------
Create a function whose return type is a generic array of array of strings. Add some values as well.
*/
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

function someArr3(): Array<Array<string>> {
    const numArr = [];
    numArr.push(["a", "b"]);
    numArr.push(["c", "d"]);
    return numArr;
}


/* *-*-*-*-*-*-*-*-*-*-* Challenge 7 ------------------
Extract the value  “TS” from the following generic array
*/

// let someArr: Array<Array<Array<Array<string | number>>>> = [[[[1, 2], ["C#"], ["JS", "Java"], ["HTML", "CSS", "TS"]]]];

// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------


