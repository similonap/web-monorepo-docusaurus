interface Student {
    name: string;
    score: number;
}

function getNames(students: Student[]): string[] {
    return students.map((student) => student.name);
}

function getPassed(students: Student[]): Student[] {
    return students.filter((student) => student.score >= 10);
}

function findStudent(students: Student[], name: string): Student | undefined {
    return students.find((student) => student.name === name);
}

function updateScore(students: Student[], name: string, score: number): void {
    let index: number = students.findIndex((student) => student.name === name);
    if (index !== -1) {
        students[index] = { name: name, score: score };
    }
}

function allPassed(students: Student[]): boolean {
    return students.every((student) => student.score >= 10);
}

function hasDistinction(students: Student[]): boolean {
    return students.some((student) => student.score >= 16);
}

function removeStudent(students: Student[], name: string): Student[] {
    return students.filter((student) => student.name !== name);
}

let students: Student[] = [
    { name: "Andie", score: 14 },
    { name: "Bert", score: 9 },
    { name: "Cedric", score: 17 },
    { name: "Debbie", score: 12 }
];

console.log(getNames(students));
console.log(getNames(getPassed(students)));
console.log(findStudent(students, "Cedric"));
console.log(findStudent(students, "Eva"));

updateScore(students, "Bert", 11);
console.log(findStudent(students, "Bert"));

console.log(allPassed(students));
console.log(hasDistinction(students));

students = removeStudent(students, "Andie");
console.log(getNames(students));

export {}
