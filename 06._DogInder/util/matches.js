import { faker, fakerEN_IN } from "@faker-js/faker";
import { response } from "express";

// console.log(fakerEN_IN.person.fullName());
// console.log(fakerEN_IN.person.bio());
// console.log(fakerEN_IN.location.streetAddress());
// console.log(fakerEN_IN.location.city());


export default function getMatches(numberOfMatches = 5) {
  const matches = [];
  for (let i = 0; i <= numberOfMatches; i++) {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((result) => console.log(result));
  }
  return matches;
}
