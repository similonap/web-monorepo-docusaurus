interface Person {
    name: string;
    age: number;
}

function sortAscending(numbers: number[]): number[] {
    return numbers.slice().sort((a, b) => a - b);
}

function sortDescending(numbers: number[]): number[] {
    return [...numbers].sort((a, b) => b - a);
}

function sortByAge(people: Person[]): Person[] {
    return [...people].sort((a, b) => a.age - b.age);
}

function sortByName(people: Person[]): Person[] {
    return [...people].sort((a, b) => a.name.localeCompare(b.name));
}

function oldest(people: Person[]): string {
    let sorted: Person[] = sortByAge(people);
    return sorted[sorted.length - 1].name;
}

const numbers: number[] = [10, 1, 5, 100, 25, 2];

console.log(sortAscending(numbers));
console.log(sortDescending(numbers));
console.log(numbers);

const people: Person[] = [
    { name: "Cedric", age: 31 },
    { name: "Andie", age: 25 },
    { name: "Debbie", age: 19 },
    { name: "Bert", age: 42 }
];

console.log(sortByAge(people).map(person => person.name));
console.log(sortByName(people).map(person => person.name));
console.log(oldest(people));

export {}
