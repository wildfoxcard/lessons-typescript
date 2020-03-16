// // objects

// //This is not the best practice, it is better to let typescript infer.
// // const person: {
// //     name: string;
// //     age: number;
// // } = {
// //     name: 'Mike',
// //     age: 31
// // }

// // this is better practice:
// // const person = {
// //     name: "Mike",
// //     age: 31
// //   };


// // ----

// // Tuples

// // const person :{
// //     name: string;
// //     age: number;
// //     hobbies: string[];
// //     role: [number, string];
// // } = {
// //   name: "Mike",
// //   age: 31,
// //   hobbies: ["Sports", "Cooking"],
// //   // tuple
// //   role: [2, "author"]
// // };

// // person.role.push('admin')

// // let favoriteActivites: string[];
// // favoriteActivites = ["Sports"];

// // console.log(person.name);

// // for (const hobby of person.hobbies) {
// //   console.log(hobby);
// // }

// // ----

// //enums
// // enum Role { ADMIN = 'admin', READ_ONLY = 0, AUTHOR }

// // const person = {
// //   name: "Mike",
// //   age: 31,
// //   hobbies: ["Sports", "Cooking"],
// //   // tuple
// //   role: Role.AUTHOR
// // };


// // let favoriteActivites: string[];
// // favoriteActivites = ["Sports"];

// // console.log(person.name);

// // for (const hobby of person.hobbies) {
// //   console.log(hobby);
// // }

// // if (person.role === Role.AUTHOR) {
// //     console.log('is author')
// // }


// // ----

// //any
// // any is bad because it removes compiler functionality
// enum Role { ADMIN = 'admin', READ_ONLY = 0, AUTHOR }

// const person = {
//   name: "Mike",
//   age: 31,
//   hobbies: ["Sports", "Cooking"],
//   // tuple
//   role: Role.AUTHOR
// };


// let favoriteActivites: any[];
// favoriteActivites = ["Sports"];

// console.log(person.name);

// for (const hobby of person.hobbies) {
//   console.log(hobby);
// }

// if (person.role === Role.AUTHOR) {
//     console.log('is author')
// }
