"use strict";

let students = [
    {
        name: "Ceyhun",
        surname: "Cavadov",
        email: "jeyhunmj@code.edu.az",
        age: 15,
        grade: 80,
        info: function () {
            return this.name + " " + this.surname + " - " + this.email + " / " + this.age;
        }
    },
    {
        name: "Anar",
        surname: "Baxsheliyev",
        email: "anarrb@code.edu.az",
        age: 27,
        grade: 90,
        info: function () {
            return this.name + " " + this.surname + " - " + this.email + " / " + this.age;
        }
    },
    {
        name: "Urxan",
        surname: "Efendiyev",
        email: "urxanna@code.edu.az",
        age: 21,
        grade: 95,
        info: function () {
            return this.name + " " + this.surname + " - " + this.email + " / " + this.age;
        }
    },
    {
        name: "Ulvi",
        surname: "Elekberov",
        email: "ulvina@code.edu.az",
        age: 19,
        grade: 100,
        info: function () {
            return this.name + " " + this.surname + " - " + this.email + " / " + this.age;
        }
    },
    {
        name: "Ulvi",
        surname: "Ekberov",
        email: "ulvi@code.edu.az",
        age: 29,
        grade: 10,
        info: function () {
            return this.name + " " + this.surname + " - " + this.email + " / " + this.age;
        }
    }
];

// for(let i = 0; i < students.length; i++){
//     console.log(students[i].info());
// }

let averageGrade = 0;
let list = "";

for(let i = 0; i < students.length; i++){
    if(students[i].age <= 20){
        list = list + `<li class="list-group-item list-group-item-danger">${students[i].name.toUpperCase()} ${students[i].surname.toUpperCase()}</li>`;
    } else {
        list = list + `<li class="list-group-item">${students[i].name} ${students[i].surname}</li>`;
    }

    averageGrade = averageGrade + students[i].grade;
}

averageGrade = averageGrade / students.length;
document.getElementById("av-grade").innerHTML = averageGrade;
console.log(list);
document.getElementById("student-list").innerHTML = list;





// console.log(student1.info());
// console.log(student2.info());



/* Array */


// let names = [
//     "Ceyhun",
//     "Anar",
//     "Urxan",
//     "Ulvi",
//     "Kamil",
//     "Esger",
//     "Misir",
//     "Huseyn",
//     "Ismayil",
//     "Fuad",
//     "Teymur",
//     "Vasif",
//     "Gunel",
//     "Aga",
//     "Yaver",
//     "Cavid"
// ];

// // for(let i = 0; i < names.length; i++){
// //     names[i] = (i+1) + ". " + names[i];
// // }

// // console.log(names);



// let searchText = prompt("Enter name");
// let isMatch = false;

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i].toLowerCase());

//     if (names[i].toLowerCase() == searchText.toLowerCase()) {
//         alert(`${searchText} exist`);
//         isMatch = true;
//         break;
//     }
// }

// if (isMatch == false) {
//     names[names.length] = searchText;
//     alert(`${searchText} don't exist`);

// }

// console.log(names);


