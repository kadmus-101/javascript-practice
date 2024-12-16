let user1 = {'Bob': 22}
let user2 = {'Marla': 17}

const weakmap = new WeakMap()

weakmap.set(user1, 'Business owner')
weakmap.set(user2, 'Programmer')

const user1_info = weakmap.get(user1)
const user2_info = weakmap.get(user2)

console.log(user1_info)
console.log(user2_info)

user2 = null;

console.log(weakmap.has(user2))



