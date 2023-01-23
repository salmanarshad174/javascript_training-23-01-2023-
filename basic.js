// //javascript variables
// var a=50;
// var b=30;
// var c=a+b;
// console.log(c);


// if (true)
// {
//     var a=70;
//    let b=30;
//     let c=a+b;
//     console.log(c);
// }
// console.log(a);
// let x = "John Doe";

// let x = 0;

// // SyntaxError: 'x' has already been declared
// var x = "John Doe";

// var x = 0;
// this is possible
// {
//     const x = 2;
//   }
//   console.log(x);
//elements cannot be accessed outside the block in case of const and le while in case of var and undecleared  it is accessible
// var x = 10;
// // Here x is 10

// {
// var x = 2;
// // Here x is 2
// }

// // Here x is 2

// let a = 3;
// let x = (100 + 50) * a;
// console.log(x);
// Dmas rule is application in this 

//concetination
// let text1 = "John";
// let text2 = "Doe";
// let text3 = text1 + " " + text2;
// console.log(text3);

// let x = 5 + 5;
// let y = "5" + 5;
// let z = "Hello" + 5;

// console.log(x);
// console.log(y);
// console.log(z);

// let x = -100;
// x >>>= 5;
// console.log(x);

// let x = null;
// x ??= 5;
// console.log(x);

//////datatypes in javascript

// // Numbers:
// let length = 16;
// let weight = 7.5;
// console.log(length*weight);

// // Strings:
// let color = "Yellow";
// let lastName = "Johnson";
// console.log(color*lastName);

// // Booleans
// let x = true;
// let y = false;
// console.log(x*y);

// // Object:
// const person = {firstName:"John", lastName:"Doe"};
// console.log(person);
// console.log(person.firstName);
// console.log(person.lastName);
// // Array object:
// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars);
// for (let i=0;i<cars.length;i++)
// {
//     console.log(cars[i]);
// }
// // Date object:
// const date = new Date("2022-03-25");
// console.log(date);
//Numbers:
// let length = 16;
// let weight = 7.5;
// console.log(length*weight);

// // Strings:
// let color = "Yellow";
// let lastName = "Johnson";
// console.log(color+lastName);

// // Booleans
// let x = true;
// let y = false;
// console.log(x*y);

// // Object:
// const person = {firstName:"John", lastName:"Doe"};
// console.log(person);
// console.log(person.firstName);
// console.log(person.lastName);
// // Array object:
// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars);
// for (let i=0;i<cars.length;i++)
// {
//     console.log(cars[i]);
// }
// // Date object:
// const date = new Date("2022-03-25");
// console.log(date);

// let x = 16 + "Volvo";
// console.log(x);
// console.log(typeof(x));
// let x = 16 + 4 + "Volvo";
// console.log(x);
// console.log(typeof(x));

//javascript exponential function
// let y = 123e5;    // 12300000
// let z = 123e-5;   // 0.00123
// console.log(y,z);


//big int is used to store those big values which are impossible for the normal js variable to store
// let x = BigInt("12345678901234567890123456789022");
// console.log(x);
// let x = 5;
// let y = 5;
// let z = 6;
// console.log((x == y));       // Returns true


// javascript objects
// const person[]={ 
//     {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"},

// };
// arrayofobjects
// var users = [
  
//     {username: 'Jon', genrePref: 'rock'},
//     {username1: 'Lucy', genrePref1: 'pop'},
//     {username: 'Mike', genrePref: 'rock'},
//     {username: 'Luke', genrePref: 'house'},
//     {username: 'James', genrePref: 'house'},
//     {username: 'Dave', genrePref: 'bass'},
//     {username: 'Sarah', genrePref: 'country'},
//     {username: 'Natalie', genrePref: 'bass'}
// ]

// var users = 
// {
    
