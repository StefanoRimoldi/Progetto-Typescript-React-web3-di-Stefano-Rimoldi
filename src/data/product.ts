
export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    pricePerKg: number;
}

export const products: Product[] = [
    {
        id: 0,
        name: "Organic Carrots",
        price: 0.0001,  
        description: "Fresh, crispy organic carrots rich in beta-carotene and essential nutrients. Locally sourced from sustainable farms.",
        imageUrl: "https://bafybeidoxkdtmm6nzyu23yn365l254ka4tk7dr5p5w6xiko3nzk6gwjife.ipfs.dweb.link?filename=Organic%20Carrots.jpg",
        pricePerKg: 0.0015,  
    },
    {
        id: 1,
        name: "Organic Tomatoes",
        price: 0.0002,  
        description: "Juicy, ripe organic tomatoes perfect for salads and cooking. Grown without pesticides.",
        imageUrl: "https://bafybeib7mogzt7ba6w6hffmz7oog5bngpugeknx2nv22tlgug7thhuxyvm.ipfs.dweb.link?filename=Organic%20Tomatoes.jpg",
        pricePerKg: 0.002,  
    },
    {
        id: 2,
        name: "Fresh Lettuce",
        price: 0.00015,
        description: "Crisp and fresh organic lettuce, perfect for healthy salads and sandwiches.",
        imageUrl: "https://bafybeiaxquogrpk52rbfybiibklgm3lark3aeblepf4flidhkxkhb7a45u.ipfs.dweb.link?filename=Fresh%20Lettuce.jpg",
        pricePerKg: 0.0017,
    },
    {
        id: 3,
        name: "Mixed Salad",
        price: 0.0002,
        description: "A variety of organic leafy greens, ready to create the perfect healthy salad.",
        imageUrl: "https://bafybeidaouku72vk7e5tra3qqzncyv7h4rsnug5z5y7w3qeaci65fj7nkm.ipfs.dweb.link?filename=Mixed%20Salad.jpg",
        pricePerKg: 0.002,
    },
    {
        id: 4,
        name: "Fresh Spinach",
        price: 0.00025,
        description: "Nutrient-rich organic spinach leaves, perfect for smoothies and cooking.",
        imageUrl: "https://bafybeiblzat7ab55amvqdy5bzjdi6bra4l3lypmkfekuxxosnvscmeq7pq.ipfs.dweb.link?filename=Fresh%20Spinach.jpg",
        pricePerKg: 0.0019,
    },
    {
        id: 5,
        name: "Bell Peppers",
        price: 0.0003,
        description: "Colorful organic bell peppers packed with vitamins and fresh flavor.",
        imageUrl: "https://bafybeiaxtrzxdgfkilibkxg3moj5xrq5r4oa65uv2gxxgn7cxgvt5wijq4.ipfs.dweb.link?filename=Bell%20Peppers.jpg",
        pricePerKg: 0.003,
    },
    {
        id: 6,
        name: "Fresh Broccoli",
        price: 0.0003,
        description: "Crisp organic broccoli florets, rich in nutrients and antioxidants.",
        imageUrl: "https://bafybeie6o7h55o6ovzqgqbcjxwtfn4aicwk3f4wx3jfqtfjz4jvctb6d5e.ipfs.dweb.link?filename=Fresh%20Broccoli.jpg",
        pricePerKg: 0.0025,
    },
    {
        id: 7,
        name: "Baby Kale",
        price: 0.00035,
        description: "Tender organic baby kale leaves, perfect for salads and cooking.",
        imageUrl: "https://bafybeiftzpvwowkf474va6tz26r3m4aql5c3prwicqsauimjvt4drz5pta.ipfs.dweb.link?filename=Baby%20Kale.jpg",
        pricePerKg: 0.003,
    },
    {
        id: 8,
        name: "Fresh Cucumber",
        price: 0.0002,
        description: "Crisp and refreshing organic cucumbers, perfect for salads and snacking.",
        imageUrl: "https://bafybeick6tcv3hv37fkkcgkqmyljanhunidumo6dewdiihcf2db2qcwphe.ipfs.dweb.link?filename=Fresh%20Cucumber.jpg",
        pricePerKg: 0.0027,
    },
];
