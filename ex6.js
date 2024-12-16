const students = new Map();
students.set('Carlos', 17);
students.set('Pedro', 16);
students.set('Natalia', 23);
students.set('Gilberto', 23);

for (const [key, value] of students) {
    console.log(`${key} is ${value} years old.`)
}
