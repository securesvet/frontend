export default function DoSomething() {

}

// The guy reccomends to work with arrow functions
export const DoSomething = () => {

}

// Why is this important in React? That is because it works with components

const MyComponent = () => {
    return <div></div>
}

// This thingy allows you to execute code without declaring function
// So called anonymous function
 <button onClick={ () => {
    console.log("Hello world!")
    }}></button>
// This thing is very useful and we will use it a whole lot in React



// Ternary operators

// You want to minimize amount of code you write, and the bast part of React is that it allows you to write JS in 
// This takes 5 lines
if (true) {

} else {

}
//You don't want this.

//Let's imagine
let age = 20;
let name = "Svet";

//We wanna say if age is greater than 20 than this person's name is Svet
if (age > 20) {
    name = "Svet"
} else {
    name = "Jack"
}
// This is waaaaay a lot of code.

// Let's try that.

let ageOk = 20;
let nameOk = age > 20 ? "Svet" : "Jack";
console.log(nameOk);

// So nameOk will be equal to "Jack"

const Component = () => {

    return age > 20 ? <div> Svet </div> : <div> Jack </div>;
}



// Objects

// They are very important in React

const person = {
    name: Svet,
    age: 20,
    isMarried: false,
};
// Instead of doing this...
// const namePerson = person.name;
// const agePerson = person.age;
// const isMarried = person.isMarried;
// Do this

const {namePerson, agePerson, isMarried} = person;


// If key is simillar to a value then we can do this thing
const personTwo = {
    name,
    age: 20,
    isMarried: false
};

// Will be the same thing just with name Jack
const personThree = {...person, name: "Jack"}

const names = ["Pedro", "Jack", "Jessica"]

const names2 = [...names, "Joel"]

console.log(names2) 



// Map, filter

let allNames = ["Svet", "Ellie", "Joel"];

allNames.map((name) => {
    return name + "1";
});

// Why is it useful in React?
allNames.map((name) => {
    return <h1> {name} </h1>
})
// We will be doing something simillar.

// Filter function is something different
let names3 = [...allNames, "Svet"]

// This would be equal to ["Ellie", "Joel"]
names3.filter( (name) => {
    return name !== "Svet";
});

