let myName = "Joshua Oke";
let myCourses = ["PHP", "C#", "JavaScript", "Go", "HTML", "CSS"];

console.log("My name is: " + myName);
console.log("My Courses are: " + myCourses);

// find and display numbers between 1 and 200 based on the length of mycourses array
const numbers = [];

for (let i = 0; i <= 200; i++) {
  if (i % 2 === 0) {
    numbers.push(i);
  }
}

console.log(numbers);
