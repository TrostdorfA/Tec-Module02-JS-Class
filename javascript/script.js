const name = "Andres Trostdorf";
var age = 25;
var single = false;
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var colleagues = ["Cata", "Rochius", "Leo C.", "Andy", "Esteban"];
console.log(name, age, single, numbers, colleagues);

var values = {
    name: "Andres Trostdorf",
    age: 25,
    single: false,
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    colleagues: ["Cata", "Rochius", "Leo C.", "Andy", "Esteban"],
};
console.log(values);

var user = {
    name: "Leonardo",
    lastname: "Cipollone",
    age: 25,
    favnumbers: [7, 4, 25],
    pets: {
        pet1: {
            name: "Tomi",
            animal: "Dog",
            age: 4,
            color: "black",
        },
        pet2: {
            name: "Chiquito",
            animal: "Dog",
            age: "1",
            color: "white",
        },
    },
};
console.log(user);

console.log("user petNameOne", user.pets.pet1.animal);