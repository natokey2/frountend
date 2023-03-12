let name='pizza';
let price='150';
let discount=15;

let pizzafood={
    name:'pizza',
    price:150,
    discount:15,
};
delete pizzafood.discount //if i want to delet some thing
console.log(pizzafood);
console.log(pizzafood.name);
console.log(pizzafood['name']); // another way 
console.log(pizzafood.price);
console.log(pizzafood.discount);


let master={
    name:'natiq',
    age:30,
};

delete master.age
console.log(master.name)

console.log(master)
