let boodschappen: string[] = ["brood", "melk", "kaas"];

// Deel 1
boodschappen.push("eieren");
console.log(boodschappen);

boodschappen.unshift("koffie");
console.log(boodschappen);

let laatste: string | undefined = boodschappen.pop();
console.log(laatste);

let eerste: string | undefined = boodschappen.shift();
console.log(eerste);

console.log(boodschappen);

// Deel 2
console.log(boodschappen.includes("melk"));
console.log(boodschappen.includes("appels"));
console.log(boodschappen.indexOf("kaas"));
console.log(boodschappen.indexOf("appels"));

// Deel 3
let indexMelk: number = boodschappen.indexOf("melk");
boodschappen.splice(indexMelk, 1);
console.log(boodschappen);

boodschappen.splice(1, 0, "boter", "tomaten");
console.log(boodschappen);

let eersteTwee: string[] = boodschappen.slice(0, 2);
console.log(eersteTwee);
console.log(boodschappen);

// Deel 4
let fruit: string[] = ["appels", "peren"];
let alles: string[] = boodschappen.concat(fruit);
console.log(alles);

alles.reverse();
console.log(alles);

console.log(alles.join(", "));

export {}
