// HOMEWORK:
console.log("HOMEWORK:");

console.log("1-masala:");

const createUser = (name, age) => {
    let obj = {
        names: name,
        ages: age
    }
    return Object.assign(obj, { isAdmin: false });
}

console.log(createUser("Nodir", 23));



console.log("2-masala:");

const sumNumbers = (a, b, ...rest) => {
    let sum = a + b;
    rest.forEach(elem => sum += elem);
    return sum;
}

console.log(sumNumbers(1, 2, 3, 4, 5, 6, 7));
console.log(sumNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9));



console.log("3-masala:");

const displayUserInfo = (user) => {
    let {name, age} = user;
    return `Name: ${name}, Age: ${age}`;
}

console.log(displayUserInfo({name: "Selena", age: "18"}));



console.log("4-masala:");

const objectToArray = (obj) => Object.entries(obj);

console.log(objectToArray({name: "Ali", age: 25}));



console.log("5-masala:");

const getKeysAndValues = (obj) => {
    return Object.keys(obj)
}

console.log(getKeysAndValues({a: 1, b: 2, c: 3}));



console.log("6-masala:");

const sumPositiveValues = (obj) => {
    let sum = 0;
    Object.values(obj).forEach(elem => {
        if (elem > 0) {
            sum += elem;
        }
    });
    return sum;
}

console.log(sumPositiveValues({a: -5, b: 10, c:15}));












// console.log("Hello");

// Objects:

let a = {} // objrct - object
console.log(typeof a);

let b = [] // array - object
console.log(typeof b);


let user = {
    name: "John",
    age: 32
}

let extraInfo = {
    address: "USA",
    gender: "male",
    5: "hey"
}

let superUser = Object.assign(user, extraInfo, { tel: "930368469" });  // objectlarni birlashtirib beradi;

console.log(superUser);
console.log(superUser.name);
console.log(superUser["name"]);
console.log(superUser[5]);  // objectdagi keylar raqam bilan belgilanganda [] qavsda chaqiriladi;

console.log(Object.keys(superUser));  // objectni keylarini olib beradi;
console.log(Object.values(superUser));  // objectni qiymatlarini olib beradi;
console.log(Object.entries(superUser));  // objectlarni array qilib beradi;
Object.freeze(superUser);  // +read -write  objectni yaxlatadi(o'zgartirib bomiydi);

{
    const foo = (obj) => {
        // return Object.keys(obj).length

        // let sum = 0;
        // let arr = Object.values(obj);
        // arr.forEach(elem => {
        //     sum += elem;
        // });
        // return sum;

        // return Object.values(obj).reduce((sum, item) => sum + item, 0);

        return Object.values(obj).reduce((sum, item) => sum + +item, 0);
    }

    console.log(foo({ a: 5, b: 3, c: 8 }));
    console.log(foo({ a: 5, b: 3, c: "8", d: 4 }));

}


// Destructing:

let car = {
    title: "Toyota",
    price: 25_000,
    year: 2020,
    info: {
        color: "black",
        smth: {
            number: "01 N 001 NN"
        }
    }
}

let { title, price, info: { color, smth: { number } } } = car;

console.log(title);
console.log(number);


let [bir, ikki, uch] = [1, 2, 3];
console.log(bir + ikki);


// Spread (sochish): 

let flowers1 = ["lola", "atirgul"];
let flowers2 = ["siren", "kaktus", "rayhon"];

// let flowerStore = flowers1.concat(flowers2);  // arraylarni birlashtiradi; 

let flowerStore = [...flowers1, ...flowers2];  // ... - spread operatori;

console.log(flowerStore);


// Rest (qoldiq):

function restF(a, b, ...rest) {          // ...rest - qolgan elementlarni oladi;
    return rest;
}

console.log(restF(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));














