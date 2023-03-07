/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Create an Employee type with name as string, position title as string, age as number and hired as boolean types. Create an instance of the object type with an employee info. Then create another type narrowed to only the employee names.
*/
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------


type Employee2 = {
    name: string;
    positionTitle: string;
    age: number;

    hired: boolean;
};

const employee2: Employee2 = {
    name: 'John',
    positionTitle: 'Developer',
    age: 30,
    hired: true
};


type EmployeeName = {
    name: string;
};

