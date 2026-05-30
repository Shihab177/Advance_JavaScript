let id = Symbol("Hello");

console.log(id);
console.log(typeof id);

let id1 = Symbol("Hello");
let id2 = Symbol("Hello");

console.log(id1 == id2);

let id = Symbol("Hello");

console.log(id);
alert(id.toString());

let id = Symbol("Hello");

console.log(id);
alert(id.description);

let age = Symbol("age");

let user = {
    name : 'shihab islam',
    class : 'Btech',
    [age] : 25
};

console.log(user);

let age = Symbol("age");

let user = {
    name : 'shihab islam',
    class : 'Btech'
};

user[age] = 25;

console.log(user.class);
console.log(user[age]);