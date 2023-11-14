
let x = 'hey class';
let a = 'Im a string';
let b = 'another string';
console.log(typeof x);

b = 12345;
console.log(typeof b);

b = false;
console.log(typeof b);

function testMyTypescript(num1: number, num2: number ){
    return num1 * num2 
}

console.log(testMyTypescript(23,76))

// Arrays in TypeScript

Function myArrayFunction(arr1: string[]) {
    console.log(arr1)
}

myArrayFunction(['tes1', 'hola', 'mira', 'vea'])

/**
 * Objects
 * There are two ways to declare the shape of an object
 * 1. type -
 * 2. Interface - 
 */


type TBird = {
    wings: Number
    break: Boolean
    feathers: number | string
    color?: string
}

const bird1: TBird = {wings: 2, break: true, feathers: 2000}
const bird2: TBird = {wings: 5, break: false, feathers: 2, color: 'Blue'}
const bird3: TBird = {wings: 30, break: true, feathers: 'none', color: 'darkBlue'}

/***
 * Interfaces in TypeScript
 */

import { IBird, IKillerBirds } from "./interfaces";



const owl: IBird = {
    wings: 2,
    noctural: true,
    family: ['Joe', 'Jane', 'Jack'],
    files: true
}




const eagle: IKillerBirds = {
    wings: 2,
    noctural: true,
    family: ['Joe', 'Jane', 'Jack'],
    files: true,
    edible: true,
    hasKilled: [
        {type: 'racoon ', weight: 12, color: 'darkbrown'},
        {type: 'rat ', weight: 1, color: 'darkgray'},
        {type: 'puppy ', weight: 12, color: 'yellow'},
    ],
    phoneNumber: 67676789
}