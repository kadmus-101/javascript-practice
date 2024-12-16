const data = new Map()

const animal1 = {name: 'octopus'}
const cars = ['mercedes', 'toyota', 'bugatti']

const funckobject = () => {};

data.set(animal1, 'aquatic animals');
data.set(cars, 'list of cars');
data.set(funckobject, 'oject function');


console.log(data.get(['mercedes', 'toyota', 'bugatti'])); // Undefined because this is a new reference

console.log(data.get(animal1));
console.log(data.get( funckobject))

