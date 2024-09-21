// Persona 1
const p1Name = "Maria Delos Santos Las Marias";
const p1Age = 25;
const p1Address = "Upper Session Road, Baguio City, Benguet";

// Persona 2
const p2Name = "Juan Gamoso Dela Cruz";
const p2Age = 28;
const p2Address = "San Nicolas, Candon City, Ilocos Sur";

// Rearrange Name Sequence
function rearrangeName(name) {
  const nameParts = name.split(" ");
  return `${nameParts[2]} ${nameParts[0]} ${nameParts[1]}`;
}

const p1RearrangedName = rearrangeName(p1Name);
const p2RearrangedName = rearrangeName(p2Name);

// Console Log Output
console.log(`Name: ${p1RearrangedName}, Age: ${p1Age}, Address: ${p1Address}`);
console.log(`Name: ${p2RearrangedName}, Age: ${p2Age}, Address: ${p2Address}`);

// Variable Manipulations
const p1NameLength = p1Name.length;
const p2NameLength = p2Name.length;
const p1AddressLength = p1Address.length;
const p2AddressLength = p2Address.length;

// Operations
const sumOfAges = p1Age + p2Age;
const differenceOfLengths = p1NameLength - p2AddressLength;
const multipliedResult = differenceOfLengths * p2NameLength;
const poweredResult = Math.pow(p1AddressLength, p2NameLength);

// Print Results
console.log(`Sum of ages: ${sumOfAges}`);
console.log(`Difference of lengths: ${differenceOfLengths}`);
console.log(`Multiplied result: ${multipliedResult}`);
console.log(`Powered result: ${poweredResult}`);
