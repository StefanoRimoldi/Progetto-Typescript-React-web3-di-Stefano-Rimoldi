// @ts-nocheck

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data/product';
import ProductCard from './ProductCard';


const ProductList: React.FC = () => {
    const { cart, addToCart, removeFromCart } = useCart();

    const handleBuy = (product: any) => {
        addToCart(product);
    };

    return (
        <div className="px-4 py-6">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg py-20 px-4
">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 px-4">
                        The choice that speaks organic and thinks smart!
                    </h1>
                    <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
                        SmartFarm3.0 brings organic, local products together with blockchain transparency and innovation.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {products.map((product) => {
                    const isInCart = cart.some((item) => item.id === product.id);

                    return (
                        <div
                            key={product.id}
                            className="relative p-4 m-2 rounded-lg shadow"
                        >

                            {isInCart && (
                                <div className="absolute top-2 right-2 flex items-center space-x-2">
                                    <span className="bg-green-500 text-white text-xs px-2 py-2 rounded">
                                        Added to Cart
                                    </span>
                                    <button
                                        onClick={() => removeFromCart(product.id)}
                                        className="bg-red-500 text-white p-1 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                                        aria-label="Remove from Cart"
                                    >
                                        🗑️
                                    </button>
                                </div>
                            )}


                            <ProductCard product={product} onBuy={handleBuy} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductList;
