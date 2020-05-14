import listOfHobbies from "./listOfHobbies";

export const searchHobbies = function (word) {
  if (!word.trim().length) return {};

  word = word.toLowerCase();
  let results = [];
  let fuzzyResults = [];

  for (let hobbie in listOfHobbies) {
    const hobbieLowerCase = hobbie.toLowerCase();
    if (hobbieLowerCase.includes(word)) {
      results.push(hobbie);
    }
    let containsAllLetters = true;
    for (let char of hobbie) {
      if (char !== " " && !word.includes(char)) containsAllLetters = false;
    }
    if (containsAllLetters && !results.includes(hobbie))
      fuzzyResults.push(hobbie);
  }

  return {
    results,
    fuzzyResults,
  };
};
