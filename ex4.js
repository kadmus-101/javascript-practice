const studentData = new Map()
studentData.set('Carlos', [{'age': 14}, {'Grade': '5th'}]);
studentData.set('Annah', [{'age': 12}, {'Grade': '7th'}]);
studentData.set('Cleyton', [{'age': 14}, {'Grade': '9th'}]);

console.log(studentData.size);

studentData.delete('Carlos');

console.log(studentData.size);

studentData.clear()

console.log(studentData.size);


