"use strict";

let studentName = "Ceyhun";
let studentSurname = "Cavadov";
let studentEmail = "jeyhunmj@code.edu.az";
let studentAge = 15;

let student1 = {
    name: "Ceyhun",
    surname: "Cavadov",
    email: "jeyhunmj@code.edu.az",
    age: 15,
    info: function () {
        return this.name + " " + this.surname + " - " + this.email + " / " + this.age;
    }
};

let student2 = {
    name: "Anar",
    surname: "Baxsheliyev",
    email: "anarrb@code.edu.az",
    age: 27,
    info: function () {
        return this.name + " " + this.surname + " - " + this.email + " / " + this.age;
    }
};

document.getElementById("test").innerHTML = student1.info();
// console.log(student1.info());
// console.log(student2.info());



/* Array */


let names = [
    "Ceyhun",
    "Anar",
    "Urxan",
    "Ulvi",
    "Kamil",
    "Esger",
    "Misir",
    "Huseyn",
    "Ismayil",
    "Fuad",
    "Teymur",
    "Vasif",
    "Gunel",
    "Aga",
    "Yaver",
    "Cavid"
];

// for(let i = 0; i < names.length; i++){
//     names[i] = (i+1) + ". " + names[i];
// }

// console.log(names);



let searchText = prompt("Enter name");
let isMatch = false;

for (let i = 0; i < names.length; i++) {
    console.log(names[i].toLowerCase());

    if (names[i].toLowerCase() == searchText.toLowerCase()) {
        alert(`${searchText} exist`);
        isMatch = true;
        break;
    }
}

if (isMatch == false) {
    names[names.length] = searchText;
    alert(`${searchText} don't exist`);

}

console.log(names);


