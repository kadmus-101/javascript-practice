const employes = new Map()

const employe1 = {nationality: 'Mozambican'}
const employe2 = {nationality: 'Quenian'}

employes.set(employe1, 'Engineer')
employes.set(employe2, 'Doctor')

console.log(employes.get(employe1));
console.log(employes.get(employe2));

