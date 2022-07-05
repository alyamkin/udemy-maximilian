// Primitive: numbers, strings, boolean
// Arrays, objects
// Functions, parameters

// Primitive

let age: number;

age = 12;

let userName: string;

userName = "Andrey";

let isInstructor: boolean;

isInstructor = false;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = { name: string; age: number };

let person: Person;

person = {
  name: "Andey",
  age: 36,
};

let people: Person[];

// person = {}; not allowed

// Type inference

let course = "React - The Complete Guide";

// course = 123; not allowed

let courseUnion: string | number = "React - The Complete Guide";

courseUnion = 123;

// Functions & types

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
