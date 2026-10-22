interface Product {
    name: string;
    category: string;
    price: number;
    quantity: number;
}

function totalItems(cart: Product[]): number {
    return cart.reduce((acc, product) => acc + product.quantity, 0);
}

function totalPrice(cart: Product[]): number {
    return cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
}

function mostExpensive(cart: Product[]): Product {
    return cart.reduce((acc, product) => product.price > acc.price ? product : acc);
}

function countByCategory(cart: Product[]): Record<string, number> {
    return cart.reduce((acc: Record<string, number>, product) => {
        acc[product.category] = (acc[product.category] ?? 0) + 1;
        return acc;
    }, {});
}

const cart: Product[] = [
    { name: "Appels", category: "fruit", price: 0.5, quantity: 6 },
    { name: "Brood", category: "bakkerij", price: 2.4, quantity: 1 },
    { name: "Bananen", category: "fruit", price: 0.3, quantity: 4 },
    { name: "Kaas", category: "zuivel", price: 4.5, quantity: 1 },
    { name: "Croissant", category: "bakkerij", price: 1.2, quantity: 3 }
];

console.log(totalItems(cart));
console.log(totalPrice(cart).toFixed(2));
console.log(mostExpensive(cart).name);
console.log(countByCategory(cart));

export {}
