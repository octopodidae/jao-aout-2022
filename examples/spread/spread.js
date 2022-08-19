const obj = {
  toto: 123,
  titi: "kfkkfkfk",
  tutu: false,
};

const obj2 = {
  ...obj,
  tata: undefined,
};

console.log("obj2: ", obj2);

function hello(a, b, ...tete) {
  console.log("tete: ", tete);
  console.log("b: ", b);
  console.log("a: ", a);
}

hello(1, 7, "test", false);

const arr1 = [11, "test", false];
console.log("arr1: ", arr1);

const arr2 = [
  ...arr1,
  ...arr1,
  ...arr1,
  ...arr1,
  ...arr1,
  ...arr1,
  ...arr1,
  ...arr1,
];
console.log("arr2: ", arr2);
