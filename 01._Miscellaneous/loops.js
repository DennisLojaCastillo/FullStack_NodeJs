// loop method
// foreach, map, sort, filter, sort, find, reduce

//Side effect

const dogs = [
  { name: "Lassie", famelevel: 13 },
  { name: "Beethoven", famelevel: 8 },
  { name: "Hachiko", famelevel: 18 },
  { name: "Balto", famelevel: 5 },
];

// dogs.forEach(dog => {
//     let newFamelevel = dog.famelevel + 3
//     dog.famelevel = newFamelevel;
// });

//console.log(dogs);

const increasedPublicityDogs = dogs.map((dog) => {
  dog.famelevel += 3;
  return dog;
});

// console.log(increasedPublicityDogs);

// task add the key male and value true for all except for Lassie (male: false)

// const genderedDogs = increasedPublicityDogs.map((dog) => {
//   dog.isMale = dog.name === "Lassie" ? false : true;
//   return dog;
// });

// One Liner

const genderedDogs = increasedPublicityDogs.map((dog) => ({
  isMale: dog.name === "Lassie" ? false : true,
  name: dog.name,
  famelevel: dog.famelevel,
}));

//console.log(genderedDogs);

// const updatedDogs = increasedPublicityDogs.map((dog) => {
//   if (dog.name === "Lassie") {
//   }
// });

const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map((number) => number * 2);
// console.log(numbers);
// console.log(doubleNumbers);

numbers.map((number, index, originalArray) =>
  console.log(number, index, originalArray)
);