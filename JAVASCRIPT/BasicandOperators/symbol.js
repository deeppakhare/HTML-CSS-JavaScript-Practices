let user = {
  name: "Deep",
  age: 21
};

let id = Symbol("id");
user[id] = 101;

console.log(user);  
// { name: 'Deep', age: 21, [Symbol(id)]: 101 }
