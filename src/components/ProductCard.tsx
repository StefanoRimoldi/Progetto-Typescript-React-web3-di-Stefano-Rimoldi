// @ts-nocheck

import React, { useState } from "react";
import { Product } from "../data/product";

interface ProductCardProps {
    product: Product;
    onBuy: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onBuy }) => {
    const [quantity, setQuantity] = useState<number>(1);


    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newQuantity = parseFloat(e.target.value);

        if (newQuantity < 0.1) {
            newQuantity = 0.1;
        }

        setQuantity(newQuantity);
    };



    const totalPrice = product.pricePerKg * quantity;

    return (
        <div className="max-w-sm mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:bg-gray-700 transition duration-300 border border-gray-700 min-h-[538px]">
            <img
                className="w-full h-48 object-cover"
                src={product.imageUrl}
                alt={product.name}
            />
            <div className="p-4 flex justify-between flex-col flex-grow">
                <h2 className="text-xl font-bold text-white mb-4">{product.name}</h2>
                <p className="min-h-[72px] text-gray-300 mb-6">{product.description}</p>

                <p className="text-lg font-bold text-gray-200 mt-4">
                    Total Price: {totalPrice.toFixed(4)} ETH
                </p>

                <div className="flex items-center space-x-2 mt-4 min-h-[40px]">
                    <p className="text-sm text-gray-500 dark:text-gray-300">Price per Kg: {product.pricePerKg} ETH</p>


                    <div className="flex items-center space-x-2">
                        <label className="text-sm text-gray-500 dark:text-gray-300">Quantity (Kg):</label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={handleQuantityChange}
                            min="0.1"
                            step="0.1"
                            className="w-16 px-2 py-1 border rounded dark:bg-gray-700 dark:text-white"
                        />
                    </div>
                </div>


                <button
                    className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    onClick={() => onBuy({ ...product, quantity, totalPrice })}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
