function printNumbers(numbers: number[]): void {
    numbers.forEach((number, index) => {
        console.log(`Getal ${index + 1}: ${number}`);
    });
}

function double(numbers: number[]): number[] {
    return numbers.map((number) => number * 2);
}

function onlyEven(numbers: number[]): number[] {
    return numbers.filter((number) => number % 2 === 0);
}

function firstGreaterThan(numbers: number[], limit: number): number | undefined {
    return numbers.find((number) => number > limit);
}

function positionOfFirstGreaterThan(numbers: number[], limit: number): number {
    return numbers.findIndex((number) => number > limit);
}

function allPositive(numbers: number[]): boolean {
    return numbers.every((number) => number > 0);
}

function containsNegative(numbers: number[]): boolean {
    return numbers.some((number) => number < 0);
}

const numbers: number[] = [3, 8, 12, 5, 7, 20, 1];

printNumbers(numbers);
console.log(double(numbers));
console.log(onlyEven(numbers));
console.log(firstGreaterThan(numbers, 10));
console.log(firstGreaterThan(numbers, 100));
console.log(positionOfFirstGreaterThan(numbers, 10));
console.log(positionOfFirstGreaterThan(numbers, 100));
console.log(allPositive(numbers));
console.log(allPositive([4, -2, 6]));
console.log(containsNegative(numbers));
console.log(containsNegative([4, -2, 6]));

export {}
