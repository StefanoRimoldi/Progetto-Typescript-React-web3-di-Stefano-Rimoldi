// src/data/products.ts
export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    pricePerKg: number;
}

export const products: Product[] = [
    {
        id: "0",
        name: "Organic Carrots",
        price: 0.0001,
        description: "Fresh, crispy organic carrots rich in beta-carotene and essential nutrients. Locally sourced from sustainable farms.",
        imageUrl: "https://images.unsplash.com/photo-1447175008436-054170c2e979?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        pricePerKg: 0.0015, 
    },
    {
        id: "1",
        name: "Organic Tomatoes",
        price: 0.0002, 
        description: "Juicy, ripe organic tomatoes perfect for salads and cooking. Grown without pesticides.",
        imageUrl: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        pricePerKg: 0.002,
    },
    {
        id: "2",
        name: "Fresh Lettuce",
        price: 0.00015,
        description: "Crisp and fresh organic lettuce, perfect for healthy salads and sandwiches.",
        imageUrl: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        pricePerKg: 0.0017,
    },
    {
        id: "3",
        name: "Mixed Salad",
        price: 0.0002,
        description: "A variety of organic leafy greens, ready to create the perfect healthy salad.",
        imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        pricePerKg: 0.002,
    },
    {
        id: "4",
        name: "Fresh Spinach",
        price: 0.00025,
        description: "Nutrient-rich organic spinach leaves, perfect for smoothies and cooking.",
        imageUrl: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        pricePerKg: 0.0019,
    },
    {
        id: "5",
        name: "Bell Peppers",
        price: 0.0003,
        description: "Colorful organic bell peppers packed with vitamins and fresh flavor.",
        imageUrl: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        pricePerKg: 0.003,
    },
    {
        id: "6",
        name: "Fresh Broccoli",
        price: 0.0003,
        description: "Crisp organic broccoli florets, rich in nutrients and antioxidants.",
        imageUrl: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        pricePerKg: 0.0025,
    },
    {
        id: "7",
        name: "Baby Kale",
        price: 0.00035,
        description: "Tender organic baby kale leaves, perfect for salads and cooking.",
        imageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        pricePerKg: 0.003,
    },
    {
        id: "8",
        name: "Fresh Cucumber",
        price: 0.0002,
        description: "Crisp and refreshing organic cucumbers, perfect for salads and snacking.",
        imageUrl: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        pricePerKg: 0.0027,
    },
];
