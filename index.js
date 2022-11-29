// Code your solution here
function findMatching(drivers, name) {
  let matched = [];
  for (const person of drivers) {
    if (person.toLowerCase() === name.toLowerCase()) {
      matched.push(person);
    }
  }
  return matched;
}

function fuzzyMatch(drivers, name) {
  let matched = [];
  for (const person of drivers) {
    if (person.slice(0, 2).toLowerCase() === name.slice(0, 2).toLowerCase()) {
      matched.push(person);
    }
  }
  return matched;
}

function matchName(driver, name) {
  let matched = [];
  for (const person of driver) {
    if (person.name === name) {
      matched.push(person);
    }
  }
  return matched;
}
