//Types

//bool
let myBool: boolean = true;

//number
let myNum: number = 42;

//strings
let myString: string = "Hello World";

//arrays
let myArrayofNums: number[] = [1, 2, 3];

//tuple (array with a defined size w/ defined types)
let myTuple: [string, number] = [myString, myNum];

//objects
let myObject: object;


console.log("myBool: "+myBool);
console.log("myNum: "+myNum);
console.log("myString: "+myString);
console.log("myArrayofNums: "+myArrayofNums[0] +", "+ myArrayofNums[1] +", "+ myArrayofNums[2]);
console.log("myTuple: " + myTuple[0] + myTuple[1])