//     jon : {username: 'Jon', genrePref: 'rock'},
//     lucy : {username: 'Lucy', genrePref: 'pop'},
//     mike : {username: 'Mike', genrePref: 'rock'},
//     luke : {username: 'Luke', genrePref: 'house'},
//     james : {username: 'James', genrePref: 'house'},
//     dave : {username: 'Dave', genrePref: 'bass'},
//     sarah : {username: 'Sarah', genrePref: 'country'},
//     natalie : {username: 'Natalie', genrePref: 'bass'}
// }
// console.log(users[0]);



//for arrays
// var users = 
// [{
    
//     jon : {username: 'Jon', genrePref: 'rock'},
//     lucy : {username: 'Lucy', genrePref: 'pop'},
//     mike : {username: 'Mike', genrePref: 'rock'},
//     luke : {username: 'Luke', genrePref: 'house'},
//     james : {username: 'James', genrePref: 'house'},
//     dave : {username: 'Dave', genrePref: 'bass'},
//     sarah : {username: 'Sarah', genrePref: 'country'},
//     natalie : {username: 'Natalie', genrePref: 'bass'}
// }]
// console.log(users.map(x=>x.jon.genrePref));

// var users2 = [{a:"a", b:"mahnoor"}, {c:"d", salman: "salman"}]
// console.log(users2[0])
// console.log(
//     "here"
//     )



    // Maps  
    // crud operations

    // objects operations

    // Fil


// console.log(typeof(users));

// function myFunction(p1, p2) {
//     return p1 * p2;
//   }
//   console.log(myFunction(5,8));

// let carName1 = "Volvo XC60";  // Double quotes
// let carName2 = 'Volvo XC60';  // Single quotes
// console.log(carName1+carName2);
// let text = "We are the so-called 'Vikings' from the north.";
// let text = "We are the so-called \"Vikings\" from the north.";

// let text = "The character \\ is called backslash.";
// console.log(text);


// let x = "John";
// console.log(typeof(x));
// let y = new String("John");
// console.log(typeof(y));


// let arr=[6,11,103,3,24];

// console.log(arr.sort());



// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// console.log(length);
// let part=text.slice(2,10); //if the first argument is greater than the second argument then it will return the empty string
// console.log(part);
// let part=text.substring(2,10); //if the first argument is greater than the second argument then it will swap the arguments
// console.log(part);
// let part=text.substr(22,3);
// console.log(part);

// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");
// console.log(newText);
// let x = 123;
// x.toString();
// console.log(typeof(x));
// "use strict";
// x = 3.14; 
// console.log(x);

// "use strict";
// let x = this;
// console.log(x);
//json 
// {
//     "employees":[
//       {"firstName":"John", "lastName":"Doe"},
//       {"firstName":"Anna", "lastName":"Smith"},
//       {"firstName":"Peter", "lastName":"Jones"}
//     ]
//     }

// let text = '{"employees":[' +
// '{"firstName":"John","lastName":"Doe" },' +
// '{"firstName":"Anna","lastName":"Smith" },' +
// '{"firstName":"Peter","lastName":"Jones" }]}';

// console.log(typeof(text));
// const obj = JSON.parse(text);
// console.log(typeof(obj));
// const person = {
//     fname:" John",
//     lname:" Doe",
//     age: 25
//   };
//   let txt="";
//   for (let x in person) {
//    console.log( person[x]);
//   }
 // Create an object:
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "",
//     set lang(lang)
//     {
//         this.language=lang;
//     },
//     get lang() {
//       return this.language;
//     }

//   };
//   person.lang = "en";
//   // Display data from the object using a getter:
//   console.log(person.lang);

// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//     this.nationality = "English";
//   }
  
//   const myFather = new Person("John", "Doe", 50, "blue");
//   const myMother = new Person("Sally", "Rally", 48, "green");

//   console.log(myFather);
//   console.log(myMother);
//   console.log(typeof(myFather));
//   console.log(typeof(myMother));
// Person.nationality = "English";

// console.log(myFather);
// console.log(myMother);