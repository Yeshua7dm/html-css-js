const myName = "Joshua Oke";
const myCourses = ["PHP", "C#", "JavaScript", "Go", "HTML", "CSS"];

console.log(myName);

for (let i = 0; i < myCourses.length; i++) {
  console.log(myCourses[i]);
}

// find and display numbers between 1 and 200
// based on the length of mycourses array
const numbers = 200;
if (myCourses.length % 2 !== 0) {
  for (let index = 1; index <= numbers; index++) {
    if (index % 2 !== 0) {
      console.log(index);
    }
  }
} else if (myCourses.length % 2 === 0) {
  for (let index = 1; index <= numbers; index++) {
    if (index % 2 === 0) {
      console.log(index);
    }
  }
}
